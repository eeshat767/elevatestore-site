// elevatestore scripts - handles products, cart, categories and checkout for static pages
const PRODUCTS = [
  {
    id: 'aero-runner',
    name: 'Aero Runner',
    category: 'Sneakers',
    gender: 'Men',
    price: 240,
    comparePrice: 290,
    rating: 4.9,
    reviews: 128,
    badge: 'Best seller',
    colors: ['#a8927c', '#111111', '#f5efe7'],
    sizes: [6, 7, 8, 9, 10, 11],
    collection: 'Street Collection',
    image: 'images/m-snk-01.jpg',
    gallery: ['images/m-snk-01.jpg', 'images/m-boot-01.jpg', 'images/u-sand-01.jpg', 'images/f-snk-01.jpg', 'images/c-sport-01.jpg'],
    description: 'Engineered for daily movement with responsive cushioning, breathable knit and a sculpted silhouette designed for city pace.',
    material: 'Engineered mesh, suede, rubber outsole',
    features: ['Responsive midsole', 'Breathable knit upper', 'Street-ready profile'],
    stock: true,
    new: true,
    discount: 17
  },
  {
    id: 'urban-01',
    name: 'Urban 01',
    category: 'Sneakers',
    gender: 'Women',
    price: 230,
    comparePrice: 270,
    rating: 4.8,
    reviews: 96,
    badge: 'New',
    colors: ['#d7c7b7', '#8b7e6f', '#111111'],
    sizes: [5, 6, 7, 8, 9],
    collection: 'Everyday Essentials',
    image: 'images/f-snk-01.jpg',
    gallery: ['images/f-snk-01.jpg', 'images/f-formal-01.jpg', 'images/u-sand-01.jpg', 'images/m-snk-01.jpg', 'images/c-sport-01.jpg'],
    description: 'A refined everyday sneaker with soft cushioning, a flexible knit upper and an understated design that effortlessly transitions from day to night.',
    material: 'Knit textile, foam midsole, rubber traction',
    features: ['Flexible fit', 'Everyday comfort', 'Premium detailing'],
    stock: true,
    new: true,
    discount: 15
  },
  {
    id: 'motion-knit',
    name: 'Motion Knit',
    category: 'Sneakers',
    gender: 'Unisex',
    price: 260,
    comparePrice: 310,
    rating: 5,
    reviews: 74,
    badge: 'New',
    colors: ['#c9b59b', '#111111', '#d8d7d3'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    collection: 'Premium Collection',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A contemporary knit sneaker combining tonal elegance, cushioning and a flexible profile for movement with confidence.',
    material: 'Textured knit, EVA foam, rubber outsole',
    features: ['Comfort-focused design', 'Lightweight structure', 'Modern silhouette'],
    stock: true,
    new: true,
    discount: 16
  },
  {
    id: 'street-form',
    name: 'Street Form',
    category: 'Sneakers',
    gender: 'Men',
    price: 220,
    comparePrice: 260,
    rating: 4.7,
    reviews: 88,
    badge: 'New',
    colors: ['#d1b184', '#111111', '#e1ddcf'],
    sizes: [7, 8, 9, 10, 11, 12],
    collection: 'Weekend',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Minimal yet expressive, built with a supportive sole and layered texture for a modern city-ready statement.',
    material: 'Leather upper, layered foam, contour sole',
    features: ['Supportive stride', 'City-ready finish', 'Durable construction'],
    stock: true,
    new: true,
    discount: 15
  },
  {
    id: 'verona-oxford',
    name: 'Verona Oxford',
    category: 'Formal',
    gender: 'Men',
    price: 310,
    comparePrice: 360,
    rating: 4.9,
    reviews: 52,
    badge: 'New',
    colors: ['#111111', '#bca38d', '#f3eee7'],
    sizes: [7, 8, 9, 10, 11],
    collection: 'Formal Edit',
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A refined leather oxford with a sharp toe and softened comfort interior for elevated work and evening styling.',
    material: 'Full-grain leather, cushioned insole',
    features: ['Sharp silhouette', 'Premium leather', 'All-day support'],
    stock: true,
    new: true,
    discount: 14
  },
  {
    id: 'milano-derby',
    name: 'Milano Derby',
    category: 'Formal',
    gender: 'Women',
    price: 290,
    comparePrice: 340,
    rating: 4.8,
    reviews: 61,
    badge: 'New',
    colors: ['#c0a487', '#111111', '#f1e4d0'],
    sizes: [5, 6, 7, 8, 9],
    collection: 'Formal Edit',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Elegant and modern, with tonal stitching and a forgiving underfoot feel crafted for polished, all-day dressing.',
    material: 'Italian leather, cushioned lining',
    features: ['Modern formal profile', 'Soft construction', 'Refined detailing'],
    stock: true,
    new: true,
    discount: 15
  },
  {
    id: 'coastline-slip-on',
    name: 'Coastline Slip-On',
    category: 'Casual',
    gender: 'Women',
    price: 180,
    comparePrice: 220,
    rating: 4.7,
    reviews: 102,
    badge: 'Chic',
    colors: ['#b89a7d', '#d5cdbc', '#111111'],
    sizes: [5, 6, 7, 8, 9],
    collection: 'Weekend',
    image: 'images/u-sand-01.jpg',
    gallery: ['images/u-sand-01.jpg', 'images/f-snk-01.jpg', 'images/f-formal-01.jpg', 'images/m-snk-01.jpg', 'images/c-sport-01.jpg'],
    description: 'An easy slip-on with polished texture and soft support for effortless transitions between work, lunch and after-hours.',
    material: 'Leatherette, cushioned outsole',
    features: ['Easy on, easy off', 'Lightweight comfort', 'Premium everyday finish'],
    stock: true,
    new: false,
    discount: 18
  },
  {
    id: 'terra-leather',
    name: 'Terra Leather',
    category: 'Casual',
    gender: 'Men',
    price: 210,
    comparePrice: 250,
    rating: 4.6,
    reviews: 67,
    badge: 'Everyday',
    colors: ['#847460', '#111111', '#f5f1ea'],
    sizes: [7, 8, 9, 10, 11, 12],
    collection: 'Everyday Essentials',
    image: 'images/m-boot-01.jpg',
    gallery: ['images/m-boot-01.jpg', 'images/m-snk-01.jpg', 'images/f-formal-01.jpg', 'images/u-sand-01.jpg', 'images/f-snk-01.jpg'],
    description: 'Built for city movement with durable leather finishes and a soft footbed that keeps things polished throughout the day.',
    material: 'Leather upper, EVA foam, rubber outsole',
    features: ['Day-long comfort', 'Built for movement', 'Minimal finish'],
    stock: true,
    new: false,
    discount: 16
  },
  {
    id: 'luna-heel',
    name: 'Luna Heel',
    category: 'Women',
    gender: 'Women',
    price: 330,
    comparePrice: 390,
    rating: 4.9,
    reviews: 42,
    badge: 'Signature',
    colors: ['#d9c8b4', '#111111', '#f4efe6'],
    sizes: [5, 6, 7, 8, 9],
    collection: 'Premium Collection',
    image: 'images/f-formal-01.jpg',
    gallery: ['images/f-formal-01.jpg', 'images/f-snk-01.jpg', 'images/u-sand-01.jpg', 'images/m-snk-01.jpg', 'images/m-boot-01.jpg'],
    description: 'A sculpted heel with elegant proportions and soft support, designed for elevated dressing and confident movement.',
    material: 'Smooth leather, cushioned arch, sculpted heel',
    features: ['Elevated profile', 'Supportive walk', 'Fashion-forward'],
    stock: true,
    new: true,
    discount: 15
  },
  {
    id: 'nova-ballet',
    name: 'Nova Ballet',
    category: 'Women',
    gender: 'Women',
    price: 210,
    comparePrice: 240,
    rating: 4.8,
    reviews: 58,
    badge: 'Popular',
    colors: ['#e3d3c1', '#111111', '#bca08a'],
    sizes: [5, 6, 7, 8, 9],
    collection: 'Street Collection',
    image: 'images/f-snk-01.jpg',
    gallery: ['images/f-snk-01.jpg', 'images/u-sand-01.jpg', 'images/f-formal-01.jpg', 'images/m-snk-01.jpg', 'images/c-sport-01.jpg'],
    description: 'Lightweight and softly structured with contemporary shaping and effortless comfort for everyday wear.',
    material: 'Soft textile, cushioned sole',
    features: ['Flexible feel', 'Low-profile design', 'Daily-ready comfort'],
    stock: true,
    new: true,
    discount: 13
  }
];

const currency = (value) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(value);

function getCart() {
  try { return JSON.parse(localStorage.getItem('elevate_cart') || '[]'); }
  catch { return []; }
}

function setCart(cart) {
  localStorage.setItem('elevate_cart', JSON.stringify(cart));
}

function getWishlist() {
  try { return JSON.parse(localStorage.getItem('elevate_wishlist') || '[]'); }
  catch { return []; }
}

function setWishlist(items) {
  localStorage.setItem('elevate_wishlist', JSON.stringify(items));
}

function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + Number(item.qty || 0), 0);
  document.querySelectorAll('.cart-count').forEach((el) => {
    el.textContent = total;
  });
}

function updateWishlistCount() {
  const wishlist = getWishlist();
  document.querySelectorAll('.wishlist-count').forEach((el) => {
    el.textContent = wishlist.length;
  });
}

function addToCart(productId, size = '8', color = 'Black', qty = 1) {
  const cart = getCart();
  const existingIndex = cart.findIndex((item) => item.id === productId && item.size === size && item.color === color);

  if (existingIndex >= 0) {
    cart[existingIndex].qty += Number(qty || 1);
  } else {
    cart.push({ id: productId, size, color, qty: Number(qty || 1) });
  }

  setCart(cart);
  updateCartCount();
  showToast('Added to cart');
}

function toggleWishlist(productId) {
  const list = getWishlist();
  const isPresent = list.includes(productId);
  const next = isPresent ? list.filter((id) => id !== productId) : [...list, productId];
  setWishlist(next);
  updateWishlistCount();
  document.querySelectorAll(`[data-wishlist-id="${productId}"]`).forEach((button) => {
    button.classList.toggle('active', !isPresent);
  });
}

function injectPageLoader() {
  const existing = document.getElementById('page-loader');
  if (existing) return;

  const loader = document.createElement('div');
  loader.id = 'page-loader';
  loader.className = 'page-loader';
  loader.innerHTML = '<div class="page-loader__brand"><span>elevate store</span></div>';
  document.body.appendChild(loader);

  window.setTimeout(() => {
    document.body.classList.add('is-ready');
    loader.classList.add('hidden');
  }, 520);
}

function applyRevealAnimations() {
  const targets = document.querySelectorAll(
    '.hero-copy, .hero-visual, .section-header, .category-card, .product-card, .benefit-card, .review-card, .instagram-item, .collection-promo, .newsletter, .contact-card, .info-panel, .story-visual, .about-visual, .page-hero-inner, .empty-state, .auth-visual, .auth-panel'
  );

  targets.forEach((element, index) => {
    if (!element.classList.contains('reveal')) {
      element.classList.add('reveal');
      element.style.transitionDelay = `${Math.min(index * 55, 240)}ms`;
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -2% 0px' });

  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
}

function initParallax() {
  const items = document.querySelectorAll('[data-parallax], .hero-photo img, .editorial-visual img, .collection-promo img, .story-visual img');
  if (!items.length) return;

  const update = () => {
    const scrollY = window.scrollY;
    items.forEach((item) => {
      const amount = Math.min(18, Math.max(-18, scrollY * 0.06));
      item.style.transform = `translate3d(0, ${amount}px, 0) scale(1.03)`;
    });
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}

function initSearchOverlay() {
  const trigger = document.querySelector('[data-search-open]');
  if (!trigger) return;

  trigger.addEventListener('click', () => {
    const overlay = document.getElementById('search-overlay');
    if (overlay) {
      overlay.classList.add('open');
      return;
    }
    initSearchOverlay();
  });
}

function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.style.position = 'fixed';
    toast.style.right = '24px';
    toast.style.bottom = '24px';
    toast.style.zIndex = '999';
    toast.style.background = '#111';
    toast.style.color = '#fff';
    toast.style.padding = '12px 18px';
    toast.style.borderRadius = '999px';
    toast.style.fontSize = '12px';
    toast.style.letterSpacing = '0.1em';
    toast.style.textTransform = 'uppercase';
    toast.style.boxShadow = '0 20px 30px rgba(17,17,17,0.2)';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    toast.style.transform = 'translateY(12px)';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
  }, 1800);
}

function addCartAnimation(productId) {
  const button = document.querySelector(`[data-product-id="${productId}"]`);
  if (!button) return;
  button.classList.add('is-adding');
  setTimeout(() => button.classList.remove('is-adding'), 350);
}

function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id) || PRODUCTS[0];
}

function renderProductCard(product) {
  const wishlist = getWishlist();
  const isWishlisted = wishlist.includes(product.id);
  return `
    <article class="product-card">
      <div class="product-media">
        ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ''}
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" data-wishlist-id="${product.id}" aria-label="Add to wishlist">
          ♥
        </button>
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <div class="product-meta">
          <span>${product.category}</span>
          <span>${product.rating} ★</span>
        </div>
        <h3>${product.name}</h3>
        <div class="product-price-row">
          <span class="price">${currency(product.price)}</span>
          ${product.comparePrice ? `<span class="compare-price">${currency(product.comparePrice)}</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary js-add-cart" data-product-id="${product.id}">Add to cart</button>
          <a class="quick-link" href="product.html?id=${product.id}" aria-label="View ${product.name}">↗</a>
        </div>
      </div>
    </article>
  `;
}

function renderGrid(selector, items) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = items.map(renderProductCard).join('');

  el.querySelectorAll('.js-add-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.productId;
      const product = getProductById(id);
      addToCart(id, product.sizes[0], product.colors[0].toString(), 1);
    });
  });

  el.querySelectorAll('[data-wishlist-id]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      toggleWishlist(button.dataset.wishlistId);
    });
  });
}

function initHeader() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const searchOpen = document.querySelector('[data-search-open]');

  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(nav.classList.contains('open')));
    });
  }

  if (searchOpen) {
    searchOpen.addEventListener('click', () => {
      const overlay = document.getElementById('search-overlay');
      if (overlay) {
        overlay.classList.add('open');
        return;
      }
      initSearchOverlay();
    });
  }
}

function initHomePage() {
  renderGrid('#best-sellers-grid', PRODUCTS.slice(0, 4));
  renderGrid('#new-arrivals-grid', PRODUCTS.slice(2, 6));
}

function initCatalogPage() {
  const selected = new URLSearchParams(window.location.search);
  const query = selected.get('q');
  let filtered = PRODUCTS;

  if (query) {
    filtered = PRODUCTS.filter((product) => `${product.name} ${product.category} ${product.collection}`.toLowerCase().includes(query.toLowerCase()));
  }

  renderGrid('#catalog-grid', filtered);

  const filterForm = document.querySelector('#catalog-filters');
  const sortSelect = document.querySelector('#sort-select');

  if (filterForm && sortSelect) {
    filterForm.addEventListener('change', () => {
      const type = filterForm.querySelector('select[name="type"]').value;
      const gender = filterForm.querySelector('select[name="gender"]').value;
      const priceMax = Number(filterForm.querySelector('input[name="price"]').value || 400);

      let next = PRODUCTS.filter((product) => {
        const matchType = !type || product.category === type;
        const matchGender = !gender || product.gender === gender;
        const matchPrice = product.price <= priceMax;
        return matchType && matchGender && matchPrice;
      });

      if (sortSelect.value === 'price-low') next = [...next].sort((a, b) => a.price - b.price);
      if (sortSelect.value === 'price-high') next = [...next].sort((a, b) => b.price - a.price);
      if (sortSelect.value === 'newest') next = [...next].filter((p) => p.new).concat([...next].filter((p) => !p.new));

      renderGrid('#catalog-grid', next);
    });

    sortSelect.addEventListener('change', () => filterForm.dispatchEvent(new Event('change')));
  }
}

function initCategoryPages() {
  const menProducts = PRODUCTS.filter((product) => product.gender === 'Men' || product.category === 'Sneakers');
  const womenProducts = PRODUCTS.filter((product) => product.gender === 'Women' || product.category === 'Sneakers');
  const arrivals = PRODUCTS.filter((product) => product.new);

  renderGrid('#men-grid', menProducts.slice(0, 6));
  renderGrid('#women-grid', womenProducts.slice(0, 6));
  renderGrid('#new-grid', arrivals.slice(0, 6));
  renderGrid('#collection-grid', PRODUCTS.slice(0, 6));
}

function renderProductsList(selector = '#product-list') {
  const el = document.querySelector(selector);
  if (!el) return;
  renderGrid(selector, PRODUCTS);
}

function renderProductPage(productId = null, selector = '#product-root') {
  const id = productId || new URLSearchParams(window.location.search).get('id') || 'aero-runner';
  const product = PRODUCTS.find((item) => item.id === id) || PRODUCTS[0];
  const root = document.querySelector(selector);
  if (!root) return;

  if (!PRODUCTS.some((item) => item.id === id)) {
    root.innerHTML = `
      <div class="empty-state not-found-panel" style="margin: 40px 0;">
        <div class="not-found-visual"><img src="images/m-snk-01.jpg" alt="Premium sneaker product" /></div>
        <h3>Product not found.</h3>
        <p class="muted">The pair you are looking for isn’t available in this collection.</p>
        <a class="btn btn-primary" href="products.html">Back to shop</a>
      </div>
    `;
    return;
  }

  root.innerHTML = `
    <section class="product-detail" data-product-page>
      <div class="gallery" id="product-gallery">
        <div class="gallery-main"><img id="main-product-image" src="${product.gallery[0]}" alt="${product.name}" /></div>
        <div class="gallery-thumbs">
          ${product.gallery.map((image, index) => `
            <button class="thumb ${index === 0 ? 'active' : ''}" data-image="${image}" type="button" aria-label="View product image ${index + 1}">
              <img src="${image}" alt="${product.name} image ${index + 1}" />
            </button>
          `).join('')}
        </div>
      </div>

      <div class="product-info">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="index.html">Home</a>
          <span> / </span>
          <a href="products.html">Shop</a>
          <span> / </span>
          <span>${product.category}</span>
        </nav>

        <h1>${product.name}</h1>
        <div class="rating-row">
          <span class="stars">★★★★★</span>
          <span>${product.rating} (${product.reviews} reviews)</span>
        </div>

        <div class="product-price-row large">
          <span class="price">${currency(product.price)}</span>
          ${product.comparePrice ? `<span class="compare-price">${currency(product.comparePrice)}</span>` : ''}
          ${product.discount ? `<span class="discount-tag">Save ${product.discount}%</span>` : ''}
        </div>

        <p>${product.description}</p>

        <div class="option-row">
          <div class="option-header"><label>Color</label><span>${product.colors.length} options</span></div>
          <div class="color-swatches" id="detail-colors">
            ${product.colors.map((color, index) => `
              <button type="button" class="swatch ${index === 0 ? 'active' : ''}" data-color="${color}" style="background:${color};" aria-label="Select color ${index + 1}"></button>
            `).join('')}
          </div>
        </div>

        <div class="option-row">
          <div class="option-header"><label>Size</label><a class="meta-link" href="products.html">Size guide</a></div>
          <div class="size-pills" id="detail-sizes">
            ${product.sizes.map((size) => `
              <button type="button" class="size-pill ${size === product.sizes[0] ? 'active' : ''}">${size}</button>
            `).join('')}
          </div>
        </div>

        <div class="product-actions-stack">
          <button class="btn btn-primary" id="detail-add-cart" type="button">Add to cart</button>
          <button class="btn btn-secondary" id="detail-wishlist" type="button">Wishlist</button>
          <button class="btn btn-secondary" type="button">Buy now</button>
        </div>

        <ul class="meta-list">
          <li><span>Category</span><strong>${product.category}</strong></li>
          <li><span>Collection</span><strong>${product.collection}</strong></li>
          <li><span>Gender</span><strong>${product.gender}</strong></li>
          <li><span>Shipping</span><strong>Free over ₦70,000</strong></li>
          <li><span>Returns</span><strong>30-day easy returns</strong></li>
        </ul>
      </div>
    </section>

    <section class="details-tabs">
      <div class="info-grid">
        <article class="info-card">
          <h3>Product details</h3>
          <ul>
            <li>${product.description}</li>
            <li>${product.material}</li>
            ${product.features.map((feature) => `<li>${feature}</li>`).join('')}
          </ul>
        </article>
        <article class="info-card">
          <h3>Shipping & returns</h3>
          <ul>
            <li>Free express shipping on qualifying orders.</li>
            <li>Easy 30-day returns for unworn items.</li>
            <li>Secure checkout and insured delivery.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <div><span class="eyebrow">Recommended</span><h2>You may also like</h2></div>
      </div>
      <div id="related-products" class="product-grid"></div>
    </section>
  `;

  const related = document.querySelector('#related-products');
  if (related) renderGrid('#related-products', PRODUCTS.filter((item) => item.id !== product.id).slice(0, 4));

  const selectedSize = root.querySelector('.size-pill.active');
  const selectedSwatch = root.querySelector('.swatch.active');

  root.querySelectorAll('.thumb').forEach((button) => {
    button.addEventListener('click', () => {
      const src = button.dataset.image;
      const main = root.querySelector('#main-product-image');
      if (main) main.src = src;
      root.querySelectorAll('.thumb').forEach((thumb) => thumb.classList.toggle('active', thumb === button));
    });
  });

  root.querySelectorAll('.size-pill').forEach((button) => {
    button.addEventListener('click', () => {
      root.querySelectorAll('.size-pill').forEach((sizeButton) => sizeButton.classList.remove('active'));
      button.classList.add('active');
    });
  });

  root.querySelectorAll('.swatch').forEach((button) => {
    button.addEventListener('click', () => {
      root.querySelectorAll('.swatch').forEach((swatch) => swatch.classList.remove('active'));
      button.classList.add('active');
    });
  });

  const addCartButton = root.querySelector('#detail-add-cart');
  if (addCartButton) {
    addCartButton.addEventListener('click', () => {
      const size = root.querySelector('.size-pill.active')?.textContent || product.sizes[0];
      const color = root.querySelector('.swatch.active')?.dataset.color || product.colors[0];
      addToCart(product.id, String(size), String(color), 1);
      addCartAnimation(product.id);
    });
  }

  const wishlistButton = root.querySelector('#detail-wishlist');
  if (wishlistButton) {
    wishlistButton.classList.toggle('active', getWishlist().includes(product.id));
    wishlistButton.addEventListener('click', () => toggleWishlist(product.id));
  }

  document.title = `${product.name} | elevate store`;
}

function initProductPage() {
  const root = document.querySelector('#product-root');
  if (!root) return;

  const productId = new URLSearchParams(window.location.search).get('id');
  renderProductPage(productId, '#product-root');
}

function initCartPage() {
  const cartItems = document.querySelector('#cart-items');
  const summary = document.querySelector('#cart-summary');
  if (!cartItems || !summary) return;

  const cart = getCart();
  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <h3>Your cart is empty</h3>
        <p class="muted">Add an item to continue your shopping experience.</p>
        <a href="products.html" class="btn btn-primary" style="margin-top: 18px;">Continue shopping</a>
      </div>
    `;
    summary.innerHTML = `<div class="summary-box"><h3>Order summary</h3><div class="summary-row"><span>Subtotal</span><strong>${currency(0)}</strong></div><div class="summary-row total"><span>Total</span><strong>${currency(0)}</strong></div></div>`;
    return;
  }

  const entries = cart.map((item) => {
    const product = getProductById(item.id);
    return { ...item, product };
  });

  const subtotal = entries.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const shipping = subtotal > 300 ? 0 : 25;
  const total = subtotal + shipping;

  cartItems.innerHTML = entries.map((entry) => `
    <article class="cart-card">
      <img src="${entry.product.image}" alt="${entry.product.name}" />
      <div>
        <h4>${entry.product.name}</h4>
        <div class="muted-row"><span>${entry.product.category}</span><span>Size ${entry.size}</span><span>Color ${entry.color}</span></div>
        <div class="qty-box">
          <button class="icon-button decrement" data-product-id="${entry.id}" data-size="${entry.size}" data-color="${entry.color}">−</button>
          <span class="count">${entry.qty}</span>
          <button class="icon-button increment" data-product-id="${entry.id}" data-size="${entry.size}" data-color="${entry.color}">+</button>
        </div>
      </div>
      <div class="item-actions">
        <strong>${currency(entry.product.price * entry.qty)}</strong>
        <button class="btn btn-secondary remove-item" data-product-id="${entry.id}" data-size="${entry.size}" data-color="${entry.color}">Remove</button>
      </div>
    </article>
  `).join('');

  summary.innerHTML = `
    <div class="summary-box">
      <h3>Order summary</h3>
      <div class="summary-row"><span>Subtotal</span><strong>${currency(subtotal)}</strong></div>
      <div class="summary-row"><span>Shipping</span><strong>${shipping === 0 ? 'Free' : currency(shipping)}</strong></div>
      <div class="summary-row"><span>Estimated tax</span><strong>${currency(subtotal * 0.05)}</strong></div>
      <div class="summary-row total"><span>Total</span><strong>${currency(total)}</strong></div>
      <a href="checkout.html" class="btn btn-primary" style="width:100%;margin-top:16px;">Proceed to checkout</a>
    </div>
  `;

  document.querySelectorAll('.decrement, .increment').forEach((button) => {
    button.addEventListener('click', () => {
      const { productId, size, color } = button.dataset;
      const nextCart = getCart();
      const idx = nextCart.findIndex((item) => item.id === productId && item.size === size && item.color === color);
      if (idx >= 0) {
        if (button.classList.contains('decrement')) nextCart[idx].qty = Math.max(1, nextCart[idx].qty - 1);
        else nextCart[idx].qty += 1;
      }
      setCart(nextCart);
      updateCartCount();
      initCartPage();
    });
  });

  document.querySelectorAll('.remove-item').forEach((button) => {
    button.addEventListener('click', () => {
      const { productId, size, color } = button.dataset;
      const next = getCart().filter((item) => !(item.id === productId && item.size === size && item.color === color));
      setCart(next);
      updateCartCount();
      initCartPage();
    });
  });
}

function initWishlistPage() {
  const list = document.querySelector('#wishlist-grid');
  if (!list) return;
  const wishlist = getWishlist();
  const products = PRODUCTS.filter((product) => wishlist.includes(product.id));

  if (!products.length) {
    list.innerHTML = `
      <div class="empty-state">
        <h3>Your wishlist is empty</h3>
        <p class="muted">Save pieces you love for later.</p>
      </div>
    `;
    return;
  }

  renderGrid('#wishlist-grid', products);
}

function initSearchPage() {
  const form = document.querySelector('#search-form');
  const input = document.querySelector('#search-input');
  const results = document.querySelector('#search-results');
  if (!form || !input || !results) return;

  const applySearch = (query) => {
    const matches = PRODUCTS.filter((product) => `${product.name} ${product.category} ${product.collection}`.toLowerCase().includes(query.toLowerCase()));
    if (!matches.length) {
      results.innerHTML = `<div class="empty-state"><h3>No results</h3><p class="muted">Try a different keyword or browse the full collection.</p></div>`;
      return;
    }
    renderGrid('#search-results', matches);
  };

  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  if (q) {
    input.value = q;
    applySearch(q);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) return;
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  });
}

function initCheckoutPage() {
  const form = document.querySelector('#checkout-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    setCart([]);
    updateCartCount();
    showToast('Order placed');
    window.location.href = 'index.html';
  });
}

function initStaticExtras() {
  document.querySelectorAll('.size-pill').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.size-pill').forEach((node) => node.classList.remove('active'));
      button.classList.add('active');
    });
  });

  document.querySelectorAll('.swatch').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.swatch').forEach((node) => node.classList.remove('active'));
      button.classList.add('active');
    });
  });
}

const SHARED_FOOTER_HTML = `
  <div class="container footer-grid">
    <div class="footer-brand">
      <a class="brand-mark" href="index.html"><span>elevate store</span></a>
      <p>ELEVATE EVERY STEP.</p>
    </div>
    <div class="footer-column">
      <h4>Shop</h4>
      <nav>
        <a href="men.html">Men</a>
        <a href="women.html">Women</a>
        <a href="new-arrivals.html">New Arrivals</a>
        <a href="collections.html">Collections</a>
      </nav>
    </div>
    <div class="footer-column">
      <h4>Help</h4>
      <nav>
        <a href="contact.html">Contact</a>
        <a href="faq.html">FAQ</a>
        <a href="shipping.html">Shipping</a>
        <a href="terms.html">Returns</a>
      </nav>
    </div>
    <div class="footer-column">
      <h4>Account</h4>
      <nav>
        <a href="account.html">My Account</a>
        <a href="order-history.html">Orders</a>
        <a href="wishlist.html">Wishlist</a>
      </nav>
    </div>
    <div class="footer-column">
      <h4>Newsletter</h4>
      <form class="newsletter-form footer-newsletter" action="#">
        <label class="sr-only" for="footer-newsletter-email">Email address</label>
        <input id="footer-newsletter-email" type="email" placeholder="Email address" />
        <button class="btn btn-primary" type="submit">Join</button>
      </form>
      <div class="footer-socials" style="display:flex;gap:10px;margin-top:16px;">
        <a href="#" aria-label="Instagram" class="social-pill">◎</a>
        <a href="#" aria-label="Facebook" class="social-pill">f</a>
        <a href="#" aria-label="X" class="social-pill">x</a>
      </div>
    </div>
  </div>
  <div class="container footer-bottom">
    <div class="footer-copy">© 2026 ELEVATE STORE</div>
    <div class="footer-links">
      <a href="privacy.html">Privacy Policy</a>
      <a href="terms.html">Terms & Conditions</a>
    </div>
  </div>
`;

function applySharedFooter() {
  document.querySelectorAll('footer').forEach((footer) => {
    footer.classList.add('site-footer');
    footer.innerHTML = SHARED_FOOTER_HTML;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applySharedFooter();
  injectPageLoader();
  applyRevealAnimations();
  initParallax();
  initSearchOverlay();
  initHeader();
  updateCartCount();
  updateWishlistCount();
  initHomePage();
  initCatalogPage();
  initCategoryPages();
  initProductPage();
  initCartPage();
  initWishlistPage();
  initSearchPage();
  initCheckoutPage();
  initStaticExtras();
});

window.addEventListener('load', () => {
  setTimeout(() => document.body.classList.add('loaded'), 50);
  applyRevealAnimations();
  initParallax();
  initSearchOverlay();
});
