/**
 * Unit Test Modul `server-bun` (`index.test.ts`)
 *
 * Menguji fungsi handler HTTP `handleRequest()` menggunakan Web Standard
 * `Request` dan `Response` untuk rute `/`, `/api/health`, serta `404`.
 * Jalankan: `npx jest app/server-bun`
 */

import { handleRequest, type HealthResponse } from "./index"

/** Suite pengujian untuk routing HTTP server berbasis `Bun.serve`. */
describe("server-bun", () => {
    /** Memastikan rute utama `GET /` mengembalikan teks sapaan dengan status `200`. */
    it("mengembalikan sapaan teks pada rute GET /", async () => {
        const response = handleRequest(new Request("http://localhost:3000/"))

        expect(response.status).toBe(200)
        await expect(response.text()).resolves.toBe("Hello, TypeScript with Bun.serve!")
    })

    /** Memastikan rute `GET /api/health` mengembalikan JSON sesuai kontrak `HealthResponse`. */
    it("mengembalikan JSON HealthResponse pada rute GET /api/health", async () => {
        const response = handleRequest(new Request("http://localhost:3000/api/health"))
        const body = (await response.json()) as HealthResponse

        expect(response.status).toBe(200)
        expect(body.status).toBe("ok")
        expect(body.message).toBe("Server healthy")
        expect(typeof body.timestamp).toBe("string")
    })

    /** Memastikan rute yang tidak dikenal mengembalikan status `404 Not Found`. */
    it("mengembalikan status 404 untuk rute yang tidak terdaftar", async () => {
        const response = handleRequest(new Request("http://localhost:3000/tidak-ada"))
        const body = (await response.json()) as { error: string }

        expect(response.status).toBe(404)
        expect(body.error).toBe("Not Found")
    })
})
