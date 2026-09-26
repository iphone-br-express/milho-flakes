const API_BASE_URL="https://milho-flakes.onrender.com";
const $=id=>document.getElementById(id);
const money=v=>Number(v).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const id=new URLSearchParams(location.search).get('id');
function fallbackProduct(){return (window.LOCAL_PRODUCTS||[]).find(x=>x.id===id);}
function productImage(p){return (window.REAL_PHOTOS&&window.REAL_PHOTOS[p.id])||`assets/products/${p.id}-front.svg`;}
async function api(path){const r=await fetch(API_BASE_URL+path,{cache:'no-store'});const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.message||`HTTP ${r.status}`);return d;}
function esc(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
(async()=>{try{
  let p=fallbackProduct();
  try{const d=await api('/api/products');p=(d.products||[]).find(x=>x.id===id)||p;}catch{}
  if(!p)throw new Error('Produto não encontrado.');
  const base=`assets/products/${p.id}`;const real=productImage(p);const colors=p.colors||['Preto','Branco','Azul','Dourado'];
  $("detail").innerHTML=`
  <div class="gallery">
    <div class="main-photo"><span class="sale big">30% OFF</span><img id="mainImage" src="${real}" alt="${esc(p.name)} ${esc(p.storage)}" onerror="this.onerror=null;this.src='${base}-front.svg'"></div>
    <div class="thumbs">
      <button class="photo-thumb active" data-src="${real}"><span>Frente</span><img src="${real}" alt="Frente do ${esc(p.name)}" onerror="this.onerror=null;this.src='${base}-front.svg'"></button>
      <button class="photo-thumb" data-view="back"><span>Traseira</span><img src="${base}-back.svg" alt="Traseira do ${esc(p.name)}"></button>
      <button class="photo-thumb" data-view="side"><span>Lateral</span><img src="${base}-side.svg" alt="Lateral do ${esc(p.name)}"></button>
    </div>
  </div>
  <section class="product-detail">
    <span class="eyebrow">OFERTA iPHONE EXPRESS</span><h1>${esc(p.name)}</h1><p class="storage large">${esc(p.storage)}</p>
    <div class="old">Referência de mercado: ${money(p.referencePrice)}</div><div class="detail-price">${money(p.price)}</div>
    <div class="color-box"><label for="color"><strong>Escolha a cor</strong><span>Conforme disponibilidade</span></label><select id="color">${colors.map((c,i)=>`<option value="${esc(c)}" ${i===0?'selected':''}>${esc(c)}</option>`).join('')}</select><small>A cor selecionada será registrada no pedido. A disponibilidade é confirmada no processamento.</small></div>
    <div class="included"><span>✓ Frete grátis</span><span>✓ Entrega Full em até 7 dias úteis</span><span>✓ Desconto de 30%</span><span>✓ Pagamento via Pix</span></div>
    <p class="desc">Escolha seu aparelho e a cor desejada. Depois informe os dados de entrega e siga para o pagamento.</p>
    <a class="buy large-buy" id="continueBuy" href="checkout.html?id=${encodeURIComponent(p.id)}">Continuar para dados de entrega →</a>
    <div class="delivery-note"><strong>🚚 Entrega Full</strong><br>Prazo de entrega: <strong>até 7 dias úteis</strong>.</div>
    <div class="secure">🔒 O preço do Pix é conferido pelo servidor e não é alterado pelo navegador.</div>
  </section>`;
  document.querySelectorAll('.thumbs button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.thumbs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');const src=b.dataset.src||`${base}-${b.dataset.view}.svg`;$('mainImage').src=src;}));
  $('continueBuy').addEventListener('click',e=>{e.preventDefault();const color=$('color').value;location.href=`checkout.html?id=${encodeURIComponent(p.id)}&color=${encodeURIComponent(color)}`;});
}catch(e){$("detail").innerHTML=`<div class="empty">${esc(e.message)}</div>`;}})();
