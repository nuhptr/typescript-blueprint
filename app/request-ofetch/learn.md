# Request Ofetch

Modul ini membahas penggunaan TypeScript bersama package [**`ofetch`**](https://github.com/unjs/ofetch) untuk melakukan HTTP request dengan tipe response yang aman (_generic_ `ofetch<T>()`), penanganan `FetchError`, serta penggunaan file deklarasi tipe (`.d.ts`).

## Materi yang Dibahas

1. **Declaration File ([`todo.d.ts`](./todo.d.ts))** — Mendefinisikan kontrak tipe response API (`Todo`).
2. **Typed Async Request dengan `ofetch<Todo>()`** — Mengambil dan mengurai JSON secara otomatis tanpa perlu memanggil `.json()` maupun mengecek `!response.ok` manual.
3. **Custom Instance (`ofetch.create`) & `FetchError`** — Menentukan `baseURL`, `retry`, `timeout`, dan menyempitkan tipe error HTTP dengan `error instanceof FetchError`.

## Menjalankan Kode dengan Bun

```bash
bun app/request-ofetch/index.ts
```

## Menjalankan Unit Test Jest

```bash
npx jest app/request-ofetch
```
