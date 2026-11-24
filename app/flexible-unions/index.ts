/**
 * Flexible Unions (Union Types & Literal Types)
 *
 * Modul ini membahas cara mengizinkan sebuah variabel, array, atau objek
 * menerima lebih dari satu kemungkinan tipe menggunakan operator union (`|`),
 * serta membatasi nilai ke pilihan spesifik dengan *literal types*.
 *
 * Contoh penggunaan umum:
 * - Menangani input yang bisa berupa ID numerik atau string.
 * - Menyimpan daftar elemen campuran yang tetap aman secara tipe.
 * - Membatasi status, tema, atau level prioritas hanya ke nilai tertentu.
 */

/**
 * 1. Union Types pada Variabel & Array
 *
 * Variabel `password` dapat menyimpan nilai bertipe `string` maupun `number`.
 */
let password: string | number = 20
password = "rahasia123"
console.log("Password union:", password) // Password union: rahasia123

/**
 * Array campuran yang setiap elemennya boleh bertipe `number` atau `string`.
 */
const mixedItems: (number | string)[] = [1, 5, 5, "hello"]
console.log("Mixed array:", mixedItems) // Mixed array: [ 1, 5, 5, "hello" ]

/**
 * 2. Union pada Object Types
 *
 * Struktur data identitas dasar pengguna.
 */
type UserInfo = {
    first: string
    last: string
    age: number
}

/**
 * Struktur data kredensial akun pengguna.
 */
type AccountDetails = {
    email: string
    password: string
}

/**
 * Variabel `profile` boleh berbentuk `UserInfo` ataupun `AccountDetails`.
 */
let profile: UserInfo | AccountDetails = {
    email: "dev@example.com",
    password: "password123",
}
console.log("Union object:", profile) // Union object: { email: "dev@example.com", password: "password123" }

/**
 * 3. Literal Types
 *
 * Membatasi variabel agar hanya menerima nilai literal tertentu (string, angka,
 * atau boolean spesifik).
 */
let color: "red" | "blue" | "green" = "red"
color = "blue"

/** Hanya boleh bernilai `1`, `2`, atau `3`. */
const priority: 1 | 2 | 3 = 1

/** Hanya boleh bernilai boolean literal `true`. */
const isConfirmed: true = true

console.log("Literals:", { color, priority, isConfirmed }) // Literals: { color: "blue", priority: 1, isConfirmed: true }

/**
 * Contoh Error (TypeScript Compile-Time Error):
 * Nilai di luar union atau literal yang ditentukan akan ditolak saat compile.
 *
 * ```ts
 * password = true  // Error: Type 'boolean' is not assignable to type 'string | number'.
 * color = "yellow" // Error: Type '"yellow"' is not assignable to type '"red" | "blue" | "green"'.
 * ```
 */

export {}
