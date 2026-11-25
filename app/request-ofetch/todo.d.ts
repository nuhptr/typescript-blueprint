/**
 * Todo Type Declaration (`todo.d.ts`)
 *
 * File deklarasi tipe (`.d.ts`) untuk mendefinisikan bentuk data respons
 * endpoint Todo dari JSONPlaceholder tanpa menghasilkan kode JavaScript
 * saat proses kompilasi.
 *
 * Contoh penggunaan umum:
 * - Memisahkan definisi kontrak tipe eksternal/API dari logika runtime.
 * - Digunakan sebagai parameter generik `ofetch<Todo>(url)` pada modul `request-ofetch`.
 */

/**
 * Struktur data satu item Todo dari API JSONPlaceholder.
 */
export interface Todo {
    /** ID pengguna pemilik todo. */
    userId: number
    /** ID unik item todo. */
    id: number
    /** Judul atau deskripsi tugas. */
    title: string
    /** Status penyelesaian tugas (`true` jika selesai). */
    completed: boolean
}
