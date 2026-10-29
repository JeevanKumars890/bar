/**
 * Sample Initial Liquor Catalog
 * Categories: Rum, Vodka, Hot / Spirits (Whisky & Scotch), Beer, Gin, Wine, Brandy
 */
const INITIAL_PRODUCTS = [
  // --- KARNATAKA LOCAL BAR & MRP FAVORITES (WHISKY) ---
  {
    id: "kar-1",
    name: "McDowell's No. 1 Reserve Whisky",
    brand: "McDowell's No. 1",
    category: "Hot",
    categoryLabel: "Hot / Whisky",
    origin: "Karnataka (United Spirits)",
    abv: "42.8%",
    badge: "Karnataka #1 MRP",
    isKarnataka: true,
    description: "The undisputed highest-selling whisky in Karnataka bars and MRP outlets. Crafted with imported Scotch malts and select Indian grain spirits.",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 75, inStock: true },
      { ml: 180, label: "180 ml (Quarter / Nip)", sizeLabel: "180ml", price: 190, inStock: true },
      { ml: 375, label: "375 ml (Half / Pint)", sizeLabel: "375ml", price: 370, inStock: true },
      { ml: 750, label: "750 ml (Full / Khamba)", sizeLabel: "750ml", price: 710, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "kar-2",
    name: "Royal Challenge (RC) Premium Whisky",
    brand: "Royal Challenge",
    category: "Hot",
    categoryLabel: "Hot / Whisky",
    origin: "Karnataka MRP Staple",
    abv: "42.8%",
    badge: "Bangalore Hit",
    isKarnataka: true,
    description: "Deep golden blend of rare Scotch malts and neutral grain spirits. A legendary staple in Karnataka lounge bars and retail stores.",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 90, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 230, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 450, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 870, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "kar-3",
    name: "Imperial Blue (IB) Superior Grain Whisky",
    brand: "Imperial Blue",
    category: "Hot",
    categoryLabel: "Hot / Whisky",
    origin: "Karnataka Local Bar",
    abv: "42.8%",
    badge: "Men Will Be Men",
    isKarnataka: true,
    description: "Finest blend of imported Scotch malts and select Indian grain spirits. Smooth, balanced, and widely loved across Karnataka.",
    image: "https://images.unsplash.com/photo-1598063412304-49c5e3f1df64?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 70, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 180, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 350, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 680, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "kar-4",
    name: "Officer's Choice Blue (OC Blue)",
    brand: "Officer's Choice",
    category: "Hot",
    categoryLabel: "Hot / Whisky",
    origin: "Karnataka Local Bar",
    abv: "42.8%",
    badge: "Local MRP",
    isKarnataka: true,
    description: "An elegant blend of Scotch malts and Indian grain spirits aged in oak barrels. Highly popular daily bar pick.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 65, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 170, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 330, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 640, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "kar-5",
    name: "Bagpiper Deluxe Whisky",
    brand: "Bagpiper",
    category: "Hot",
    categoryLabel: "Hot / Whisky",
    origin: "Karnataka MRP",
    abv: "42.8%",
    badge: "Classic Desi",
    isKarnataka: true,
    description: "Iconic square bottle characterized by a subtle malty aroma and woody character. One of Karnataka's most recognized brands.",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 60, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 150, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 290, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 560, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "kar-6",
    name: "Signature Premier Rare Grain Whisky",
    brand: "Signature",
    category: "Hot",
    categoryLabel: "Hot / Whisky",
    origin: "Karnataka (United Spirits)",
    abv: "42.8%",
    badge: "Smooth Choice",
    isKarnataka: true,
    description: "Master crafted with aged imported Scotch malts and blended with charcoal-filtered Indian grain spirits in Bangalore.",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 110, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 290, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 570, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 1090, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "kar-7",
    name: "Antiquity Blue Ultra Premium Whisky",
    brand: "Antiquity",
    category: "Hot",
    categoryLabel: "Hot / Whisky",
    origin: "Karnataka",
    abv: "42.8%",
    badge: "True Blue",
    isKarnataka: true,
    description: "Distilled in copper pot stills and matured in handcrafted oak barrels for a rich, velvety peat smoke experience.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 130, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 360, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 700, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 1360, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "kar-8",
    name: "Amrut Fusion Indian Single Malt",
    brand: "Amrut",
    category: "Hot",
    categoryLabel: "Hot / Single Malt",
    origin: "Bangalore (Kambipura), Karnataka",
    abv: "50%",
    badge: "Bangalore Pride",
    isKarnataka: true,
    description: "World-celebrated single malt whisky distilled and matured in Bangalore, Karnataka. Bold peat, barley sugars, and spiced citrus.",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 390, inStock: true },
      { ml: 750, label: "750 ml (Full Bottle)", sizeLabel: "750ml", price: 4200, inStock: true }
    ],
    selectedMlIndex: 1
  },

  // --- KARNATAKA LOCAL RUMS ---
  {
    id: "kar-9",
    name: "McDowell's No. 1 Celebration Dark Rum",
    brand: "McDowell's No. 1",
    category: "Rum",
    categoryLabel: "Dark Rum",
    origin: "Karnataka MRP Bestseller",
    abv: "42.8%",
    badge: "Karnataka #1 Rum",
    isKarnataka: true,
    description: "The top-selling dark rum across all Karnataka MRP outlets and bar counters. Rich aroma of tobacco, caramel, and vanilla.",
    image: "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 65, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 175, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 340, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 660, inStock: true },
      { ml: 1000, label: "1000 ml (1 Liter)", sizeLabel: "1000ml", price: 860, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "kar-10",
    name: "Hercules XXX Dark Rum",
    brand: "Hercules",
    category: "Rum",
    categoryLabel: "Dark Rum",
    origin: "Karnataka (Khoday's / Defense)",
    abv: "42.8%",
    badge: "Local Bar Hit",
    isKarnataka: true,
    description: "Famous heritage dark rum distilled by Khoday's in Bangalore, Karnataka. Robust, full-bodied caramel and roasted oak notes.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 60, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 165, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 320, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 620, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "kar-11",
    name: "Bacardi Limón Citrus White Rum",
    brand: "Bacardi",
    category: "Rum",
    categoryLabel: "Citrus Rum",
    origin: "Karnataka MRP",
    abv: "35%",
    badge: "Lounge Hit",
    isKarnataka: true,
    description: "Crisp white rum infused with natural Italian lemons, limes, and grapefruits. Karnataka's favorite mixer with chilled Sprite or Soda.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 130, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 370, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 720, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 1380, inStock: true }
    ],
    selectedMlIndex: 1
  },

  // --- KARNATAKA LOCAL BRANDIES ---
  {
    id: "kar-12",
    name: "Morpheus XO Blended Premium Brandy",
    brand: "Morpheus",
    category: "Brandy",
    categoryLabel: "XO Brandy",
    origin: "Karnataka Favorite",
    abv: "42.8%",
    badge: "Top MRP Brandy",
    isKarnataka: true,
    description: "The distinguished round decanter bottle beloved across Karnataka. Blended using aged grape spirits for an ultra-smooth finish.",
    image: "https://images.unsplash.com/photo-1598063412304-49c5e3f1df64?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 120, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 320, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 630, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 1220, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "kar-13",
    name: "McDowell's No. 1 VSOP Brandy",
    brand: "McDowell's No. 1",
    category: "Brandy",
    categoryLabel: "VSOP Brandy",
    origin: "Karnataka (United Spirits)",
    abv: "42.8%",
    badge: "Local MRP Hit",
    isKarnataka: true,
    description: "Karnataka's classic warm brandy distilled from rich sun-ripened grapes and matured in wooden oak vats.",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 70, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 180, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 350, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 680, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "kar-14",
    name: "Honey Bee Premium French Brandy",
    brand: "Honey Bee",
    category: "Brandy",
    categoryLabel: "French Grape Brandy",
    origin: "Karnataka MRP",
    abv: "42.8%",
    badge: "Bar Favorite",
    isKarnataka: true,
    description: "Famous local bar companion across Karnataka with rich golden honey accents and warming grape spirit.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", sizeLabel: "60ml", price: 65, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 170, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 330, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 640, inStock: true }
    ],
    selectedMlIndex: 1
  },

  // --- KARNATAKA LOCAL BEERS ---
  {
    id: "kar-15",
    name: "Kingfisher Strong Premium Beer",
    brand: "Kingfisher",
    category: "Beer",
    categoryLabel: "Strong Lager",
    origin: "Bengaluru, Karnataka (UB Group)",
    abv: "7.2%",
    badge: "Karnataka #1 Beer",
    isKarnataka: true,
    description: "Born and brewed right in Bangalore, Karnataka. The undisputed king of beers in every Karnataka bar, MRP, and lounge counter.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 330, label: "330 ml (Pint)", sizeLabel: "330ml", price: 120, inStock: true },
      { ml: 500, label: "500 ml (Can)", sizeLabel: "500ml", price: 160, inStock: true },
      { ml: 650, label: "650 ml (Standard Bottle)", sizeLabel: "650ml", price: 190, inStock: true }
    ],
    selectedMlIndex: 2
  },
  {
    id: "kar-16",
    name: "Kingfisher Premium Lager Beer",
    brand: "Kingfisher",
    category: "Beer",
    categoryLabel: "Mild Lager",
    origin: "Bengaluru, Karnataka",
    abv: "4.8%",
    badge: "The King of Good Times",
    isKarnataka: true,
    description: "The crisp, timeless mild lager brewed in Bangalore with pure malted barley and German hops.",
    image: "https://images.unsplash.com/photo-1608270191763-7c87c7674268?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 330, label: "330 ml (Pint)", sizeLabel: "330ml", price: 110, inStock: true },
      { ml: 500, label: "500 ml (Can)", sizeLabel: "500ml", price: 150, inStock: true },
      { ml: 650, label: "650 ml (Standard Bottle)", sizeLabel: "650ml", price: 180, inStock: true }
    ],
    selectedMlIndex: 2
  },
  {
    id: "kar-17",
    name: "Tuborg Strong Premium Beer",
    brand: "Tuborg",
    category: "Beer",
    categoryLabel: "Strong Beer",
    origin: "Karnataka MRP Bestseller",
    abv: "7.0%",
    badge: "Green Pull-Tab",
    isKarnataka: true,
    description: "Smooth, strong European recipe with pull-off cap. Huge favorite across Karnataka retail outlets.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 330, label: "330 ml (Pint)", sizeLabel: "330ml", price: 130, inStock: true },
      { ml: 500, label: "500 ml (Can)", sizeLabel: "500ml", price: 170, inStock: true },
      { ml: 650, label: "650 ml (Standard Bottle)", sizeLabel: "650ml", price: 210, inStock: true }
    ],
    selectedMlIndex: 2
  },
  {
    id: "kar-18",
    name: "Budweiser Magnum Strong Beer",
    brand: "Budweiser",
    category: "Beer",
    categoryLabel: "Super Strong",
    origin: "Karnataka MRP",
    abv: "6.5%",
    badge: "Premium Strong",
    isKarnataka: true,
    description: "Aged over beechwood chips for unmatched crispness and clean strong malt body.",
    image: "https://images.unsplash.com/photo-1608270191763-7c87c7674268?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 330, label: "330 ml (Pint)", sizeLabel: "330ml", price: 170, inStock: true },
      { ml: 500, label: "500 ml (Can)", sizeLabel: "500ml", price: 220, inStock: true },
      { ml: 650, label: "650 ml (Standard Bottle)", sizeLabel: "650ml", price: 260, inStock: true }
    ],
    selectedMlIndex: 2
  },
  {
    id: "kar-19",
    name: "Haywards 5000 Super Strong Beer",
    brand: "Haywards",
    category: "Beer",
    categoryLabel: "High Punch Strong",
    origin: "Karnataka MRP Classic",
    abv: "7.2%",
    badge: "Desi Punch",
    isKarnataka: true,
    description: "Famous bold high-malt punch beer that has stood the test of time in Karnataka bar counters.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 500, label: "500 ml (Can)", sizeLabel: "500ml", price: 150, inStock: true },
      { ml: 650, label: "650 ml (Standard Bottle)", sizeLabel: "650ml", price: 180, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "kar-20",
    name: "Knock Out High Punch Strong Beer",
    brand: "Knock Out",
    category: "Beer",
    categoryLabel: "Heavy Strong Beer",
    origin: "North Karnataka (Hubli / Belgaum)",
    abv: "7.5%",
    badge: "North Karnataka Hit",
    isKarnataka: true,
    description: "High gravity malt beer with an intense kick. Highly famous across Hubballi-Dharwad, Belagavi, and Central Karnataka bars.",
    image: "https://images.unsplash.com/photo-1608270191763-7c87c7674268?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 650, label: "650 ml (Standard Bottle)", sizeLabel: "650ml", price: 175, inStock: true }
    ],
    selectedMlIndex: 0
  },

  // --- KARNATAKA LOCAL VODKA & GIN ---
  {
    id: "kar-21",
    name: "Romanov Pure Grain Vodka",
    brand: "Romanov",
    category: "Vodka",
    categoryLabel: "Grain Vodka",
    origin: "Karnataka (United Spirits)",
    abv: "42.8%",
    badge: "Local MRP",
    isKarnataka: true,
    description: "Distilled from fine grain spirits. Crisp and mixable, an everyday classic in Karnataka bar lounges.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 160, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 310, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 600, inStock: true }
    ],
    selectedMlIndex: 0
  },
  {
    id: "kar-22",
    name: "White Mischief Ultra Pure Vodka",
    brand: "White Mischief",
    category: "Vodka",
    categoryLabel: "Vodka",
    origin: "Karnataka MRP",
    abv: "42.8%",
    badge: "Bar Staple",
    isKarnataka: true,
    description: "Triple-distilled through activated carbon filters for crystal clarity. Karnataka's highest-selling budget vodka.",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 150, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 290, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 570, inStock: true }
    ],
    selectedMlIndex: 0
  },
  {
    id: "kar-23",
    name: "Blue Riband Extra Dry Gin",
    brand: "Blue Riband",
    category: "Gin",
    categoryLabel: "Dry Gin",
    origin: "Karnataka MRP",
    abv: "42.8%",
    badge: "Classic Gin",
    isKarnataka: true,
    description: "Distilled with hand-selected juniper berries. The quintessential Karnataka bar gin for gin & tonic or fresh lime soda.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 180, label: "180 ml (Quarter)", sizeLabel: "180ml", price: 170, inStock: true },
      { ml: 375, label: "375 ml (Half)", sizeLabel: "375ml", price: 330, inStock: true },
      { ml: 750, label: "750 ml (Full)", sizeLabel: "750ml", price: 640, inStock: true }
    ],
    selectedMlIndex: 0
  },

  // --- PREMIUM INTERNATIONAL & HERITAGE SPIRITS ---
  {
    id: "liq-1",
    name: "Johnnie Walker Black Label",
    brand: "Johnnie Walker",
    category: "Hot",
    categoryLabel: "Hot / Whisky",
    origin: "Scotland",
    abv: "40%",
    badge: "Bestseller",
    description: "Iconic 12-year-old blended Scotch whisky with rich notes of dark fruits, sweet vanilla, and signature peat smoke.",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 280, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", price: 820, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 1650, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 3100, inStock: true },
      { ml: 1000, label: "1000 ml (1 Liter)", price: 3950, inStock: true }
    ],
    selectedMlIndex: 3
  },
  {
    id: "liq-2",
    name: "Jack Daniel's Old No. 7",
    brand: "Jack Daniel's",
    category: "Hot",
    categoryLabel: "Hot / Whiskey",
    origin: "USA (Tennessee)",
    abv: "40%",
    badge: "Popular",
    description: "Mellowed drop by drop through 10 feet of sugar maple charcoal and matured in handcrafted American oak barrels.",
    image: "https://images.unsplash.com/photo-1598063412304-49c5e3f1df64?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 260, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", price: 780, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 1550, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 2950, inStock: true },
      { ml: 1000, label: "1000 ml (1 Liter)", price: 3800, inStock: true }
    ],
    selectedMlIndex: 3
  },
  {
    id: "liq-3",
    name: "Glenfiddich 12 Year Old",
    brand: "Glenfiddich",
    category: "Hot",
    categoryLabel: "Hot / Single Malt",
    origin: "Scotland (Speyside)",
    abv: "40%",
    badge: "Premium",
    description: "Single Malt Scotch Whisky characterized by distinctive fresh pear, subtle oak, and long, smooth mellow finish.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 450, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", price: 1350, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 2650, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 4900, inStock: true }
    ],
    selectedMlIndex: 3
  },
  {
    id: "liq-4",
    name: "Jameson Irish Whiskey",
    brand: "Jameson",
    category: "Hot",
    categoryLabel: "Hot / Irish Whiskey",
    origin: "Ireland",
    abv: "40%",
    badge: "",
    description: "Triple-distilled, remarkably smooth whiskey with a perfect balance of spicy, nutty, and vanilla notes with hints of sweet sherry.",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 210, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", price: 620, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 1250, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 2350, inStock: true }
    ],
    selectedMlIndex: 3
  },
  {
    id: "liq-5",
    name: "Blenders Pride Reserve Collection",
    brand: "Blenders Pride",
    category: "Hot",
    categoryLabel: "Hot / Whisky",
    origin: "India",
    abv: "42.8%",
    badge: "Value Favorite",
    description: "Crafted with imported Scotch malts and select Indian grain spirits, delivering rich fruit and honey accents.",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 110, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", price: 310, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 600, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 1150, inStock: true }
    ],
    selectedMlIndex: 3
  },

  // --- RUM ---
  {
    id: "liq-6",
    name: "Old Monk XXX Very Old Vatted Rum",
    brand: "Old Monk",
    category: "Rum",
    categoryLabel: "Dark Rum",
    origin: "India",
    abv: "42.8%",
    badge: "Legendary",
    description: "Iconic dark rum aged in oak vats for a minimum of 7 years, famed for its unmistakable vanilla, chocolate, and caramel profile.",
    image: "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 70, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", price: 190, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 380, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 720, inStock: true },
      { ml: 1000, label: "1000 ml (1 Liter)", price: 920, inStock: true }
    ],
    selectedMlIndex: 3
  },
  {
    id: "liq-7",
    name: "Bacardi Superior Carta Blanca",
    brand: "Bacardi",
    category: "Rum",
    categoryLabel: "White Rum",
    origin: "Puerto Rico",
    abv: "40%",
    badge: "Classic",
    description: "A floral and fruity white rum crafted in white oak barrels, ideal for Mojitos, Daiquiris, and refreshing cocktails.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 120, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", price: 350, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 680, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 1300, inStock: true }
    ],
    selectedMlIndex: 3
  },
  {
    id: "liq-8",
    name: "Captain Morgan Spiced Gold",
    brand: "Captain Morgan",
    category: "Rum",
    categoryLabel: "Spiced Rum",
    origin: "Jamaica",
    abv: "35%",
    badge: "Party Choice",
    description: "Infused with rich natural spices and aged in charred white oak barrels for delicious smoothness and golden warmth.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 110, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", price: 320, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 620, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 1180, inStock: true }
    ],
    selectedMlIndex: 3
  },
  {
    id: "liq-9",
    name: "Bacardi Black Original",
    brand: "Bacardi",
    category: "Rum",
    categoryLabel: "Dark Rum",
    origin: "Puerto Rico",
    abv: "40%",
    badge: "",
    description: "Medium-bodied dark rum blended using charcoal-filtered rums aged in heavily charred oak barrels.",
    image: "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 180, label: "180 ml (Quarter)", price: 360, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 710, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 1380, inStock: true }
    ],
    selectedMlIndex: 2
  },

  // --- VODKA ---
  {
    id: "liq-10",
    name: "Absolut Vodka Original",
    brand: "Absolut",
    category: "Vodka",
    categoryLabel: "Vodka",
    origin: "Sweden",
    abv: "40%",
    badge: "Top Seller",
    description: "Produced using continuous distillation from winter wheat. Rich, full-bodied, and complex yet smooth with mellow grain notes.",
    image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 160, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", price: 470, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 920, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 1750, inStock: true },
      { ml: 1000, label: "1000 ml (1 Liter)", price: 2200, inStock: true }
    ],
    selectedMlIndex: 3
  },
  {
    id: "liq-11",
    name: "Smirnoff Red No. 21",
    brand: "Smirnoff",
    category: "Vodka",
    categoryLabel: "Vodka",
    origin: "Russia / UK",
    abv: "37.5%",
    badge: "Popular",
    description: "Triple-distilled and ten-times charcoal-filtered for unparalleled purity, clarity, and crisp cocktail versatility.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 120, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", price: 340, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 650, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 1220, inStock: true }
    ],
    selectedMlIndex: 3
  },
  {
    id: "liq-12",
    name: "Grey Goose Vodka",
    brand: "Grey Goose",
    category: "Vodka",
    categoryLabel: "Ultra-Premium Vodka",
    origin: "France",
    abv: "40%",
    badge: "Luxury",
    description: "Crafted using the finest French soft winter wheat and Gensac spring water naturally filtered through limestone.",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 380, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 2300, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 4400, inStock: true }
    ],
    selectedMlIndex: 2
  },
  {
    id: "liq-13",
    name: "Magic Moments Grain Vodka",
    brand: "Magic Moments",
    category: "Vodka",
    categoryLabel: "Vodka",
    origin: "India",
    abv: "37.5%",
    badge: "Budget Friendly",
    description: "Triple-distilled rice grain vodka offering a clean palate and smooth texture at incredible value.",
    image: "https://images.unsplash.com/photo-1598063412304-49c5e3f1df64?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 180, label: "180 ml (Quarter)", price: 210, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 410, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 780, inStock: true }
    ],
    selectedMlIndex: 2
  },

  // --- BEER ---
  {
    id: "liq-14",
    name: "Corona Extra",
    brand: "Corona",
    category: "Beer",
    categoryLabel: "Lager Beer",
    origin: "Mexico",
    abv: "4.5%",
    badge: "Best Chilled",
    description: "Crisp, golden Mexican lager renowned for its refreshing crispness. Best enjoyed ice-cold with a wedge of fresh lime.",
    image: "https://images.unsplash.com/photo-1608270191763-7c87c7674268?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 330, label: "330 ml (Pint Bottle)", price: 240, inStock: true },
      { ml: 355, label: "355 ml (Can)", price: 250, inStock: true },
      { ml: 1980, label: "Pack of 6 (330ml x 6)", price: 1350, inStock: true }
    ],
    selectedMlIndex: 0
  },
  {
    id: "liq-15",
    name: "Kingfisher Ultra Max",
    brand: "Kingfisher",
    category: "Beer",
    categoryLabel: "Strong Premium Beer",
    origin: "India",
    abv: "6.5%",
    badge: "Popular",
    description: "Brewed with imported pilsen malt and superior hops to deliver a clean, crisp, and high-impact taste.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 330, label: "330 ml (Pint)", price: 150, inStock: true },
      { ml: 500, label: "500 ml (Can)", price: 190, inStock: true },
      { ml: 650, label: "650 ml (Bottle)", price: 240, inStock: true }
    ],
    selectedMlIndex: 2
  },
  {
    id: "liq-16",
    name: "Heineken Premium Lager",
    brand: "Heineken",
    category: "Beer",
    categoryLabel: "Lager Beer",
    origin: "Netherlands",
    abv: "5.0%",
    badge: "International",
    description: "World-class 100% malt lager brewed with pure natural ingredients and Heineken's unique A-Yeast.",
    image: "https://images.unsplash.com/photo-1608270191763-7c87c7674268?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 330, label: "330 ml (Pint)", price: 190, inStock: true },
      { ml: 500, label: "500 ml (Can)", price: 230, inStock: true },
      { ml: 650, label: "650 ml (Bottle)", price: 290, inStock: true }
    ],
    selectedMlIndex: 2
  },
  {
    id: "liq-17",
    name: "Bira 91 White",
    brand: "Bira 91",
    category: "Beer",
    categoryLabel: "Wheat Beer",
    origin: "India",
    abv: "4.7%",
    badge: "Craft Beer",
    description: "A delicious, low-bitterness wheat beer with a hint of spicy coriander and orange peel aromas.",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 330, label: "330 ml (Pint)", price: 180, inStock: true },
      { ml: 500, label: "500 ml (Can)", price: 220, inStock: true },
      { ml: 650, label: "650 ml (Bottle)", price: 280, inStock: true }
    ],
    selectedMlIndex: 2
  },

  // --- GIN ---
  {
    id: "liq-18",
    name: "Bombay Sapphire London Dry Gin",
    brand: "Bombay Sapphire",
    category: "Gin",
    categoryLabel: "London Dry Gin",
    origin: "England",
    abv: "47%",
    badge: "Premium",
    description: "Vapour-infused with 10 exotic hand-selected botanicals. Exceptionally clean and brilliantly balanced.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 230, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 1400, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 2650, inStock: true }
    ],
    selectedMlIndex: 2
  },
  {
    id: "liq-19",
    name: "Greater Than London Dry Gin",
    brand: "Greater Than",
    category: "Gin",
    categoryLabel: "Craft Gin",
    origin: "India (Goa)",
    abv: "42.8%",
    badge: "Craft",
    description: "India's first craft gin distilled with juniper, coriander seeds, fennel, chamomile, and fresh ginger.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 180, label: "180 ml (Quarter)", price: 340, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 680, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 1300, inStock: true }
    ],
    selectedMlIndex: 2
  },

  // --- WINE ---
  {
    id: "liq-20",
    name: "Sula Dindori Reserve Shiraz",
    brand: "Sula",
    category: "Wine",
    categoryLabel: "Red Wine",
    origin: "India (Nashik)",
    abv: "13.5%",
    badge: "Award Winner",
    description: "A powerful, full-bodied red wine aged in American oak barrels. Offers lush aromas of berries, vanilla, and cocoa.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 375, label: "375 ml (Half Bottle)", price: 750, inStock: true },
      { ml: 750, label: "750 ml (Standard Bottle)", price: 1450, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "liq-21",
    name: "Jacob's Creek Cabernet Sauvignon",
    brand: "Jacob's Creek",
    category: "Wine",
    categoryLabel: "Red Wine",
    origin: "Australia",
    abv: "13.9%",
    badge: "Classic",
    description: "Bright crimson red wine with aromas of ripe cassis and subtle mint, layered with cedar oak tannins.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 750, label: "750 ml (Standard Bottle)", price: 1600, inStock: true }
    ],
    selectedMlIndex: 0
  },

  // --- BRANDY ---
  {
    id: "liq-22",
    name: "Mansion House French Brandy",
    brand: "Mansion House",
    category: "Brandy",
    categoryLabel: "Brandy",
    origin: "India",
    abv: "42.8%",
    badge: "Popular",
    description: "Carefully blended with French grape brandies delivering a warm, velvety finish with notes of dried fruit and vanilla.",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 90, inStock: true },
      { ml: 180, label: "180 ml (Quarter)", price: 260, inStock: true },
      { ml: 375, label: "375 ml (Half)", price: 510, inStock: true },
      { ml: 750, label: "750 ml (Full)", price: 980, inStock: true }
    ],
    selectedMlIndex: 3
  },
  {
    id: "liq-23",
    name: "Hennessy V.S Cognac",
    brand: "Hennessy",
    category: "Brandy",
    categoryLabel: "Cognac / Luxury Brandy",
    origin: "France",
    abv: "40%",
    badge: "Ultra Premium",
    description: "Distinguished cognac blending over 40 eaux-de-vie. Rich toasted oak, roasted almond, and luscious fruit notes.",
    image: "https://images.unsplash.com/photo-1598063412304-49c5e3f1df64?auto=format&fit=crop&w=600&q=80",
    variants: [
      { ml: 60, label: "60 ml (Peg)", price: 490, inStock: true },
      { ml: 750, label: "750 ml (Bottle)", price: 5800, inStock: true }
    ],
    selectedMlIndex: 1
  },

  // --- SIDE DISHES & BITES (CHASERS / TOUCHINGS) ---
  {
    id: "side-1",
    name: "Crispy Masala Groundnut (Peanut Masala)",
    brand: "Royal Kitchen Bites",
    category: "Side Dish",
    categoryLabel: "Side Dish / Bar Bites",
    origin: "Freshly Prepared",
    abv: "Snack",
    badge: "Must Have",
    description: "Crunchy golden fried groundnuts tossed with spicy chaat masala, diced onions, fresh green chilies, coriander, and fresh lemon juice.",
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=600&q=80",
    isFood: true,
    variants: [
      { ml: 100, label: "100g (Regular Plate)", sizeLabel: "100g", price: 60, inStock: true },
      { ml: 200, label: "200g (Medium Bowl)", sizeLabel: "200g", price: 110, inStock: true },
      { ml: 400, label: "400g (Party Bowl)", sizeLabel: "400g", price: 190, inStock: true }
    ],
    selectedMlIndex: 0
  },
  {
    id: "side-2",
    name: "Spicy Mango & Lemon Pickle (Touchings)",
    brand: "Desi Heritage",
    category: "Side Dish",
    categoryLabel: "Side Dish / Pickle",
    origin: "Homemade Recipe",
    abv: "Spicy",
    badge: "Special",
    description: "Traditional spicy, tangy mango & lemon pickle infused with pure mustard oil, roasted fenugreek, and crushed fiery red chilies.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    isFood: true,
    variants: [
      { ml: 50, label: "50g (Dip Cup)", sizeLabel: "50g", price: 30, inStock: true },
      { ml: 150, label: "150g (Glass Jar)", sizeLabel: "150g", price: 75, inStock: true },
      { ml: 250, label: "250g (Large Jar)", sizeLabel: "250g", price: 120, inStock: true }
    ],
    selectedMlIndex: 0
  },
  {
    id: "side-3",
    name: "Crispy Potato & Banana Chips",
    brand: "Hot & Crispy",
    category: "Side Dish",
    categoryLabel: "Side Dish / Chips",
    origin: "Kerala & Salted",
    abv: "Crispy",
    badge: "Favorite",
    description: "Ultra-thin, golden-fried potato wafers seasoned with Himalayan rock salt and peri-peri paprika, paired with authentic Kerala banana chips.",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80",
    isFood: true,
    variants: [
      { ml: 75, label: "75g (Snack Pack)", sizeLabel: "75g", price: 40, inStock: true },
      { ml: 150, label: "150g (Sharing Bowl)", sizeLabel: "150g", price: 75, inStock: true },
      { ml: 300, label: "300g (Party Pack)", sizeLabel: "300g", price: 140, inStock: true }
    ],
    selectedMlIndex: 0
  },
  {
    id: "side-4",
    name: "Royal Spicy Mixture & Namkeen",
    brand: "Haldiram Special",
    category: "Side Dish",
    categoryLabel: "Side Dish / Namkeen",
    origin: "Classic Indian",
    abv: "Crunchy",
    badge: "Bestseller",
    description: "An irresistible medley of spicy sev, boondi, roasted groundnuts, fried split chickpeas, cashews, and aromatic crisp curry leaves.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
    isFood: true,
    variants: [
      { ml: 100, label: "100g (Cup)", sizeLabel: "100g", price: 50, inStock: true },
      { ml: 250, label: "250g (Pouch)", sizeLabel: "250g", price: 110, inStock: true },
      { ml: 500, label: "500g (Family Tub)", sizeLabel: "500g", price: 200, inStock: true }
    ],
    selectedMlIndex: 0
  },
  {
    id: "side-5",
    name: "Ghee Roasted Pepper Cashews",
    brand: "Royal Kitchen Bites",
    category: "Side Dish",
    categoryLabel: "Side Dish / Dry Fruits",
    origin: "Goan Roast",
    abv: "Premium",
    badge: "Chef Pick",
    description: "Jumbo whole cashews slow-roasted in pure aromatic desi cow ghee and tossed with freshly crushed Malabar black pepper and rock salt.",
    image: "https://images.unsplash.com/photo-1509912762294-55e10034a75c?auto=format&fit=crop&w=600&q=80",
    isFood: true,
    variants: [
      { ml: 50, label: "50g (Small Bowl)", sizeLabel: "50g", price: 90, inStock: true },
      { ml: 100, label: "100g (Medium Bowl)", sizeLabel: "100g", price: 170, inStock: true },
      { ml: 250, label: "250g (Tin Can)", sizeLabel: "250g", price: 380, inStock: true }
    ],
    selectedMlIndex: 1
  },

  // --- MIXERS, GLASSES & ESSENTIALS ---
  {
    id: "mix-1",
    name: "Use & Throw Disposable Glasses (Plastic Cups)",
    brand: "Party Essentials",
    category: "Mixers",
    categoryLabel: "Essentials / Glasses",
    origin: "Hygienic Disposable",
    abv: "Essential",
    badge: "₹5 - ₹10",
    description: "Hygienic, clear disposable plastic cups and heavy crystal tumblers for pegs, drinks, soda, and beers. Spill-proof rim.",
    image: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&w=600&q=80",
    isEssential: true,
    variants: [
      { ml: 1, label: "Single Use & Throw Glass (₹5)", sizeLabel: "1 Glass (₹5)", price: 5, inStock: true },
      { ml: 2, label: "Heavy Acrylic Glass (₹10)", sizeLabel: "1 Acrylic (₹10)", price: 10, inStock: true },
      { ml: 6, label: "Pack of 6 Glasses (₹30)", sizeLabel: "Pack of 6", price: 30, inStock: true },
      { ml: 12, label: "Pack of 12 Glasses (₹55)", sizeLabel: "Pack of 12", price: 55, inStock: true }
    ],
    selectedMlIndex: 0
  },
  {
    id: "mix-2",
    name: "Kinley Extra Fizz Club Soda",
    brand: "Kinley",
    category: "Mixers",
    categoryLabel: "Mixers / Club Soda",
    origin: "Ice Cold",
    abv: "Mixer",
    badge: "Chilled",
    description: "High-carbonation, extra effervescent club soda. The classic mixer for whisky, scotch, rum, and cocktails.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    isEssential: true,
    variants: [
      { ml: 750, label: "750 ml Bottle (₹20)", sizeLabel: "750ml", price: 20, inStock: true },
      { ml: 1500, label: "Pack of 2 (750ml x 2) (₹40)", sizeLabel: "Pack of 2", price: 40, inStock: true }
    ],
    selectedMlIndex: 0
  },
  {
    id: "mix-3",
    name: "Bisleri / Kinley Packaged Drinking Water",
    brand: "Bisleri",
    category: "Mixers",
    categoryLabel: "Mixers / Water",
    origin: "10-Step Purified",
    abv: "Water",
    badge: "Essential",
    description: "Hygienically sealed purified drinking water with added essential minerals. Ideal for drinks and hydration.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80",
    isEssential: true,
    variants: [
      { ml: 500, label: "500 ml Chilled Bottle (₹10)", sizeLabel: "500ml", price: 10, inStock: true },
      { ml: 1000, label: "1 Liter Chilled Bottle (₹20)", sizeLabel: "1000ml", price: 20, inStock: true },
      { ml: 2000, label: "2 Liter Bottle (₹35)", sizeLabel: "2000ml", price: 35, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "mix-4",
    name: "RO Purified Clean Ice Cubes (Cold Bag)",
    brand: "Arctic Ice",
    category: "Mixers",
    categoryLabel: "Mixers / Ice Cubes",
    origin: "Food-Grade Filtered",
    abv: "Ice",
    badge: "Freezer Chilled",
    description: "Crystal clear, solid RO-filtered food grade ice cubes. Packed in a sealed temperature-safe insulated bag.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
    isEssential: true,
    variants: [
      { ml: 1000, label: "1 Kg Ice Bag (₹30)", sizeLabel: "1 Kg Bag", price: 30, inStock: true },
      { ml: 2000, label: "2 Kg Party Pack Bag (₹50)", sizeLabel: "2 Kg Bag", price: 50, inStock: true }
    ],
    selectedMlIndex: 0
  },
  {
    id: "mix-5",
    name: "Coca-Cola Original Chilled",
    brand: "Coca-Cola",
    category: "Mixers",
    categoryLabel: "Mixers / Cola",
    origin: "Ice Cold",
    abv: "Soft Drink",
    badge: "Classic Mixer",
    description: "The world's favorite sparkling cola. Pairs famously with dark rums, bourbon, and whisky highballs.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    isEssential: true,
    variants: [
      { ml: 250, label: "250 ml Can (₹35)", sizeLabel: "250ml Can", price: 35, inStock: true },
      { ml: 750, label: "750 ml Pet Bottle (₹45)", sizeLabel: "750ml", price: 45, inStock: true },
      { ml: 1250, label: "1.25 Liter Bottle (₹65)", sizeLabel: "1.25L", price: 65, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "mix-6",
    name: "Pepsi Cold & Refreshing",
    brand: "Pepsi",
    category: "Mixers",
    categoryLabel: "Mixers / Cola",
    origin: "Ice Cold",
    abv: "Soft Drink",
    badge: "Popular Mixer",
    description: "Crisp, bold, and refreshing cola taste. Excellent chaser and mixer with rums and spirits.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    isEssential: true,
    variants: [
      { ml: 250, label: "250 ml Can (₹35)", sizeLabel: "250ml Can", price: 35, inStock: true },
      { ml: 750, label: "750 ml Pet Bottle (₹45)", sizeLabel: "750ml", price: 45, inStock: true },
      { ml: 1250, label: "1.25 Liter Bottle (₹65)", sizeLabel: "1.25L", price: 65, inStock: true }
    ],
    selectedMlIndex: 1
  },
  {
    id: "mix-7",
    name: "Sprite Refreshing Clear Lemon-Lime",
    brand: "Sprite",
    category: "Mixers",
    categoryLabel: "Mixers / Lemon Lime",
    origin: "Ice Cold",
    abv: "Soft Drink",
    badge: "Clear Mixer",
    description: "Crisp, clean lemon-lime carbonation with zero caffeine. The go-to mixer for vodka, gin, and white rum.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    isEssential: true,
    variants: [
      { ml: 250, label: "250 ml Can (₹35)", sizeLabel: "250ml Can", price: 35, inStock: true },
      { ml: 750, label: "750 ml Pet Bottle (₹45)", sizeLabel: "750ml", price: 45, inStock: true }
    ],
    selectedMlIndex: 1
  }
];

const CATEGORIES = [
  { id: "all", name: "All Items", icon: "🍷" },
  { id: "Karnataka", name: "Karnataka Bar & MRP Hits", icon: "🟡🔴" },
  { id: "Rum", name: "Rum", icon: "🥃" },
  { id: "Vodka", name: "Vodka", icon: "🍸" },
  { id: "Hot", name: "Hot / Whisky", icon: "🔥" },
  { id: "Beer", name: "Beer", icon: "🍺" },
  { id: "Gin", name: "Gin", icon: "🍹" },
  { id: "Wine", name: "Wine", icon: "🍾" },
  { id: "Brandy", name: "Brandy", icon: "🥃" },
  { id: "Side Dish", name: "Side Dishes & Bites", icon: "🥜" },
  { id: "Mixers", name: "Mixers & Essentials", icon: "🥤" }
];
