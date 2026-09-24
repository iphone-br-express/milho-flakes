// Client ID informado na sua documentação
const CLIENT_ID = "live_eec90e700609f9de846014d41961db8a";

const form = document.getElementById("form");
const btn = document.getElementById("btn");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  btn.disabled = true;
  btn.textContent = "Gerando Pix...";

  try {
    // O frontend envia o Client ID ao seu backend.
    // O Client Secret continua SOMENTE no backend.
    const response = await fetch("/api/pagamento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": CLIENT_ID
      },
      body: JSON.stringify({
        amount: Number(document.getElementById("amount").value),
        description: document.getElementById("description").value,
        payerName: document.getElementById("payerName").value,
        payerDocument: document.getElementById("payerDocument").value.replace(/\D/g, "")
      })
    });

    const data = await response.json();
    if (!response.ok || !data.success) throw new Error(data.error || "Erro ao gerar pagamento.");

    let qr = "";
    if (data.qrcodeUrl?.startsWith("data:image")) {
      qr = `<img class="qr" src="${data.qrcodeUrl}" alt="QR Code Pix">`;
    }

    resultado.innerHTML = `
      <h2>Pix gerado</h2>
      ${qr}
      <p><b>Status:</b> ${esc(data.status || "PENDENTE")}</p>
      <p><b>Transação:</b> ${esc(data.transactionId || "-")}</p>
      <label>Pix copia e cola</label>
      <textarea id="pix" readonly>${esc(data.copyPaste || "")}</textarea>
      <button id="copiar" type="button">Copiar Pix</button>
    `;
    resultado.className = "";

    document.getElementById("copiar").onclick = async () => {
      await navigator.clipboard.writeText(data.copyPaste || "");
      document.getElementById("copiar").textContent = "Pix copiado!";
    };
  } catch (err) {
    resultado.innerHTML = `<p class="erro">${esc(err.message)}</p>`;
    resultado.className = "";
  } finally {
    btn.disabled = false;
    btn.textContent = "Gerar Pix";
  }
});

function esc(v) {
  return String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
