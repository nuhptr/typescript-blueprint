/**
 * Essential Objects (Tipe Objek, Type Aliases, Optional, Readonly, & Intersection)
 *
 * Modul ini membahas cara mendefinisikan struktur objek di TypeScript secara
 * aman dan dapat digunakan ulang, mencakup:
 * 1. Object Types (anotasi objek secara inline pada variabel dan fungsi)
 * 2. Type Aliases (`type`) untuk memberi nama kontrak objek yang reusable
 * 3. Optional Properties (`?`) untuk properti yang boleh dikosongkan
 * 4. Readonly Properties (`readonly`) untuk mencegah mutasi setelah inisialisasi
 * 5. Intersection Types (`&`) untuk menggabungkan beberapa tipe objek
 *
 * Contoh penggunaan umum:
 * - Memodelkan entitas domain seperti profil pengguna, produk, atau konfigurasi.
 * - Melindungi identitas objek (`id`, `location`) dari perubahan tidak sengaja.
 * - Mengomposisikan tipe modular menjadi satu kontrak lengkap tanpa duplikasi.
 */

/**
 * 1. Object Types (Inline Object Annotation)
 *
 * Menentukan bentuk dan tipe setiap properti objek secara langsung pada
 * deklarasi variabel. Semua properti yang dideklarasikan wajib diisi.
 */
const person: { firstName: string; lastName: string; age: number } = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
}
console.log("Object:", `${person.firstName} ${person.lastName}, ${person.age}`) // Object: John Doe, 30

/**
 * Fungsi factory yang mengembalikan objek pengguna bawaan dengan anotasi
 * return type objek secara eksplisit.
 *
 * @returns {{ name: string; age: number; location: string }} Objek profil pengguna default.
 */
function createDefaultUser(): { name: string; age: number; location: string } {
    return { name: "Alex", age: 24, location: "Indonesia" }
}
console.log("Factory object:", createDefaultUser()) // Factory object: { name: "Alex", age: 24, location: "Indonesia" }

/**
 * 2. Type Aliases (`type`), 3. Optional Properties (`?`), & 4. Readonly (`readonly`)
 *
 * Mendefinisikan alias tipe `User` agar struktur objek dapat dipakai ulang
 * di berbagai variabel dan parameter fungsi.
 */
type User = {
    /** Identitas unik pengguna; bersifat `readonly` sehingga tidak dapat diubah ulang. */
    readonly id: number
    /** Nama lengkap atau nama panggilan pengguna (wajib ada). */
    name: string
    /** Usia pengguna; bersifat opsional (`?`) sehingga boleh tidak disertakan (`number | undefined`). */
    age?: number
    /** Domisili pengguna; bersifat `readonly` agar tetap konsisten setelah dibuat. */
    readonly location: string
}

/**
 * Memformat informasi `User` menjadi string ringkas.
 * Menggunakan nullish coalescing (`??`) untuk menangani properti opsional `age`
 * ketika bernilai `undefined`.
 *
 * @param {User} user Objek pengguna yang memenuhi kontrak tipe `User`.
 * @returns {string} Ringkasan profil dalam format `#<id> <name> (<age|N/A>) - <location>`.
 */
const printUserInfo = (user: User): string => {
    return `#${user.id} ${user.name} (${user.age ?? "N/A"}) - ${user.location}`
}

/**
 * Contoh objek `User` yang tidak menyertakan properti opsional `age`.
 */
const user: User = { id: 1, name: "Rina", location: "Jakarta" }
console.log("Type Alias:", printUserInfo(user)) // Type Alias: #1 Rina (N/A) - Jakarta

/**
 * 5. Intersection Types (`&`)
 *
 * Tipe terpisah untuk menyimpan kredensial autentikasi akun.
 */
type AccountInfo = {
    /** Alamat email yang terhubung ke akun. */
    email: string
    /** Kata sandi akun. */
    password: string
}

/**
 * Menggabungkan tipe `User` dan `AccountInfo` menggunakan operator intersection (`&`).
 * Objek bertipe `UserAccount` wajib memiliki seluruh properti dari kedua tipe tersebut.
 */
type UserAccount = User & AccountInfo

/**
 * Contoh objek lengkap yang memenuhi gabungan kontrak `User` dan `AccountInfo`.
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
 *
 * 1. Mengubah properti `readonly` setelah objek dibuat:
 * ```ts
 * user.location = "Bandung" // Error: Cannot assign to 'location' because it is a read-only property.
 * ```
 *
 * 2. Menghilangkan properti wajib pada tipe objek atau intersection:
 * ```ts
 * const invalidUser: User = { id: 3, name: "Sari" } // Error: Property 'location' is missing in type ...
 * ```
 */

export {}
