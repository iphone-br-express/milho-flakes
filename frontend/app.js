// ======================================================
// FRONTEND - GitHub Pages
// O Client Secret NÃO deve ficar neste arquivo.
// As credenciais ficam protegidas no backend do Render.
// ======================================================

const API_BASE_URL = "https://milho-flakes.onrender.com";

let transactionId = null;

// ------------------------------------------------------
// Funções auxiliares
// ------------------------------------------------------

function el(id) {
  return document.getElementById(id);
}

function msg(text, error = false) {
  const message = el("message");

  if (!message) return;

  message.textContent = text;
  message.style.color = error ? "#b42318" : "#087443";
}

async function request(path, options = {}) {
  const response = await fetch(API_BASE_URL + path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.message ||
      data.error ||
      `Erro HTTP ${response.status}`
    );
  }

  return data;
}

// ------------------------------------------------------
// GERAR PIX
// ------------------------------------------------------

const depositBtn = el("depositBtn");

if (depositBtn) {
  depositBtn.onclick = async () => {
    try {
      const amount = Number(el("amount")?.value);

      if (!amount || amount <= 0) {
        throw new Error("Informe um valor válido.");
      }

      msg("Gerando cobrança...");

      const data = await request("/api/deposit", {
        method: "POST",
        body: JSON.stringify({
          amount: amount,
          description: el("description")?.value || "Pagamento PIX",
          payerName: el("payerName")?.value?.trim() || "",
          payerDocument:
            el("payerDocument")?.value?.replace(/\D/g, "") || ""
        })
      });

      transactionId = data.transactionId || null;

      const pixCard = el("pixCard");

      if (pixCard) {
        pixCard.classList.remove("hidden");
      }

      const pixInfo = el("pixInfo");

      if (pixInfo) {
        pixInfo.textContent =
          `Transação: ${transactionId || "-"} | Status: ${data.status || "-"}`;
      }

      const copyPaste = el("copyPaste");

      if (copyPaste) {
        copyPaste.value =
          data.copyPaste ||
          data.pix?.copyPaste ||
          data.qrCode?.copyPaste ||
          "";
      }

      const qr = el("qr");

      const qrUrl =
        data.qrcodeUrl ||
        data.qrCodeUrl ||
        data.qrCode?.url ||
        "";

      if (
        qr &&
        qrUrl &&
        /^https?:\/\//i.test(String(qrUrl))
      ) {
        qr.src = qrUrl;
        qr.classList.remove("hidden");
      } else if (qr) {
        qr.classList.add("hidden");
      }

      msg("PIX gerado com sucesso.");

    } catch (error) {
      console.error(error);
      msg(error.message || "Erro ao gerar PIX.", true);
    }
  };
}

// ------------------------------------------------------
// COPIAR PIX COPIA E COLA
// ------------------------------------------------------

const copyBtn = el("copyBtn");

if (copyBtn) {
  copyBtn.onclick = async () => {
    try {
      const copyPaste = el("copyPaste");

      if (!copyPaste || !copyPaste.value) {
        msg("Não há código PIX para copiar.", true);
        return;
      }

      await navigator.clipboard.writeText(copyPaste.value);

      msg("Código PIX copiado.");

    } catch (error) {
      console.error(error);
      msg("Não foi possível copiar o código PIX.", true);
    }
  };
}

// ------------------------------------------------------
// CONSULTAR STATUS DO PIX
// ------------------------------------------------------

const statusBtn = el("statusBtn");

if (statusBtn) {
  statusBtn.onclick = async () => {

    if (!transactionId) {
      msg("Nenhuma transação para consultar.", true);
      return;
    }

    try {
      msg("Consultando pagamento...");

      const data = await request(
        "/api/transactions/check?transactionId=" +
        encodeURIComponent(transactionId)
      );

      const status =
        data.transaction?.transactionState ||
        data.transaction?.status ||
        data.status ||
        "UNKNOWN";

      const pixInfo = el("pixInfo");

      if (pixInfo) {
        pixInfo.textContent =
          `Transação: ${transactionId} | Status: ${status}`;
      }

      msg("Status atualizado: " + status);

    } catch (error) {
      console.error(error);
      msg(error.message || "Erro ao consultar status.", true);
    }
  };
}

// ------------------------------------------------------
// CONSULTAR SALDO
// ------------------------------------------------------

const balanceBtn = el("balanceBtn");

if (balanceBtn) {
  balanceBtn.onclick = async () => {

    try {
      msg("Consultando saldo...");

      const data = await request("/api/balance");

      const balance = el("balance");

      if (balance) {
        balance.textContent =
          JSON.stringify(data, null, 2);
      }

      msg("Saldo atualizado.");

    } catch (error) {
      console.error(error);
      msg(error.message || "Erro ao consultar saldo.", true);
    }
  };
}

// ------------------------------------------------------
// SAQUE / TRANSFERÊNCIA PIX
// ------------------------------------------------------

const withdrawBtn = el("withdrawBtn");

if (withdrawBtn) {
  withdrawBtn.onclick = async () => {

    try {
      const amount = Number(
        el("withdrawAmount")?.value
      );

      const pixKey =
        el("pixKey")?.value?.trim() || "";

      const pixKeyType =
        el("pixKeyType")?.value || "";

      const description =
        el("withdrawDescription")?.value || "";

      if (!amount || amount <= 0) {
        throw new Error("Informe um valor válido.");
      }

      if (!pixKey) {
        throw new Error("Informe a chave PIX.");
      }

      msg("Processando transferência...");

      const data = await request("/api/withdraw", {
        method: "POST",
        body: JSON.stringify({
          amount: amount,
          pixKey: pixKey,
          pixKeyType: pixKeyType,
          description: description
        })
      });

      msg(
        "Transferência enviada: " +
        (data.transactionId ||
         data.status ||
         "OK")
      );

    } catch (error) {
      console.error(error);
      msg(
        error.message ||
        "Erro ao processar transferência.",
        true
      );
    }
  };
}

// ------------------------------------------------------
// TESTE DE CONEXÃO COM O BACKEND
// ------------------------------------------------------

console.log(
  "Backend configurado:",
  API_BASE_URL
);