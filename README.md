# Payment QRIS

Server payment QRIS untuk SIINMedia. Tersedia dua bentuk deployment:

- **Node.js** (`server.js`) — untuk server sendiri / VPS
- **Cloudflare Workers** (`worker.js`) — untuk deploy serverless di Cloudflare

## Endpoint

- `/` atau `/admin` — form pembuat link invoice
- `/pay/:base64` — invoice pelanggan, payload base64 dari JSON `{ nama, nomor, nominal }`
- `/og/:base64.png` — gambar Open Graph 1200x630 berisi tampilan invoice asli

Setiap halaman `/pay` mengirim meta tags dinamis: judul, deskripsi, `og:image`,
`og:url`, dan Twitter Card. Judulnya mengikuti nama pelanggan, contoh:
`Invoice Penagihan atas nama Budi · SIINMedia`.

## Node.js

```bash
npm install
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

## Struktur render

- `og-shared.js` — definisi visual kartu invoice + helper (dipakai kedua runtime)
- `og-node.js` — render PNG di Node (satori + resvg-wasm, baca wasm dari disk)
- `og-worker.js` — render PNG di Workers (`workers-og`)

`workers-og` dipakai khusus di Workers karena `satori` biasa menarik
`harfbuzzjs`, yang tidak dapat menemukan file wasm-nya di runtime Workers.

## Catatan deploy di dashboard Cloudflare

Kalau pakai integrasi Git di Cloudflare:

- Build command: `npm install`
- Deploy command: `npx wrangler deploy`
- Tipe project = **Worker**, bukan **Pages**
- Kosongkan setting "static assets" / "Build output directory"
