# Page DOM

Modul ini membahas penggunaan TypeScript saat berinteraksi dengan **DOM (Document Object Model)** di browser.

## Materi yang Dibahas

1. Mengakses elemen DOM dengan tipe yang tepat (`HTMLHeadingElement`, `HTMLButtonElement`).
2. Null-checking elemen hasil `document.querySelector` agar aman dari runtime error.
3. Bundle TypeScript untuk browser langsung menggunakan **Bun**.

## Menjalankan & Build dengan Bun

Jalankan simulasi / pengecekan di terminal:

```bash
bun app/page-dom/index.ts
```

Bundle `index.ts` ke JavaScript untuk dipakai oleh `index.html`:

```bash
bun build app/page-dom/index.ts --outdir app/page-dom/dist
```
