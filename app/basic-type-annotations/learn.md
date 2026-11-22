# Basic Type Annotations

Modul ini membahas dasar anotasi tipe (*type annotation*) di TypeScript yang dipisah ke masing-masing file dengan penjelasan komentar `/** */`. Semua sub-topik dijalankan melalui fungsi wrapper `runTopic` di [`index.ts`](./index.ts), dan setiap sub-file juga tetap bisa dijalankan secara terpisah.

## Daftar File & Materi

1. [**`string.ts`**](./string.ts) — Anotasi tipe `string` untuk data teks.
2. [**`number.ts`**](./number.ts) — Anotasi tipe `number` untuk angka (integer & desimal).
3. [**`boolean.ts`**](./boolean.ts) — Anotasi tipe `boolean` untuk nilai `true` / `false`.
4. [**`type-inference.ts`**](./type-inference.ts) — Inferensi tipe otomatis oleh TypeScript dari nilai awal.
5. [**`any-type.ts`**](./any-type.ts) — Tipe `any` beserta risiko error saat runtime.
6. [**`index.ts`**](./index.ts) — Entry point yang memuat dan menjalankan seluruh sub-topik lewat `runTopic()`.

## Menjalankan dengan Bun

Jalankan semua materi sekaligus via `index.ts`:

```bash
bun app/basic-type-annotations/index.ts
```

Atau jalankan salah satu sub-topik secara terpisah:

```bash
bun app/basic-type-annotations/string.ts
```

## Type-Check

```bash
tsc --noEmit app/basic-type-annotations/*.ts
```
