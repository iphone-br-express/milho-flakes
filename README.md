# iPhone Express — loja completa

Fluxo da loja:

1. **Catálogo** (`index.html`) — mostra os produtos.
2. **Produto** (`produto.html`) — abre uma página individual com imagens frente/traseira/lateral e preço.
3. **Entrega** (`checkout.html`) — cliente informa nome, CPF, celular e endereço. O CEP pode preencher o endereço automaticamente pelo ViaCEP.
4. **Pagamento** (`pagamento.html`) — o backend consulta o `productId`, escolhe o preço fixo no servidor e cria a cobrança Pix no PlusPix/PAYbr.

## Segurança do preço

O navegador **não envia o preço**. Ele envia somente o `productId`, nome e CPF. O `server.js` localiza o produto e manda para o gateway o preço definido no catálogo do servidor.

## Arquivos

```text
frontend/
  index.html
  app.js
  produto.html
  produto.js
  checkout.html
  checkout.js
  pagamento.html
  pagamento.js
  style.css
  assets/logo.png
  assets/products/*.svg

server/
  server.js
  package.json
  .env.example
```

## GitHub Pages

Publique somente a pasta `frontend/` no GitHub Pages.

URL esperada:
`https://iphone-br-express.github.io/`

## Render

No Render, crie um Web Service usando a pasta `server` como **Root Directory**.

- Build Command: `npm install`
- Start Command: `npm start`

Variáveis:

```env
PAYBR_CLIENT_ID=seu_client_id
PAYBR_CLIENT_SECRET=seu_client_secret
PAYBR_API_URL=https://api-pluspix.squareweb.app
ALLOWED_ORIGIN=https://iphone-br-express.github.io
PORT=10000
```

O frontend já aponta para:

```text
https://milho-flakes.onrender.com
```

Se o seu serviço Render tiver outra URL, altere `API_BASE_URL` em `app.js`, `produto.js`, `checkout.js` e `pagamento.js`.

## Importante

Nunca coloque `PAYBR_CLIENT_SECRET` em arquivos publicados pelo GitHub Pages. Como a chave secreta já foi exposta durante a configuração anterior, gere/rotacione uma nova chave no provedor antes de colocar a loja em produção.

Os preços de modelos antigos no catálogo são referências promocionais configuradas no servidor; confirme estoque, condição e preço real antes de anunciar/vender.
