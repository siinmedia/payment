# Payment QRIS

Server payment QRIS untuk SIINMedia. Tersedia dua bentuk deployment:

- **Node.js** (`server.js`) — untuk server sendiri / VPS
- **Cloudflare Workers** (`worker.js`) — untuk deploy serverless di Cloudflare

## Node.js

```bash
npm start
```

Buka http://localhost:8787/admin.

Untuk development auto-restart:

```bash
npm run dev
```

## Cloudflare Workers

Konfigurasi ada di `wrangler.toml` (`main = "worker.js"`).

Deploy production:

```bash
npx wrangler deploy
```

Development lokal di runtime Workers:

```bash
npm run worker:dev
```

Endpoint:

- `/` atau `/admin` — form pembuat link invoice
- `/pay/:base64` — invoice pelanggan, payload base64 dari JSON `{ nama, nomor, nominal }`

## Catatan deploy di dashboard Cloudflare

Kalau pakai integrasi Git di Cloudflare:

- Build command: **kosongkan** atau `npm install`
- Deploy command: `npx wrangler deploy` (bukan `wrangler pages deploy`, karena `wrangler deploy` pada wrangler v4 otomatis baca `wrangler.toml`)
- Jangan pakai setting "static assets" / Pages, karena project ini Worker, bukan situs statis.
