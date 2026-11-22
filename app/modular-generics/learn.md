# Modular Generics

Modul ini membahas **Generics** di TypeScript untuk menulis fungsi dan class yang fleksibel, dapat digunakan ulang, namun tetap *type-safe*.

## Materi yang Dibahas

1. **Generic Functions (`<T>`)** — Membuat fungsi yang menerima berbagai tipe tanpa kehilangan informasi tipenya.
2. **Generic dengan Object / Array** — Contoh `getRandomKeyValuePair<T>` dan `filterArray<T>`.
3. **Multiple Type Parameters (`<T, U>`)** — Menggunakan lebih dari satu parameter tipe dalam satu fungsi.
4. **Type Constraints (`extends`)** — Membatasi parameter tipe generik agar memiliki properti tertentu.
5. **Generic Classes (`class Box<T>`)** — Membuat struktur class yang dapat menyimpan berbagai tipe data secara aman.

## Menjalankan Kode dengan Bun

```bash
bun app/modular-generics/index.ts
```
