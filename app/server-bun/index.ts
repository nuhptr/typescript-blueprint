/**
 * Server Bun (`app/server-bun/index.ts`)
 *
 * Modul ini mendemonstrasikan pembuatan HTTP server bertipe statis menggunakan
 * API bawaan **`Bun.serve`** dengan dukungan tipe resmi dari `@types/bun`
 * (tanpa deklarasi tipe manual).
 *
 * Contoh penggunaan umum:
 * - Menangani routing berbasis Web Standard `Request` dan `Response`.
 * - Mengembalikan respons teks maupun JSON bertipe (`HealthResponse`).
 * - Menjalankan server secara langsung dengan `bun app/server-bun/index.ts`.
 */

/**
 * Kontrak payload JSON yang dikembalikan oleh endpoint `/api/health`.
 */
interface HealthResponse {
    /** Status ringkas kondisi server. */
    status: "ok"
    /** Pesan deskriptif kesehatan layanan. */
    message: string
    /** Informasi runtime aktif. */
    runtime: string
    /** Waktu respons dibuat dalam format ISO 8601. */
    timestamp: string
}

/**
 * Menangani setiap permintaan HTTP masuk dan memetakan rute ke `Response` yang sesuai.
 *
 * Rute yang tersedia:
 * - `GET /` — mengembalikan pesan sapaan teks biasa (`200 OK`).
 * - `GET /api/health` — mengembalikan payload JSON `HealthResponse` (`200 OK`).
 * - Rute lainnya — mengembalikan JSON pesan error (`404 Not Found`).
 *
 * @param {Request} req Objek permintaan HTTP masuk.
 * @returns {Response} Objek respons HTTP terformat.
 */
function handleRequest(req: Request): Response {
    const url = new URL(req.url)

    if (req.method === "GET" && url.pathname === "/") {
        return new Response("Hello, TypeScript with Bun.serve!", {
            headers: { "Content-Type": "text/plain; charset=utf-8" },
        })
    }

    if (req.method === "GET" && url.pathname === "/api/health") {
        const payload: HealthResponse = {
            status: "ok",
            message: "Server healthy",
            runtime: typeof Bun !== "undefined" ? `Bun ${Bun.version}` : "Node Runtime",
            timestamp: new Date().toISOString(),
        }

        return Response.json(payload)
    }

    return Response.json({ error: "Not Found" }, { status: 404 })
}

/**
 * Menyalakan HTTP server menggunakan `Bun.serve` pada port yang ditentukan.
 *
 * @param {number} [port=Number(Bun.env.PORT ?? 3000)] Nomor port tempat server mendengarkan request.
 * @returns {Bun.Server<undefined>} Instance server Bun yang sedang berjalan.
 */
function startServer(port: number = Number(Bun.env.PORT ?? 3000)): Bun.Server<undefined> {
    return Bun.serve({ port, fetch: handleRequest })
}

if (typeof Bun !== "undefined" && Bun.main.endsWith("server-bun/index.ts")) {
    const server = startServer()
    console.log(`Server berjalan di ${server.url}`) // Server berjalan di http://localhost:3000/
}

export { handleRequest, startServer }
export type { HealthResponse }
