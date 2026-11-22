# Request Axios

Modul ini membahas penggunaan TypeScript untuk melakukan HTTP request dengan tipe response yang aman serta menggunakan file deklarasi tipe (`.d.ts`).

## Materi yang Dibahas

1. **Declaration File ([`todo.d.ts`](./todo.d.ts))** — Mendefinisikan kontrak tipe response API (`Todo`).
2. **Typed Async Request** — Mengambil data JSON dengan tipe `Todo` dan penanganan error yang aman.
3. **Penggunaan dengan Axios** — Contoh konfigurasi dan `AxiosResponse<Todo>`.

## Menjalankan Kode dengan Bun

Contoh di [`index.ts`](./index.ts) menggunakan `fetch` bawaan Bun (dengan fallback data lokal jika offline) agar langsung bisa dijalankan tanpa install dependency tambahan:

```bash
bun app/request-axios/index.ts
```

## Contoh Menggunakan Package `axios`

Jika ingin mencoba langsung dengan `axios`:

```bash
bun add axios
```

```ts
import axios, { type AxiosResponse } from "axios";
import type { Todo } from "./todo";

const fetchData = async (): Promise<void> => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Todo:", response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error:", error.message);
    }
  }
};
```
