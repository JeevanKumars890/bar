/**
 * KUDKARA MEETUP - Application Logic
 */

// --- STATE MANAGEMENT ---
let products = [];
let cart = [];
let activeCategory = 'all';
let searchQuery = '';
let selectedBrand = 'all';
let sortBy = 'featured';

// Store currently selected ML / Portion variant per product { [productId]: variantIndex }
let selectedVariants = {};

// Live location state
let detectedLocation = null;

// Fallback icons per category
const CATEGORY_FALLBACK_ICONS = {
  Hot: '🔥',
  Rum: '🥃',
  Vodka: '🍸',
  Beer: '🍺',
  Gin: '🍹',
  Wine: '🍾',
  Brandy: '🥃',
  'Side Dish': '🥜',
  Mixers: '🥤'
};

// --- DOM ELEMENTS ---
const elements = {
  productsGrid: document.getElementById('productsGrid'),
  categoryPills: document.getElementById('categoryPillsContainer'),
  brandFilterSelect: document.getElementById('brandFilterSelect'),
  sortSelect: document.getElementById('sortSelect'),
  searchInput: document.getElementById('searchInput'),
  itemCount: document.getElementById('itemCount'),
  
  // Cart
  cartOverlay: document.getElementById('cartOverlay'),
  cartDrawer: document.getElementById('cartDrawer'),
  openCartBtn: document.getElementById('openCartBtn'),
  closeCartBtn: document.getElementById('closeCartBtn'),
  cartBadge: document.getElementById('cartCountBadge'),
  cartItemsList: document.getElementById('cartItemsList'),
  cartSubtotalText: document.getElementById('cartSubtotalText'),
  cartTaxText: document.getElementById('cartTaxText'),
  cartTotalText: document.getElementById('cartTotalText'),
  clearCartBtn: document.getElementById('clearCartBtn'),
  checkoutBtn: document.getElementById('checkoutBtn'),
  whatsappOrderBtn: document.getElementById('whatsappOrderBtn'),

  // Checkout Form & Location
  checkoutModalOverlay: document.getElementById('checkoutModalOverlay'),
  closeCheckoutModalBtn: document.getElementById('closeCheckoutModalBtn'),
  checkoutForm: document.getElementById('checkoutForm'),
  customerName: document.getElementById('customerName'),
  customerPhonePrimary: document.getElementById('customerPhonePrimary'),
  customerPhoneSecondary: document.getElementById('customerPhoneSecondary'),
  customerAddress: document.getElementById('customerAddress'),
  customerLandmark: document.getElementById('customerLandmark'),
  orderTypeSelect: document.getElementById('orderType'),
  deliveryAddressSection: document.getElementById('deliveryAddressSection'),
  landmarkGroup: document.getElementById('landmarkGroup'),
  tableTabGroup: document.getElementById('tableTabGroup'),
  tableTabNumber: document.getElementById('tableTabNumber'),
  
  // Live GPS Elements
  detectLocationBtn: document.getElementById('detectLocationBtn'),
  locationBtnText: document.getElementById('locationBtnText'),
  locationStatusCard: document.getElementById('locationStatusCard'),
  locationCoordsText: document.getElementById('locationCoordsText'),
  locationMapLink: document.getElementById('locationMapLink'),

  // Receipt
  receiptModal: document.getElementById('receiptModal'),
  closeReceiptModalBtn: document.getElementById('closeReceiptModalBtn'),
  receiptMeta: document.getElementById('receiptMeta'),
  receiptTableBody: document.getElementById('receiptTableBody'),
  receiptTotals: document.getElementById('receiptTotals'),
  printReceiptBtn: document.getElementById('printReceiptBtn'),
  shareReceiptWhatsAppBtn: document.getElementById('shareReceiptWhatsAppBtn'),

  // Age Gate
  ageGateModal: document.getElementById('ageGateModal'),
  confirmAgeBtn: document.getElementById('confirmAgeBtn'),
  denyAgeBtn: document.getElementById('denyAgeBtn'),

  // Admin
  adminModal: document.getElementById('adminModal'),
  openAdminBtn: document.getElementById('openAdminBtn'),
  closeAdminModalBtn: document.getElementById('closeAdminModalBtn'),
  newProductForm: document.getElementById('newProductForm'),
  resetCatalogBtn: document.getElementById('resetCatalogBtn'),

  // Toast
  toastContainer: document.getElementById('toastContainer')
};

// Last completed order cache for receipt and WhatsApp actions
let lastOrderData = null;

// --- INITIALIZATION ---
function init() {
  loadData();
  setupAgeGate();
  renderCategories();
  populateBrandFilter();
  renderProducts();
  renderCart();
  attachEventListeners();
}

// Load products and cart from localStorage
function loadData() {
  const savedProducts = localStorage.getItem('royal_liquor_products');
  if (savedProducts) {
    try {
      const parsed = JSON.parse(savedProducts);
      // Ensure all initial items (Liquors, Side Dishes, Mixers & Glasses) exist
      const existingIds = new Set(parsed.map(p => p.id));
      const missing = INITIAL_PRODUCTS.filter(p => !existingIds.has(p.id));
      if (missing.length > 0) {
        products = [...missing, ...parsed];
        saveProducts();
      } else {
        products = parsed;
      }
    } catch (e) {
      products = [...INITIAL_PRODUCTS];
    }
  } else {
    products = [...INITIAL_PRODUCTS];
  }

  // Initialize selected variant index for each product
  products.forEach(p => {
    selectedVariants[p.id] = p.selectedMlIndex !== undefined ? p.selectedMlIndex : 0;
  });

  const savedCart = localStorage.getItem('royal_liquor_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }
}

function saveProducts() {
  localStorage.setItem('royal_liquor_products', JSON.stringify(products));
}

function saveCart() {
  localStorage.setItem('royal_liquor_cart', JSON.stringify(cart));
}

// --- AGE GATE VERIFICATION ---
function setupAgeGate() {
  const isVerified = localStorage.getItem('royal_age_verified');
  if (!isVerified) {
    elements.ageGateModal.classList.add('open');
  }

  elements.confirmAgeBtn.addEventListener('click', () => {
    localStorage.setItem('royal_age_verified', 'true');
    elements.ageGateModal.classList.remove('open');
    showToast('Age verified! Welcome to Kudkara Meetup 🍻', 'success');
  });

  elements.denyAgeBtn.addEventListener('click', () => {
    alert('Access Restricted. You must be 21 or older to view this shop.');
    window.location.href = 'https://www.google.com';
  });
}

// --- CATEGORIES ---
function renderCategories() {
  elements.categoryPills.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const pill = document.createElement('button');
    pill.className = `category-pill ${activeCategory === cat.id ? 'active' : ''}`;
    pill.innerHTML = `<span>${cat.icon}</span> <span>${cat.name}</span>`;
    pill.addEventListener('click', () => {
      activeCategory = cat.id;
      renderCategories();
      renderProducts();
    });
    elements.categoryPills.appendChild(pill);
  });
}

// --- BRAND FILTER ---
function populateBrandFilter() {
  const brands = Array.from(new Set(products.map(p => p.brand))).sort();
  elements.brandFilterSelect.innerHTML = '<option value="all">All Brands & Kitchens</option>';
  brands.forEach(brand => {
    const opt = document.createElement('option');
    opt.value = brand;
    opt.textContent = brand;
    elements.brandFilterSelect.appendChild(opt);
  });
}

// --- PRODUCTS RENDERING ---
function renderProducts() {
  // Filter logic
  let filtered = products.filter(item => {
    let matchCategory = false;
    if (activeCategory === 'all') {
      matchCategory = true;
    } else if (activeCategory === 'Karnataka') {
      matchCategory = item.isKarnataka || 
        (item.origin && item.origin.toLowerCase().includes('karnataka')) || 
        (item.badge && item.badge.toLowerCase().includes('karnataka'));
    } else {
      matchCategory = item.category.toLowerCase() === activeCategory.toLowerCase();
    }

    const matchBrand = selectedBrand === 'all' || item.brand === selectedBrand;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q || 
      item.name.toLowerCase().includes(q) || 
      item.brand.toLowerCase().includes(q) || 
      item.category.toLowerCase().includes(q) ||
      (item.categoryLabel && item.categoryLabel.toLowerCase().includes(q));

    return matchCategory && matchBrand && matchSearch;
  });

  // Sorting logic
  filtered.sort((a, b) => {
    const priceA = a.variants[selectedVariants[a.id] || 0].price;
    const priceB = b.variants[selectedVariants[b.id] || 0].price;

    if (sortBy === 'price-asc') return priceA - priceB;
    if (sortBy === 'price-desc') return priceB - priceA;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    return 0; // featured default
  });

  elements.itemCount.textContent = filtered.length;
  elements.productsGrid.innerHTML = '';

  if (filtered.length === 0) {
    elements.productsGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No items match your criteria</h3>
        <p>Try searching for another brand, side dish, or resetting your filters.</p>
        <button class="btn-clear-cart" style="margin-top: 14px; padding: 8px 18px;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  filtered.forEach(product => {
    const currentVarIndex = selectedVariants[product.id] !== undefined ? selectedVariants[product.id] : 0;
    const currentVariant = product.variants[currentVarIndex] || product.variants[0];
    const isSide = product.category === 'Side Dish' || product.isFood;
    const isMixer = product.category === 'Mixers' || product.isEssential;

    let portionHeader = 'Select Bottle Size:';
    if (isSide) portionHeader = 'Select Portion Size:';
    else if (isMixer) portionHeader = 'Select Pack / Size:';

    let originLabel = 'Origin';
    if (isSide) originLabel = 'Preparation';
    else if (isMixer) originLabel = 'Type';

    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);

    // Format ML / Portion pill buttons
    const variantButtonsHtml = product.variants.map((v, idx) => {
      const buttonLabel = v.sizeLabel || (isSide ? `${v.ml}g` : `${v.ml}ml`);
      return `
        <button 
          type="button" 
          class="ml-pill-btn ${idx === currentVarIndex ? 'active' : ''}" 
          data-product-id="${product.id}" 
          data-index="${idx}"
        >
          ${buttonLabel}
        </button>
      `;
    }).join('');

    card.innerHTML = `
      <div class="card-image-wrap">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="product-img"
          loading="lazy"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80'"
        >
        ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ''}
        <span class="card-abv">${product.abv || (isSide ? 'Fresh' : (isMixer ? 'Mixer' : '40% ABV'))}</span>
        <span class="card-category-tag">${product.categoryLabel || product.category}</span>
      </div>

      <div class="card-content">
        <div class="brand-label">${product.brand}</div>
        <h2 class="liquor-title">${product.name}</h2>
        <div class="liquor-origin">${originLabel}: ${product.origin || 'Imported'}</div>
        <p class="liquor-description">${product.description || 'Premium hand-selected item.'}</p>

        <div class="variant-section">
          <div class="variant-label-row">
            <span>${portionHeader}</span>
            <span class="selected-ml-text" id="ml-label-${product.id}">${currentVariant.label}</span>
          </div>
          <div class="ml-buttons-wrap">
            ${variantButtonsHtml}
          </div>

          <div class="card-action-row">
            <div class="price-display">
              <span class="price-currency">Price (Inc. Taxes)</span>
              <div class="price-amount" id="price-val-${product.id}">
                ₹<span>${currentVariant.price.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button 
              type="button" 
              class="btn-add-cart" 
              data-product-id="${product.id}"
            >
              <span>🛒</span>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    `;

    // ML / Portion pill clicks
    const mlButtons = card.querySelectorAll('.ml-pill-btn');
    mlButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const prodId = btn.getAttribute('data-product-id');
        const varIdx = parseInt(btn.getAttribute('data-index'), 10);
        selectedVariants[prodId] = varIdx;

        // Update active class on pills in this card
        mlButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update displayed label and price
        const chosen = product.variants[varIdx];
        const labelElem = card.querySelector(`#ml-label-${prodId}`);
        const priceElem = card.querySelector(`#price-val-${prodId}`);
        if (labelElem) labelElem.textContent = chosen.label;
        if (priceElem) priceElem.innerHTML = `₹<span>${chosen.price.toLocaleString('en-IN')}</span>`;
      });
    });

    // Add to cart click
    const addBtn = card.querySelector('.btn-add-cart');
    addBtn.addEventListener('click', () => {
      addToCart(product.id);
    });

    elements.productsGrid.appendChild(card);
  });
}

function resetFilters() {
  activeCategory = 'all';
  selectedBrand = 'all';
  searchQuery = '';
  sortBy = 'featured';
  elements.searchInput.value = '';
  elements.brandFilterSelect.value = 'all';
  elements.sortSelect.value = 'featured';
  renderCategories();
  renderProducts();
}

// --- CART LOGIC ---
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const varIndex = selectedVariants[productId] !== undefined ? selectedVariants[productId] : 0;
  const variant = product.variants[varIndex];
  const isSide = product.category === 'Side Dish' || product.isFood;
  const displayUnit = variant.sizeLabel || (isSide ? `${variant.ml}g` : `${variant.ml}ml`);

  // Cart item key incorporates the specific ML / Portion
  const cartItemId = `${product.id}_${variant.ml}`;
  const existingItem = cart.find(item => item.id === cartItemId);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      id: cartItemId,
      productId: product.id,
      name: product.name,
      brand: product.brand,
      category: product.category,
      ml: variant.ml,
      label: variant.label,
      displayUnit,
      isSide,
      unitPrice: variant.price,
      qty: 1,
      image: product.image
    });
  }

  saveCart();
  renderCart();
  showToast(`Added ${product.brand} - ${product.name} (${displayUnit}) to cart! 🍾`, 'success');
}

function updateCartItemQty(cartItemId, delta) {
  const itemIndex = cart.findIndex(item => item.id === cartItemId);
  if (itemIndex === -1) return;

  cart[itemIndex].qty += delta;
  if (cart[itemIndex].qty <= 0) {
    cart.splice(itemIndex, 1);
    showToast('Item removed from cart', 'info');
  }

  saveCart();
  renderCart();
}

function removeCartItem(cartItemId) {
  cart = cart.filter(item => item.id !== cartItemId);
  saveCart();
  renderCart();
  showToast('Item removed', 'info');
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm('Are you sure you want to clear your cart?')) {
    cart = [];
    saveCart();
    renderCart();
    showToast('Cart cleared', 'info');
  }
}

function calculateCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.qty), 0);
  const tax = Math.round(subtotal * 0.05); // 5% excise/VAT
  const total = subtotal + tax;
  return { subtotal, tax, total };
}

function renderCart() {
  // Update header badge
  const totalItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);
  elements.cartBadge.textContent = totalItemsCount;

  elements.cartItemsList.innerHTML = '';

  if (cart.length === 0) {
    elements.cartItemsList.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <div style="font-size: 2.8rem; margin-bottom: 10px;">🛒</div>
        <p style="font-size: 0.95rem; font-weight: 600; color: var(--text-secondary);">Your cart is empty</p>
        <p style="font-size: 0.8rem; margin-top: 4px;">Explore our curated selection of spirits and side dishes (Pickles, Masala Groundnut, Chips & Mixtures).</p>
      </div>
    `;
    elements.cartSubtotalText.textContent = '₹0';
    elements.cartTaxText.textContent = '₹0';
    elements.cartTotalText.textContent = '₹0';
    return;
  }

  cart.forEach(item => {
    const itemCard = document.createElement('div');
    itemCard.className = 'cart-item-card';
    itemCard.innerHTML = `
      <img 
        src="${item.image}" 
        alt="${item.name}" 
        class="cart-item-img"
        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80'"
      >
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name" title="${item.name}">${item.name}</div>
        <span class="cart-item-ml">${item.displayUnit || item.ml + (item.isSide ? 'g' : 'ml')}</span>
        <div class="cart-item-unit-price">₹${item.unitPrice.toLocaleString('en-IN')}</div>
      </div>
      <div class="cart-qty-ctrl">
        <button type="button" class="qty-btn" data-action="minus" data-id="${item.id}">−</button>
        <span class="qty-value">${item.qty}</span>
        <button type="button" class="qty-btn" data-action="plus" data-id="${item.id}">+</button>
      </div>
    `;

    // Quantity controls
    itemCard.querySelector('[data-action="minus"]').addEventListener('click', () => {
      updateCartItemQty(item.id, -1);
    });
    itemCard.querySelector('[data-action="plus"]').addEventListener('click', () => {
      updateCartItemQty(item.id, 1);
    });

    elements.cartItemsList.appendChild(itemCard);
  });

  const totals = calculateCartTotals();
  elements.cartSubtotalText.textContent = `₹${totals.subtotal.toLocaleString('en-IN')}`;
  elements.cartTaxText.textContent = `₹${totals.tax.toLocaleString('en-IN')}`;
  elements.cartTotalText.textContent = `₹${totals.total.toLocaleString('en-IN')}`;
}

// Drawer Controls
function openCart() {
  elements.cartOverlay.classList.add('open');
  elements.cartDrawer.classList.add('open');
}

function closeCart() {
  elements.cartOverlay.classList.remove('open');
  elements.cartDrawer.classList.remove('open');
}

// --- LIVE GEOLOCATION LOGIC ---
function detectUserLocation() {
  if (!navigator.geolocation) {
    showToast('Geolocation is not supported by your browser.', 'info');
    return;
  }

  elements.detectLocationBtn.classList.add('locating');
  elements.locationBtnText.textContent = 'Locating GPS...';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude.toFixed(6);
      const lng = position.coords.longitude.toFixed(6);
      const accuracy = Math.round(position.coords.accuracy);
      const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

      detectedLocation = {
        lat,
        lng,
        accuracy,
        mapsUrl
      };

      // Update UI Status Card
      elements.locationCoordsText.textContent = `${lat}° N, ${lng}° E (Accuracy: ±${accuracy}m)`;
      elements.locationMapLink.href = mapsUrl;
      elements.locationStatusCard.classList.add('visible');

      // Autofill note in address field if currently empty
      if (!elements.customerAddress.value.trim()) {
        elements.customerAddress.value = `[Live GPS Coordinates Attached: ${lat}, ${lng}] - `;
      }

      elements.detectLocationBtn.classList.remove('locating');
      elements.locationBtnText.textContent = '📍 GPS Captured';
      showToast('Live GPS location captured successfully! 📍', 'success');
    },
    (error) => {
      elements.detectLocationBtn.classList.remove('locating');
      elements.locationBtnText.textContent = 'Use My Live Location';
      let msg = 'Could not access location.';
      if (error.code === error.PERMISSION_DENIED) {
        msg = 'Location permission was denied. Please type your delivery address manually.';
      } else if (error.code === error.TIMEOUT) {
        msg = 'Location request timed out. Please enter address manually.';
      }
      showToast(msg, 'info');
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}

// --- CHECKOUT & RECEIPT LOGIC ---
function openCheckout() {
  if (cart.length === 0) {
    showToast('Your cart is empty! Add items first.', 'info');
    return;
  }
  closeCart();
  elements.checkoutModalOverlay.classList.add('open');
}

function closeCheckout() {
  elements.checkoutModalOverlay.classList.remove('open');
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const customerName = elements.customerName.value.trim();
  const customerPhonePrimary = elements.customerPhonePrimary.value.trim();
  const customerPhoneSecondary = elements.customerPhoneSecondary.value.trim();
  const orderType = elements.orderTypeSelect.value;
  const address = elements.customerAddress.value.trim();
  const landmark = elements.customerLandmark.value.trim();
  const tableTab = elements.tableTabNumber.value.trim();
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

  if (!customerName || !customerPhonePrimary) {
    showToast('Please provide your name and mandatory primary phone number.', 'info');
    return;
  }

  if (orderType === 'Home Delivery' && (!address || !landmark)) {
    showToast('Please provide your complete Delivery Address and Landmark.', 'info');
    return;
  }

  const orderId = 'RS-' + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const dateFormatted = now.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }) + ' ' + now.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const totals = calculateCartTotals();

  lastOrderData = {
    orderId,
    customerName,
    customerPhonePrimary,
    customerPhoneSecondary: customerPhoneSecondary || null,
    orderType,
    address,
    landmark,
    tableTab,
    paymentMethod,
    detectedLocation,
    dateFormatted,
    items: [...cart],
    totals
  };

  // Populate Bill Receipt
  generateReceipt(lastOrderData);

  // Clear Cart
  cart = [];
  saveCart();
  renderCart();

  // Close Checkout Modal & Open Receipt
  closeCheckout();
  elements.receiptModal.classList.add('open');
  showToast(`Order placed successfully! Bill #${orderId} generated. 🎉`, 'success');
}

function generateReceipt(order) {
  let locationHtml = '';
  if (order.detectedLocation) {
    locationHtml = `
      <div style="margin-top: 4px; padding: 4px 8px; background: #ecfdf5; border: 1px solid #10b981; border-radius: 4px; font-size: 0.78rem;">
        <strong>📍 Live GPS Location:</strong> ${order.detectedLocation.lat}, ${order.detectedLocation.lng}<br>
        <a href="${order.detectedLocation.mapsUrl}" target="_blank" style="color: #047857; font-weight: 700; text-decoration: underline;">
          Open Live Location in Google Maps ↗
        </a>
      </div>
    `;
  }

  elements.receiptMeta.innerHTML = `
    <div><strong>Order No:</strong> #${order.orderId}</div>
    <div><strong>Date & Time:</strong> ${order.dateFormatted}</div>
    <div><strong>Customer Name:</strong> ${order.customerName}</div>
    <div><strong>Primary Phone:</strong> ${order.customerPhonePrimary} <span style="font-size:0.75rem; color:#047857;">(Mandatory)</span></div>
    ${order.customerPhoneSecondary ? `<div><strong>Alternate Phone:</strong> ${order.customerPhoneSecondary} <span style="font-size:0.75rem; color:#6b7280;">(Optional)</span></div>` : ''}
    <div><strong>Order Type:</strong> ${order.orderType}</div>
    ${order.orderType === 'Home Delivery' ? `
      <div><strong>Delivery Address:</strong> ${order.address}</div>
      <div><strong>Landmark:</strong> ${order.landmark}</div>
      ${locationHtml}
    ` : ''}
    ${order.orderType === 'Bar Table Tab' ? `<div><strong>Table / Tab:</strong> ${order.tableTab || 'General Lounge'}</div>` : ''}
    <div><strong>Payment Method:</strong> ${order.paymentMethod}</div>
  `;

  elements.receiptTableBody.innerHTML = '';
  order.items.forEach(item => {
    const rowTotal = item.unitPrice * item.qty;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        <strong>${item.brand}</strong><br>
        <span style="font-size: 0.75rem; color: #4b5563;">
          ${item.name} (${item.displayUnit || item.ml + (item.isSide ? 'g' : 'ml')})
        </span>
      </td>
      <td class="num-col">${item.qty}</td>
      <td class="num-col">₹${item.unitPrice}</td>
      <td class="num-col">₹${rowTotal.toLocaleString('en-IN')}</td>
    `;
    elements.receiptTableBody.appendChild(tr);
  });

  elements.receiptTotals.innerHTML = `
    <div class="receipt-row">
      <span>Subtotal</span>
      <span>₹${order.totals.subtotal.toLocaleString('en-IN')}</span>
    </div>
    <div class="receipt-row">
      <span>State Excise / VAT (5%)</span>
      <span>₹${order.totals.tax.toLocaleString('en-IN')}</span>
    </div>
    <div class="receipt-row grand-total">
      <span>TOTAL PAYABLE</span>
      <span>₹${order.totals.total.toLocaleString('en-IN')}</span>
    </div>
  `;
}

// WhatsApp Order Forwarding from Cart
function sendCartViaWhatsApp() {
  if (cart.length === 0) {
    showToast('Your cart is empty! Add items first.', 'info');
    return;
  }

  const totals = calculateCartTotals();
  let text = `🍺 *NEW ORDER - KUDKARA MEETUP*\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;

  cart.forEach((item, index) => {
    const itemTotal = item.unitPrice * item.qty;
    const size = item.displayUnit || (item.isSide ? `${item.ml}g` : `${item.ml}ml`);
    text += `${index + 1}. *${item.brand}* - ${item.name}\n`;
    text += `   Portion/Size: ${size} | Qty: ${item.qty} | Rate: ₹${item.unitPrice} | Total: ₹${itemTotal}\n`;
  });

  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `💰 *Subtotal:* ₹${totals.subtotal.toLocaleString('en-IN')}\n`;
  text += `🏛️ *Excise / VAT (5%):* ₹${totals.tax.toLocaleString('en-IN')}\n`;
  text += `🔥 *Grand Total:* ₹${totals.total.toLocaleString('en-IN')}\n`;
  text += `\nPlease confirm availability and delivery slot. Thank you!`;

  const encoded = encodeURIComponent(text);
  window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
}

// WhatsApp Invoice / Delivery Share from Receipt
function shareReceiptViaWhatsApp() {
  if (!lastOrderData) return;
  const order = lastOrderData;
  let text = `🧾 *KUDKARA MEETUP DELIVERY BILL*\n`;
  text += `Order ID: #${order.orderId}\n`;
  text += `Customer: ${order.customerName}\n`;
  text += `Primary Phone: ${order.customerPhonePrimary}\n`;
  if (order.customerPhoneSecondary) {
    text += `Alternate Phone: ${order.customerPhoneSecondary}\n`;
  }
  text += `Service: ${order.orderType}\n`;

  if (order.orderType === 'Home Delivery') {
    text += `Address: ${order.address}\n`;
    text += `Landmark: ${order.landmark}\n`;
    if (order.detectedLocation) {
      text += `📍 Live Location: ${order.detectedLocation.mapsUrl}\n`;
    }
  }

  text += `Payment Mode: ${order.paymentMethod}\n`;
  text += `Date: ${order.dateFormatted}\n`;
  text += `━━━━━━━━━━━━━━━━━━━━━\n`;

  order.items.forEach(item => {
    const size = item.displayUnit || (item.isSide ? `${item.ml}g` : `${item.ml}ml`);
    text += `• ${item.name} (${size}) x ${item.qty} = ₹${(item.unitPrice * item.qty).toLocaleString('en-IN')}\n`;
  });

  text += `━━━━━━━━━━━━━━━━━━━━━\n`;
  text += `*Total Amount:* ₹${order.totals.total.toLocaleString('en-IN')}\n`;
  text += `Thank you for ordering with Kudkara Meetup! Drink Responsibly.`;

  const encoded = encodeURIComponent(text);
  window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
}

// --- ADMIN / STOCK MANAGEMENT ---
function handleAddProduct(e) {
  e.preventDefault();

  const brand = document.getElementById('newBrand').value.trim();
  const name = document.getElementById('newName').value.trim();
  const category = document.getElementById('newCategory').value;
  const abv = document.getElementById('newAbv').value.trim() || (category === 'Side Dish' ? 'Snack' : '40%');
  const origin = document.getElementById('newOrigin').value.trim() || 'Kitchen / Imported';
  const desc = document.getElementById('newDesc').value.trim() || 'Selected item.';

  // Build variants
  const variants = [];
  const isSide = category === 'Side Dish';

  const v1_ml = parseInt(document.getElementById('v1_ml').value, 10);
  const v1_price = parseInt(document.getElementById('v1_price').value, 10);
  if (v1_ml && v1_price) {
    variants.push({
      ml: v1_ml,
      label: `${v1_ml} ${isSide ? 'g' : 'ml'}`,
      sizeLabel: `${v1_ml}${isSide ? 'g' : 'ml'}`,
      price: v1_price,
      inStock: true
    });
  }

  const v2_ml = parseInt(document.getElementById('v2_ml').value, 10);
  const v2_price = parseInt(document.getElementById('v2_price').value, 10);
  if (v2_ml && v2_price) {
    variants.push({
      ml: v2_ml,
      label: `${v2_ml} ${isSide ? 'g' : 'ml'}`,
      sizeLabel: `${v2_ml}${isSide ? 'g' : 'ml'}`,
      price: v2_price,
      inStock: true
    });
  }

  const v3_ml = parseInt(document.getElementById('v3_ml').value, 10);
  const v3_price = parseInt(document.getElementById('v3_price').value, 10);
  if (v3_ml && v3_price) {
    variants.push({
      ml: v3_ml,
      label: `${v3_ml} ${isSide ? 'g' : 'ml'}`,
      sizeLabel: `${v3_ml}${isSide ? 'g' : 'ml'}`,
      price: v3_price,
      inStock: true
    });
  }

  const v4_ml = parseInt(document.getElementById('v4_ml').value, 10);
  const v4_price = parseInt(document.getElementById('v4_price').value, 10);
  if (v4_ml && v4_price) {
    variants.push({
      ml: v4_ml,
      label: `${v4_ml} ${isSide ? 'g' : 'ml'}`,
      sizeLabel: `${v4_ml}${isSide ? 'g' : 'ml'}`,
      price: v4_price,
      inStock: true
    });
  }

  if (variants.length === 0) {
    alert('Please enter at least one valid ML / gram volume size and price.');
    return;
  }

  const newId = 'prod-' + Date.now();
  const newProduct = {
    id: newId,
    brand,
    name,
    category,
    categoryLabel: category === 'Hot' ? 'Hot / Whisky' : (category === 'Side Dish' ? 'Side Dish / Bar Bites' : category),
    origin,
    abv,
    badge: 'New Arrival',
    description: desc,
    isFood: isSide,
    image: isSide 
      ? 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=600&q=80'
      : 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80',
    variants,
    selectedMlIndex: 0
  };

  products.unshift(newProduct);
  selectedVariants[newId] = 0;
  saveProducts();
  populateBrandFilter();
  renderProducts();

  elements.newProductForm.reset();
  elements.adminModal.classList.remove('open');
  showToast(`Added ${brand} - ${name} to store inventory! 📦`, 'success');
}

function resetToDefaultCatalog() {
  if (confirm('Reset store catalog back to original brand & side dish items? Custom added items will be replaced.')) {
    products = [...INITIAL_PRODUCTS];
    saveProducts();
    populateBrandFilter();
    renderProducts();
    elements.adminModal.classList.remove('open');
    showToast('Catalog restored to defaults with side dishes', 'info');
  }
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${type === 'success' ? '✅' : 'ℹ️'}</span> <span>${message}</span>`;

  elements.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

// --- EVENT LISTENERS ---
function attachEventListeners() {
  // Search
  elements.searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  // Filters
  elements.brandFilterSelect.addEventListener('change', (e) => {
    selectedBrand = e.target.value;
    renderProducts();
  });

  elements.sortSelect.addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderProducts();
  });

  // Cart Open/Close
  elements.openCartBtn.addEventListener('click', openCart);
  elements.closeCartBtn.addEventListener('click', closeCart);
  elements.cartOverlay.addEventListener('click', closeCart);
  elements.clearCartBtn.addEventListener('click', clearCart);

  // Live Location button
  elements.detectLocationBtn.addEventListener('click', detectUserLocation);

  // Checkout modal
  elements.checkoutBtn.addEventListener('click', openCheckout);
  elements.closeCheckoutModalBtn.addEventListener('click', closeCheckout);
  elements.checkoutModalOverlay.addEventListener('click', (e) => {
    if (e.target === elements.checkoutModalOverlay) closeCheckout();
  });
  elements.checkoutForm.addEventListener('submit', handleCheckoutSubmit);

  // Service type changes
  elements.orderTypeSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === 'Bar Table Tab') {
      elements.deliveryAddressSection.style.display = 'none';
      elements.landmarkGroup.style.display = 'none';
      elements.tableTabGroup.style.display = 'block';
      elements.customerAddress.removeAttribute('required');
      elements.customerLandmark.removeAttribute('required');
    } else if (val === 'Takeaway / Store Counter') {
      elements.deliveryAddressSection.style.display = 'none';
      elements.landmarkGroup.style.display = 'none';
      elements.tableTabGroup.style.display = 'none';
      elements.customerAddress.removeAttribute('required');
      elements.customerLandmark.removeAttribute('required');
    } else {
      // Home Delivery
      elements.deliveryAddressSection.style.display = 'block';
      elements.landmarkGroup.style.display = 'block';
      elements.tableTabGroup.style.display = 'none';
      elements.customerAddress.setAttribute('required', 'true');
      elements.customerLandmark.setAttribute('required', 'true');
    }
  });

  // Payment radio buttons active highlight
  const paymentOptions = document.querySelectorAll('.payment-option-label');
  paymentOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      paymentOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
    });
  });

  // WhatsApp Order from Cart
  elements.whatsappOrderBtn.addEventListener('click', sendCartViaWhatsApp);

  // Receipt Modal actions
  elements.closeReceiptModalBtn.addEventListener('click', () => {
    elements.receiptModal.classList.remove('open');
  });
  elements.receiptModal.addEventListener('click', (e) => {
    if (e.target === elements.receiptModal) elements.receiptModal.classList.remove('open');
  });
  elements.printReceiptBtn.addEventListener('click', () => {
    window.print();
  });
  elements.shareReceiptWhatsAppBtn.addEventListener('click', shareReceiptViaWhatsApp);

  // Admin Modal
  elements.openAdminBtn.addEventListener('click', () => {
    elements.adminModal.classList.add('open');
  });
  elements.closeAdminModalBtn.addEventListener('click', () => {
    elements.adminModal.classList.remove('open');
  });
  elements.adminModal.addEventListener('click', (e) => {
    if (e.target === elements.adminModal) elements.adminModal.classList.remove('open');
  });
  elements.newProductForm.addEventListener('submit', handleAddProduct);
  elements.resetCatalogBtn.addEventListener('click', resetToDefaultCatalog);
}

// Start app on DOM load
document.addEventListener('DOMContentLoaded', init);
