/**
 * Interfaces (Kontrak Tipe dengan `interface`)
 *
 * Modul ini membahas penggunaan `interface` di TypeScript untuk mendefinisikan
 * kontrak struktur data secara konsisten dan dapat diperluas, mencakup:
 * 1. Object Interface (termasuk properti opsional `?` dan `readonly`)
 * 2. Interface for Functions (call signature)
 * 3. Interface with Methods (kontrak method pada objek)
 * 4. Extending Interfaces (`extends`) untuk mewarisi kontrak interface lain
 * 5. Interface for Classes (`implements`) untuk menjamin implementasi class
 * 6. Declaration Merging untuk menggabungkan deklarasi interface bernama sama
 *
 * Contoh penggunaan umum:
 * - Menetapkan kontrak struktur objek publik, payload API, atau konfigurasi.
 * - Memastikan sebuah class menyediakan method standar melalui `implements`.
 * - Memperluas tipe bawaan atau library pihak ketiga lewat *declaration merging*.
 */

/**
 * 1. Basic Object Interface
 *
 * Mendefinisikan kontrak dasar spesifikasi perangkat komputer, termasuk
 * properti opsional (`?`) yang boleh dikosongkan saat inisialisasi.
 */
interface Computer {
    /** Nama atau model perangkat komputer. */
    name: string
    /** Kapasitas memori RAM dalam satuan GB. */
    ram: number
    /** Kapasitas penyimpanan internal dalam satuan GB. */
    hdd: number
    /** Model kartu grafis tambahan (opsional). */
    gpu?: string
}

/**
 * Contoh objek `laptop` yang mematuhi kontrak `Computer` (tanpa mengisi properti opsional `gpu`).
 */
const laptop: Computer = { name: "MacBook Pro", ram: 16, hdd: 512 }
console.log("Computer:", laptop) // Computer: { name: "MacBook Pro", ram: 16, hdd: 512 }

/**
 * 2. Interface for Functions
 *
 * Mendefinisikan kontrak *call signature* untuk fungsi operasi matematika dua angka.
 */
interface MathOperation {
    /**
     * Menjalankan operasi perhitungan terhadap dua bilangan.
     *
     * @param {number} x Operan pertama.
     * @param {number} y Operan kedua.
     * @returns {number} Hasil perhitungan numerik.
     */
    (x: number, y: number): number
}

/**
 * Menjumlahkan dua bilangan sesuai kontrak `MathOperation`.
 * Tipe parameter `a` dan `b` otomatis diinferensikan dari `MathOperation`.
 *
 * @param {number} a Angka pertama.
 * @param {number} b Angka kedua.
 * @returns {number} Hasil penjumlahan `a + b`.
 */
const add: MathOperation = (a, b) => a + b

/**
 * Mengurangkan bilangan kedua dari bilangan pertama sesuai kontrak `MathOperation`.
 *
 * @param {number} a Angka pertama.
 * @param {number} b Angka kedua.
 * @returns {number} Hasil pengurangan `a - b`.
 */
const subtract: MathOperation = (a, b) => a - b
console.log("Math:", add(5, 3), subtract(7, 2)) // Math: 8 5

/**
 * 3. Interface with Methods
 *
 * Kontrak detail dasar film yang menyertakan properti `readonly` serta
 * definisi method `printMovieInfo`.
 */
interface MovieDetails {
    /** Judul film; bersifat `readonly` sehingga tidak dapat diubah setelah dibuat. */
    readonly name: string
    /** Skor penilaian film. */
    ratings: number
    /**
     * Memformat ringkasan informasi film beserta harga tiketnya.
     *
     * @param {number} price Harga tiket dalam satuan USD.
     * @returns {string} Teks informasi film terformat.
     */
    printMovieInfo(price: number): string
}

/**
 * 4. Extending Interfaces (`extends`)
 *
 * Mewarisi seluruh properti dan method dari `MovieDetails`, lalu menambahkan
 * properti spesifik `genre`.
 */
interface MovieGenre extends MovieDetails {
    /** Kategori atau aliran genre film. */
    genre: string
}

/**
 * Objek `movie` wajib memenuhi kontrak `MovieDetails` sekaligus `MovieGenre`.
 */
const movie: MovieGenre = {
    name: "John Wick",
    ratings: 8.5,
    genre: "Action",
    printMovieInfo(price) {
        return `${this.name} (${this.genre}) - Rating: ${this.ratings}, Price: $${price}`
    },
}
console.log("Movie:", movie.printMovieInfo(15)) // Movie: John Wick (Action) - Rating: 8.5, Price: $15

/**
 * 5. Interface for Classes (`implements`)
 *
 * Kontrak perilaku kendaraan yang wajib disediakan oleh setiap class pengimplementasi.
 */
interface Vehicle {
    /**
     * Menyalakan mesin kendaraan.
     *
     * @returns {void}
     */
    start(): void

    /**
     * Mematikan mesin kendaraan.
     *
     * @returns {void}
     */
    stop(): void
}

/**
 * Class `Car` mengimplementasikan kontrak `Vehicle` menggunakan kata kunci `implements`.
 */
class Car implements Vehicle {
    /**
     * Menyalakan mobil dan menampilkan status di konsol.
     *
     * @returns {void}
     */
    start(): void {
        console.log("Car started")
    }

    /**
     * Menghentikan mobil dan menampilkan status di konsol.
     *
     * @returns {void}
     */
    stop(): void {
        console.log("Car stopped")
    }
}

/**
 * Instance dari class `Car` yang dijamin memiliki method `start()` dan `stop()`.
 */
const myCar = new Car()
myCar.start() // Car started
myCar.stop() // Car stopped

/**
 * 6. Declaration Merging (Penggabungan Deklarasi Interface)
 *
 * Deklarasi pertama interface `AppUser` yang menyimpan informasi nama pengguna.
 */
interface AppUser {
    /** Nama depan pengguna. */
    firstName: string
    /** Nama belakang pengguna. */
    lastName: string
}

/**
 * Deklarasi kedua dengan nama identik (`AppUser`).
 * TypeScript secara otomatis menggabungkan (*merge*) kedua deklarasi ini menjadi
 * satu kontrak utuh yang mewajibkan `firstName`, `lastName`, `age`, dan `getSummary()`.
 */
interface AppUser {
    /** Usia pengguna dalam tahun. */
    age: number
    /**
     * Menghasilkan ringkasan profil lengkap pengguna.
     *
     * @returns {string} Ringkasan dalam format `"<firstName> <lastName> (<age>)"`.
     */
    getSummary(): string
}

/**
 * Objek `appUser` yang memenuhi hasil penggabungan seluruh deklarasi `AppUser`.
 */
const appUser: AppUser = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
    getSummary() {
        return `${this.firstName} ${this.lastName} (${this.age})`
    },
}
console.log("Merged interface:", appUser.getSummary()) // Merged interface: Jane Doe (28)

/**
 * Contoh Error (TypeScript Compile-Time Error):
 *
 * 1. Mengubah properti `readonly` pada objek ber-interface:
 * ```ts
 * movie.name = "The Matrix" // Error: Cannot assign to 'name' because it is a read-only property.
 * ```
 *
 * 2. Class `implements` tidak menyediakan seluruh method yang diwajibkan interface:
 * ```ts
 * class BrokenCar implements Vehicle {
 *     start(): void {}
 * } // Error: Class 'BrokenCar' incorrectly implements interface 'Vehicle'. Property 'stop' is missing.
 * ```
 *
 * 3. Mengabaikan properti hasil *declaration merging* pada `AppUser`:
 * ```ts
 * const incompleteUser: AppUser = { firstName: "Jane", lastName: "Doe" }
 * // Error: Type '{ firstName: string; lastName: string; }' is missing the following properties from type 'AppUser': age, getSummary
 * ```
 */

export { laptop, add, subtract, movie, Car, myCar, appUser }
export type { Computer, MathOperation, MovieDetails, MovieGenre, Vehicle, AppUser }
