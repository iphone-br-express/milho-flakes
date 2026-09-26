```js
/* =========================================================
   PRODUTO
========================================================= */

const $ = id =>
  document.getElementById(id);

const money = v =>
  Number(v).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

const id =
  new URLSearchParams(location.search).get("id");

/* =========================================================
   PRODUTO LOCAL
========================================================= */

function fallbackProduct() {
  return (
    window.LOCAL_PRODUCTS || []
  ).find(x => x.id === id);
}

/* =========================================================
   IMAGENS
========================================================= */

function productImage(p) {
  return (
    (window.REAL_PHOTOS &&
      window.REAL_PHOTOS[p.id]) ||
    `assets/products/${p.id}-front.svg`
  );
}

function gallery(p) {
  return (
    (window.REAL_GALLERIES &&
      window.REAL_GALLERIES[p.id]) ||
    [productImage(p)]
  );
}

/* =========================================================
   CORES
========================================================= */

function colors(p) {
  return (
    (window.FAMILY_COLORS &&
      window.FAMILY_COLORS[p.id]) ||
    ["Preto", "Branco", "Azul"]
  );
}

function colorHex(c) {
  const x = c.toLowerCase();

  if (x.includes("rosa"))
    return "#f3b5c7";

  if (x.includes("azul"))
    return "#5c82c9";

  if (x.includes("verde"))
    return "#8eaf9c";

  if (
    x.includes("roxo") ||
    x.includes("lavanda")
  )
    return "#9c8bc4";

  if (
    x.includes("amarelo") ||
    x.includes("dourado")
  )
    return "#d9bb67";

  if (
    x.includes("branco") ||
    x.includes("prateado") ||
    x.includes("estelar") ||
    x.includes("glacial")
  )
    return "#f4f4f0";

  if (
    x.includes("vermelho") ||
    x.includes("red")
  )
    return "#c8102e";

  if (
    x.includes("preto") ||
    x.includes("grafite") ||
    x.includes("espacial")
  )
    return "#222";

  if (x.includes("laranja"))
    return "#e56a22";

  if (x.includes("bordô"))
    return "#6b2737";

  return "#888";
}

/* =========================================================
   API
========================================================= */

async function api(path) {
  const ctl =
    new AbortController();

  const timer =
    setTimeout(() => {
      ctl.abort();
    }, 6000);

  try {

    const r = await fetch(
      `${window.API_BASE_URL}${path}`,
      {
        cache: "no-store",
        signal: ctl.signal
      }
    );

    const d =
      await r.json().catch(() => ({}));

    if (!r.ok) {
      throw new Error(
        d.message ||
        `HTTP ${r.status}`
      );
    }

    return d;

  } finally {

    clearTimeout(timer);
  }
}

/* =========================================================
   ESCAPE HTML
========================================================= */

function esc(v) {
  return String(v).replace(
    /[&<>"']/g,
    c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[c])
  );
}

/* =========================================================
   RENDERIZAÇÃO
========================================================= */

function renderProduct(p) {

  const detail =
    $("detail");

  if (!detail) {
    return;
  }

  const imgs =
    (gallery(p) || [])
      .filter(Boolean)
      .slice(0, 3);

  const cs =
    colors(p);

  const fallback =
    `assets/products/${p.id}-front.svg`;

  const colorPhotos =
    (window.COLOR_PHOTOS &&
      window.COLOR_PHOTOS[p.id]) ||
    {};

  let selected =
    cs[0] || "Preto";

  const firstImg =
    imgs[0] || fallback;

  detail.innerHTML = `

    <div class="gallery">

      <div class="main-photo">

        <span class="sale big">
          30% OFF
        </span>

        <img
          id="mainImage"
          src="${esc(firstImg)}"
          alt="${esc(p.name)} ${esc(p.storage)}"
        >

      </div>

      <div class="photo-source">
        Fotos reais/de referência do modelo.
        A disponibilidade da cor é confirmada
        antes do envio.
      </div>

      <div class="thumbs">

        ${imgs
          .map(
            (src, i) => `
              <button
                class="photo-thumb ${
                  i === 0
                    ? "active"
                    : ""
                }"
                data-src="${esc(src)}"
                type="button"
              >

                <span>
                  ${
                    [
                      "Foto principal",
                      "Traseira",
                      "Outra vista"
                    ][i]
                  }
                </span>

                <img
                  src="${esc(src)}"
                  alt="${esc(p.name)}"
                >

              </button>
            `
          )
          .join("")}

      </div>

    </div>

    <section class="product-detail">

      <span class="eyebrow">
        OFERTA iPHONE EXPRESS
      </span>

      <h1>
        ${esc(p.name)}
      </h1>

      <p class="storage large">
        ${esc(p.storage)}
      </p>

      <div class="trust-badges">
        <span>✓ NOVO</span>
        <span>✓ TESTADO</span>
        <span>✓ 30% OFF</span>
      </div>

      <div class="old">
        Referência de mercado:
        ${money(p.referencePrice)}
      </div>

      <div class="detail-price">
        ${money(p.price)}
      </div>

      <div class="color-box">

        <label>
          <strong>
            Escolha a cor
          </strong>

          <span>
            Conforme disponibilidade
          </span>
        </label>

        <div
          class="color-options"
          id="colorOptions"
        >

          ${cs
            .map(
              (c, i) => `
                <button
                  type="button"
                  class="color-option ${
                    i === 0
                      ? "selected"
                      : ""
                  }"
                  data-color="${esc(c)}"
                >

                  <i
                    style="background:${colorHex(c)}"
                  ></i>

                  <span>
                    ${esc(c)}
                  </span>

                </button>
              `
            )
            .join("")}

        </div>

        <div class="selected-color">

          <span>
            Cor selecionada
          </span>

          <strong id="selectedColor">
            ${esc(selected)}
          </strong>

        </div>

        <small>
          A cor marcada acompanha o pedido.
          A disponibilidade é confirmada antes
          do envio.
        </small>

      </div>

      <div class="included">

        <span>✓ Frete grátis</span>

        <span>
          ✓ Entrega Full — até 7 dias úteis
        </span>

        <span>
          ✓ Produto novo e testado
        </span>

        <span>
          ✓ Pagamento via Pix
        </span>

      </div>

      <p class="desc">
        Aparelho novo e testado.
        Escolha a cor desejada conforme
        disponibilidade e informe os dados
        de entrega para continuar.
      </p>

      <a
        class="buy large-buy"
        id="continueBuy"
        href="checkout.html?id=${encodeURIComponent(
          p.id
        )}&color=${encodeURIComponent(
          selected
        )}"
      >
        Continuar para dados de entrega →
      </a>

      <div class="delivery-note">

        <strong>
          🚚 Entrega Full
        </strong>

        <br>

        Prazo informado na loja:
        <strong>
          até 7 dias úteis
        </strong>.

      </div>

      <div class="secure">
        🔒 O preço do Pix é conferido
        pelo servidor e não é alterado
        pelo navegador.
      </div>

    </section>
  `;

  /* =======================================================
     GALERIA
  ======================================================= */

  const main =
    $("mainImage");

  document
    .querySelectorAll(".photo-thumb")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              ".photo-thumb"
            )
            .forEach(x =>
              x.classList.remove(
                "active"
              )
            );

          button.classList.add(
            "active"
          );

          main.src =
            button.dataset.src;
        }
      );

    });

  /* =======================================================
     CORES
  ======================================================= */

  document
    .querySelectorAll(".color-option")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              ".color-option"
            )
            .forEach(x =>
              x.classList.remove(
                "selected"
              )
            );

          button.classList.add(
            "selected"
          );

          selected =
            button.dataset.color;

          const selectedColor =
            $("selectedColor");

          if (selectedColor) {
            selectedColor.textContent =
              selected;
          }

          /*
           * Se existir uma foto específica
           * para a cor selecionada,
           * mostramos essa foto.
           */

          if (
            colorPhotos[selected]
          ) {

            main.src =
              colorPhotos[selected];

            document
              .querySelectorAll(
                ".photo-thumb"
              )
              .forEach(x =>
                x.classList.remove(
                  "active"
                )
              );

          }

        }
      );

    });

  /* =======================================================
     BOTÃO COMPRAR
  ======================================================= */

  const continueBuy =
    $("continueBuy");

  if (continueBuy) {

    continueBuy.addEventListener(
      "click",
      e => {

        e.preventDefault();

        location.href =
          `checkout.html?id=${encodeURIComponent(
            p.id
          )}&color=${encodeURIComponent(
            selected
          )}`;
      }
    );

  }

  /* =======================================================
     FALLBACK DE IMAGEM
  ======================================================= */

  if (main) {

    main.addEventListener(
      "error",
      () => {

        if (
          main.src.endsWith(
            fallback
          )
        ) {
          return;
        }

        main.src =
          fallback;
      }
    );

  }
}

/* =========================================================
   INICIALIZAÇÃO
========================================================= */

(function () {

  try {

    let p =
      fallbackProduct();

    if (!p) {
      throw new Error(
        "Produto não encontrado."
      );
    }

    /*
     * Mostra imediatamente o produto
     * usando os dados locais.
     */
    renderProduct(p);

    /*
     * Depois tenta atualizar os dados
     * através do servidor.
     */
    api("/api/products")
      .then(d => {

        const fresh =
          (d.products || [])
            .find(x => x.id === id);

        if (fresh) {
          renderProduct(fresh);
        }

      })
      .catch(() => {
        /*
         * Se o servidor estiver indisponível,
         * mantém o produto local.
         */
      });

  } catch (e) {

    const detail =
      $("detail");

    if (detail) {

      detail.innerHTML = `

        <div class="empty">

          <h2>
            Não foi possível carregar o produto.
          </h2>

          <p>
            ${esc(e.message)}
          </p>

          <a
            class="buy"
            href="index.html"
          >
            Voltar à loja
          </a>

        </div>

      `;
    }

  }

})();
```
