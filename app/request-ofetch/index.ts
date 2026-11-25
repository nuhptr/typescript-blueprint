/**
 * Request Ofetch (`app/request-ofetch/index.ts`)
 *
 * Modul ini mendemonstrasikan pengambilan data HTTP asinkron secara type-safe
 * menggunakan package **`ofetch`**, file deklarasi tipe terpisah (`todo.d.ts`),
 * pembuatan instance kustom `ofetch.create()`, penyempitan error `FetchError`,
 * serta mekanisme *offline fallback* ketika koneksi jaringan tidak tersedia.
 *
 * Keunggulan `ofetch` dibanding `fetch` manual / `axios`:
 * - Otomatis mengurai respons JSON langsung ke parameter generik `ofetch<Todo>()`.
 * - Otomatis melempar `FetchError` saat status HTTP `4xx` atau `5xx`.
 * - Ringan dan berjalan konsisten di Bun, Node.js, Browser, maupun Edge runtime.
 */

import { FetchError, ofetch, type $Fetch } from "ofetch"
import type { Todo } from "./todo"

/** Base URL API publik JSONPlaceholder. */
const API_BASE_URL = "https://jsonplaceholder.typicode.com"

/**
 * Instance HTTP client `ofetch` dengan konfigurasi `baseURL` terpusat.
 */
const apiClient: $Fetch = ofetch.create({
    baseURL: API_BASE_URL,
    retry: 0,
})

/**
 * Data cadangan bertipe `Todo` yang digunakan apabila permintaan jaringan gagal.
 */
const fallbackTodo: Todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem (offline fallback)",
    completed: false,
}

/**
 * Mengambil satu item `Todo` berdasarkan `id` menggunakan instance `ofetch`.
 * Respons JSON otomatis diurai dan diketikkan sebagai `Todo`.
 *
 * @param {number} [id=1] ID item Todo yang ingin diambil.
 * @param {$Fetch} [client=apiClient] Instance client `ofetch` yang digunakan.
 * @returns {Promise<Todo>} Objek `Todo` hasil respons API.
 * @throws {FetchError} Otomatis dilempar oleh `ofetch` jika status respons tidak sukses (`4xx`/`5xx`) atau gagal terhubung.
 */
async function fetchTodo(id: number = 1, client: $Fetch = apiClient): Promise<Todo> {
    return await client<Todo>(`/todos/${id}`)
}

/**
 * Memformat pesan kegagalan HTTP dengan mempersempit tipe `unknown` menggunakan
 * `instanceof FetchError`.
 *
 * @param {unknown} error Objek error yang tertangkap pada blok `catch`.
 * @returns {string} Deskripsi error yang aman untuk ditampilkan.
 */
function formatFetchError(error: unknown): string {
    if (error instanceof FetchError) {
        const code = error.statusCode ?? "NETWORK_ERROR"
        return `[FetchError ${code}] ${error.message}`
    }

    return error instanceof Error ? error.message : String(error)
}

/**
 * Titik masuk utama untuk menjalankan permintaan `ofetch` beserta fallback offline.
 *
 * @returns {Promise<void>}
 */
async function main(): Promise<void> {
    try {
        const todo = await fetchTodo(1)
        console.log("Fetched Todo (ofetch):", todo) // Fetched Todo (ofetch): { userId: 1, id: 1, title: "...", completed: false }
    } catch (error: unknown) {
        console.log(`Request gagal (${formatFetchError(error)}), menggunakan fallback Todo:`)
        console.log("Fallback Todo:", fallbackTodo) // Fallback Todo: { userId: 1, id: 1, title: "delectus aut autem (offline fallback)", completed: false }
    }
}

if (!process.env.JEST_WORKER_ID) {
    main()
}

export { API_BASE_URL, apiClient, fallbackTodo, fetchTodo, formatFetchError, main }
