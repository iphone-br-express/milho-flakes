const API_BASE_URL = "https://milho-flakes.onrender.com";
const $ = (id) => document.getElementById(id);
let products = [];
const money = v => Number(v).toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
async function api(path){ const r=await fetch(API_BASE_URL+path); const d=await r.json().catch(()=>({})); if(!r.ok) throw new Error(d.message||`HTTP ${r.status}`); return d; }
function image(p, view='front'){ return `assets/products/${p.id}-${view}.svg`; }
function render(list){
  const grid=$("products");
  if(!list.length){ grid.innerHTML='<div class="empty">Nenhum iPhone encontrado.</div>'; $("count").textContent='0 modelos'; return; }
  $("count").textContent=`${list.length} opções`;
  grid.innerHTML=list.map(p=>`<article class="product-card"><a class="product-image" href="produto.html?id=${encodeURIComponent(p.id)}"><span class="sale">20% OFF</span><img src="${image(p)}" alt="${p.name} ${p.storage}" loading="lazy"></a><div class="product-info"><h3>${p.name}</h3><p class="storage">${p.storage}</p><div class="old">De ${money(p.referencePrice)}</div><div class="price">${money(p.price)}</div><div class="shipping">Frete grátis</div><a class="buy" href="produto.html?id=${encodeURIComponent(p.id)}">Ver produto</a></div></article>`).join('');
}
$("search").addEventListener('input',e=>{const q=e.target.value.trim().toLowerCase(); render(products.filter(p=>`${p.name} ${p.storage}`.toLowerCase().includes(q)));});
(async()=>{try{const d=await api('/api/products'); products=d.products||[]; render(products);}catch(e){$("products").innerHTML=`<div class="empty">Não foi possível carregar o catálogo. ${e.message}</div>`;}})();
