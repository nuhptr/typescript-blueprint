/**
 * Hello TypeScript (`about-installation`)
 *
 * File pertama untuk memverifikasi bahwa TypeScript dan runtime Bun sudah
 * terpasang dengan benar. Contoh ini memperkenalkan deklarasi `interface`,
 * anotasi tipe pada parameter dan nilai kembalian fungsi, serta pembuatan
 * objek bertipe statis.
 *
 * Contoh penggunaan umum:
 * - Memastikan alur eksekusi `bun app/about-installation/hello.ts` berjalan lancar.
 * - Melihat bagaimana TypeScript memeriksa struktur objek sebelum runtime.
 */

/**
 * Representasi struktur data pengguna sederhana.
 */
interface User {
    /** Nama lengkap atau nama tampilan pengguna. */
    name: string
    /** Peran atau konteks pengguna dalam proyek. */
    role: string
}

/**
 * Membuat pesan sapaan berdasarkan data pengguna yang diberikan.
 *
 * @param {User} user Objek pengguna yang berisi `name` dan `role`.
 * @returns {string} Kalimat sapaan terformat.
 */
function greet(user: User): string {
    return `Halo, ${user.name}! Selamat datang di TypeScript (${user.role}).`
}

/**
 * Contoh objek `developer` yang mematuhi kontrak `interface User`.
 */
const developer: User = {
    name: "Anmastery",
    role: "TypeScript Blueprint",
}

console.log(greet(developer)) // "Halo, Anmastery! Selamat datang di TypeScript (TypeScript Blueprint)."

export {}
