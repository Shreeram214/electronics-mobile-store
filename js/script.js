/* =========================================================
   TECHNOVA STORE – Demo website interactions (vanilla JS)
   All products, specifications, prices and colours below are
   FICTIONAL DEMONSTRATION DATA, not manufacturer listings.
   ========================================================= */
(function () {
  'use strict';
  document.documentElement.classList.remove('no-js');

  /* ---------- Config ---------- */
  // Add the store's WhatsApp number (country code + number, digits only, e.g. "91XXXXXXXXXX").
  // Left empty in the demo: WhatsApp then opens and lets the visitor choose a chat.
  const WHATSAPP_NUMBER = '';

  const img = (id, w = 800) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;
  const formatINR = (n) => '₹' + n.toLocaleString('en-IN');

  const CATEGORY_LABELS = {
    mobiles: 'Smartphones',
    laptops: 'Laptops & Computers',
    tvs: 'Televisions',
    appliances: 'Home Appliances',
    audio: 'Audio & Entertainment',
    accessories: 'Accessories'
  };

  /* ---------- Product catalogue (sample data) ---------- */
  const PRODUCTS = [
    {
      id: 'nova-x-pro', name: 'Nova X Pro Smartphone', cat: 'mobiles', label: 'Smartphones', price: 34999, badge: 'featured',
      image: '1610945265064-0e34e5519bbf', keySpec: '6.7-inch display · 256 GB', tags: 'phone mobile android premium',
      desc: 'A large-screen smartphone with a refined finish, generous storage and a versatile camera setup, suited to photos, streaming and multitasking.',
      specs: [['Display', '6.7-inch'], ['Storage', '256 GB'], ['Memory', '8 GB RAM'], ['Camera', 'Triple rear camera'], ['Battery', '5,000 mAh'], ['Charging', 'Fast charging']],
      colours: [['Lavender', '#B9A7D6'], ['Graphite', '#3A3F4A'], ['Silver', '#D9DDE3']]
    },
    {
      id: 'nova-lite', name: 'Nova Lite Smartphone', cat: 'mobiles', label: 'Smartphones', price: 14999, badge: 'new',
      image: '1592899677977-9c10ca588bbd', keySpec: '128 GB storage', tags: 'phone mobile android budget value',
      desc: 'A dependable everyday smartphone with a bright display and long battery life, ideal as a first phone or a value-for-money upgrade.',
      specs: [['Display', '6.5-inch'], ['Storage', '128 GB'], ['Memory', '6 GB RAM'], ['Camera', 'Dual rear camera'], ['Battery', '5,000 mAh'], ['Network', '5G ready']],
      colours: [['Midnight', '#1F2430'], ['Ocean Blue', '#2F5D8A'], ['Mint', '#A8D5BA']]
    },
    {
      id: 'nova-tab-11', name: 'Nova Tab 11 Tablet', cat: 'mobiles', label: 'Tablets', price: 21999,
      image: '1544244015-0df4b3ffc6b0', keySpec: '11-inch display · 128 GB', tags: 'tablet ipad tab study',
      desc: 'An 11-inch tablet for online classes, reading, video calls and entertainment, with stylus support for notes and sketches.',
      specs: [['Display', '11-inch'], ['Storage', '128 GB'], ['Memory', '6 GB RAM'], ['Battery', '8,000 mAh'], ['Audio', 'Quad speakers'], ['Extras', 'Stylus support']],
      colours: [['Space Grey', '#4A4F5A'], ['Silver', '#D9DDE3']]
    },
    {
      id: 'techbook-air', name: 'TechBook Air Laptop', cat: 'laptops', label: 'Laptops', price: 59999, badge: 'featured',
      image: '1496181133206-80ce9b88a853', keySpec: '16 GB RAM · 512 GB SSD', tags: 'laptop notebook thin light student office',
      desc: 'A slim, lightweight laptop that boots quickly and stays responsive through office work, assignments and everyday browsing.',
      specs: [['Memory', '16 GB RAM'], ['Storage', '512 GB SSD'], ['Display', '14-inch Full HD'], ['Weight', 'Approx. 1.3 kg'], ['Battery', 'All-day use'], ['Ports', 'USB-C, USB-A, HDMI']],
      colours: [['Silver', '#D9DDE3'], ['Space Grey', '#4A4F5A']]
    },
    {
      id: 'techbook-pro', name: 'TechBook Pro Laptop', cat: 'laptops', label: 'Laptops', price: 79999,
      image: '1588872657578-7efd1f1555ed', keySpec: '16 GB RAM · 1 TB SSD', tags: 'laptop notebook business performance creator',
      desc: 'A performance laptop with plenty of storage for large projects, design tools and multitasking-heavy business work.',
      specs: [['Memory', '16 GB RAM'], ['Storage', '1 TB SSD'], ['Display', '15.6-inch Full HD'], ['Graphics', 'Dedicated graphics'], ['Keyboard', 'Backlit'], ['Ports', 'USB-C, USB-A, HDMI']],
      colours: [['Graphite', '#2E333D']]
    },
    {
      id: 'vision-55', name: 'Vision 55 Smart TV', cat: 'tvs', label: 'Televisions', price: 42999, badge: 'featured',
      image: '1461151304267-38535e780c79', keySpec: '55-inch · 4K', tags: 'tv television smart 4k led',
      desc: 'A 55-inch 4K smart TV with built-in streaming apps and a slim design that suits modern living rooms.',
      specs: [['Screen', '55-inch'], ['Resolution', '4K Ultra HD'], ['Platform', 'Smart TV apps'], ['HDR', 'HDR support'], ['Audio', '20 W speakers'], ['Connectivity', 'Wi-Fi, HDMI, USB']],
      colours: [['Black', '#15181F']]
    },
    {
      id: 'soundbeat', name: 'SoundBeat Wireless Headphones', cat: 'audio', label: 'Audio', price: 2999,
      image: '1546435770-a3e426bf472b', keySpec: 'Wireless over-ear headphones', tags: 'headphones audio wireless bluetooth music',
      desc: 'Comfortable over-ear wireless headphones with soft cushions and a built-in mic for music, calls and online classes.',
      specs: [['Type', 'Wireless over-ear'], ['Connectivity', 'Bluetooth'], ['Playback', 'Up to 30 hours'], ['Mic', 'Built-in'], ['Charging', 'USB-C'], ['Fold', 'Foldable design']],
      colours: [['Charcoal', '#2B2F38'], ['Ivory', '#EDEAE2'], ['Navy', '#1E2E5A']]
    },
    {
      id: 'beatbuds-pro', name: 'BeatBuds Pro Earbuds', cat: 'audio', label: 'Audio', price: 1799, badge: 'new',
      image: '1590658268037-6bf12165a8df', keySpec: 'True wireless earbuds', tags: 'earbuds tws wireless audio bluetooth',
      desc: 'Compact true wireless earbuds with a pocket-friendly charging case and touch controls.',
      specs: [['Type', 'True wireless'], ['Playback', 'Up to 24 hours with case'], ['Controls', 'Touch'], ['Charging', 'USB-C case'], ['Water resistance', 'Splash resistant']],
      colours: [['White', '#F2F3F5'], ['Black', '#1B1E25']]
    },
    {
      id: 'bassbox-go', name: 'BassBox Go Bluetooth Speaker', cat: 'audio', label: 'Audio', price: 3999,
      image: '1608043152269-423dbba4e7e1', keySpec: 'Portable Bluetooth speaker', tags: 'speaker bluetooth portable audio party',
      desc: 'A rugged portable speaker with rich sound for home, travel and get-togethers.',
      specs: [['Type', 'Portable speaker'], ['Connectivity', 'Bluetooth'], ['Playback', 'Up to 12 hours'], ['Build', 'Splash resistant']],
      colours: [['Black', '#1B1E25'], ['Blue', '#2B4C8C']]
    },
    {
      id: 'powermax-20000', name: 'PowerMax 20000 Power Bank', cat: 'accessories', label: 'Accessories', price: 1999,
      image: '1609091839311-d5365f9ff1c5', keySpec: '20,000 mAh capacity', tags: 'power bank powerbank charger battery',
      desc: 'A high-capacity power bank that can top up phones, earbuds and tablets on long days and journeys.',
      specs: [['Capacity', '20,000 mAh'], ['Outputs', 'USB-C + USB-A'], ['Charging', 'Fast charging support'], ['Indicator', 'LED charge level']],
      colours: [['Teal', '#3E8C8A'], ['Black', '#1B1E25']]
    },
    {
      id: 'smartfit-watch', name: 'SmartFit Watch', cat: 'accessories', label: 'Smartwatches', price: 3499, badge: 'new',
      image: '1523275335684-37898b6baf30', keySpec: 'Smartwatch · fitness tracking', tags: 'smartwatch watch fitness wearable',
      desc: 'A minimal smartwatch for notifications, step counting, heart-rate tracking and sleep insights.',
      specs: [['Type', 'Smartwatch'], ['Tracking', 'Steps, heart rate, sleep'], ['Battery', 'Up to 7 days'], ['Notifications', 'Calls & messages'], ['Strap', 'Silicone']],
      colours: [['White', '#F2F3F5'], ['Black', '#1B1E25'], ['Rose', '#E3B6B0']]
    },
    {
      id: 'flashcharge-33w', name: 'FlashCharge 33W Adapter', cat: 'accessories', label: 'Accessories', price: 999,
      image: '1583863788434-e58a36330cf0', keySpec: '33 W fast charger with cable', tags: 'charger adapter cable usb-c charging',
      desc: 'A compact fast-charging adapter with a USB-C cable, compatible with many phones and accessories.',
      specs: [['Output', '33 W'], ['Port', 'USB-C'], ['In the box', 'Adapter + cable'], ['Safety', 'Over-heat protection']],
      colours: [['White', '#F2F3F5']]
    },
    {
      id: 'keyflow-combo', name: 'KeyFlow Wireless Keyboard', cat: 'accessories', label: 'Accessories', price: 2499,
      image: '1618384887929-16ec33fab9ef', keySpec: 'Compact wireless keyboard', tags: 'keyboard mouse wireless computer',
      desc: 'A compact wireless keyboard with a comfortable typing feel for laptops, desktops and tablets.',
      specs: [['Layout', 'Compact'], ['Connectivity', 'Wireless / Bluetooth'], ['Battery', 'Rechargeable'], ['Compatibility', 'Windows, macOS, Android']],
      colours: [['Black', '#1B1E25']]
    },
    {
      id: 'urbancarry-bag', name: 'UrbanCarry Laptop Backpack', cat: 'accessories', label: 'Accessories', price: 1799,
      image: '1553062407-98eeb64c6a62', keySpec: 'Fits up to 15.6-inch laptops', tags: 'bag backpack laptop bag travel',
      desc: 'A clean, padded backpack with a laptop sleeve and organiser pockets for college and office commutes.',
      specs: [['Fits', 'Up to 15.6-inch laptops'], ['Material', 'Water-resistant fabric'], ['Pockets', 'Organiser + bottle pocket']],
      colours: [['Navy', '#1E2E5A'], ['Grey', '#7A808C']]
    },
    {
      id: 'coolair-ac', name: 'CoolAir Split AC', cat: 'appliances', label: 'Home Appliances', price: 34999,
      image: '1759772238012-9d5ad59ae637', keySpec: '1.5 Ton capacity', tags: 'ac air conditioner split cooling appliance',
      desc: 'A wall-mounted split air conditioner for medium-sized rooms, with an energy-conscious inverter design and quiet operation.',
      specs: [['Capacity', '1.5 Ton'], ['Type', 'Split, inverter'], ['Suitable for', 'Medium rooms'], ['Modes', 'Cool, dry, sleep'], ['Remote', 'Included']],
      colours: [['White', '#F2F3F5']]
    },
    {
      id: 'freshhome-fridge', name: 'FreshHome Refrigerator', cat: 'appliances', label: 'Home Appliances', price: 28999, badge: 'featured',
      image: '1571175443880-49e1d25b2bc5', keySpec: '300 L capacity', tags: 'refrigerator fridge kitchen appliance',
      desc: 'A spacious refrigerator with adjustable shelves and a convenient freezer section, sized for small to medium families.',
      specs: [['Capacity', '300 L'], ['Type', 'Double door'], ['Shelves', 'Toughened glass'], ['Cooling', 'Frost-free']],
      colours: [['Mint', '#A8D5C6'], ['Steel', '#B8BEC6']]
    },
    {
      id: 'purewash-washer', name: 'PureWash Washing Machine', cat: 'appliances', label: 'Home Appliances', price: 26999,
      image: '1626806787461-102c1bfaaea1', keySpec: '7 kg front load', tags: 'washing machine washer laundry appliance',
      desc: 'A front-load washing machine with multiple wash programmes for everyday clothes, delicates and bedding.',
      specs: [['Capacity', '7 kg'], ['Type', 'Front load'], ['Programmes', 'Multiple wash modes'], ['Extras', 'Quick wash, delay start']],
      colours: [['White', '#F2F3F5']]
    }
  ];

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const waLink = (msg) => {
    const base = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : 'https://wa.me/';
    return `${base}?text=${encodeURIComponent(msg)}`;
  };
  const productWaMsg = (p) =>
    `Hello TECHNOVA STORE, I am interested in the ${p.name} (${CATEGORY_LABELS[p.cat]}, listed at ${formatINR(p.price)}). Could you share availability and details?`;

  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 3200);
  }

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------- Static WhatsApp links ---------- */
  $$('.js-wa').forEach((a) => { a.href = waLink(a.dataset.msg || 'Hello TECHNOVA STORE!'); });

  /* ---------- Placeholder social links ---------- */
  $$('.js-placeholder').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    toast('Social profile link is a placeholder in this demo.');
  }));

  /* ---------- Announcement bar rotation ---------- */
  (function announcements() {
    const el = $('#announceText');
    const msgs = [
      'Discover the latest technology at TECHNOVA STORE.',
      'Visit our showroom for product demonstrations.',
      'Ask us about current offers and availability.'
    ];
    let i = 0;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setInterval(() => {
      el.classList.add('is-fading');
      setTimeout(() => {
        i = (i + 1) % msgs.length;
        el.textContent = msgs[i];
        el.classList.remove('is-fading');
      }, 350);
    }, 4500);
  })();

  /* ---------- Sticky header shadow, back-to-top, active nav ---------- */
  const header = $('#header');
  const backTop = $('#backTop');
  const navLinks = $$('.nav__link');
  const trackedSections = ['home', 'categories', 'products', 'latest', 'offers', 'about', 'accessories', 'showroom', 'testimonials', 'faq', 'enquiry', 'contact']
    .map((id) => document.getElementById(id)).filter(Boolean);

  function updateActiveNav() {
    const y = window.scrollY + header.offsetHeight + 120;
    let current = 'home';
    trackedSections.forEach((s) => { if (s.offsetTop <= y) current = s.id; });
    // Bottom of page: treat as contact
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = 'contact';

    navLinks.forEach((link) => {
      let active = false;
      if (link.dataset.section) active = link.dataset.section === current;
      else if (link.dataset.filter) active = current === 'products' && state.cat === link.dataset.filter;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      backTop.classList.toggle('is-visible', window.scrollY > 700);
      updateActiveNav();
      ticking = false;
    });
  }, { passive: true });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------- Mobile navigation ---------- */
  const nav = $('#nav');
  const hamburger = $('#hamburger');
  const navOverlay = $('#navOverlay');

  function setNav(open) {
    nav.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    navOverlay.hidden = !open;
    document.body.classList.toggle('no-scroll', open);
    if (open) { const first = $('.nav__link', nav); first && first.focus(); }
  }
  hamburger.addEventListener('click', () => setNav(!nav.classList.contains('is-open')));
  navOverlay.addEventListener('click', () => setNav(false));
  $$('a', nav).forEach((a) => a.addEventListener('click', () => setNav(false)));
  window.addEventListener('resize', () => { if (window.innerWidth > 1024 && nav.classList.contains('is-open')) setNav(false); });

  // Category links in the nav filter the catalogue
  $$('.nav__link[data-filter]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    setNav(false);
    applyCategory(a.dataset.filter, { resetOthers: true });
    scrollToId('products');
  }));

  /* ---------- Header search ---------- */
  const searchToggle = $('#searchToggle');
  const headerSearch = $('#headerSearch');
  const headerSearchInput = $('#headerSearchInput');

  function setHeaderSearch(open) {
    headerSearch.hidden = !open;
    searchToggle.setAttribute('aria-expanded', String(open));
    if (open) headerSearchInput.focus();
  }
  searchToggle.addEventListener('click', () => setHeaderSearch(headerSearch.hidden));
  $('#searchClose').addEventListener('click', () => { setHeaderSearch(false); searchToggle.focus(); });
  $('#headerSearchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    state.search = headerSearchInput.value.trim();
    state.cat = 'all';
    state.price = 'all';
    syncControls();
    render();
    setHeaderSearch(false);
    scrollToId('products');
  });

  /* ---------- Catalogue: state, filtering, rendering ---------- */
  const state = { search: '', cat: 'all', price: 'all', sort: 'featured' };
  const grid = $('#productGrid');
  const emptyState = $('#emptyState');
  const resultsCount = $('#resultsCount');
  const searchInput = $('#searchInput');
  const priceSelect = $('#priceSelect');
  const sortSelect = $('#sortSelect');
  const chips = $$('#categoryChips .chip');

  function filtered() {
    const q = state.search.toLowerCase();
    let list = PRODUCTS.filter((p) => {
      if (state.cat !== 'all' && p.cat !== state.cat) return false;
      if (state.price !== 'all') {
        const [min, max] = state.price.split('-').map(Number);
        if (p.price < min || p.price > max) return false;
      }
      if (q) {
        const hay = `${p.name} ${p.label} ${CATEGORY_LABELS[p.cat]} ${p.tags}`.toLowerCase();
        if (!q.split(/\s+/).every((word) => hay.includes(word))) return false;
      }
      return true;
    });
    if (state.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (state.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (state.sort === 'name-asc') list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }

  function badgeHtml(p) {
    if (p.badge === 'new') return '<span class="badge badge--new product-card__badge">New Arrival</span>';
    if (p.badge === 'featured') return '<span class="badge badge--featured product-card__badge"><i class="fa-solid fa-star"></i> Featured</span>';
    return '';
  }

  function cardHtml(p, i) {
    return `
      <article class="product-card" style="animation-delay:${Math.min(i, 8) * 40}ms">
        <div class="product-card__media" data-open="${p.id}">
          ${badgeHtml(p)}
          <img src="${img(p.image, 600)}" alt="${esc(p.name)} (sample product image)" width="600" height="492" loading="lazy" decoding="async">
        </div>
        <div class="product-card__body">
          <span class="product-card__cat">${esc(p.label)}</span>
          <h3 class="product-card__name">${esc(p.name)}</h3>
          <p class="product-card__spec"><i class="fa-solid fa-microchip" aria-hidden="true"></i> ${esc(p.keySpec)} <small>(sample)</small></p>
          <p class="product-card__price">${formatINR(p.price)}<small>demo price</small></p>
          <div class="product-card__actions">
            <button class="btn btn--outline btn--sm" data-open="${p.id}" aria-label="View details of ${esc(p.name)}">View Details</button>
            <a class="btn btn--whatsapp btn--sm" href="${waLink(productWaMsg(p))}" target="_blank" rel="noopener" aria-label="Enquire about ${esc(p.name)} on WhatsApp"><i class="fa-brands fa-whatsapp"></i> Enquire</a>
          </div>
        </div>
      </article>`;
  }

  function render() {
    const list = filtered();
    grid.innerHTML = list.map(cardHtml).join('');
    emptyState.hidden = list.length > 0;
    grid.hidden = list.length === 0;
    const catText = state.cat === 'all' ? 'all categories' : CATEGORY_LABELS[state.cat];
    resultsCount.textContent = list.length
      ? `Showing ${list.length} of ${PRODUCTS.length} products in ${catText}${state.search ? ` matching “${state.search}”` : ''}`
      : '';
    updateActiveNav();
  }

  function syncControls() {
    searchInput.value = state.search;
    priceSelect.value = state.price;
    sortSelect.value = state.sort;
    chips.forEach((c) => {
      const on = c.dataset.cat === state.cat;
      c.classList.toggle('is-active', on);
      c.setAttribute('aria-pressed', String(on));
    });
  }

  function applyCategory(cat, { resetOthers = false } = {}) {
    state.cat = cat;
    if (resetOthers) { state.search = ''; state.price = 'all'; }
    syncControls();
    render();
  }

  function clearFilters() {
    Object.assign(state, { search: '', cat: 'all', price: 'all', sort: 'featured' });
    syncControls();
    render();
  }

  let searchTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.search = searchInput.value.trim(); render(); }, 160);
  });
  priceSelect.addEventListener('change', () => { state.price = priceSelect.value; render(); });
  sortSelect.addEventListener('change', () => { state.sort = sortSelect.value; render(); });
  chips.forEach((c) => c.addEventListener('click', () => applyCategory(c.dataset.cat)));
  $('#clearFilters').addEventListener('click', clearFilters);
  $('#emptyClear').addEventListener('click', clearFilters);

  // Category cards, editorial and footer category links
  $$('.js-cat').forEach((el) => el.addEventListener('click', (e) => {
    e.preventDefault();
    applyCategory(el.dataset.cat, { resetOthers: true });
    scrollToId('products');
  }));
  // Budget banner shortcuts
  $$('.js-budget').forEach((el) => el.addEventListener('click', () => {
    state.cat = el.dataset.cat;
    state.price = el.dataset.price;
    state.search = '';
    state.sort = 'price-asc';
    syncControls();
    render();
    scrollToId('products');
  }));
  // Accessories collection cards search the catalogue
  $$('.js-acc').forEach((el) => el.addEventListener('click', () => {
    Object.assign(state, { search: el.dataset.query, cat: 'all', price: 'all' });
    syncControls();
    render();
    scrollToId('products');
  }));

  /* ---------- Product details modal ---------- */
  const modal = $('#productModal');
  let lastFocus = null;
  let currentProduct = null;

  function openModal(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    currentProduct = p;
    lastFocus = document.activeElement;

    $('#modalImg').src = img(p.image, 900);
    $('#modalImg').alt = `${p.name} (sample product image)`;
    const catName = CATEGORY_LABELS[p.cat];
    $('#modalCat').textContent = catName.startsWith(p.label) ? catName : `${p.label} · ${catName}`;
    $('#modalTitle').textContent = p.name;
    $('#modalPrice').innerHTML = `${formatINR(p.price)}<small>demo price</small>`;
    $('#modalDesc').textContent = p.desc;
    $('#modalSpecs').innerHTML = p.specs.map(([k, v]) => `<li><strong>${esc(k)}</strong>${esc(v)}</li>`).join('');
    $('#modalColours').innerHTML = p.colours.map(([n, c]) => `<li><i style="background:${c}" aria-hidden="true"></i>${esc(n)}</li>`).join('');
    $('#modalWa').href = waLink(productWaMsg(p));

    modal.hidden = false;
    document.body.classList.add('no-scroll');
    $('.modal__close', modal).focus();
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('no-scroll');
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }

  grid.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open]');
    if (trigger) openModal(trigger.dataset.open);
  });
  $$('[data-close]', modal).forEach((el) => el.addEventListener('click', closeModal));

  // Keyboard: Esc closes overlays, Tab is trapped inside the modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!modal.hidden) closeModal();
      else if (nav.classList.contains('is-open')) { setNav(false); hamburger.focus(); }
      else if (!headerSearch.hidden) { setHeaderSearch(false); searchToggle.focus(); }
    }
    if (e.key === 'Tab' && !modal.hidden) {
      const focusables = $$('button, a[href], input, select, textarea', modal).filter((el) => el.offsetParent !== null);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // "Enquire Now" → prefill the enquiry form
  const CATEGORY_TO_FORM = {
    mobiles: 'Smartphones', laptops: 'Laptops & Computers', tvs: 'Televisions',
    appliances: 'Home Appliances', audio: 'Audio & Entertainment', accessories: 'Accessories'
  };
  $('#modalEnquire').addEventListener('click', () => {
    if (!currentProduct) return;
    const p = currentProduct;
    closeModal();
    $('#fCategory').value = CATEGORY_TO_FORM[p.cat];
    $('#fProduct').value = p.name;
    const budget = p.price < 5000 ? 'Under ₹5,000' : p.price <= 20000 ? '₹5,000 – ₹20,000' : p.price <= 40000 ? '₹20,000 – ₹40,000' : p.price <= 60000 ? '₹40,000 – ₹60,000' : 'Above ₹60,000';
    $('#fBudget').value = budget;
    scrollToId('enquiry');
    setTimeout(() => $('#fName').focus({ preventScroll: true }), 600);
  });

  /* ---------- Enquiry form validation ---------- */
  const form = $('#enquiryForm');
  const success = $('#formSuccess');

  function setError(input, msg) {
    const wrap = input.closest('.form-field');
    const err = document.getElementById(input.id + '-err');
    wrap.classList.toggle('has-error', !!msg);
    input.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (err) { err.textContent = msg || ''; input.setAttribute('aria-describedby', err.id); }
  }

  function validateField(input) {
    const v = input.value.trim();
    switch (input.id) {
      case 'fName':
        if (!v) return 'Please enter your full name.';
        if (v.length < 2) return 'Name looks too short.';
        return '';
      case 'fPhone': {
        if (!v) return 'Please enter your mobile number.';
        const digits = v.replace(/[\s-]/g, '').replace(/^(\+91|91|0)(?=\d{10}$)/, '');
        if (!/^[6-9]\d{9}$/.test(digits)) return 'Enter a valid 10-digit Indian mobile number (starting with 6–9).';
        return '';
      }
      case 'fEmail':
        if (v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Please enter a valid email address.';
        return '';
      case 'fCategory':
        return v ? '' : 'Please choose a product category.';
      default:
        return '';
    }
  }

  const validated = ['fName', 'fPhone', 'fEmail', 'fCategory'].map((id) => document.getElementById(id));
  validated.forEach((input) => {
    input.addEventListener('blur', () => setError(input, validateField(input)));
    input.addEventListener('input', () => { if (input.closest('.form-field').classList.contains('has-error')) setError(input, validateField(input)); });
    input.addEventListener('change', () => { if (input.tagName === 'SELECT') setError(input, validateField(input)); });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstInvalid = null;
    validated.forEach((input) => {
      const msg = validateField(input);
      setError(input, msg);
      if (msg && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) { firstInvalid.focus(); success.hidden = true; return; }

    // Frontend-only demo: nothing is sent or stored.
    form.reset();
    validated.forEach((input) => setError(input, ''));
    success.hidden = false;
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  /* ---------- Testimonial carousel ---------- */
  (function carousel() {
    const root = $('#carousel');
    const track = $('#carouselTrack');
    const slides = $$('.testi', track);
    const dotsWrap = $('#carouselDots');
    let index = 0, perView = 3, timer = null;

    const getPerView = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 680 ? 2 : 1);
    const maxIndex = () => Math.max(0, slides.length - perView);

    function buildDots() {
      dotsWrap.innerHTML = '';
      for (let i = 0; i <= maxIndex(); i++) {
        const b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', `Show testimonial ${i + 1}`);
        b.addEventListener('click', () => { go(i); restart(); });
        dotsWrap.appendChild(b);
      }
    }
    function go(i) {
      index = (i + maxIndex() + 1) % (maxIndex() + 1);
      track.style.transform = `translateX(-${index * (100 / perView)}%)`;
      $$('button', dotsWrap).forEach((d, di) => d.setAttribute('aria-current', String(di === index)));
      slides.forEach((s, si) => s.setAttribute('aria-hidden', String(si < index || si >= index + perView)));
    }
    function layout() {
      perView = getPerView();
      track.style.setProperty('--per-view', perView);
      slides.forEach((s) => s.style.setProperty('--per-view', perView));
      buildDots();
      go(Math.min(index, maxIndex()));
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function start() { if (!reduced) timer = setInterval(() => go(index + 1), 6000); }
    function stop() { clearInterval(timer); timer = null; }
    function restart() { stop(); start(); }

    $('#prevSlide').addEventListener('click', () => { go(index - 1); restart(); });
    $('#nextSlide').addEventListener('click', () => { go(index + 1); restart(); });
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);

    // Swipe support
    let startX = null;
    track.addEventListener('pointerdown', (e) => { startX = e.clientX; });
    track.addEventListener('pointerup', (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 45) { go(index + (dx < 0 ? 1 : -1)); restart(); }
      startX = null;
    });

    let rt;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(layout, 150); });
    layout();
    start();
  })();

  /* ---------- FAQ accordion ---------- */
  $$('.faq__q').forEach((btn) => btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    // Close others for a tidy single-open accordion
    $$('.faq__q').forEach((b) => {
      b.setAttribute('aria-expanded', 'false');
      document.getElementById(b.getAttribute('aria-controls')).hidden = true;
      b.closest('.faq__item').classList.remove('is-open');
    });
    if (!open) {
      btn.setAttribute('aria-expanded', 'true');
      document.getElementById(btn.getAttribute('aria-controls')).hidden = false;
      btn.closest('.faq__item').classList.add('is-open');
    }
  }));

  /* ---------- Scroll reveal ---------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    $$('.reveal').forEach((el) => io.observe(el));
  } else {
    $$('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Init ---------- */
  render();
  updateActiveNav();
})();
