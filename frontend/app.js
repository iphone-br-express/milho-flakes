// O Client Secret fica somente no backend do Render.
const API_BASE_URL = "https://milho-flakes.onrender.com";

let transactionId = null;

function el(id){ return document.getElementById(id); }

function msg(text,error=false){
  const node=el("message");
  if(!node)return;
  node.textContent=text;
  node.style.color=error?"#b42318":"#087443";
}

async function request(path,options={}){
  const response=await fetch(API_BASE_URL+path,{
    ...options,
    headers:{
      "Content-Type":"application/json",
      ...(options.headers||{})
    }
  });
  const data=await response.json().catch(()=>({}));
  if(!response.ok) throw new Error(data.message||data.error||`Erro HTTP ${response.status}`);
  return data;
}

el("depositForm").addEventListener("submit",async event=>{
  event.preventDefault();
  try{
    const amount=Number(el("amount").value);
    const payerName=el("payerName").value.trim();
    const payerDocument=el("payerDocument").value.replace(/\D/g,"");
    if(!amount||amount<=0)throw new Error("Informe um valor válido.");
    if(!payerName)throw new Error("Informe o nome.");
    if(!payerDocument)throw new Error("Informe o CPF.");

    msg("Gerando PIX...");
    const data=await request("/api/deposit",{
      method:"POST",
      body:JSON.stringify({
        amount,
        description:el("description").value||"Pagamento PIX",
        payerName,
        payerDocument
      })
    });

    transactionId=data.transactionId||data.transaction?.id||null;
    el("transactionId").textContent=transactionId||"-";
    el("status").textContent=data.status||data.transaction?.status||"PENDING";
    el("copyPaste").value=data.copyPaste||data.pix?.copyPaste||data.qrCode?.copyPaste||"";

    const qrUrl=data.qrcodeUrl||data.qrCodeUrl||data.qrCode?.url||"";
    if(qrUrl&&/^https?:\/\//i.test(String(qrUrl))){
      el("qr").src=qrUrl;
      el("qr").classList.remove("hidden");
    }else{
      el("qr").classList.add("hidden");
    }

    el("result").classList.remove("hidden");
    msg("PIX gerado com sucesso.");
  }catch(error){
    console.error(error);
    msg(error.message||"Erro ao gerar PIX.",true);
  }
});

el("copyBtn").addEventListener("click",async()=>{
  try{
    const value=el("copyPaste").value;
    if(!value)throw new Error("Não há código PIX para copiar.");
    await navigator.clipboard.writeText(value);
    msg("Código PIX copiado.");
  }catch(error){msg(error.message||"Não foi possível copiar.",true);}
});

el("checkBtn").addEventListener("click",async()=>{
  if(!transactionId){msg("Gere um PIX primeiro.",true);return;}
  try{
    msg("Consultando pagamento...");
    const data=await request("/api/transactions/check?transactionId="+encodeURIComponent(transactionId));
    const status=data.transaction?.transactionState||data.transaction?.status||data.status||"UNKNOWN";
    el("status").textContent=status;
    msg("Status atualizado: "+status);
  }catch(error){
    console.error(error);
    msg(error.message||"Erro ao consultar status.",true);
  }
});
