const root = document.querySelector("#root");
const icon = (name, size = 18) => {
  const paths = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    cart: '<path d="M3 3h2l2.3 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L22 8H6"/><circle cx="10" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    box: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 8 9 5 9-5M3 8v9l9 5 9-5V8M12 13v9"/>',
    store: '<path d="M3 10h18M5 10v10h14V10M3 10l2-6h14l2 6M9 20v-6h6v6"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    bot: '<path d="M12 2v3m-7 4h14v11H5z"/><path d="M9 13h.01M15 13h.01M9 17h6"/><path d="M3 12H1m22 0h-2"/>',
    send: '<path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2m3 0-1 15H6L5 6m5 4v7m4-7v7"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    whatsapp: '<path fill="currentColor" stroke="none" d="M20.52 3.48A11.86 11.86 0 0 0 2.55 17.82L1 23l5.31-1.39a11.86 11.86 0 1 0 14.21-18.13ZM12 21.22a9.15 9.15 0 0 1-4.66-1.28l-.33-.2-3.15.83.84-3.07-.22-.34a9.17 9.17 0 1 1 7.52 4.06Zm5.03-6.87c-.28-.14-1.66-.82-1.91-.91-.26-.09-.44-.14-.63.14s-.72.91-.89 1.09c-.16.19-.32.21-.6.07-.28-.14-1.19-.44-2.27-1.39-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.44.12-.58.12-.12.28-.33.42-.49.14-.17.19-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.48-.63-.49h-.54c-.19 0-.49.07-.75.35s-.98.96-.98 2.34 1 2.71 1.14 2.9c.14.19 1.98 3.03 4.79 4.25.67.29 1.19.46 1.6.58.67.21 1.28.18 1.76.11.54-.08 1.66-.68 1.89-1.34.23-.65.23-1.21.16-1.33-.07-.12-.25-.19-.53-.33Z"/>',
    eye: '<path d="M2 12s3.7-6 10-6 10 6 10 6-3.7 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
    eyeOff: '<path d="m3 3 18 18M10.6 6.2A11.2 11.2 0 0 1 12 6c6.3 0 10 6 10 6a17 17 0 0 1-3 3.6M6.2 6.8C3.6 8.4 2 12 2 12s3.7 6 10 6c.8 0 1.5-.1 2.2-.3"/><path d="M10.6 10.6a2 2 0 0 0 2.8 2.8"/>',
    truck: '<path d="M3 6h12v12H3zM15 10h4l3 3v5h-7"/><circle cx="7.5" cy="18" r="1.5"/><circle cx="18.5" cy="18" r="1.5"/>',
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 16 .9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ""}</svg>`;
};

// --- LISTA DE PRODUCTOS CON URLs DE IMAGEN ---
const products = [
  { id: "p01", name: "Arroz extra superior Costeño", brand: "Costeño", detail: "Bolsa de 5 kg · Grano selecto", category: "Abarrotes", price: 5.8, badge: "Precio mayorista", image: "https://plazavea.vteximg.com.br/arquivos/ids/27552451-450-450/641425.jpg?v=638313121271170000", bg: "#f6f0dc" },
  { id: "p02", name: "Inca Kola original", brand: "Inca Kola", detail: "Pack de 6 botellas · 1.5 L", category: "Bebidas", price: 16.90, badge: "Más vendido", image: "https://metroio.vtexassets.com/arquivos/ids/623217/Sixpack-Gaseosa-Inca-Kola-Original-Botella-600ml-1-355013.jpg?v=639139687531770000", bg: "#f4e7df" },
  { id: "p03", name: "Leche evaporada entera", brand: "Gloria", detail: "Pack de 6 latas · 400 g", category: "Lácteos", price: 12.00, badge: "Ahorra 8%", image: "https://vegaperu.vtexassets.com/arquivos/ids/166700/1301076.jpg?v=638532033992030000", bg: "#e9f0e4" },
  { id: "p04", name: "Aceite vegetal Primor", brand: "Primor", detail: "Botella de 1 L · Pack x 3", category: "Abarrotes", price: 10.5, badge: "", image: "https://mercury.vtexassets.com/arquivos/ids/6347536/image-e365c4cf91614f20b60ec205ec2cd828.jpg?v=637835775618070000", bg: "#978a46" },
  { id: "p05", name: "Detergente líquido", brand: "Bolívar", detail: "Doypack de 1.8 L · Floral", category: "Limpieza", price: 8.20, badge: "Rinde más", image: "https://oechsle.vteximg.com.br/arquivos/ids/16863811-1000-1000/image-0.jpg?v=638363872314100000", bg: "#e5efeb" },
  { id: "p06", name: "Huevos pardos", brand: "La Calera", detail: "Maple de 30 unidades · M", category: "Lácteos", price: 17.5, badge: "", image: "https://metroio.vtexassets.com/arquivos/ids/548976/Huevos-Rosados-Avivel-90un-HUEVOS-ROSADOS-X90UN-AVIVEL-1-281661.jpg?v=638642766267400000", bg: "#f2e9dd" },
  { id: "p07", name: "Agua Cielo", brand: "San Luis", detail: "Pack de 12 botellas · 625 ml", category: "Bebidas", price: 15.6, badge: "", image: "https://plazavea.vteximg.com.br/arquivos/ids/30289099-512-512/agua-sin-gas-cielo-paquete-6-botellas-2.5l-cu.jpg", bg: "#e3ede8" },
  { id: "p08", name: "Jabón para ropa", brand: "Bolívar", detail: "Pack de 3 unidades · 230 g", category: "Limpieza", price: 12.3, badge: "Pack ahorro", image: "https://http2.mlstatic.com/D_NQ_NP_945467-MLC90883602190_082025-O.webp", bg: "#e6eeeb" },
  { id: "p09", name: "Azúcar rubia", brand: "Cartavio", detail: "Bolsa de 5 kg · Rubia", category: "Abarrotes", price: 18.7, badge: "", image: "https://4msurtidos.com/cdn/shop/products/Azucar.png?v=1593011095", bg: "#f3ead8" },
  { id: "p10", name: "Galletas de soda", brand: "Field", detail: "Caja de 12 paquetes · 180 g", category: "Abarrotes", price: 14.2, badge: "Ideal para tienda", image: "https://vegaperu.vtexassets.com/arquivos/ids/166289-800-450?v=638469359058970000&width=800&height=450&aspect=true", bg: "#f2ebd9" },
  { id: "p11", name: "Yogurt fresa pack", brand: "Laive", detail: "Pack de 4 botellas · 1 kg", category: "Lácteos", price: 21.5, badge: "", image: "https://vegaperu.vtexassets.com/arquivos/ids/167392/5502353.jpg?v=638624489871930000", bg: "#f4e8e9" },
  { id: "p12", name: "Coca-Cola", brand: "Coca-Cola", detail: "Pack de 6 botellas · 1.5 L", category: "Bebidas", price: 31.2, badge: "Precio por pack", image: "https://plazavea.vteximg.com.br/arquivos/ids/30377872-512-512/gaseosa-coca-cola-paquete-6-botellas-1l-cu.jpg", bg: "#eee5df" },
];

const categories = [
  { name: "Abarrotes", count: "48 productos", image: "https://plazavea.vteximg.com.br/arquivos/ids/35140940-1000-1000/imageUrl_1.jpg?v=639181944939270000", tone: "#f4eed5" },
  { name: "Bebidas", count: "32 productos", image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?auto=format&fit=crop&w=300&q=80", tone: "#e0eee8" },
  { name: "Lácteos", count: "21 productos", image: "https://plazavea.vteximg.com.br/arquivos/ids/35081437-418-418/358217.jpg", tone: "#e8eef4" },
  { name: "Limpieza", count: "19 productos", image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80", tone: "#e5eeec" },
  { name: "Artículos de tienda", count: "26 productos", image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=300&q=80", tone: "#f0e9dc" }
];

const storage = {
  get(key, fallback) { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} },
};

const defaultOrders = [
  { id: "AB-240518", date: "18 may. 2025", total: 186.4, status: "Entregado", items: "Arroz Costeño, Inca Kola, Leche Gloria y 3 productos más" },
  { id: "AB-240502", date: "02 may. 2025", total: 94.7, status: "Entregado", items: "Aceite Primor, detergente Bolívar y huevos La Calera" },
];

const savedCart = storage.get("abastece-demo-cart", null);
const initialCart = savedCart && typeof savedCart === "object" && !Array.isArray(savedCart)
  ? Object.fromEntries(Object.entries(savedCart).filter(([id, quantity]) => products.some(product => product.id === id) && Number.isSafeInteger(Number(quantity)) && Number(quantity) > 0 && Number(quantity) <= 9999).map(([id, quantity]) => [id, Number(quantity)]))
  : { p01: 2, p02: 1, p03: 1 };

const savedOrders = storage.get("abastece-demo-orders", null);
const initialOrders = Array.isArray(savedOrders)
  ? savedOrders.filter(order => order && typeof order.id === "string" && typeof order.date === "string" && typeof order.total === "number" && typeof order.status === "string" && typeof order.items === "string").slice(0, 100)
  : defaultOrders;

const state = {
  view: "Inicio",
  authenticated: false,
  cart: initialCart,
  orders: initialOrders,
  category: "Todos",
  search: "",
  sort: "recommended",
  payment: "Tarjeta de débito o crédito",
  chatOpen: false,
  confirmed: null,
};

const money = amount => `S/ ${Number(amount).toFixed(2)}`;
const cartCount = () => Object.values(state.cart).reduce((sum, amount) => sum + Number(amount || 0), 0);
const cartSubtotal = () => Object.entries(state.cart).reduce((sum, [id, amount]) => sum + (products.find(p => p.id === id)?.price || 0) * amount, 0);
const discountValue = () => cartSubtotal() >= 250 ? cartSubtotal() * .05 : 0;
const shipping = () => cartSubtotal() ? 7.9 : 0;
const total = () => Math.max(0, cartSubtotal() - discountValue() + shipping());
const safe = value => String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[char]);

function art(product, small = false) {
  return `<div class="product-art ${small ? "small-art" : ""}" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;">
    <img src="${product.image}" alt="${safe(product.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" />
  </div>`;
}

function productCard(product) {
  const qty = state.cart[product.id] || 0;
  return `<article class="product-card" data-testid="card-product-${product.id}">
    <div class="product-image" style="--product-bg:${product.bg}">
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
      ${art(product)}
    </div>
    <div class="product-info">
      <div class="product-brand">${product.brand}</div><h3>${product.name}</h3><div class="product-meta">${product.detail}</div>
      <div class="product-bottom"><div class="price">${money(product.price)} <small>/ pack</small></div>
        ${qty ? `<div class="product-qty" aria-label="Cantidad de ${safe(product.name)}"><button data-action="qty" data-id="${product.id}" data-delta="-1" aria-label="Restar uno">−</button><span>${qty}</span><button data-action="qty" data-id="${product.id}" data-delta="1" aria-label="Sumar uno">+</button></div>` : `<button class="add-btn" data-action="add" data-id="${product.id}" aria-label="Agregar ${safe(product.name)} al carrito" data-testid="button-add-${product.id}">${icon("plus",17)}</button>`}
      </div>
    </div>
  </article>`;
}

function heading(kicker, title, subtitle, action = "") {
  return `<div class="page-heading"><div><div class="eyebrow">${kicker}</div><h1>${title}</h1><p>${subtitle}</p></div>${action}</div>`;
}

function categoryCards() {
  return `<div class="category-row">${categories.map((c, i) => `<button class="category-tile ${state.category === c.name ? "selected" : ""}" data-action="category" data-category="${c.name}" data-testid="category-${i}" style="--tone:${c.tone}; display:flex; align-items:center; gap:12px; text-align:left;">
    <div style="width:42px;height:42px;border-radius:10px;overflow:hidden;flex-shrink:0;"><img src="${c.image}" alt="${c.name}" style="width:100%;height:100%;object-fit:cover;"></div>
    <span><strong>${c.name}</strong><small style="display:block;color:var(--muted);">${c.count}</small></span></button>`).join("")}</div>`;
}

function productGrid(list) { return `<div class="product-grid">${list.map(productCard).join("")}</div>`; }

function summaryCard(checkout = false) {
  return `<section class="panel summary" aria-label="Resumen del pedido"><h2>Resumen de compra</h2>
    <div class="summary-row"><span>Subtotal (${cartCount()} productos)</span><strong>${money(cartSubtotal())}</strong></div>
    <div class="summary-row"><span>Despacho programado</span><strong>${money(shipping())}</strong></div>
    <div class="summary-row"><span>Descuento corporativo${cartSubtotal() >= 250 ? " · 5%" : ""}</span><strong style="color:#397455">− ${money(discountValue())}</strong></div>
    <div class="summary-row summary-total"><span>Total estimado</span><strong>${money(total())}</strong></div>
    ${cartSubtotal() < 250 && cartSubtotal() > 0 ? `<div class="summary-note">Agrega ${money(250-cartSubtotal())} más para activar tu descuento corporativo del 5%.</div>` : cartSubtotal() >= 250 ? `<div class="summary-note">Tu descuento corporativo del 5% ya está aplicado a esta compra.</div>` : ""}
    ${checkout ? `<div class="notice"><strong>Compra de demostración.</strong> No se realizará ningún cobro ni se solicitarán datos de tarjeta.</div><button class="btn full" data-action="confirm-order" ${cartCount() ? "" : "disabled"}>Confirmar pedido ${icon("arrow",15)}</button>` : `<button class="btn full" data-action="${cartCount() ? "checkout" : "catalog"}">${cartCount() ? "Continuar al checkout" : "Explorar catálogo"} ${icon("arrow",15)}</button>`}
  </section>`;
}
function homeView() {
  const featured = products.slice(0, 9);
  return `<div class="page-view">
    <section class="hero">
      <div class="hero-copy">
        <div class="hero-kicker">Abastecimiento para tu negocio</div>
        <h1>Tu tienda, siempre lista.</h1>
        <p>Lo que necesitas para reponer, en un solo pedido. Precios para negocio y entrega programada en Lima.</p>
        <button class="btn dark" data-action="nav" data-view="Catálogo">Ver catálogo ${icon("arrow",15)}</button>
      </div>
      <div class="hero-art">
        <div class="hero-orbit"></div>
        
        
        <!-- 💡 AQUÍ PUEDES PONER TUS URLs DE IMAGEN PARA LOS 4 CUADRADOS -->
        <div class="hero-stack">
          
          <!-- Cuadrado 1: Arroz / Abarrotes -->
          <div class="pack rice" style="background:#000;">
            <img src="https://static.vecteezy.com/system/resources/previews/046/456/587/non_2x/rice-grains-on-transparent-background-free-png.png" alt="Arroz Costeño">
            <div class="pack-overlay">
              <b style="font-size:11px; letter-spacing:0.5px;"></b>
              <strong style="font-size:13px; line-height:1.2;"></strong>
            </div>
          </div>

          <!-- Cuadrado 2: Bebidas -->
          <div class="pack drink" style="background:#000;">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/047/429/595/small/refreshing-glass-of-cola-with-ice-cubes-splashing-out-perfect-for-representing-a-cool-beverage-or-drink-advertisement-png.png" alt="Bebidas">
            <div class="pack-overlay">
              <b style="font-size:11px; letter-spacing:0.5px;"></b>
              <strong style="font-size:13px; line-height:1.2;"></strong>
            </div>
          </div>

          <!-- Cuadrado 3: Limpieza -->
          <div class="pack soap" style="background:#000;">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/041/643/148/small/ai-generated-cleaning-service-bucket-with-sponges-chemicals-bottle-free-png.png" alt="Limpieza">
            <div class="pack-overlay">
              <b style="font-size:11px; letter-spacing:0.5px;"></b>
              <strong style="font-size:13px; line-height:1.2;"></strong>
            </div>
          </div>

          <!-- Cuadrado 4: Lácteos -->
          <div class="pack milk" style="background:#000;">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/037/168/638/small/ai-generated-isolated-milk-bottle-on-transparent-background-png.png" alt="Lácteos">
            <div class="pack-overlay">
              <b style="font-size:11px; letter-spacing:0.5px;"></b>
              <strong style="font-size:13px; line-height:1.2;"></strong>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div><div class="eyebrow">Compra por categoría</div><h2>Abastece cada rincón de tu tienda</h2></div>
        <button class="text-link" data-action="nav" data-view="Catálogo">Ver todo ${icon("arrow",13)}</button>
      </div>
      ${categoryCards()}
    </section>

    <section class="section featured-section" aria-labelledby="featured-title">
      <div class="section-head">
        <div>
          <div class="eyebrow">Selección para tu bodega</div>
          <h2 id="featured-title">Lo que más reponen</h2>
          <p>Precios mayoristas, listos para tu próxima compra.</p>
        </div>
        <div class="featured-controls">
          <span class="shelf-cue">Desliza para descubrir <span aria-hidden="true">→</span></span>
          <div class="shelf-arrows">
            <button class="shelf-arrow" data-action="shelf-scroll" data-direction="-1" aria-label="Ver productos anteriores">${icon("arrow",16)}</button>
            <button class="shelf-arrow next" data-action="shelf-scroll" data-direction="1" aria-label="Ver más productos">${icon("arrow",16)}</button>
          </div>
          <button class="text-link" data-action="nav" data-view="Catálogo">Ir al catálogo ${icon("arrow",13)}</button>
        </div>
      </div>
      <div class="featured-shelf" id="featured-shelf" tabindex="0" aria-label="Productos destacados, desliza horizontalmente">${featured.map(productCard).join("")}</div>
    </section>

    <section class="reorder-banner">
      <div><h3>¿Volvemos a armar tu pedido?</h3><p>Tu última compra está a un clic de distancia.</p></div>
      <button class="btn small secondary" data-action="reorder">Repetir último pedido ${icon("arrow",14)}</button>
    </section>

    <section class="promo-strip">
      <div><div class="eyebrow" style="color:#dac54b">Para tu negocio</div><h2>Más compras. Más beneficios.</h2><p>Activa el descuento corporativo al superar S/ 250.</p></div>
      <button class="btn" data-action="nav" data-view="Catálogo">Armar pedido ${icon("arrow",14)}</button>
    </section>
  </div>`;
}
function catalogView() {
  const filtered = products.filter(p => {
    const matchesCategory = state.category === "Todos" || p.category === state.category || (state.category === "Artículos de tienda" && p.category === "Abarrotes");
    const term = state.search.toLowerCase().trim();
    return matchesCategory && (!term || `${p.name} ${p.brand} ${p.category} ${p.detail}`.toLowerCase().includes(term));
  });
  if (state.sort === "price-low") filtered.sort((a,b) => a.price - b.price);
  if (state.sort === "price-high") filtered.sort((a,b) => b.price - a.price);
  const chips = ["Todos", "Abarrotes", "Bebidas", "Lácteos", "Limpieza", "Artículos de tienda"];
  return `<div class="page-view">${heading("Catálogo mayorista", "Todo para reponer, en un solo lugar", "Precios pensados para tu negocio. Compra por unidad de venta y recibe en tu dirección.", `<button class="btn secondary" data-action="cart">${icon("cart",15)} Ver carrito <span class="nav-count">${cartCount()}</span></button>`)}
    <div class="catalog-toolbar"><div class="filter-row" role="group" aria-label="Filtrar por categoría">${chips.map(c => `<button class="filter-chip ${state.category === c ? "active" : ""}" data-action="category" data-category="${c}">${c}</button>`).join("")}</div>
    <label class="eyebrow" for="sort-products">Ordenar por <select id="sort-products" class="sort-select" aria-label="Ordenar productos"><option value="recommended" ${state.sort==="recommended"?"selected":""}>Recomendados</option><option value="price-low" ${state.sort==="price-low"?"selected":""}>Menor precio</option><option value="price-high" ${state.sort==="price-high"?"selected":""}>Mayor precio</option></select></label></div>
    <p class="results-label">${filtered.length} productos disponibles ${state.search ? `para “${safe(state.search)}”` : ""}</p>
    ${filtered.length ? productGrid(filtered) : `<div class="empty-state">${icon("search",24)}<h3>No encontramos productos</h3><p>Prueba con otra búsqueda o categoría.</p><button class="btn secondary small" data-action="clear-filters">Limpiar filtros</button></div>`}
  </div>`;
}

function cartView() {
  const items = Object.entries(state.cart).filter(([,qty]) => qty > 0).map(([id,qty]) => ({ product: products.find(p => p.id === id), qty })).filter(item => item.product);
  return `<div class="page-view">${heading("Tu pedido", "Carrito de compra", "Revisa las cantidades antes de continuar.", `<button class="btn secondary" data-action="nav" data-view="Catálogo">${icon("plus",15)} Seguir comprando</button>`)}
    ${items.length ? `<div class="cart-layout"><section class="panel"><div class="panel-head"><h2>Productos seleccionados</h2><span class="eyebrow">${cartCount()} unidades</span></div>${items.map(({product:p,qty}) => `<div class="cart-line" data-testid="cart-item-${p.id}"><div class="cart-thumb" style="--product-bg:${p.bg}">${art(p,true)}</div><div class="cart-copy"><strong>${p.name}</strong><small>${p.brand} · ${p.detail}</small></div><div class="product-qty" aria-label="Cantidad de ${p.name}"><button data-action="qty" data-id="${p.id}" data-delta="-1" aria-label="Restar uno">−</button><span>${qty}</span><button data-action="qty" data-id="${p.id}" data-delta="1" aria-label="Sumar uno">+</button></div><div class="cart-line-price">${money(p.price*qty)} <button class="remove-btn" data-action="remove" data-id="${p.id}" aria-label="Quitar ${p.name}">${icon("trash",14)}</button></div></div>`).join("")}
    </section>${summaryCard()}</div>` : `<div class="empty-state">${icon("cart",25)}<h3>Tu carrito está esperando productos</h3><p>Encuentra abarrotes, bebidas y más para reponer tu negocio.</p><button class="btn" data-action="nav" data-view="Catálogo">Explorar catálogo ${icon("arrow",14)}</button></div>`}
  </div>`;
}

function checkoutView() {
  if (state.confirmed) {
    return `<div class="page-view">${heading("Pedido confirmado", "Listo, ya quedó registrado", "Este es un pedido de demostración: no se realizó ningún cobro.")}<div class="panel checkout-success"><div class="success-mark">${icon("check",25)}</div><h2>Pedido ${state.confirmed.id}</h2><p>Tu compra de ${money(state.confirmed.total)} quedó registrada como demostración.<br>Despacho programado: ${safe(state.confirmed.schedule)}.<br>Forma de pago seleccionada: ${safe(state.confirmed.payment)}.</p><button class="btn" data-action="nav" data-view="Mis pedidos">Ver mis pedidos ${icon("arrow",14)}</button></div></div>`;
  }
  return `<div class="page-view">${heading("Último paso", "Confirma tu pedido", "Tu compra de demostración no generará ningún cobro.")}
    <div class="checkout-layout"><div class="checkout-main">
      <section class="panel"><div class="step-title"><span class="step-number">1</span><h2>Dirección de entrega</h2></div><div class="address-card">${icon("pin",18)}<div><strong>Mi negocio · Dirección principal</strong><p>Av. Fray Luis De León 298, San Borja, Lima<br>Referencia: a una cuadra del mercado del distrito.</p></div><span class="address-tag">Principal</span></div></section>
      <section class="panel"><div class="step-title"><span class="step-number">2</span><h2>Despacho programado</h2></div><div class="option-list">
        <label class="option"><input type="radio" name="schedule" value="Mañana, 9 a. m. – 1 p. m." checked><span>${icon("calendar",16)}</span><span><strong>Mañana, 9 a. m. – 1 p. m.</strong><small>Entrega en tu dirección de San Borja</small></span><span class="right-note">S/ 7.90</span></label>
        <label class="option"><input type="radio" name="schedule" value="Mañana, 2 p. m. – 6 p. m."><span>${icon("calendar",16)}</span><span><strong>Mañana, 2 p. m. – 6 p. m.</strong><small>Entrega en tu dirección de San Borja</small></span><span class="right-note">S/ 7.90</span></label>
      </div></section>
      <section class="panel"><div class="step-title"><span class="step-number">3</span><h2>Forma de pago</h2></div><div class="option-list">
        <label class="option"><input type="radio" name="payment" value="Tarjeta de débito o crédito" ${state.payment === "Tarjeta de débito o crédito" ? "checked" : ""}><span>${icon("card",17)}</span><span><strong>Tarjeta de débito o crédito</strong><small>Solo selección de método en esta demo. No pediremos datos de tarjeta.</small></span></label>
        <label class="option"><input type="radio" name="payment" value="Pagar contra entrega" ${state.payment === "Pagar contra entrega" ? "checked" : ""}><span>${icon("truck",17)}</span><span><strong>Pagar contra entrega</strong><small>Efectivo o POS al recibir tu pedido.</small></span></label>
      </div></section>
    </div><aside class="checkout-aside">${summaryCard(true)}</aside></div>
  </div>`;
}

function ordersView() {
  const list = [...state.orders];
  return `<div class="page-view">${heading("Historial del negocio", "Mis pedidos", "Consulta tus compras de demostración y vuelve a pedir lo que más rota.", `<button class="btn" data-action="nav" data-view="Catálogo">${icon("plus",15)} Nuevo pedido</button>`)}
  ${list.length ? `<div class="orders-list">${list.map(o => `<article class="order-card"><div><strong>Pedido ${safe(o.id)}</strong><small>${safe(o.date)} · Despacho a San Borja</small>${o.payment ? `<small>Pago: ${safe(o.payment)}</small>` : ""}<details class="order-details"><summary>Ver productos</summary><p>${safe(o.items)}</p></details></div><div class="order-total">${money(o.total)}<small>monto registrado</small></div><span class="status">${safe(o.status)}</span></article>`).join("")}</div>` : `<div class="empty-state">${icon("box",26)}<h3>Aún no tienes pedidos</h3><p>Cuando confirmes un pedido de demostración aparecerá aquí.</p><button class="btn" data-action="nav" data-view="Catálogo">Ver catálogo</button></div>`}</div>`;
}

function businessView() {
  return `<div class="page-view">${heading("El espacio de tu tienda", "Mi negocio", "Datos de negocio de muestra. No se envían ni sincronizan con ningún servicio.")}
    <div class="business-grid"><section class="business-card"><div class="business-head"><div class="business-mark">${icon("store",22)}</div><div><h2>Bodega San Borja</h2><p style="margin:0">Negocio minorista · Cliente desde mayo de 2024</p></div></div>
      <div class="business-stats"><div class="business-stat"><small>Pedidos de demo</small><strong>${state.orders.length}</strong></div><div class="business-stat"><small>Dirección activa</small><strong style="font-size:12px">San Borja</strong></div><div class="business-stat"><small>Beneficio</small><strong style="font-size:12px">5% desde S/ 250</strong></div></div>
      <div class="section-head" style="margin:20px 0 10px"><div><h2 style="font-size:12px">Dirección de entrega</h2></div><span class="address-tag">Principal</span></div><p>${icon("pin",14)} Av. Fray Luis De León 298, San Borja, Lima</p><button class="btn secondary small" data-action="address">Revisar dirección</button>
    </section><aside class="membership"><div class="eyebrow">Beneficio de negocio</div><h2>Compra al por mayor. Haz rendir cada sol.</h2><p>Al alcanzar S/ 250 en productos, se aplica un descuento corporativo de 5% a tu pedido de demostración.</p><ul class="member-perks"><li>Precios por pack para reabastecer</li><li>Despacho programado en Lima</li><li>Resumen de compra antes de confirmar</li></ul><button class="btn" style="margin-top:19px" data-action="nav" data-view="Catálogo">Armar pedido ${icon("arrow",14)}</button></aside></div>
  </div>`;
}

function supportControls() {
  return `<div class="float-actions"><button class="whatsapp" data-action="whatsapp" aria-label="Contactar por WhatsApp">${icon("whatsapp",15)} Habla con un asesor</button><button class="hubbot" data-action="chat-toggle" aria-label="${state.chatOpen ? "Cerrar" : "Abrir"} chat con HubBot">${icon("bot",22)}</button></div>
    <section class="chat-panel ${state.chatOpen ? "open" : ""}" aria-label="Chat con HubBot" aria-hidden="${!state.chatOpen}">
      <div class="chat-head"><div class="bot-icon">+</div><div><strong>HubBot</strong><small>Asistente de Abastece+ · en línea</small></div><button data-action="chat-toggle" aria-label="Cerrar chat">${icon("close",17)}</button></div>
      <div class="chat-messages" id="chat-messages"><div class="chat-msg">Hola, soy HubBot. Te ayudo con tu catálogo, pedido o beneficios de compra.</div>${state.chatMessages ? state.chatMessages.map(m=>`<div class="chat-msg ${m.role}">${safe(m.text)}</div>`).join("") : ""}</div>
      <div class="chat-suggestions"><button data-action="chat-suggest" data-message="¿Cómo funciona el despacho?">Despacho</button><button data-action="chat-suggest" data-message="¿Cómo obtengo el descuento?">Descuento</button><button data-action="chat-suggest" data-message="Quiero hacer un pedido">Hacer un pedido</button></div>
      <form class="chat-form" id="chat-form"><label for="chat-input" class="eyebrow visually-hidden">Escribe tu consulta</label><input id="chat-input" name="message" placeholder="Escribe tu consulta..." autocomplete="off" required><button aria-label="Enviar mensaje">${icon("send",15)}</button></form>
    </section><div class="toast-region" aria-live="polite"></div>`;
}

function loginView() {
  return `<div class="login-screen">
    <header class="login-top"><a href="./" class="brand" aria-label="Abastece+"><div class="brand-mark">+</div><div class="brand-name">Abastece<span>+</span></div></a><span class="login-location">${icon("pin",14)} Hecho para negocios peruanos</span></header>
    <main class="login-layout">
      <section class="login-story" aria-labelledby="login-story-title">
        <div class="login-story-content"><span class="login-kicker">Abastecimiento inteligente</span><h1 id="login-story-title">Todo lo que tu negocio necesita.<br><em>En un solo lugar.</em></h1><p>Compra mejor, organiza tus pedidos y dedica más tiempo a hacer crecer tu negocio.</p>
          <div class="login-benefits"><div class="login-benefit"><span class="benefit-icon">${icon("box",17)}</span><span><strong>Catálogo organizado</strong><small>Encuentra lo que buscas rápidamente.</small></span></div><div class="login-benefit"><span class="benefit-icon">${icon("calendar",17)}</span><span><strong>Control de pedidos</strong><small>Todo tu abastecimiento más claro.</small></span></div></div>
        </div><div class="login-story-foot">© ${new Date().getFullYear()} Abastece+ <span>Hecho para negocios que crecen.</span></div>
      </section>
      <section class="login-panel" aria-labelledby="login-heading">
        <div class="login-form-wrap"><div class="login-symbol" aria-hidden="true">${icon("arrow",18)}</div><div class="eyebrow">Acceso de demostración</div><h2 id="login-heading">Qué bueno tenerte aquí.</h2><p class="login-intro">Ingresa a tu espacio de negocio.</p>
          <form id="login-form"><div class="field"><label for="demo-user">Usuario</label><input id="demo-user" name="user" autocomplete="username" placeholder="Tu usuario" value="demo" required></div><div class="field"><label for="demo-password">Contraseña</label><div class="password-input"><input id="demo-password" name="password" type="password" autocomplete="current-password" placeholder="Tu contraseña" value="1234" required><button type="button" class="password-toggle" data-action="toggle-password" aria-label="Mostrar contraseña">${icon("eye",16)}</button></div></div>
            <button class="btn full login-submit" type="submit">Ingresar a mi negocio ${icon("arrow",14)}</button>
            <div class="demo-credentials"><span class="credential-dot" aria-hidden="true"></span><span>Modo demostración: <strong>demo / 1234</strong></span></div>
            <p class="demo-disclaimer">Esta es una demostración solo de frontend, no es seguridad real. No uses contraseñas reales ni datos de pago.</p>
            <p class="login-error" id="login-error" role="alert" hidden>Revisa los datos de prueba e intenta nuevamente: demo / 1234.</p>
          </form>
        </div><div class="login-panel-foot">Acceso de demostración para explorar la plataforma</div>
      </section>
    </main>${supportControls()}</div>`;
}

function appShell() {
  if (!state.authenticated) return loginView();
  const views = { Inicio:homeView, Catálogo:catalogView, Carrito:cartView, Checkout:checkoutView, "Mis pedidos":ordersView, "Mi negocio":businessView };
  const current = views[state.view] || homeView;
  const navItems = ["Inicio", "Catálogo", "Carrito", "Mis pedidos", "Mi negocio"];
  
  return `<div class="app"><div class="topline"><b>Abastece+ para tu negocio</b> · Reposición simple, compra inteligente</div>
    <div class="shell"><header class="header"><a href="./" class="brand" data-action="nav" data-view="Inicio" aria-label="Abastece+, inicio"><div class="brand-mark">+</div><div class="brand-name">Abastece<span>+</span></div></a>
      <label class="search-wrap" aria-label="Buscar en el catálogo">${icon("search",17)}<input class="search" type="search" id="global-search" placeholder="Busca abarrotes, bebidas, marcas..." value="${safe(state.search)}" autocomplete="off" aria-label="Buscar productos"></label>
      <div class="header-actions"><div class="delivery-pill">${icon("pin",16)}<span>Entregamos en<strong>San Borja, Lima</strong></span></div>
        <button class="icon-button" aria-label="Abrir carrito" data-action="cart" data-testid="button-cart">${icon("cart",18)}<span class="cart-count">${cartCount()}</span></button><div class="avatar" aria-label="Perfil de demostración">BS</div>
      </div>
    </header>
    <nav class="nav" aria-label="Navegación principal">${navItems.map(item => `<button class="nav-button ${state.view === item ? "active" : ""}" data-action="nav" data-view="${item}" data-testid="nav-${item.toLowerCase().replaceAll(" ","-")}">${item}${item==="Carrito" ? `<span class="nav-count">${cartCount()}</span>` : ""}</button>`).join("")}</nav>
    <main id="main-content" tabindex="-1">${current()}</main>

    <!-- FOOTER ESTILO E-COMMERCE AVANZADO -->
    <footer class="site-footer">
      <div class="footer-top-bar">
        <div>
          <h4 style="color:#fff;margin:0 0 4px 0;">Suscríbete a nuestro boletín comercial y entérate de lotes exclusivos</h4>
          <p style="margin:0;">Recibe alertas de precios mayoristas directo en tu correo.</p>
        </div>
        <form class="footer-newsletter" onsubmit="event.preventDefault(); toast('¡Gracias por suscribirte al boletín!');">
          <input type="email" placeholder="Tu correo electrónico comercial..." required />
          <button class="btn secondary" type="submit">Suscribirse</button>
        </form>
      </div>

      <div class="footer-grid">
        <div class="footer-col">
          <h4>Sobre Abastece+</h4>
          <ul>
            <li><a href="#" data-action="nav" data-view="Mi negocio">Nuestras bodegas aliadas</a></li>
            <li><a href="#">Términos y condiciones B2B</a></li>
            <li><a href="#">Libro de reclamaciones (Perú)</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Servicio al Cliente</h4>
          <ul>
            <li><a href="#">Políticas de despacho</a></li>
            <li><a href="#">Cambios y devoluciones de lotes</a></li>
            <li><a href="#">Garantía legal de productos</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contáctanos</h4>
          <p>contacto@abasteceplus.pe</p>
          <p style="margin-top:8px;">Atención a bodegas: Lunes a Sábado</p>
        </div>
        <div class="footer-col" style="text-align:right;">
          <h4>Medios de Pago</h4>
          <div class="payment-methods" style="justify-content:flex-end;margin-bottom:12px;">
            <span class="payment-tag">VISA</span>
            <span class="payment-tag">Mastercard</span>
            <span class="payment-tag">American Express</span>
            <span class="payment-tag">Yape / Plin</span>
          </div>
          <button class="btn small dark" data-action="nav" data-view="Mis pedidos">Seguir pedido →</button>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Abastece+ · Hecho para el día a día de tu negocio en Perú.</span>
        <span>Usamos cookies en el sitio web para mejorar su experiencia comercial.</span>
      </div>
    </footer>

    </div></div>${supportControls()}</div>`;
ortControls()
}

function render() {
  revealObserver?.disconnect();
  root.innerHTML = appShell();
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const targets = root.querySelectorAll(".section:not(.featured-section), .product-grid .product-card, .promo-strip, .reorder-banner, .page-heading, .panel, .order-card, .business-card, .membership");
    targets.forEach((element, index) => {
      element.classList.add("will-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min((index % 4) * 55, 165)}ms`);
    });
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -18px 0px" });
    targets.forEach(element => revealObserver.observe(element));
  }
  if (state.chatOpen) {
    const messages = document.querySelector("#chat-messages");
    if (messages) messages.scrollTop = messages.scrollHeight;
  }
}
let revealObserver;

function toast(message) {
  const region = document.querySelector(".toast-region");
  if (!region) return;
  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = message;
  region.append(item);
  setTimeout(() => item.remove(), 2800);
}

function saveCart() { storage.set("abastece-demo-cart", state.cart); }

function setQty(id, value) {
  const next = Math.max(0, Math.min(99, Number(value)));
  if (next) state.cart[id] = next;
  else delete state.cart[id];
  saveCart(); render();
}

function navigate(view) {
  state.view = view;
  if (view !== "Checkout") state.confirmed = null;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function addChatMessage(message) {
  const clean = message.trim();
  if (!clean) return;
  state.chatMessages ||= [];
  state.chatMessages.push({ role:"user", text:clean });
  const lower = clean.toLowerCase();
  let answer = "Puedo orientarte con el catálogo, el despacho programado y los pedidos de esta demostración.";
  if (lower.includes("despacho") || lower.includes("entrega")) answer = "El despacho de demostración está programado para San Borja, Lima. Puedes elegir una ventana de mañana en el checkout; el costo es S/ 7.90.";
  else if (lower.includes("descuento") || lower.includes("beneficio")) answer = "Tu descuento corporativo de 5% se activa al llegar a S/ 250 en productos. El resumen lo calcula automáticamente antes de confirmar.";
  else if (lower.includes("pedido") || lower.includes("comprar")) answer = "Explora el catálogo, suma productos al carrito y confirma. Es una experiencia de demostración: el pedido se registra en este navegador, sin cobro.";
  else if (lower.includes("tarjeta") || lower.includes("pago")) answer = "Puedes seleccionar tarjeta o pago contra entrega. No solicitamos ni guardamos datos de tarjeta y no se realiza ningún cobro.";
  state.chatMessages.push({ role:"bot", text:answer });
  state.chatOpen = true;
  render();
}

root.addEventListener("click", event => {
  const actionElement = event.target.closest("[data-action]");
  if (!actionElement) return;
  const { action, id, delta, view, category } = actionElement.dataset;
  if (action === "nav") { event.preventDefault(); navigate(view); }
  if (action === "cart") navigate("Carrito");
  if (action === "checkout") { state.confirmed = null; navigate("Checkout"); }
  if (action === "catalog") navigate("Catálogo");
  if (action === "add") { setQty(id, (state.cart[id] || 0) + 1); toast("Agregado a tu carrito."); }
  if (action === "qty") setQty(id, (state.cart[id] || 0) + Number(delta));
  if (action === "remove") { delete state.cart[id]; saveCart(); render(); toast("Producto retirado del carrito."); }
  if (action === "category") { state.category = category; if (state.view !== "Catálogo") navigate("Catálogo"); else render(); }
  if (action === "clear-filters") { state.category = "Todos"; state.search = ""; render(); }
  if (action === "reorder") {
    const last = state.orders[0];
    if (!last) { toast("Todavía no hay un pedido anterior."); return; }
    const map = { p01:1, p02:1, p03:1, p04:1, p05:1, p06:1 };
    Object.entries(map).forEach(([key,qty]) => state.cart[key] = (state.cart[key] || 0) + qty);
    saveCart(); navigate("Carrito"); toast("Tu pedido habitual está en el carrito.");
  }
  if (action === "confirm-order") {
    if (!cartCount()) { toast("Agrega productos antes de confirmar."); return; }
    const schedule = document.querySelector('input[name="schedule"]:checked')?.value || "Mañana, 9 a. m. – 1 p. m.";
    const payment = document.querySelector('input[name="payment"]:checked')?.value || state.payment;
    const idOrder = `AB-${String(Date.now()).slice(-6)}`;
    const order = { id:idOrder, date:new Intl.DateTimeFormat("es-PE",{day:"2-digit",month:"short",year:"numeric"}).format(new Date()), subtotal:cartSubtotal(), discount:discountValue(), shipping:shipping(), total:total(), payment, status:"Pedido de demo", items:Object.entries(state.cart).map(([pid,q])=>`${products.find(p=>p.id===pid)?.name} x ${q}`).join(", "), schedule };
    state.orders.unshift(order); storage.set("abastece-demo-orders",state.orders);
    state.confirmed = order; state.cart = {}; saveCart(); navigate("Checkout");
  }
  if (action === "chat-toggle") { state.chatOpen = !state.chatOpen; render(); if(state.chatOpen) document.querySelector("#chat-input")?.focus(); }
  if (action === "chat-suggest") addChatMessage(actionElement.dataset.message);
  if (action === "whatsapp") window.open("https://wa.me/51956357331?text="+encodeURIComponent("Hola, quisiera conocer más sobre Abastece+ para abastecer mi negocio."),"_blank","noopener,noreferrer");
  if (action === "address") toast("Dirección de demostración: Av. Fray Luis De León 298, San Borja, Lima.");
  if (action === "toggle-password") {
    const password = document.querySelector("#demo-password");
    if (password) {
      const show = password.type === "password";
      password.type = show ? "text" : "password";
      actionElement.setAttribute("aria-label", show ? "Ocultar contraseña" : "Mostrar contraseña");
      actionElement.innerHTML = icon(show ? "eyeOff" : "eye", 16);
    }
  }
  if (action === "shelf-scroll") {
    const shelf = document.querySelector("#featured-shelf");
    if (shelf) shelf.scrollBy({ left: Number(actionElement.dataset.direction) * Math.max(250, shelf.clientWidth * .72), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
});

root.addEventListener("input", event => {
  if (event.target.id !== "global-search") return;
  state.search = event.target.value;
  if (state.view !== "Catálogo") state.view = "Catálogo";
  const position = event.target.selectionStart;
  render();
  const input = document.querySelector("#global-search");
  input?.focus();
  input?.setSelectionRange(position, position);
});

root.addEventListener("change", event => {
  if (event.target.id === "sort-products") { state.sort = event.target.value; render(); }
  if (event.target.name === "payment") state.payment = event.target.value;
});

root.addEventListener("submit", event => {
  event.preventDefault();
  if (event.target.id === "login-form") {
    const data = new FormData(event.target);
    if (data.get("user") === "demo" && data.get("password") === "1234") {
      state.authenticated = true; render(); toast("Acceso de demostración listo.");
    } else {
      const error = document.querySelector("#login-error");
      if (error) error.hidden = false;
      document.querySelector("#demo-password")?.focus();
    }
  }
  if (event.target.id === "chat-form") {
    const input = event.target.querySelector("input");
    const message = input.value;
    addChatMessage(message);
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && state.chatOpen) { state.chatOpen = false; render(); }
});

render();