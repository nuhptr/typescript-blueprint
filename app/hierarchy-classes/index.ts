/**
 * Hierarchy Classes (OOP & Class di TypeScript)
 *
 * Modul ini membahas pemrograman berorientasi objek (OOP) di TypeScript:
 * anotasi field class, properti `readonly`, access modifier (`public`, `private`,
 * `protected`), constructor parameter shorthand, getter & setter, serta pewarisan
 * (*inheritance*) antar class.
 *
 * Contoh penggunaan umum:
 * - Mengenkasulasi state internal dengan `private` / `protected` dan validasi via setter.
 * - Membagikan perilaku dasar ke class turunan menggunakan `extends`.
 */

/**
 * 1. Class Annotations, Fields, Readonly, Access Modifiers & Parameter Shorthand
 *
 * Merepresentasikan pemain dasar dengan nama depan, nama belakang, lokasi, dan skor.
 */
class Player {
    /** Kode lokasi pemain yang hanya bisa dibaca setelah inisialisasi. */
    public readonly location: string = "ID"

    /**
     * Membuat instance `Player` baru menggunakan parameter properties shorthand.
     *
     * @param {string} first Nama depan pemain (`public readonly`).
     * @param {string} last Nama belakang pemain (`public readonly`).
     * @param {number} [_score=0] Skor awal pemain (`protected`, dapat diakses subclass).
     */
    constructor(
        public readonly first: string,
        public readonly last: string,
        protected _score: number = 0,
    ) {}

    /**
     * Method internal bertipe `private` yang hanya bisa dipanggil dari dalam class `Player`.
     *
     * @returns {void}
     */
    private logSecret(): void {
        console.log(`Internal player: ${this.first} ${this.last}`)
    }

    /**
     * Mengembalikan nama lengkap gabungan dari `first` dan `last`.
     *
     * @returns {string} Nama lengkap pemain.
     */
    get fullName(): string {
        return `${this.first} ${this.last}`
    }

    /**
     * Membaca nilai skor pemain saat ini.
     *
     * @returns {number} Nilai `_score`.
     */
    get score(): number {
        return this._score
    }

    /**
     * Memperbarui skor pemain dengan validasi agar tidak bernilai negatif.
     *
     * @param {number} newScore Nilai skor baru yang harus `>= 0`.
     * @throws {Error} Melempar error jika `newScore` kurang dari `0`.
     */
    set score(newScore: number) {
        if (newScore < 0) throw new Error("Score cannot be negative")

        this._score = newScore
    }

    /**
     * Method publik untuk memicu inspeksi internal melalui `logSecret()`.
     *
     * @returns {void}
     */
    public inspect(): void {
        this.logSecret()
    }
}

/**
 * 2. Inheritance & Protected Modifier
 *
 * Subclass `SuperPlayer` mewarisi seluruh properti dan method `Player`,
 * sekaligus memiliki akses ke field `protected _score`.
 */
class SuperPlayer extends Player {
    /** Penanda hak akses administrator. */
    public isAdmin: boolean = true

    /**
     * Mengatur skor pemain ke nilai maksimum secara langsung melalui properti `protected`.
     *
     * @returns {void}
     */
    public maxScore(): void {
        this._score = 99999
    }
}

/**
 * Contoh penggunaan class `Player` beserta getter, setter, dan method `inspect()`.
 */
const player = new Player("Elton", "Steele", 10)
player.inspect() // Internal player: Elton Steele
player.score = 42
console.log("Player:", player.fullName, "| Score:", player.score, "| Loc:", player.location) // Player: Elton Steele | Score: 42 | Loc: ID

/**
 * Contoh penggunaan subclass `SuperPlayer` yang mengubah `_score` melalui `maxScore()`.
 */
const admin = new SuperPlayer("Ada", "Lovelace", 50)
admin.maxScore()
console.log("SuperPlayer:", admin.fullName, "| Admin:", admin.isAdmin, "| Score:", admin.score) // SuperPlayer: Ada Lovelace | Admin: true | Score: 99999

/**
 * Contoh Error (TypeScript Compile-Time Error):
 * Mengakses anggota `private` atau `protected` dari luar class akan ditolak.
 *
 * ```ts
 * player.logSecret() // Error: Property 'logSecret' is private and only accessible within class 'Player'.
 * player._score = 5  // Error: Property '_score' is protected and only accessible within class 'Player' and its subclasses.
 * ```
 */

export { Player, SuperPlayer, player, admin }
