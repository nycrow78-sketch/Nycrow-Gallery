/* ---------------- data ---------------- */
const PRODUCTS = [
  {id:'p1', name:'Sunshine Hoops', type:'Earrings', price:28, featured:true,
   desc:"Chunky brass hoops finished in a glossy sunshine yellow with a tiny star charm that catches the light every time you turn your head.",
   materials:'Brass, glass enamel, stainless steel hooks', bg:'#FFD23F', accent:'#2B1B3D',
   chips:['Lightweight','Hypoallergenic posts'], shape:'hoop-star', image:'images/p1.jpg'},
  {id:'p2', name:'Confetti Studs', type:'Earrings', price:24, featured:true,
   desc:"A tiny cluster of hand-painted confetti dots in pink, turquoise and purple. The whole party, right on your earlobe.",
   materials:'Polymer clay, surgical steel posts', bg:'#3EC6E0', accent:'#2B1B3D',
   chips:['Everyday size','Water-safe'], shape:'confetti', image:'images/p2.jpg'},
  {id:'p3', name:'Bubblegum Drops', type:'Earrings', price:32, featured:true,
   desc:"Round bubblegum-pink drops that swing just enough to be noticed. Our most-requested shade, hands down.",
   materials:'Resin, gold-plated brass', bg:'#FF4F93', accent:'#fff',
   chips:['Featherlight','Bold color'], shape:'drop', image:'images/p3.jpg'},
  {id:'p4', name:'Daisy Chain Hoops', type:'Earrings', price:30, featured:false,
   desc:"Slim gold hoops with a hand-strung daisy charm dangling below. Sweet without trying too hard.",
   materials:'Gold-plated brass, glass beads', bg:'#FFF3E4', accent:'#2B1B3D',
   chips:['Toddler-tug tested','Everyday'], shape:'daisy', image:'images/p4.jpg'},
  {id:'p5', name:'Citrus Twist Studs', type:'Earrings', price:26, featured:false,
   desc:"A swirl of orange and yellow polymer clay, shaped by hand into a little citrus twist. No two are exactly alike.",
   materials:'Polymer clay, titanium posts', bg:'#8B5CF6', accent:'#fff',
   chips:['Sensitive-ear friendly'], shape:'swirl', image:'images/p5.jpg'},
  {id:'p6', name:'Moonlight Pearl Necklace', type:'Necklaces', price:48, featured:true,
   desc:"Freshwater pearls strung along a delicate gold chain with a tiny crescent moon charm resting at the center.",
   materials:'Freshwater pearls, gold-filled chain', bg:'#8B5CF6', accent:'#fff',
   chips:['16in + 2in extender','Gift-boxed'], shape:'pearl-moon', image:'images/p6.jpg'},
  {id:'p7', name:'Cherry Pop Necklace', type:'Necklaces', price:36, featured:false,
   desc:"A glossy red cherry duo pendant on a fine gold chain. Playful, a little retro, entirely too cute.",
   materials:'Enamel, gold-plated brass chain', bg:'#FF4F93', accent:'#fff',
   chips:['Adjustable length'], shape:'cherry', image:'images/p7.jpg'},
  {id:'p8', name:'Rainbow Bead Necklace', type:'Necklaces', price:42, featured:true,
   desc:"Hand-strung glass beads in every color of the rainbow. Layers beautifully or shines on its own.",
   materials:'Glass beads, sterling silver clasp', bg:'#FFD23F', accent:'#2B1B3D',
   chips:['Layer-friendly','18in'], shape:'beads', image:'images/p8.jpg'},
  {id:'p9', name:'Heart Locket Choker', type:'Necklaces', price:52, featured:false,
   desc:"A puffy pink heart locket on a dainty choker chain — pop in a tiny photo or keep it a sweet little secret.",
   materials:'Enamel locket, gold-plated chain', bg:'#3EC6E0', accent:'#2B1B3D',
   chips:['Opens up','14in choker'], shape:'locket', image:'images/p9.jpg'},
  {id:'p10', name:'Star Struck Necklace', type:'Necklaces', price:38, featured:false,
   desc:"A single hand-set star pendant that catches every bit of light. Simple, sparkly, never goes out of style.",
   materials:'Cubic zirconia, gold-plated chain', bg:'#FFF3E4', accent:'#2B1B3D',
    chips:['18in','Tarnish-resistant'], shape:'star', image:'images/p10.jpg'},
    {id:'p11', name:'Rose Gold Sculpted Hoops', type:'Earrings', price:44, featured:true,
    desc:"Polished rose-gold hoops with a softly sculpted profile that catches the light from every angle.",
    materials:'Rose-gold-plated brass', bg:'#FF4F93', accent:'#2B1B3D',
    chips:['Statement size','Secure clasp'], shape:'hoop-star', image:'images/p11.jpg'},
    {id:'p12', name:'Pearl Halo Ring', type:'Rings', price:58, featured:false,
    desc:"A luminous pearl sits at the center of a gold-tone halo, framed with tiny sparkling stones.",
    materials:'Gold-tone alloy, imitation pearl, crystal accents', bg:'#FFF3E4', accent:'#2B1B3D',
    chips:['Adjustable band','Gift-ready'], shape:'pearl-moon', image:'images/p12.jpg'},
    {id:'p13', name:'Golden Orbit Hoops', type:'Earrings', price:39, featured:false,
    desc:"Sleek, interwoven gold hoops bring a modern twist to a timeless everyday silhouette.",
    materials:'Gold-plated stainless steel', bg:'#FFD23F', accent:'#2B1B3D',
    chips:['Lightweight','Everyday wear'], shape:'daisy', image:'images/p13.jpg'},
    {id:'p14', name:'Blush Crystal Drop Earrings', type:'Earrings', price:62, featured:true,
    desc:"Faceted blush-pink crystals framed in delicate gold-tone settings for a bright, dressed-up look.",
    materials:'Crystal, gold-plated alloy', bg:'#FF4F93', accent:'#fff',
    chips:['Pair of two','Evening sparkle'], shape:'drop', image:'images/p14.jpg'},
    {id:'p15', name:'Emerald Radiance Ring', type:'Rings', price:68, featured:false,
    desc:"A vivid emerald-green centerpiece with a faceted finish and a clear crystal halo.",
    materials:'Green crystal, clear crystal, gold-tone alloy', bg:'#3FDDA0', accent:'#2B1B3D',
    chips:['Adjustable band','Statement piece'], shape:'star', image:'images/p15.jpg'}
];

const REVIEW_POOL = [
  {name:'Ines T.', stars:5, text:"Even prettier in person! Shipped fast and the little thank-you note made my whole week."},
  {name:'Devon K.', stars:5, text:"Bought this as a gift and ended up ordering myself one too. The colors are so vivid."},
  {name:'Ari L.', stars:4, text:"Gorgeous piece, slightly smaller than I pictured, but the quality makes up for it completely."}
];

/* ---------------- state ---------------- */
let cart = [];
let currentFilter = 'All';
let currentProductId = null;

/* ---------------- svg illustrations ---------------- */
function productSVG(p, size){
  size = size || 200;
  const stroke = '#2B1B3D';
  let inner = '';
  switch(p.shape){
    case 'hoop-star':
      inner = `<circle cx="100" cy="90" r="52" fill="none" stroke="${stroke}" stroke-width="10"/>
        <path d="M100 138 l7 14 15 2 -11 11 3 15 -14 -7 -14 7 3 -15 -11 -11 15 -2z" fill="var(--pink)" stroke="${stroke}" stroke-width="4"/>`;
      break;
    case 'confetti':
      inner = `<circle cx="80" cy="90" r="14" fill="var(--pink)" stroke="${stroke}" stroke-width="4"/>
        <circle cx="120" cy="80" r="10" fill="var(--yellow)" stroke="${stroke}" stroke-width="4"/>
        <rect x="95" y="105" width="18" height="18" rx="4" fill="var(--purple)" stroke="${stroke}" stroke-width="4" transform="rotate(15 104 114)"/>
        <circle cx="105" cy="60" r="7" fill="#fff" stroke="${stroke}" stroke-width="4"/>`;
      break;
    case 'drop':
      inner = `<circle cx="100" cy="70" r="10" fill="none" stroke="${stroke}" stroke-width="6"/>
        <path d="M70 90 a30 30 0 1 0 60 0 q0 34 -30 55 q-30 -21 -30 -55z" fill="var(--pink)" stroke="${stroke}" stroke-width="5"/>`;
      break;
    case 'daisy':
      inner = `<ellipse cx="100" cy="75" rx="34" ry="14" fill="none" stroke="${stroke}" stroke-width="6"/>
        <g transform="translate(100 130)">
          ${[0,72,144,216,288].map(a=>`<ellipse cx="0" cy="-18" rx="9" ry="16" fill="#fff" stroke="${stroke}" stroke-width="3" transform="rotate(${a})"/>`).join('')}
          <circle r="9" fill="var(--yellow)" stroke="${stroke}" stroke-width="3"/>
        </g>`;
      break;
    case 'swirl':
      inner = `<path d="M100 60c30 0 40 25 25 45s-45 15-45 -5 20-25 35-15 5 30-15 30" fill="none" stroke="var(--yellow)" stroke-width="10" stroke-linecap="round"/>
        <path d="M100 60c30 0 40 25 25 45s-45 15-45 -5 20-25 35-15 5 30-15 30" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".6"/>`;
      break;
    case 'pearl-moon':
      inner = `${[0,1,2,3,4,5,6].map(i=>`<circle cx="${60+i*13}" cy="${60+Math.abs(3-i)*10}" r="9" fill="#fff" stroke="${stroke}" stroke-width="3"/>`).join('')}
        <path d="M108 118a20 20 0 1 1 0 -40 26 26 0 0 0 0 40z" fill="var(--yellow)" stroke="${stroke}" stroke-width="4"/>`;
      break;
    case 'cherry':
      inner = `<path d="M100 55v45" stroke="${stroke}" stroke-width="4" fill="none"/>
        <circle cx="86" cy="118" r="18" fill="var(--pink)" stroke="${stroke}" stroke-width="4"/>
        <circle cx="118" cy="112" r="18" fill="var(--pink)" stroke="${stroke}" stroke-width="4"/>
        <path d="M100 55c8 -10 20 -12 26 -6" stroke="var(--mint)" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      break;
    case 'beads':
      inner = `${['var(--pink)','var(--yellow)','var(--turquoise)','var(--purple)','var(--mint)','var(--pink)'].map((c,i)=>`<circle cx="${58+i*17}" cy="${70+Math.pow(i-2.5,2)*4}" r="11" fill="${c}" stroke="${stroke}" stroke-width="3"/>`).join('')}`;
      break;
    case 'locket':
      inner = `<path d="M78 70 a22 22 0 0 1 44 0 v18 a22 22 0 0 1 -44 0z" fill="var(--pink)" stroke="${stroke}" stroke-width="4"/>
        <circle cx="100" cy="60" r="7" fill="none" stroke="${stroke}" stroke-width="4"/>`;
      break;
    case 'star':
    default:
      inner = `<path d="M100 55 l12 28 30 3 -22 21 6 30 -26 -16 -26 16 6 -30 -22 -21 30 -3z" fill="var(--yellow)" stroke="${stroke}" stroke-width="5"/>`;
      break;
  }
  return `<svg viewBox="0 0 200 200" width="${size}" height="${size}" role="img" aria-label="${p.name} illustration">
    <circle cx="100" cy="100" r="94" fill="${p.bg}" opacity="0.55"/>
    ${inner}
  </svg>`;
}

/* ---------------- rendering: cards ---------------- */
function cardHTML(p){
  return `<div class="card">
    <div class="card-img" style="background:${p.bg}22" onclick="openProduct('${p.id}')">
      ${p.featured ? '<span class="card-tag">Fan fave</span>' : ''}
      <img src="${p.image}" alt="${p.name}" loading="lazy" width="150" height="150">
    </div>
    <div class="card-body">
      <span class="card-type">${p.type}</span>
      <span class="card-name" onclick="openProduct('${p.id}')">${p.name}</span>
      <span class="stars">★★★★★ <span class="rcount">(${p._reviewCount||120})</span></span>
      <div class="card-foot">
        <span class="price">$${p.price}</span>
        <button class="add-btn" title="Add to cart" onclick="event.stopPropagation(); addToCart('${p.id}',1);">+</button>
      </div>
    </div>
  </div>`;
}

PRODUCTS.forEach(p=>{ p._reviewCount = 80 + Math.floor((p.price*7) % 140); });

function renderFeatured(){
  const el = document.getElementById('featuredGrid');
  el.innerHTML = PRODUCTS.filter(p=>p.featured).map(cardHTML).join('');
}

function renderInsta(){
  const el = document.getElementById('instaGrid');
  el.innerHTML = PRODUCTS.slice(0,6).map((p,i)=>`
    <div class="insta-tile" onclick="showPage('shop')">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="insta-overlay">♥ ${120+i*15}</div>
    </div>`).join('');
}

/* ---------------- shop page ---------------- */
function setFilter(f){
  currentFilter = f;
  document.querySelectorAll('#filterPills .pill').forEach(b=>b.classList.toggle('active', b.dataset.filter===f));
  renderShop();
}

function filterAndShow(f){
  setFilter(f);
  showPage('shop');
}

function renderShop(){
  let list = PRODUCTS.filter(p=> currentFilter==='All' ? true : p.type===currentFilter);
  const sort = document.getElementById('sortSelect').value;
  if(sort==='low') list = list.slice().sort((a,b)=>a.price-b.price);
  if(sort==='high') list = list.slice().sort((a,b)=>b.price-a.price);
  document.getElementById('shopGrid').innerHTML = list.map(cardHTML).join('');
  document.getElementById('resultCount').textContent = `${list.length} piece${list.length===1?'':'s'}`;
}

/* ---------------- product detail ---------------- */
function openProduct(id){
  currentProductId = id;
  renderDetail();
  showPage('detail', true);
  window.scrollTo({top:0, behavior:'instant'});
}

function renderDetail(){
  const p = PRODUCTS.find(x=>x.id===currentProductId);
  if(!p) return;
  document.getElementById('pdContent').innerHTML = `
    <div class="pd-img" style="background:${p.bg}22"><img src="${p.image}" alt="${p.name}" loading="lazy" width="300" height="300"></div>
    <div>
      <span class="pd-type">${p.type}</span>
      <h1 class="pd-name">${p.name}</h1>
      <div class="pd-rating">★★★★★ <span>${p._reviewCount} reviews</span></div>
      <div class="pd-price">$${p.price}</div>
      <p class="pd-desc">${p.desc}</p>
      <div class="pd-meta">
        <span class="meta-chip">🧵 ${p.materials}</span>
        ${p.chips.map(c=>`<span class="meta-chip">${c}</span>`).join('')}
      </div>
      <div class="qty-row">
        <div class="qty-box">
          <button onclick="stepQty(-1)">−</button>
          <span id="pdQty">1</span>
          <button onclick="stepQty(1)">+</button>
        </div>
        <button class="btn btn-pink pd-add" onclick="addToCart('${p.id}', pdQtyVal())">Add to cart — $${p.price}</button>
      </div>
      <div class="trust-row">
        <div class="trust-item"><span class="ic">🖐️</span> Handmade to order</div>
        <div class="trust-item"><span class="ic">📦</span> Ships in 2–3 days</div>
        <div class="trust-item"><span class="ic">🎁</span> Free gift wrap</div>
      </div>
    </div>`;

  document.getElementById('pdReviews').innerHTML = REVIEW_POOL.map(r=>`
    <div class="review-card">
      <div class="review-top">
        <div class="avatar" style="background:var(--pink)">${r.name[0]}</div>
        <div><div class="review-name">${r.name}</div><div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div></div>
      </div>
      <p class="review-text">${r.text}</p>
    </div>`).join('');

  const related = PRODUCTS.filter(x=>x.type===p.type && x.id!==p.id).slice(0,4);
  document.getElementById('relatedGrid').innerHTML = related.map(cardHTML).join('');
  window._pdQty = 1;
  document.getElementById('pdQty').textContent = 1;
}

function stepQty(delta){
  window._pdQty = Math.max(1, (window._pdQty||1)+delta);
  document.getElementById('pdQty').textContent = window._pdQty;
}
function pdQtyVal(){ return window._pdQty||1; }

/* ---------------- cart ---------------- */
function addToCart(id, qty){
  const existing = cart.find(c=>c.id===id);
  if(existing){ existing.qty += qty; } else { cart.push({id, qty}); }
  updateCartCount();
  showToast('Added to cart! 🛍️');
}

function updateCartCount(){
  const count = cart.reduce((s,c)=>s+c.qty,0);
  document.getElementById('cartCount').textContent = count;
}

function changeQty(id, delta){
  const item = cart.find(c=>c.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(c=>c.id!==id);
  updateCartCount();
  renderCart();
}

function removeFromCart(id){
  cart = cart.filter(c=>c.id!==id);
  updateCartCount();
  renderCart();
}

function renderCart(){
  const el = document.getElementById('cartContent');
  if(cart.length===0){
    el.innerHTML = `<div class="empty-cart">
      <div style="display:flex; justify-content:center; margin-bottom:14px;"><img src="images/empty-cart.jpg" alt="Handmade jewelry" loading="lazy" width="140" height="140"></div>
      <h3>Your cart's feeling a little light</h3>
      <p>Go on, treat your ears (or your collarbones).</p>
      <button class="btn btn-pink" onclick="showPage('shop')">Start shopping →</button>
    </div>`;
    return;
  }
  const rows = cart.map(c=>{
    const p = PRODUCTS.find(x=>x.id===c.id);
    return `<div class="cart-item">
      <div class="cart-item-img" style="background:${p.bg}22"><img src="${p.image}" alt="${p.name}" loading="lazy" width="88" height="88"></div>
      <div>
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-type">${p.type}</div>
        <div class="remove-x" onclick="removeFromCart('${p.id}')" style="cursor:pointer;">Remove</div>
      </div>
      <div class="qty-box">
        <button onclick="changeQty('${p.id}',-1)">−</button>
        <span>${c.qty}</span>
        <button onclick="changeQty('${p.id}',1)">+</button>
      </div>
      <div class="price">$${(p.price*c.qty).toFixed(2)}</div>
    </div>`;
  }).join('');

  const subtotal = cart.reduce((s,c)=>{ const p = PRODUCTS.find(x=>x.id===c.id); return s + p.price*c.qty; },0);
  const shipping = subtotal >= 50 ? 0 : 5;
  const total = subtotal + shipping;

  el.innerHTML = `<div class="cart-grid">
    <div>${rows}</div>
    <div class="summary-card">
      <div class="summary-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${shipping===0?'Free 🎉':'$'+shipping.toFixed(2)}</span></div>
      ${shipping>0 ? `<div class="summary-row" style="color:var(--pink-deep);"><span>Add $${(50-subtotal).toFixed(2)} more for free shipping!</span><span></span></div>` : ''}
      <div class="summary-row total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
      <button class="btn btn-pink btn-full" style="margin-top:18px;" onclick="checkout()">Checkout →</button>
      <button class="btn btn-outline btn-full" style="margin-top:10px;" onclick="showPage('shop')">Keep shopping</button>
    </div>
  </div>`;
}

function checkout(){
  showToast("Yay! This is a demo store, but your order would've shipped 💌");
}

/* ---------------- newsletter ---------------- */
function joinNewsletter(e){
  e.preventDefault();
  document.getElementById('nlMsg').style.display = 'block';
  document.getElementById('nlEmail').value = '';
}

/* ---------------- toast ---------------- */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2400);
}

/* ---------------- page nav ---------------- */
function showPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.querySelectorAll('.navlink').forEach(l=>l.classList.toggle('current', l.dataset.nav===name));
  if(name==='shop') renderShop();
  if(name==='cart') renderCart();
  window.scrollTo({top:0, behavior:'smooth'});
}
function goHome(e){ e.preventDefault(); showPage('home'); }

/* ---------------- init ---------------- */
renderFeatured();
renderInsta();
renderShop();
updateCartCount();
