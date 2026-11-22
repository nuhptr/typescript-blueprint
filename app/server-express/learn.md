# Server Express

Modul ini membahas pembuatan HTTP server backend menggunakan TypeScript (baik menggunakan **Express** maupun server bawaan **Bun**).

## Materi yang Dibahas

1. Menentukan tipe handler HTTP request & response di TypeScript.
2. Menjalankan server langsung dengan Bun tanpa perlu `ts-node`.
3. Setup Express dengan `@types/express`.

## Menjalankan Server dengan Bun

File [`index.ts`](./index.ts) menyediakan HTTP server TypeScript siap jalan menggunakan `Bun.serve` tanpa dependency eksternal:

```bash
bun app/server-express/index.ts
```

Untuk uji cepat sekali jalan (otomatis test endpoint `/` lalu berhenti):

```bash
bun app/server-express/index.ts --test
```

## Contoh Menggunakan Package `express`

Jika ingin menjalankan versi Express:

```bash
bun add express
bun add -d @types/express
```

```ts
import express, { type Request, type Response } from "express";

const app = express();
const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```
