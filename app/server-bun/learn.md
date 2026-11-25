# Server Bun

Modul ini membahas pembuatan HTTP server backend menggunakan **`Bun.serve`** di TypeScript dengan definisi tipe resmi dari package **`@types/bun`**.

## Materi yang Dibahas

1. **Web Standard `Request` & `Response`** — Menangani routing HTTP secara _type-safe_ tanpa framework tambahan.
2. **Typed JSON Response (`HealthResponse`)** — Mengembalikan payload JSON terstruktur menggunakan `Response.json()`.
3. **Dukungan Tipe `@types/bun`** — Mengenali API bawaan `Bun.serve`, `Bun.Server`, `Bun.version`, dan `Bun.env` secara penuh di `tsc`.

## Menjalankan Server dengan Bun

```bash
bun app/server-bun/index.ts
```

Setelah aktif, buka atau uji endpoint di `http://localhost:3000/` dan `http://localhost:3000/api/health`.

## Menjalankan Unit Test Jest

```bash
npx jest app/server-bun
```
