# Milho Flakes PIX

Frontend seguro para GitHub Pages + backend Node/Express no Render.

Frontend: `frontend/`
Backend: `server/`

No frontend não existe Client Secret. O backend usa as variáveis de ambiente do Render.

Render:
Root Directory: `server`
Build Command: `npm install`
Start Command: `npm start`

Variáveis:
PAYBR_CLIENT_ID
PAYBR_CLIENT_SECRET
PAYBR_API_URL=https://api-pluspix.squareweb.app
ALLOWED_ORIGIN=https://thecracker0day.github.io

Health:
https://milho-flakes.onrender.com/api/health
