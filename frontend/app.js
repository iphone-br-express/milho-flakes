// Troque pela URL pública do seu backend.
// Exemplo: https://seu-backend.exemplo.com
const API_BASE_URL = "https://milho-flakes.onrender.com";

let transactionId = null;

function el(id){ return document.getElementById(id); }
function msg(text, error=false){ el("message").textContent = text; el("message").style.color = error ? "#b42318" : "#087443"; }

async function request(path, options={}) {
  if (API_BASE_URL.includes("SEU-BACKEND")) throw new Error("Configure API_BASE_URL em frontend/app.js com a URL do backend.");
  const r = await fetch(API_BASE_URL + path, {headers:{"Content-Type":"application/json"}, ...options});
  const data = await r.json().catch(()=>({}));
  if(!r.ok) throw new Error(data.message || "Erro na API");
  return data;
}

el("depositBtn").onclick = async () => {
  try {
    msg("Gerando cobrança...");
    const data = await request("/api/deposit", {method:"POST", body:JSON.stringify({
      amount: Number(el("amount").value),
      description: el("description").value,
      payerName: el("payerName").value,
      payerDocument: el("payerDocument").value
    })});
    transactionId = data.transactionId;
    el("pixCard").classList.remove("hidden");
    el("pixInfo").textContent = `Transação: ${transactionId || "-"} | Status: ${data.status || "-"}`;
    el("copyPaste").value = data.copyPaste || "";
    if (data.qrcodeUrl && !String(data.qrcodeUrl).startsWith("base64:")) {
      el("qr").src = data.qrcodeUrl; el("qr").classList.remove("hidden");
    } else el("qr").classList.add("hidden");
    msg("PIX gerado.");
  } catch(e){ msg(e.message,true); }
};

el("copyBtn").onclick = async () => {
  await navigator.clipboard.writeText(el("copyPaste").value);
  msg("Código PIX copiado.");
};

el("statusBtn").onclick = async () => {
  if(!transactionId) return msg("Nenhuma transação para consultar.", true);
  try {
    const data = await request("/api/transactions/check?transactionId="+encodeURIComponent(transactionId));
    el("pixInfo").textContent = `Transação: ${transactionId} | Status: ${data.transaction?.transactionState || data.status || "-"}`;
    msg("Status atualizado.");
  } catch(e){ msg(e.message,true); }
};

el("balanceBtn").onclick = async () => {
  try { el("balance").textContent = JSON.stringify(await request("/api/balance"),null,2); }
  catch(e){ msg(e.message,true); }
};

el("withdrawBtn").onclick = async () => {
  try {
    msg("Processando transferência...");
    const data = await request("/api/withdraw", {method:"POST", body:JSON.stringify({
      amount:Number(el("withdrawAmount").value),
      pixKey:el("pixKey").value,
      pixKeyType:el("pixKeyType").value,
      description:el("withdrawDescription").value
    })});
    msg("Transferência enviada: " + (data.transactionId || data.status || "OK"));
  } catch(e){ msg(e.message,true); }
};
