```js
window.API_BASE_URL = "https://milho-flakes.onrender.com";

const money = v =>
  Number(v).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

/* =========================================================
   PRODUTOS
========================================================= */

let products = Array.isArray(window.LOCAL_PRODUCTS)
  ? window.LOCAL_PRODUCTS
  : [];

/* =========================================================
   IMAGENS
========================================================= */

function image(p) {
  return `assets/products/${p.id}-front.svg`;
}

function productImage(p) {
  return (
    (window.REAL_PHOTOS && window.REAL_PHOTOS[p.id]) ||
    image(p)
  );
}

function galleryFor(p) {
  return (
    (window.REAL_GALLERIES &&
      window.REAL_GALLERIES[p.id]) ||
    [productImage(p)]
  );
}

/* =========================================================
   RENDERIZAÇÃO DO CATÁLOGO
========================================================= */

function render(list) {
  const grid = document.getElementById("products");
  const count = document.getElementById("count");

  /*
   * Se estamos na página produto.html,
   * não existe catálogo para renderizar.
   */
  if (!grid) {
    return;
  }

  if (!list.length) {
    grid.innerHTML =
      '<div class="empty">Nenhum iPhone encontrado.</div>';

    if (count) {
      count.textContent = "0 modelos";
    }

    return;
  }

  if (count) {
    count.textContent = `${list.length} opções`;
  }

  grid.innerHTML = list
    .map(p => {
      const g = galleryFor(p);

      return `
        <article class="product-card">

          <a
            class="product-image"
            href="produto.html?id=${encodeURIComponent(p.id)}"
          >
            <span class="sale">30% OFF</span>

            <img
              src="${productImage(p)}"
              alt="${p.name} ${p.storage}"
              loading="lazy"
              onerror="this.onerror=null;this.src='${image(p)}'"
            >
          </a>

          <div class="product-info">

            <h3>${p.name}</h3>

            <p class="storage">
              ${p.storage}
            </p>

            <div class="trust-badges">
              <span>✓ NOVO</span>
              <span>✓ TESTADO</span>
            </div>

            <div class="old">
              De ${money(p.referencePrice)}
            </div>

            <div class="price">
              ${money(p.price)}
            </div>

            <div class="shipping">
              Frete grátis • Full até 7 dias úteis
            </div>

            <div class="mini-gallery">
              ${g
                .slice(0, 3)
                .map(
                  src => `
                    <img
                      src="${src}"
                      alt="${p.name}"
                      loading="lazy"
                      onerror="this.style.display='none'"
                    >
                  `
                )
                .join("")}
            </div>

            <a
              class="buy"
              href="produto.html?id=${encodeURIComponent(p.id)}"
            >
              Ver produto
            </a>

          </div>
        </article>
      `;
    })
    .join("");
}

/* =========================================================
   PESQUISA
========================================================= */

function setupSearch() {
  const search = document.getElementById("search");

  /*
   * Na página produto.html não existe #search.
   * Portanto simplesmente não fazemos nada.
   */
  if (!search) {
    return;
  }

  search.addEventListener("input", e => {
    const q = e.target.value
      .trim()
      .toLowerCase();

    const filtered = products.filter(p =>
      `${p.name} ${p.storage}`
        .toLowerCase()
        .includes(q)
    );

    render(filtered);
  });
}

/* =========================================================
   CARREGAR PRODUTOS DO SERVIDOR
========================================================= */

async function loadCatalog() {
  /*
   * Se não existe catálogo nesta página,
   * não fazemos requisição desnecessária.
   */
  if (!document.getElementById("products")) {
    return;
  }

  const ctl = new AbortController();

  const timer = setTimeout(() => {
    ctl.abort();
  }, 6000);

  try {
    const r = await fetch(
      `${window.API_BASE_URL}/api/products`,
      {
        cache: "no-store",
        signal: ctl.signal
      }
    );

    const d = await r.json().catch(() => ({}));

    if (!r.ok) {
      throw new Error(
        d.message || `HTTP ${r.status}`
      );
    }

    if (
      Array.isArray(d.products) &&
      d.products.length
    ) {
      products = d.products;
    }

  } catch (e) {

    const status =
      document.getElementById("catalogStatus");

    if (status) {
      status.textContent =
        "Catálogo local carregado. O servidor de pagamento continua conectado.";
    }

  } finally {

    clearTimeout(timer);

    render(products);
  }
}

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

setupSearch();
loadCatalog();
```
