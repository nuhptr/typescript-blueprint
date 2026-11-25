/**
 * Page DOM (Interaksi DOM Type-Safe di Browser)
 *
 * Modul ini mendemonstrasikan cara mengambil dan memanipulasi elemen HTML
 * secara aman menggunakan parameter generik pada `document.querySelector<T>()`
 * (seperti `HTMLHeadingElement` dan `HTMLButtonElement`) serta pengecekan
 * *null guard* sebelum menambahkan event listener.
 *
 * Contoh penggunaan umum:
 * - Mengakses properti elemen spesifik (`textContent`, `addEventListener`) tanpa `any`.
 * - Mencegah error runtime saat script dijalankan di lingkungan non-browser (CLI).
 */

/**
 * Menginisialisasi penghitung klik pada elemen DOM apabila objek `Document` tersedia.
 * Mengembalikan `true` jika berjalan di lingkungan DOM browser, atau `false` di CLI.
 *
 * @param {Document | undefined} [doc] Objek dokumen HTML (default ke global `document` jika ada).
 * @returns {boolean} `true` apabila DOM tersedia, `false` apabila di lingkungan CLI.
 */
function initDomCounter(
    doc: Document | undefined = typeof document !== "undefined" ? document : undefined,
): boolean {
    if (doc !== undefined) {
        /** Elemen judul `<h1>` yang teksnya akan diperbarui setiap kali tombol diklik. */
        const heading = doc.querySelector<HTMLHeadingElement>("#title")
        /** Elemen tombol interaktif yang memicu penambahan hitungan klik. */
        const button = doc.querySelector<HTMLButtonElement>("#action-btn")

        /**
         * Null guard untuk memastikan kedua elemen benar-benar ditemukan di DOM
         * sebelum mendaftarkan event listener.
         */
        if (heading && button) {
            let clicks = 0
            button.addEventListener("click", () => {
                clicks += 1
                heading.textContent = `Button clicked ${clicks} time(s)!`
            })
        }

        console.log("DOM ready:", doc.title)
        return true
    }

    console.log("DOM tidak tersedia di CLI runtime.") // DOM tidak tersedia di CLI runtime.
    console.log("Build untuk browser: bun build app/page-dom/index.ts --outdir app/page-dom/dist")
    return false
}

initDomCounter()

export { initDomCounter }
