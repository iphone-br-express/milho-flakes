require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || "*" }));
app.use(express.json());

const API = process.env.PAYBR_API_URL || "https://api-pluspix.squareweb.app";
const ID = process.env.PAYBR_CLIENT_ID;
const SECRET = process.env.PAYBR_CLIENT_SECRET;

function headers() {
  if (!ID || !SECRET) throw new Error("Credenciais PAYbr não configuradas no servidor.");
  return {
    "x-client-id": ID,
    "x-client-secret": SECRET,
    "Content-Type": "application/json"
  };
}

async function paybr(path, options = {}) {
  const response = await fetch(`${API}${path}`, {
    ...options,
    headers: { ...headers(), ...(options.headers || {}) }
  });
  const text = await response.text();
  let data;
  try { data = JSON.parse(text); } catch { data = { raw: text }; }
  if (!response.ok) {
    const err = new Error(data?.message || `PAYbr HTTP ${response.status}`);
    err.status = response.status;
    err.data = data;
    throw err;
  }
  return data;
}

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.get("/api/balance", async (_req, res) => {
  try { res.json(await paybr("/api/v1/balance")); }
  catch (e) { res.status(e.status || 500).json({ success:false, message:e.message, details:e.data }); }
});

app.post("/api/deposit", async (req, res) => {
  const { amount, description, payerName, payerDocument } = req.body || {};
  if (!(Number(amount) > 0) || !description || !payerName || !payerDocument) {
    return res.status(400).json({ success:false, message:"Informe valor, descrição, nome e CPF." });
  }
  try {
    const data = await paybr("/api/v1/deposit", {
      method: "POST",
      body: JSON.stringify({
        amount: Number(amount),
        description: String(description),
        payerName: String(payerName),
        payerDocument: String(payerDocument).replace(/\D/g, "")
      })
    });
    res.json(data);
  } catch (e) {
    res.status(e.status || 500).json({ success:false, message:e.message, details:e.data });
  }
});

app.post("/api/withdraw", async (req, res) => {
  const { amount, pixKey, pixKeyType, description } = req.body || {};
  const allowed = ["CPF","CNPJ","EMAIL","PHONE","EVP"];
  if (!(Number(amount) > 0) || !pixKey || !allowed.includes(String(pixKeyType).toUpperCase())) {
    return res.status(400).json({ success:false, message:"Informe valor, chave PIX e tipo de chave válido." });
  }
  try {
    const data = await paybr("/api/v1/withdraw", {
      method: "POST",
      body: JSON.stringify({
        amount: Number(amount),
        pixKey: String(pixKey),
        pixKeyType: String(pixKeyType).toUpperCase(),
        ...(description ? { description: String(description) } : {})
      })
    });
    res.json(data);
  } catch (e) {
    res.status(e.status || 500).json({ success:false, message:e.message, details:e.data });
  }
});

app.get("/api/transactions/check", async (req, res) => {
  const transactionId = req.query.transactionId;
  if (!transactionId) return res.status(400).json({ success:false, message:"Informe transactionId." });
  try {
    const data = await paybr(`/api/transactions/check?transactionId=${encodeURIComponent(transactionId)}`);
    res.json(data);
  } catch (e) {
    res.status(e.status || 500).json({ success:false, message:e.message, details:e.data });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`PAYbr backend rodando na porta ${process.env.PORT || 3000}`);
});
