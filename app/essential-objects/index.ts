/**
 * Essential Objects (Tipe Objek & Type Aliases)
 *
 * Modul ini membahas cara mengetikkan struktur objek di TypeScript:
 * anotasi objek inline, `type` alias untuk pemakaian ulang, properti opsional (`?`),
 * properti hanya-baca (`readonly`), dan penggabungan tipe (*intersection types* `&`).
 *
 * Contoh penggunaan umum:
 * - Memodelkan entitas data seperti pengguna, produk, atau konfigurasi.
 * - Melindungi properti identitas (`id`) agar tidak berubah setelah dibuat.
 * - Menggabungkan beberapa model objek menjadi satu tipe gabungan.
 */

/**
 * 1. Inline Object Types
 *
 * Struktur properti objek ditulis langsung sebagai anotasi tipe variabel.
 */
const person: { firstName: string; lastName: string; age: number } = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
}
console.log("Object:", `${person.firstName} ${person.lastName}, ${person.age}`) // Object: John Doe, 30

/**
 * Membuat objek pengguna default dengan anotasi return objek secara inline.
 *
 * @returns {{ name: string; age: number; location: string }} Objek pengguna standar.
 */
function createDefaultUser(): { name: string; age: number; location: string } {
    return { name: "Alex", age: 24, location: "Indonesia" }
}
console.log("Factory object:", createDefaultUser()) // Factory object: { name: "Alex", age: 24, location: "Indonesia" }

/**
 * 2. Type Aliases, 3. Optional Properties (`?`), & 4. Readonly (`readonly`)
 *
 * Tipe `User` mendefinisikan kontrak objek yang dapat dipakai ulang:
 * - `id` dan `location` bersifat `readonly` sehingga tidak bisa diubah ulang.
 * - `age` bersifat opsional (`?`) sehingga boleh tidak diisi.
 */
type User = {
    readonly id: number
    name: string
    age?: number
    readonly location: string
}

/**
 * Memformat ringkasan profil pengguna menjadi satu baris teks.
 *
 * @param {User} user Objek pengguna yang akan diformat.
 * @returns {string} Ringkasan informasi pengguna.
 */
const printUserInfo = (user: User): string => {
    return `#${user.id} ${user.name} (${user.age ?? "N/A"}) - ${user.location}`
}

/**
 * Contoh pembuatan `User` tanpa mengisi properti opsional `age`.
 */
const user: User = { id: 1, name: "Rina", location: "Jakarta" }
console.log("Type Alias:", printUserInfo(user)) // Type Alias: #1 Rina (N/A) - Jakarta

/**
 * 5. Intersection Types (`&`)
 *
 * Informasi kredensial akun yang akan digabungkan dengan tipe `User`.
 */
type AccountInfo = {
    email: string
    password: string
}

/**
 * Tipe gabungan yang mewajibkan seluruh properti dari `User` sekaligus `AccountInfo`.
 */
type UserAccount = User & AccountInfo

/**
 * Contoh objek yang memenuhi kontrak intersection `UserAccount`.
 */
const account: UserAccount = {
    id: 2,
    name: "Budi",
    age: 27,
    location: "Surabaya",
    email: "budi@example.com",
    password: "secret",
}
console.log("Intersection:", account.name, account.email) // Intersection: Budi budi@example.com

/**
 * Contoh Error (TypeScript Compile-Time Error):
 * Properti `readonly` tidak boleh diubah setelah inisialisasi.
 *
 * ```ts
 * user.location = "Bandung" // Error: Cannot assign to 'location' because it is a read-only property.
 * ```
 */

export {}
