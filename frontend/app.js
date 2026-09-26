const API_BASE_URL = "https://milho-flakes.onrender.com";
const $ = (id) => document.getElementById(id);
let products = Array.isArray(window.LOCAL_PRODUCTS) ? window.LOCAL_PRODUCTS : [];
const money = v => Number(v).toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
function image(p, view='front'){ return `assets/products/${p.id}-${view}.svg`; }
const REAL_PHOTOS = {
  "iphone-x-64": "https://smartviets.com/upload/image/anh%20cu/x%20tr%E1%BA%AFng.jpg",
  "iphone-xr-64": "https://iziway.cm/images/thumbs/0084680_apple-iphone-xr-64gb-rom-3gb-ram-12mp-2942mah-3-mois-de-garantis.jpeg",
  "iphone-11-64": "https://swsg.co/media/catalog/product/a/p/apple_iphone_11_64gb_4gb_ram_white_-_iphone_11_7.jpg",
  "iphone-11-pro-64": "https://spacenet.tn/39176-large_default/iphone-11-pro-64-go-gold.jpg",
  "iphone-11-pro-max-64": "https://fixlygsm.ro/cdn/shop/files/res_f6e3f004b5a9a0d36fd4f1db3b157e4d.jpg?v=1744040823",
  "iphone-12-mini-64": "https://i.ebayimg.com/images/g/VuYAAOSwsqRkCbmo/s-l1600.jpg",
  "iphone-13-128": "https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_SL1500_.jpg",
  "iphone-13-pro-128": "https://www.trikart.com/media/catalog/product/g/r/graphite_1_2_5.jpg",
  "iphone-14-128": "https://i.moyo.ua/img/products/5236/71_4000.jpg",
  "iphone-15-128": "https://proinside.net/wa-data/public/shop/products/15/20/2015/images/9510/9510.970.jpg",
  "iphone-17-256": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-compare-iphone-17-202609?.v=M0dlUVBobHVpY1h1dmlaR3RZekpEL1l5N1hFTy9RTVZvRXBQbUJ5QTZYMUxxZU5scXpES1hnUm96ckN1R2pZN215d1FhSDJ0bkR0ZGZtUjZJNmFveGJIT1NwVjArc3diTWlTKzkwUStjL0U&fmt=png-alpha&hei=512&wid=400"
};
function productImage(p){ return REAL_PHOTOS[p.id] || image(p); }
function render(list){
  const grid=$("products");
  if(!list.length){ grid.innerHTML='<div class="empty">Nenhum iPhone encontrado.</div>'; $("count").textContent='0 modelos'; return; }
  $("count").textContent=`${list.length} opções`;
  grid.innerHTML=list.map(p=>`<article class="product-card"><a class="product-image" href="produto.html?id=${encodeURIComponent(p.id)}"><span class="sale">30% OFF</span><img src="${productImage(p)}" alt="${p.name} ${p.storage}" loading="lazy" onerror="this.onerror=null;this.src='${image(p)}'"></a><div class="product-info"><h3>${p.name}</h3><p class="storage">${p.storage}</p><div class="old">De ${money(p.referencePrice)}</div><div class="price">${money(p.price)}</div><div class="shipping">Frete grátis</div><a class="buy" href="produto.html?id=${encodeURIComponent(p.id)}">Ver produto</a></div></article>`).join('');
}
$("search").addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase();render(products.filter(p=>`${p.name} ${p.storage}`.toLowerCase().includes(q)));});
(async()=>{try{const r=await fetch(API_BASE_URL+'/api/products',{cache:'no-store'});const d=await r.json();if(!r.ok)throw new Error(d.message||`HTTP ${r.status}`);if(Array.isArray(d.products)&&d.products.length) products=d.products;render(products);}catch(e){render(products);$("catalogStatus").textContent='Catálogo carregado. O pagamento continua conectado ao servidor.';}})();
