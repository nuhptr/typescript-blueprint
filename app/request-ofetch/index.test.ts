/**
 * Unit Test Modul `request-ofetch` (`index.test.ts`)
 *
 * Menguji pengambilan data JSON bertipe `Todo` menggunakan `createFetch()`,
 * pelemparan otomatis `FetchError` saat status HTTP gagal, serta `formatFetchError()`.
 * Jalankan: `npx jest app/request-ofetch`
 */

import { createFetch, FetchError, type Fetch } from "ofetch"
import { API_BASE_URL, fallbackTodo, fetchTodo, formatFetchError } from "./index"
import type { Todo } from "./todo"

/**
 * Membuat fungsi `Fetch` tiruan yang kompatibel penuh dengan tipe `typeof fetch` di Bun & Node.
 *
 * @param {() => Response} buildResponse Fungsi pembuat objek `Response`.
 * @returns {Fetch} Implementasi `fetch` untuk disuntikkan ke `createFetch()`.
 */
const createMockFetch = (buildResponse: () => Response): Fetch =>
    Object.assign(async () => buildResponse(), { preconnect: () => {} })

/** Suite pengujian untuk HTTP client `ofetch` bertipe `Todo`. */
describe("request-ofetch", () => {
    /** Memastikan `fetchTodo()` mengembalikan objek `Todo` terurai saat respons HTTP `200 OK`. */
    it("mengurai respons JSON otomatis menjadi objek Todo lewat ofetch", async () => {
        const mockTodo: Todo = {
            userId: 1,
            id: 1,
            title: "Belajar ofetch di TypeScript",
            completed: true,
        }

        const mockClient = createFetch({
            defaults: { baseURL: API_BASE_URL, retry: 0 },
            fetch: createMockFetch(
                () =>
                    new Response(JSON.stringify(mockTodo), {
                        status: 200,
                        headers: { "Content-Type": "application/json" },
                    }),
            ),
        })

        await expect(fetchTodo(1, mockClient)).resolves.toEqual(mockTodo)
    })

    /** Memastikan respons `404` melempar `FetchError` dan diformat oleh `formatFetchError()`. */
    it("otomatis melempar FetchError saat status HTTP 404 dan memformatnya dengan benar", async () => {
        const failingClient = createFetch({
            defaults: { baseURL: API_BASE_URL, retry: 0 },
            fetch: createMockFetch(
                () =>
                    new Response(JSON.stringify({ message: "Not Found" }), {
                        status: 404,
                        statusText: "Not Found",
                        headers: { "Content-Type": "application/json" },
                    }),
            ),
        })

        let caughtError: unknown
        try {
            await fetchTodo(999, failingClient)
        } catch (err: unknown) {
            caughtError = err
        }

        expect(caughtError).toBeInstanceOf(FetchError)
        expect(formatFetchError(caughtError)).toContain("[FetchError 404]")
        expect(fallbackTodo.id).toBe(1)
    })
})
