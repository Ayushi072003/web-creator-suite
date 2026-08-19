  // 16 Rich Sports Products Dataset
  const productsData = [
    {
      id: 'p1',
      name: 'Apex Carbon FG Tournament Cleats',
      category: 'Football',
      price: 189,
      oldPrice: 220,
      rating: 4.9,
      reviews: 184,
      tag: 'BESTSELLER',
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=80'
      ],
      description: 'Engineered with a full 3K carbon-fiber propulsion plate and micro-textured GripZone upper for unmatched acceleration and spin control on firm turf.',
      sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
      specs: [
        { label: 'Plate', val: 'Full Carbon Fiber FG/AG' },
        { label: 'Upper', val: 'V-Knit with 3D Texture' },
        { label: 'Weight', val: '185g (Size 9)' }
      ]
    },
    {
      id: 'p2',
      name: 'HyperFlight Pro Court High-Tops',
      category: 'Basketball',
      price: 165,
      oldPrice: 195,
      rating: 4.8,
      reviews: 210,
      tag: 'NEW',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=700&q=80'
      ],
      description: 'Dual Zoom air cushioning pods paired with an anatomical ankle brace for explosive rim attacks and zero court slippage on hardwood.',
      sizes: ['US 8', 'US 9', 'US 10', 'US 11', 'US 12', 'US 13'],
      specs: [
        { label: 'Cushioning', val: 'Dual Zoom Air Pods' },
        { label: 'Outsole', val: 'Herringbone Grip' },
        { label: 'Lockdown', val: 'Ankle Carbon Cage' }
      ]
    },
    {
      id: 'p3',
      name: 'Strata Surge Carbon Racing Shoes',
      category: 'Running',
      price: 145,
      oldPrice: 180,
      rating: 4.9,
      reviews: 340,
      tag: '20% OFF',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=700&q=80'
      ],
      description: 'Marathon-tested superfoam tuned with an 88% energy return carbon plate for personal best splits across 5K, 10K, and 42K races.',
      sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11', 'US 12'],
      specs: [
        { label: 'Drop', val: '8mm' },
        { label: 'Weight', val: '198g' },
        { label: 'Plate', val: 'Curved Carbon Plate' }
      ]
    },
    {
      id: 'p4',
      name: 'IronCore 50LB Adjustable Dumbbell Set',
      category: 'Fitness',
      price: 280,
      oldPrice: 340,
      rating: 4.9,
      reviews: 128,
      tag: 'PRO GRADE',
      image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80'
      ],
      description: 'Replace 15 pairs of dumbbells with a single rapid-dial mechanism. Cast-iron weight plates with knurled non-slip steel grips.',
      sizes: ['Single Unit (50lbs)', 'Pair Set (100lbs Total)'],
      specs: [
        { label: 'Weight Range', val: '5 to 50 lbs' },
        { label: 'Increments', val: '2.5 lb steps' },
        { label: 'Material', val: 'Laser-Cut Cast Iron' }
      ]
    },
    {
      id: 'p5',
      name: 'Spartan Pro 16oz Sparring Gloves',
      category: 'Combat',
      price: 95,
      oldPrice: 120,
      rating: 4.8,
      reviews: 94,
      tag: 'BESTSELLER',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=700&q=80'
      ],
      description: 'Handcrafted top-grain cowhide leather with 4-layer shock dispersing foam and extra wide hook-and-loop wrist stabilizers.',
      sizes: ['12 oz', '14 oz', '16 oz'],
      specs: [
        { label: 'Padding', val: 'Quad-Layer EVA Foam' },
        { label: 'Closure', val: 'Hook & Loop 4" Strap' },
        { label: 'Material', val: '100% Genuine Leather' }
      ]
    },
    {
      id: 'p6',
      name: 'AeroBlade 98 Tour Pro Racket',
      category: 'Tennis',
      price: 210,
      oldPrice: 245,
      rating: 4.7,
      reviews: 88,
      tag: 'NEW',
      image: 'https://images.unsplash.com/photo-1617083934555-563d67b2d55c?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1617083934555-563d67b2d55c?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=700&q=80'
      ],
      description: 'Precision graphite frame with an aerodynamic beam design for extreme topspin, deep baseline drives, and volley control.',
      sizes: ['Grip 2 (4 1/4")', 'Grip 3 (4 3/8")', 'Grip 4 (4 1/2")'],
      specs: [
        { label: 'Head Size', val: '98 sq in' },
        { label: 'Weight', val: '305g Unstrung' },
        { label: 'Pattern', val: '16 x 19 Spin Matrix' }
      ]
    },
    {
      id: 'p7',
      name: 'Veloce Carbon Aero Road Helmet',
      category: 'Cycling',
      price: 135,
      oldPrice: 160,
      rating: 4.8,
      reviews: 76,
      tag: 'HOT',
      image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=700&q=80'
      ],
      description: 'Wind-tunnel perfected aero vents with integrated MIPS safety liner, magnetic Fidlock chinstrap, and ultra-light 220g profile.',
      sizes: ['S (51-55cm)', 'M (55-59cm)', 'L (59-63cm)'],
      specs: [
        { label: 'Safety', val: 'MIPS Evolve Core' },
        { label: 'Weight', val: '220g' },
        { label: 'Vents', val: '18 Aero-Flow Channels' }
      ]
    },
    {
      id: 'p8',
      name: 'VoltPulse Ultra GPS Sport Watch',
      category: 'Tech',
      price: 249,
      oldPrice: 299,
      rating: 4.9,
      reviews: 412,
      tag: 'BESTSELLER',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80',
        'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=700&q=80'
      ],
      description: 'Multi-sport GPS tracking with 18-day battery life, VO2 Max, real-time stamina meter, heart rate variability, and titanium bezel.',
      sizes: ['42mm Classic', '46mm Rugged Titanium'],
      specs: [
        { label: 'Battery', val: '18 Days (45h GPS)' },
        { label: 'Water Rating', val: '5 ATM (50m)' },
        { label: 'Display', val: 'AMOLED Always-On' }
      ]
    },
    {
      id: 'p9',
      name: 'Striker Pro Seamless Match Football',
      category: 'Football',
      price: 75,
      oldPrice: 90,
      rating: 4.7,
      reviews: 150,
      tag: 'FIFA QUALITY',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=80',
      gallery: ['https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=80'],
      description: 'Thermally bonded 12-panel seamless PU casing for accurate trajectory and zero water intake during heavy rain matches.',
      sizes: ['Size 4 (Youth)', 'Size 5 (Official Pro)'],
      specs: [
        { label: 'Construction', val: 'Thermal Bonded' },
        { label: 'Bladder', val: 'Latex High-Retention' },
        { label: 'Standard', val: 'FIFA Quality Pro' }
      ]
    },
    {
      id: 'p10',
      name: 'CourtMaster Indoor/Outdoor Basketball',
      category: 'Basketball',
      price: 65,
      oldPrice: 80,
      rating: 4.6,
      reviews: 115,
      tag: 'POPULAR',
      image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=700&q=80',
      gallery: ['https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=700&q=80'],
      description: 'High-grade composite leather with deep moisture-wicking channels for complete finger control on both concrete and court.',
      sizes: ['Size 6 (28.5")', 'Size 7 (29.5" Official)'],
      specs: [
        { label: 'Cover', val: 'Moisture Composite Leather' },
        { label: 'Channels', val: 'Pebbled Deep Groove' },
        { label: 'Surface', val: 'Indoor / Outdoor' }
      ]
    },
    {
      id: 'p11',
      name: 'Tempo Elite Split Running Shorts',
      category: 'Running',
      price: 48,
      oldPrice: 60,
      rating: 4.7,
      reviews: 89,
      tag: '20% OFF',
      image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=700&q=80',
      gallery: ['https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=700&q=80'],
      description: 'Featherlight 3-inch split inseam with a zero-bounce sweatproof phone pocket and laser-perforated airflow zones.',
      sizes: ['S', 'M', 'L', 'XL'],
      specs: [
        { label: 'Inseam', val: '3 inches' },
        { label: 'Liner', val: 'Anti-Chafe Compression' },
        { label: 'Storage', val: 'Back Zipper Phone Pocket' }
      ]
    },
    {
      id: 'p12',
      name: 'Olympic Competition Barbell 20KG',
      category: 'Fitness',
      price: 260,
      oldPrice: 310,
      rating: 4.9,
      reviews: 98,
      tag: 'PRO GRADE',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=700&q=80',
      gallery: ['https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=700&q=80'],
      description: 'Precision 190,000 PSI spring steel bar with 8 high-speed needle bearings for ultra smooth spin on clean and jerks.',
      sizes: ['15KG (25mm Women)', '20KG (28mm Men)'],
      specs: [
        { label: 'Tensile Strength', val: '190,000 PSI' },
        { label: 'Bearings', val: '8 Needle Bearings' },
        { label: 'Coating', val: 'Hard Matte Chrome' }
      ]
    },
    {
      id: 'p13',
      name: 'Viper MMA Dual-Shield Shin Guards',
      category: 'Combat',
      price: 72,
      oldPrice: 85,
      rating: 4.8,
      reviews: 64,
      tag: 'HOT',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=700&q=80',
      gallery: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=700&q=80'],
      description: 'High-density curved foam inserts protecting the tibial bone and instep during heavy sparring kicks and drills.',
      sizes: ['Medium', 'Large', 'X-Large'],
      specs: [
        { label: 'Padding', val: 'Dual-Layer Gel-Infused' },
        { label: 'Lining', val: 'Moisture-Wicking Neoprene' },
        { label: 'Straps', val: 'Dual Lock Elastic Loop' }
      ]
    },
    {
      id: 'p14',
      name: 'Pro Court Hydro Padel Racket',
      category: 'Tennis',
      price: 185,
      oldPrice: 220,
      rating: 4.8,
      reviews: 52,
      tag: 'NEW',
      image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=700&q=80',
      gallery: ['https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=700&q=80'],
      description: '3K carbon woven face paired with a soft EVA memory core delivering maximum sweet spot forgiveness and crushing smash power.',
      sizes: ['Standard 365g'],
      specs: [
        { label: 'Shape', val: 'Teardrop Power Balance' },
        { label: 'Face', val: '3K Carbon Fiber' },
        { label: 'Core', val: 'EVA Soft Density' }
      ]
    },
    {
      id: 'p15',
      name: 'AeroSprint BOA Carbon Cycling Shoes',
      category: 'Cycling',
      price: 175,
      oldPrice: 210,
      rating: 4.7,
      reviews: 83,
      tag: 'TOP RATED',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=700&q=80',
      gallery: ['https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=700&q=80'],
      description: 'Full unidirectional carbon sole with index stiffness 12.0 and dual BOA Li2 dials for zero pressure point comfort.',
      sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'],
      specs: [
        { label: 'Sole', val: 'UD Carbon Fiber' },
        { label: 'Closure', val: 'Dual BOA Li2 Dials' },
        { label: 'Cleat Fit', val: '3-Bolt Look/SPD-SL' }
      ]
    },
    {
      id: 'p16',
      name: 'PeakShield 50L Waterproof Duffel',
      category: 'Tech',
      price: 98,
      oldPrice: 125,
      rating: 4.8,
      reviews: 190,
      tag: 'BESTSELLER',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=700&q=80',
      gallery: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=700&q=80'],
      description: 'Heavy duty 1000D TPU waterproof armor with an isolated ventilated shoe locker, padded backpack straps, and gear loops.',
      sizes: ['50 Liters Capacity'],
      specs: [
        { label: 'Material', val: '1000D TPU Waterproof' },
        { label: 'Shoe Locker', val: 'Ventilated Anti-Odor' },
        { label: 'Straps', val: 'Convertible Backpack' }
      ]
    }
  ];

  // State Management
  let cart = JSON.parse(localStorage.getItem('volt_cart')) || [
    { id: 'p1', size: 'US 10', qty: 1 },
    { id: 'p8', size: '46mm Rugged Titanium', qty: 1 }
  ];
  let wishlist = JSON.parse(localStorage.getItem('volt_wishlist')) || ['p1', 'p3', 'p4'];
  let currentCategory = 'All';
  let currentSort = 'featured';
  let activeCoupon = null;
  let activeQuickProduct = null;
  let selectedQuickSize = null;
  let quickQty = 1;
  let currentUser = JSON.parse(localStorage.getItem('volt_user')) || null;

  // Coupons database
  const coupons = {
    'VOLT10': { discount: 0.10, label: '10% OFF Welcome Bonus' },
    'ATHLETE20': { discount: 0.20, label: '20% Pro Drop Discount' },
    'FREESHIP': { freeShipping: true, label: 'Free Express Shipping' }
  };

  // DOM Elements
  const productGrid = document.getElementById('productGrid');
  const cartCountEl = document.getElementById('cartCount');
  const wishCountEl = document.getElementById('wishCount');
  const mainHeader = document.getElementById('main-header');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  // Initialize
  window.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    initScrollAnimations();
    initCounters();
    initParallax3D();
    initEventListeners();
    updateAuthUI();
  });

  // Sticky Header & Scroll Top logic
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }

    if (window.scrollY > 350) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Render Product Cards
  function renderProducts() {
    let filtered = productsData.filter(p => currentCategory === 'All' || p.category.toLowerCase() === currentCategory.toLowerCase());

    if (currentSort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    productGrid.innerHTML = filtered.map(p => {
      const isWish = wishlist.includes(p.id);
      return `
        <div class="pcard reveal active">
          <div class="tag ${p.tag.includes('OFF') ? 'discount' : ''}">${p.tag}</div>
          <button class="wish ${isWish ? 'active' : ''}" onclick="toggleWishlist('${p.id}')" aria-label="Add to wishlist">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          </button>
          <div class="pimg" onclick="openQuickView('${p.id}')">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="quick-view-overlay">
              <span class="quick-view-badge">Quick View</span>
            </div>
          </div>
          <div class="pinfo">
            <span class="cat">${p.category}</span>
            <h3 onclick="openQuickView('${p.id}')">${p.name}</h3>
            <div class="stars">
              ${renderStars(p.rating)}
              <span>${p.rating} (${p.reviews})</span>
            </div>
            <div class="price-row">
              <div class="price">
                ${p.oldPrice ? `<small>$${p.oldPrice}</small>` : ''}
                $${p.price}
              </div>
              <button class="addbtn" onclick="addToCart('${p.id}', '${p.sizes[0]}', 1)" aria-label="Add to cart" title="Quick Add">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderStars(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        starsHtml += `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4.5L6 21l1.5-7.5L2 9h7z"/></svg>`;
      } else {
        starsHtml += `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4.5L6 21l1.5-7.5L2 9h7z"/></svg>`;
      }
    }
    return starsHtml;
  }

  // Filter and Sorting
  function filterBySport(category) {
    currentCategory = category;
    document.querySelectorAll('.filter-pill').forEach(pill => {
      if (pill.dataset.category.toLowerCase() === category.toLowerCase() || (category === 'All' && pill.dataset.category === 'All')) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    renderProducts();

    // Smooth scroll to product grid if triggered from elsewhere
    const bs = document.getElementById('bestsellers');
    if (bs) {
      bs.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleSortChange() {
    currentSort = document.getElementById('sortSelect').value;
    renderProducts();
  }

  // Wishlist Handling
  function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    const prod = productsData.find(p => p.id === productId);
    if (idx > -1) {
      wishlist.splice(idx, 1);
      showToast(`Removed "${prod.name}" from saved gear.`, 'Wishlist Updated');
    } else {
      wishlist.push(productId);
      showToast(`Saved "${prod.name}" to your wishlist!`, 'Wishlist Saved');
    }
    localStorage.setItem('volt_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts();
  }

  function updateWishlistUI() {
    wishCountEl.innerText = wishlist.length;
    wishCountEl.classList.add('bump');
    setTimeout(() => wishCountEl.classList.remove('bump'), 500);

    const container = document.getElementById('wishlistItemsContainer');
    const totalCountEl = document.getElementById('wishTotalItemsCount');
    totalCountEl.innerText = wishlist.length;

    if (wishlist.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
          <h4>Your Wishlist is Empty</h4>
          <p style="font-size:12.5px;margin-top:6px;">Tap the heart icon on any gear to save items for future training sessions.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = wishlist.map(id => {
      const p = productsData.find(item => item.id === id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <div class="cart-item-img" onclick="openQuickView('${p.id}')">
            <img src="${p.image}" alt="${p.name}">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-remove" onclick="toggleWishlist('${p.id}')" title="Remove">&times;</div>
            <h4 onclick="openQuickView('${p.id}')">${p.name}</h4>
            <div class="item-meta">${p.category} • In Stock</div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;">
              <div class="cart-item-price">$${p.price}</div>
              <button class="btn btn-solid btn-sm" onclick="addToCart('${p.id}', '${p.sizes[0]}', 1); closeWishlist();">Add to Bag</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function moveAllWishlistToCart() {
    if (wishlist.length === 0) return;
    wishlist.forEach(id => {
      const p = productsData.find(item => item.id === id);
      if (p) {
        addToCart(p.id, p.sizes[0], 1, false);
      }
    });
    wishlist = [];
    localStorage.setItem('volt_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts();
    closeWishlist();
    openCart();
    showToast('All saved gear added to your bag!', 'Transferred to Bag');
  }

  // Cart Handling
  function addToCart(productId, size, qty = 1, shouldOpenCart = true) {
    const prod = productsData.find(p => p.id === productId);
    if (!prod) return;

    const existingIndex = cart.findIndex(item => item.id === productId && item.size === size);
    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({ id: productId, size: size || prod.sizes[0], qty: qty });
    }

    localStorage.setItem('volt_cart', JSON.stringify(cart));
    updateCartUI();

    showToast(`Added ${qty}x "${prod.name}" (${size}) to your bag.`, 'Added to Bag');

    if (shouldOpenCart) {
      openCart();
    }
  }

  function adjustCartQty(index, delta) {
    if (!cart[index]) return;
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    localStorage.setItem('volt_cart', JSON.stringify(cart));
    updateCartUI();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('volt_cart', JSON.stringify(cart));
    updateCartUI();
    showToast('Item removed from your bag.', 'Cart Updated');
  }

  function updateCartUI() {
    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    cartCountEl.innerText = totalCount;
    cartCountEl.classList.add('bump');
    setTimeout(() => cartCountEl.classList.remove('bump'), 500);

    document.getElementById('cartTotalItemsCount').innerText = totalCount;
    const container = document.getElementById('cartItemsContainer');

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="cart-empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
          <h4>Your Bag is Empty</h4>
          <p style="font-size:12.5px;margin-top:6px;">Equip yourself with best-in-class gear.</p>
          <button class="btn btn-solid btn-sm" style="margin-top:16px;" onclick="closeCart();filterBySport('All');">Explore Gear</button>
        </div>
      `;
      document.getElementById('cartSubtotal').innerText = '$0.00';
      document.getElementById('cartGrandTotal').innerText = '$0.00';
      document.getElementById('cartShipping').innerText = '$0.00';
      document.getElementById('shippingMessage').innerText = 'Add $99.00 more for FREE Express Shipping!';
      document.getElementById('shippingProgressBar').style.width = '0%';
      return;
    }

    let subtotal = 0;
    container.innerHTML = cart.map((item, idx) => {
      const p = productsData.find(prod => prod.id === item.id);
      if (!p) return '';
      const lineTotal = p.price * item.qty;
      subtotal += lineTotal;
      return `
        <div class="cart-item">
          <div class="cart-item-img" onclick="openQuickView('${p.id}')">
            <img src="${p.image}" alt="${p.name}">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-remove" onclick="removeFromCart(${idx})" title="Remove item">&times;</div>
            <h4 onclick="openQuickView('${p.id}')">${p.name}</h4>
            <div class="item-meta">Size: ${item.size} • $${p.price} each</div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;">
              <div class="qty-stepper" style="transform:scale(0.85);transform-origin:left;">
                <button onclick="adjustCartQty(${idx}, -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="adjustCartQty(${idx}, 1)">+</button>
              </div>
              <div class="cart-item-price">$${lineTotal.toFixed(2)}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Shipping calculations
    const freeShippingThreshold = 99.00;
    const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
    document.getElementById('shippingProgressBar').style.width = `${shippingProgress}%`;

    let shippingCost = subtotal >= freeShippingThreshold ? 0 : 9.99;
    if (activeCoupon && activeCoupon.freeShipping) {
      shippingCost = 0;
    }

    if (subtotal >= freeShippingThreshold) {
      document.getElementById('shippingMessage').innerHTML = '🎉 <strong style="color:var(--lime)">Free Express Shipping Unlocked!</strong>';
      document.getElementById('cartShipping').innerHTML = '<span style="color:var(--lime)">FREE</span>';
    } else {
      const remaining = (freeShippingThreshold - subtotal).toFixed(2);
      document.getElementById('shippingMessage').innerHTML = `Add <strong>$${remaining}</strong> more for FREE Express Shipping!`;
      document.getElementById('cartShipping').innerText = `$${shippingCost.toFixed(2)}`;
    }

    let discount = 0;
    if (activeCoupon && activeCoupon.discount) {
      discount = subtotal * activeCoupon.discount;
      document.getElementById('discountLine').style.display = 'flex';
      document.getElementById('cartDiscount').innerText = `-$${discount.toFixed(2)}`;
    } else {
      document.getElementById('discountLine').style.display = 'none';
    }

    const grandTotal = Math.max(0, subtotal - discount + shippingCost);
    document.getElementById('cartSubtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('cartGrandTotal').innerText = `$${grandTotal.toFixed(2)}`;
  }

  function applyCoupon() {
    const input = document.getElementById('couponInput');
    const code = input.value.trim().toUpperCase();
    if (!code) return;

    if (coupons[code]) {
      activeCoupon = coupons[code];
      document.getElementById('couponAppliedBadge').style.display = 'block';
      document.getElementById('couponName').innerText = code;
      document.getElementById('couponDiscountText').innerText = activeCoupon.label;
      updateCartUI();
      showToast(`Coupon "${code}" applied successfully!`, 'Discount Added');
    } else {
      showToast('Invalid coupon code. Try "VOLT10" or "ATHLETE20"', 'Promo Error', 'danger');
    }
  }

  // Quick View Modal
  function openQuickView(productId) {
    const prod = productsData.find(p => p.id === productId);
    if (!prod) return;

    activeQuickProduct = prod;
    selectedQuickSize = prod.sizes[0];
    quickQty = 1;

    document.getElementById('quickModalCategory').innerHTML = `<span class="eyebrow-icon">⚡</span> ${prod.category}`;
    document.getElementById('quickModalTitle').innerText = prod.name;
    document.getElementById('quickModalDesc').innerText = prod.description;
    document.getElementById('quickModalPrice').innerText = `$${prod.price}`;
    document.getElementById('quickModalOldPrice').innerText = prod.oldPrice ? `$${prod.oldPrice}` : '';
    document.getElementById('quickModalBadge').innerText = prod.tag;
    document.getElementById('quickModalQty').innerText = quickQty;
    document.getElementById('quickModalMainImg').src = prod.image;

    // Stars
    document.getElementById('quickModalStars').innerHTML = `
      ${renderStars(prod.rating)}
      <span>${prod.rating} (${prod.reviews} Athlete Reviews)</span>
    `;

    // Gallery Thumbs
    const thumbsContainer = document.getElementById('quickModalThumbs');
    thumbsContainer.innerHTML = prod.gallery.map((img, idx) => `
      <div class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="switchQuickThumb('${img}', this)">
        <img src="${img}" alt="Thumbnail">
      </div>
    `).join('');

    // Specs
    document.getElementById('quickModalSpecs').innerHTML = prod.specs.map(s => `
      <div><span>${s.label}</span><strong>${s.val}</strong></div>
    `).join('');

    // Sizes
    document.getElementById('quickModalSizes').innerHTML = prod.sizes.map((s, idx) => `
      <button class="size-btn ${idx === 0 ? 'active' : ''}" onclick="selectQuickSize('${s}', this)">${s}</button>
    `).join('');

    document.getElementById('quickModalBackdrop').classList.add('open');
  }

  function closeQuickView() {
    document.getElementById('quickModalBackdrop').classList.remove('open');
  }

  function switchQuickThumb(imgUrl, thumbEl) {
    document.getElementById('quickModalMainImg').src = imgUrl;
    document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
    thumbEl.classList.add('active');
  }

  function selectQuickSize(size, btnEl) {
    selectedQuickSize = size;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');
  }

  function adjustQuickQty(delta) {
    quickQty = Math.max(1, quickQty + delta);
    document.getElementById('quickModalQty').innerText = quickQty;
  }

  function addQuickViewToCart() {
    if (!activeQuickProduct) return;
    addToCart(activeQuickProduct.id, selectedQuickSize, quickQty);
    closeQuickView();
  }

  function buyNowFromQuickView() {
    if (!activeQuickProduct) return;
    addToCart(activeQuickProduct.id, selectedQuickSize, quickQty, false);
    closeQuickView();
    openCheckout();
  }

  // Drawers Open / Close
  function openCart() {
    document.getElementById('cartOverlay').classList.add('open');
    document.getElementById('cartDrawer').classList.add('open');
  }

  function closeCart() {
    document.getElementById('cartOverlay').classList.remove('open');
    document.getElementById('cartDrawer').classList.remove('open');
  }

  function openWishlist() {
    document.getElementById('wishlistOverlay').classList.add('open');
    document.getElementById('wishlistDrawer').classList.add('open');
  }

  function closeWishlist() {
    document.getElementById('wishlistOverlay').classList.remove('open');
    document.getElementById('wishlistDrawer').classList.remove('open');
  }

  // Search Spotlight Modal
  function openSearchModal() {
    document.getElementById('searchModal').classList.add('open');
    const input = document.getElementById('searchInput');
    setTimeout(() => input.focus(), 150);
    handleLiveSearch(input.value);
  }

  function closeSearchModal() {
    document.getElementById('searchModal').classList.remove('open');
  }

  function fillSearch(term) {
    const input = document.getElementById('searchInput');
    input.value = term;
    handleLiveSearch(term);
  }

  function handleLiveSearch(query) {
    const container = document.getElementById('searchResultsContainer');
    const q = query.trim().toLowerCase();

    let results = productsData;
    if (q) {
      results = productsData.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    if (results.length === 0) {
      container.innerHTML = `
        <div style="text-align:center;padding:30px 10px;color:var(--grey);">
          <p>No tournament gear found matching "<strong>${query}</strong>".</p>
          <span style="font-size:12px;color:var(--grey-dim);">Try searching for cleats, dumbbells, running shoes, or tennis.</span>
        </div>
      `;
      return;
    }

    container.innerHTML = results.slice(0, 5).map(p => `
      <div class="search-result-item" onclick="openQuickView('${p.id}'); closeSearchModal();">
        <img src="${p.image}" alt="${p.name}">
        <div style="flex:1;">
          <h4 style="font-size:13.5px;font-weight:700;">${p.name}</h4>
          <span style="font-size:11.5px;color:var(--grey-dim);">${p.category} • ${p.rating} ★</span>
        </div>
        <div style="font-weight:800;color:var(--lime);font-size:14px;">$${p.price}</div>
      </div>
    `).join('');
  }

  // User Authentication & Profile
  function openAuthModal() {
    document.getElementById('authModal').classList.add('open');
  }

  function closeAuthModal() {
    document.getElementById('authModal').classList.remove('open');
  }

  function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('profileView').style.display = 'none';

    if (tab === 'login') {
      document.getElementById('tabLogin').classList.add('active');
      document.getElementById('loginForm').style.display = 'flex';
    } else if (tab === 'register') {
      document.getElementById('tabRegister').classList.add('active');
      document.getElementById('registerForm').style.display = 'flex';
    } else if (tab === 'profile') {
      document.getElementById('tabProfile').classList.add('active');
      document.getElementById('profileView').style.display = 'block';
    }
  }

  function handleAuthLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    currentUser = {
      name: email.split('@')[0].toUpperCase() || 'PRO ATHLETE',
      email: email,
      points: 1250
    };
    localStorage.setItem('volt_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeAuthModal();
    showToast(`Welcome back, ${currentUser.name}!`, 'Athlete Signed In');
  }

  function demoLogin() {
    currentUser = {
      name: 'MARCUS VANCE',
      email: 'marcus@voltgear.com',
      points: 1850
    };
    localStorage.setItem('volt_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeAuthModal();
    showToast('Signed in as Pro Athlete Marcus Vance!', 'Demo Signed In');
  }

  function handleAuthRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    currentUser = { name, email, points: 500 };
    localStorage.setItem('volt_user', JSON.stringify(currentUser));
    updateAuthUI();
    closeAuthModal();
    showToast(`Account created! 500 bonus points unlocked.`, 'Registration Complete');
  }

  function handleSignOut() {
    currentUser = null;
    localStorage.removeItem('volt_user');
    updateAuthUI();
    switchAuthTab('login');
    closeAuthModal();
    showToast('You have signed out.', 'Signed Out');
  }

  function updateAuthUI() {
    if (currentUser) {
      document.getElementById('tabProfile').style.display = 'block';
      document.getElementById('tabLogin').style.display = 'none';
      document.getElementById('tabRegister').style.display = 'none';
      document.getElementById('profileName').innerText = currentUser.name;
      document.getElementById('profileEmail').innerText = currentUser.email;
      document.getElementById('profileAvatar').innerText = currentUser.name.slice(0, 2);
      switchAuthTab('profile');
    } else {
      document.getElementById('tabProfile').style.display = 'none';
      document.getElementById('tabLogin').style.display = 'block';
      document.getElementById('tabRegister').style.display = 'block';
    }
  }

  // Checkout Flow
  function openCheckout() {
    if (cart.length === 0) {
      showToast('Your bag is empty! Add gear before checkout.', 'Bag Empty', 'danger');
      return;
    }
    closeCart();
    goToCheckoutStep(1);
    renderCheckoutSummary();
    document.getElementById('orderSuccessScreen').style.display = 'none';
    document.getElementById('checkoutStepContainer').style.display = 'block';
    document.getElementById('checkoutModal').classList.add('open');
  }

  function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('open');
  }

  function goToCheckoutStep(step) {
    document.querySelectorAll('.checkout-step-pill').forEach((pill, idx) => {
      if (idx + 1 === step) pill.classList.add('active');
      else pill.classList.remove('active');
    });

    document.getElementById('checkoutStep1').style.display = step === 1 ? 'block' : 'none';
    document.getElementById('checkoutStep2').style.display = step === 2 ? 'block' : 'none';
    document.getElementById('checkoutStep3').style.display = step === 3 ? 'block' : 'none';
  }

  function renderCheckoutSummary() {
    const list = document.getElementById('checkoutSummaryList');
    let subtotal = 0;
    list.innerHTML = cart.map(item => {
      const p = productsData.find(prod => prod.id === item.id);
      if (!p) return '';
      const lineTotal = p.price * item.qty;
      subtotal += lineTotal;
      return `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--line);font-size:12.5px;">
          <span>${item.qty}x ${p.name} (${item.size})</span>
          <strong>$${lineTotal.toFixed(2)}</strong>
        </div>
      `;
    }).join('');

    let discount = (activeCoupon && activeCoupon.discount) ? subtotal * activeCoupon.discount : 0;
    let shipping = (subtotal >= 99 || (activeCoupon && activeCoupon.freeShipping)) ? 0 : 9.99;
    let total = subtotal - discount + shipping;

    document.getElementById('chkSubtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('chkShipping').innerText = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('chkDiscount').innerText = `-$${discount.toFixed(2)}`;
    document.getElementById('chkTotal').innerText = `$${total.toFixed(2)}`;
  }

  function handlePlaceOrder(e) {
    e.preventDefault();
    const btn = document.getElementById('placeOrderBtn');
    btn.innerHTML = '⚡ Authorizing Payment...';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = '⚡ Authorize &amp; Pay';
      btn.disabled = false;

      const randomOrderId = 'VOLT-' + Math.floor(10000 + Math.random() * 90000);
      document.getElementById('successOrderId').innerText = randomOrderId;
      document.getElementById('trackOrderIdInput').value = randomOrderId;

      // Clear cart
      cart = [];
      localStorage.setItem('volt_cart', JSON.stringify(cart));
      updateCartUI();

      // Show Success Screen
      document.getElementById('checkoutStepContainer').style.display = 'none';
      document.getElementById('orderSuccessScreen').style.display = 'block';

      showToast(`Order ${randomOrderId} confirmed!`, 'Payment Successful');
    }, 1200);
  }

  // Order Tracker Modal
  function openTrackerModal() {
    document.getElementById('trackerModal').classList.add('open');
  }

  function closeTrackerModal() {
    document.getElementById('trackerModal').classList.remove('open');
  }

  function searchTrackOrder() {
    const id = document.getElementById('trackOrderIdInput').value.trim();
    if (!id) return;
    showToast(`Fetching latest telemetry for ${id}...`, 'Tracker Online');
  }

  // Size Guide Modal
  function openSizeGuide() {
    document.getElementById('sizeGuideModal').classList.add('open');
  }

  function closeSizeGuide() {
    document.getElementById('sizeGuideModal').classList.remove('open');
  }

  // Newsletter Submit
  function handleNewsletter(e) {
    e.preventDefault();
    const email = document.getElementById('newsEmail').value;
    showToast(`Welcome to the squad, ${email}! Check your inbox for 10% OFF.`, 'VIP Squad Joined');
    document.getElementById('newsEmail').value = '';
  }

  // Toast Notification Engine
  function showToast(message, title = 'VOLT Notification', type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon ${type === 'danger' ? 'danger' : ''}">⚡</div>
      <div>
        <div class="toast-title">${title}</div>
        <div class="toast-sub">${message}</div>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 350);
    }, 3500);
  }

  // Number Counter Animation
  function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute('data-target');
          let count = 0;
          const speed = target / 50;
          const update = () => {
            count += speed;
            if (count < target) {
              entry.target.innerText = Math.ceil(count).toLocaleString();
              requestAnimationFrame(update);
            } else {
              entry.target.innerText = target.toLocaleString();
            }
          };
          update();
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  // Scroll Reveal Observer
  function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal, .reveal-scale');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  }

  // 3D Parallax Tilt Effect on Hero Card
  function initParallax3D() {
    const card = document.getElementById('hero3dCard');
    if (!card) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotX = -(y / rect.height) * 16;
      const rotY = (x / rect.width) * 16;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // Event Listeners Wire-up
  function initEventListeners() {
    // Header actions
    document.getElementById('openCartBtn').addEventListener('click', openCart);
    document.getElementById('openWishlistBtn').addEventListener('click', openWishlist);
    document.getElementById('openSearchBtn').addEventListener('click', openSearchModal);
    document.getElementById('openAuthBtn').addEventListener('click', openAuthModal);

    // Mobile menu
    const mobileMenu = document.getElementById('mobileMenu');
    document.getElementById('burgerBtn').addEventListener('click', () => mobileMenu.classList.add('open'));
    document.getElementById('mobileClose').addEventListener('click', () => mobileMenu.classList.remove('open'));
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });

    // Copy Promo code on top announcement
    document.getElementById('copyCode').addEventListener('click', () => {
      navigator.clipboard.writeText('VOLT10');
      showToast('Coupon code "VOLT10" copied to clipboard!', 'Promo Copied');
    });

    // Keyboard Shortcuts (Ctrl/Cmd + K for Search, Esc to close modals)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearchModal();
      }
      if (e.key === 'Escape') {
        closeQuickView();
        closeCart();
        closeWishlist();
        closeSearchModal();
        closeAuthModal();
        closeCheckout();
        closeTrackerModal();
        closeSizeGuide();
      }
    });
  }
