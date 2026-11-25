/**
 * Core Functions (Fungsi di TypeScript)
 *
 * Modul ini membahas cara memberikan anotasi tipe pada fungsi di TypeScript,
 * mulai dari parameter, default parameter, nilai kembalian (*return type*),
 * hingga tipe khusus `void` dan `never`.
 *
 * Contoh penggunaan umum:
 * - Memastikan argumen yang masuk ke fungsi sesuai kontrak tipe.
 * - Mencegah bug akibat nilai kembalian yang tidak konsisten.
 * - Menandai fungsi side-effect (`void`) dan fungsi error/tak berakhir (`never`).
 */

/**
 * 1. Parameter Annotations
 *
 * Menambahkan nilai `1` ke angka yang diberikan.
 *
 * @param {number} num Angka awal yang akan ditambah.
 * @returns {number} Hasil penjumlahan `num + 1`.
 */
function addOne(num: number): number {
    return num + 1
}

/**
 * Mengalikan dua bilangan menggunakan arrow function dengan anotasi parameter
 * dan return type secara eksplisit.
 *
 * @param {number} x Bilangan pertama.
 * @param {number} y Bilangan kedua.
 * @returns {number} Hasil perkalian `x * y`.
 */
const double = (x: number, y: number): number => x * y

console.log("addOne:", addOne(3)) // addOne: 4
console.log("double:", double(2, 10)) // double: 20

/**
 * 2. Default Parameters
 *
 * Menghasilkan sapaan untuk pengguna. Jika argumen tidak diberikan,
 * parameter `person` otomatis menggunakan nilai default `"Anonymous"`.
 *
 * @param {string} [person="Anonymous"] Nama orang yang disapa.
 * @returns {string} Kalimat sapaan.
 */
function greet(person: string = "Anonymous"): string {
    return `Hello, ${person}!`
}

console.log("Default param:", greet(), "| Custom:", greet("Ayu")) // Default param: Hello, Anonymous! | Custom: Hello, Ayu!

/**
 * 3. Return Annotations
 *
 * Menghitung kuadrat dari sebuah angka dengan anotasi return `: number`
 * agar TypeScript menjamin tipe nilai kembalian.
 *
 * @param {number} x Bilangan yang akan dikuadratkan.
 * @returns {number} Hasil `x * x`.
 */
const doubleSquare = (x: number): number => x * x

console.log("Return annotation:", doubleSquare(4)) // Return annotation: 16

/**
 * 4. Void Return Type (`void`)
 *
 * Mencetak pesan ke konsol tanpa mengembalikan nilai apa pun.
 * Tipe `void` menandakan fungsi hanya menjalankan efek samping (*side effect*).
 *
 * @param {string} message Pesan teks yang akan dicetak.
 * @returns {void}
 */
function printMessage(message: string): void {
    console.log("Void message:", message)
}

printMessage("Ini fungsi bertipe void.") // Void message: Ini fungsi bertipe void.

/**
 * 5. Never Return Type (`never`)
 *
 * Selalu melempar error sehingga eksekusi fungsi tidak pernah selesai secara normal.
 * Tipe `never` digunakan untuk fungsi yang selalu `throw` atau memiliki infinite loop.
 *
 * @param {string} msg Pesan error yang dilempar.
 * @returns {never} Tidak pernah mengembalikan nilai.
 * @throws {Error} Selalu melempar `Error` dengan pesan `msg`.
 */
function throwError(msg: string): never {
    throw new Error(msg)
}

try {
    throwError("Contoh error dari fungsi bertipe never")
} catch (err) {
    if (err instanceof Error) {
        console.log("Caught never error:", err.message) // Caught never error: Contoh error dari fungsi bertipe never
    }
}

/**
 * Contoh Error (TypeScript Compile-Time Error):
 * Memanggil fungsi dengan tipe argumen yang salah akan ditolak saat compile.
 *
 * ```ts
 * addOne("3") // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
 * ```
 */

export { addOne, double, greet, doubleSquare, printMessage, throwError }
