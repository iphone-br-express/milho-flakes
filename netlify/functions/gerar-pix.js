exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sucesso: false, erro: "Método não permitido" })
    };
  }

  const url = "https://api-pluspix.squareweb.app/api/v1/deposit"; 
  
  // Insira aqui os seus dados reais:
  const clientId = "live_eec90e7e0609f9de846014d41961db8a";       
  const clientSecret = "sk_af8ad02acee2cfea842fc4525b6ea9edb8060476c7d650a0f26827567c664ace"; 

  const dadosPagamento = {
    amount: 10.00,
    description: "Pagamento Pedido #12345",
    payerName: "Cliente Teste",
    payerDocument: "12345678900"
  };

  try {
    const respostaApi = await fetch(url, {
      method: "POST",
      headers: {
        "x-client-id": clientId,
        "x-client-secret": clientSecret,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dadosPagamento)
    });

    const textoResposta = await respostaApi.text();
    let resultado;
    try {
      resultado = JSON.parse(textoResposta);
    } catch (e) {
      resultado = { raw: textoResposta };
    }

    if (!respostaApi.ok) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sucesso: false,
          detalheErro: resultado
        })
      };
    }

    const copiaECola = resultado.copyPaste || resultado.qrcodeUrl || resultado.code || JSON.stringify(resultado);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sucesso: true,
        copiaECola: copiaECola
      })
    };

  } catch (erro) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sucesso: false,
        erro: "Erro interno na função: " + erro.message
      })
    };
  }
};