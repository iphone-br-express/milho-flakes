# Teste PIX no GitHub Pages

Este projeto testa a integração direta do navegador com a API PlusPix.

## Antes de publicar

Edite `app.js` e coloque temporariamente suas credenciais nos campos `CLIENT_ID` e `CLIENT_SECRET`.

ATENÇÃO: isso expõe o segredo para qualquer pessoa que acessar o site. Use somente para teste e prefira credenciais de teste. Nunca faça isso em produção.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie `index.html`, `style.css`, `app.js` e `README.md`.
3. Vá em Settings > Pages.
4. Selecione Deploy from a branch.
5. Escolha `main` e `/ (root)`.
6. Salve e abra o endereço fornecido pelo GitHub.

## Se não funcionar

O navegador pode bloquear a chamada se a API não permitir CORS. Nesse caso, será necessário usar um backend/proxy server-side.

Também pode ocorrer bloqueio por credenciais inválidas ou endpoint diferente da documentação atual.
