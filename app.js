// TESTE DIRETO NO GITHUB PAGES.
// NÃO use credenciais de produção em um site público.
// Preencha as credenciais abaixo apenas para um teste temporário.

const CONFIG = {
  API_URL: "https://api-pluspix.squareweb.app",
  CLIENT_ID: "live_eec90e7e0609f9de846014d41961db8a",
  CLIENT_SECRET: sk_af8ad02acee2cfea842fc4525b6ea9edb8060476c7d650a0f26827567c664ace"
};

const $ = (id) => document.getElementById(id);
let currentTransactionId = "";

function headers() {
  return {
    "Content-Type": "application/json",
    "x-client-id": CONFIG.CLIENT_ID,
    "x-client-secret": CONFIG.CLIENT_SECRET
  };
}

function showMessage(text, error = false) {
  $("message").textContent = text;
  $("message").style.color = error ? "#b91c1c" : "#166534";
}

$("depositForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  showMessage("Gerando PIX...");
  try {
    const amount = Number($("amount").value);
    if (!amount || amount <= 0) throw new Error("Informe um valor válido.");

    const body = {
      amount,
      description: $("description").value || "Pagamento PIX",
      payerName: $("payerName").value.trim(),
      payerDocument: $("payerDocument").value.replace(/\D/g, "")
    };

    const response = await fetch(`${CONFIG.API_URL}/api/v1/deposit`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(body)
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.success === false) {
      throw new Error(data.message || data.error || `HTTP ${response.status}`);
    }

    currentTransactionId = data.transactionId || data.transaction?.id || "";
    $("transactionId").textContent = currentTransactionId || "-";
    $("status").textContent = data.status || data.transaction?.status || "PENDING";

    const copyPaste = data.copyPaste || data.pix?.copyPaste || data.qrCode?.copyPaste || "";
    $("copyPaste").value = copyPaste;

    const qrUrl = data.qrcodeUrl || data.qrCodeUrl || data.qrCode?.url || "";
    if (qrUrl && /^https?:\/\//i.test(qrUrl)) {
      $("qr").src = qrUrl;
      $("qr").classList.remove("hidden");
    } else {
      $("qr").classList.add("hidden");
    }

    $("result").classList.remove("hidden");
    showMessage("PIX criado. Aguarde o pagamento e consulte o status.");
  } catch (err) {
    showMessage(`Erro: ${err.message}`, true);
  }
});

$("copyBtn").addEventListener("click", async () => {
  const value = $("copyPaste").value;
  if (!value) return showMessage("Não há código Pix para copiar.", true);
  await navigator.clipboard.writeText(value);
  showMessage("Pix Copia e Cola copiado.");
});

$("checkBtn").addEventListener("click", async () => {
  if (!currentTransactionId) return showMessage("Gere um PIX primeiro.", true);
  showMessage("Consultando pagamento...");
  try {
    const response = await fetch(
      `${CONFIG.API_URL}/api/transactions/check?transactionId=${encodeURIComponent(currentTransactionId)}`,
      { headers: headers() }
    );
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.message || `HTTP ${response.status}`);

    const tx = data.transaction || data;
    $("status").textContent = tx.status || data.status || "UNKNOWN";
    showMessage(`Status atualizado: ${$("status").textContent}`);
  } catch (err) {
    showMessage(`Erro ao consultar: ${err.message}`, true);
  }
});
