const express=require("express");
const cors=require("cors");
require("dotenv").config();

const app=express();
const PORT=process.env.PORT||3000;
const API_URL=(process.env.PAYBR_API_URL||"https://api-pluspix.squareweb.app").replace(/\/$/,"");
const CLIENT_ID=process.env.PAYBR_CLIENT_ID;
const CLIENT_SECRET=process.env.PAYBR_CLIENT_SECRET;
const ALLOWED_ORIGIN=process.env.ALLOWED_ORIGIN||"https://iphone-br-express.github.io";

app.use(cors({origin:ALLOWED_ORIGIN,methods:["GET","POST","OPTIONS"],allowedHeaders:["Content-Type"]}));
app.use(express.json());

function authHeaders(){
  if(!CLIENT_ID||!CLIENT_SECRET)throw new Error("Credenciais do PlusPix não configuradas no servidor.");
  return {"Content-Type":"application/json","x-client-id":CLIENT_ID,"x-client-secret":CLIENT_SECRET};
}

async function pluspix(path,options={}){
  const response=await fetch(API_URL+path,{...options,headers:{...authHeaders(),...(options.headers||{})}});
  const text=await response.text();
  let data={};
  try{data=text?JSON.parse(text):{};}catch{data={raw:text};}
  if(!response.ok){const e=new Error(data.message||data.error||`PlusPix HTTP ${response.status}`);e.status=response.status;throw e;}
  return data;
}

function handleError(res,error){
  console.error(error);
  res.status(error.status||500).json({success:false,message:error.message||"Erro interno."});
}

app.get("/api/health",(req,res)=>res.json({ok:true,service:"paybr-backend"}));

app.post("/api/deposit",async(req,res)=>{
  try{
    const {amount,description,payerName,payerDocument}=req.body;
    if(!Number.isFinite(Number(amount))||Number(amount)<=0)return res.status(400).json({success:false,message:"Valor inválido."});
    if(!payerName||!payerDocument)return res.status(400).json({success:false,message:"Nome e CPF são obrigatórios."});
    res.json(await pluspix("/api/v1/deposit",{method:"POST",body:JSON.stringify({
      amount:Number(amount),description:description||"Pagamento PIX",
      payerName:String(payerName).trim(),payerDocument:String(payerDocument).replace(/\D/g,"")
    })}));
  }catch(e){handleError(res,e);}
});

app.get("/api/transactions/check",async(req,res)=>{
  try{
    const id=req.query.transactionId;
    if(!id)return res.status(400).json({success:false,message:"transactionId é obrigatório."});
    res.json(await pluspix("/api/transactions/check?transactionId="+encodeURIComponent(id)));
  }catch(e){handleError(res,e);}
});

app.get("/api/balance",async(req,res)=>{
  try{res.json(await pluspix("/api/v1/balance"));}catch(e){handleError(res,e);}
});

app.post("/api/withdraw",async(req,res)=>{
  try{
    const {amount,pixKey,pixKeyType,description}=req.body;
    const types=["CPF","CNPJ","EMAIL","PHONE","EVP"];
    if(!Number.isFinite(Number(amount))||Number(amount)<=0)return res.status(400).json({success:false,message:"Valor inválido."});
    if(!pixKey||!pixKeyType)return res.status(400).json({success:false,message:"Chave PIX e tipo são obrigatórios."});
    if(!types.includes(String(pixKeyType).toUpperCase()))return res.status(400).json({success:false,message:"Tipo de chave PIX inválido."});
    res.json(await pluspix("/api/v1/withdraw",{method:"POST",body:JSON.stringify({
      amount:Number(amount),pixKey:String(pixKey).trim(),pixKeyType:String(pixKeyType).toUpperCase(),description:description||"Transferência PIX"
    })}));
  }catch(e){handleError(res,e);}
});

app.listen(PORT,()=>console.log(`Backend rodando na porta ${PORT}`));
