/**
 * Grouped Tuples & Enums (Tuple & Enum di TypeScript)
 *
 * Modul ini membahas dua struktur data terkelompok di TypeScript:
 * - **Tuple**: array dengan panjang tetap dan tipe spesifik di setiap posisi indeks.
 * - **Enum**: sekumpulan konstanta bernama yang memudahkan pembacaan dan pemeliharaan kode.
 *
 * Contoh penggunaan umum:
 * - Mengembalikan pasangan nilai `[kode, pesan]` atau koordinat `[x, y]` dengan Tuple.
 * - Mendefinisikan sekumpulan status, kategori, atau kondisi tetap dengan String Enum.
 */

/**
 * 1. Tuples (Panjang Tetap & Tipe per Posisi)
 *
 * Tuple dengan tepat dua elemen: indeks `0` bertipe `number` dan indeks `1` bertipe `string`.
 */
const myTuple: [number, string] = [10, "TypeScript"]

/**
 * Destructuring tuple mempertahankan tipe asli masing-masing elemen
 * (`first: number`, `second: string`).
 */
const [first, second] = myTuple
console.log("Tuple:", first, second) // Tuple: 10 TypeScript

/**
 * Tuple berisi tepat tiga elemen `string`.
 */
const games: [string, string, string] = ["Game 1", "Game 2", "Game 3"]
console.log("Games tuple:", games) // Games tuple: [ "Game 1", "Game 2", "Game 3" ]

/**
 * 2. Enums (String Enum)
 *
 * Enum kondisi cuaca menggunakan nilai string eksplisit agar lebih mudah
 * dibaca saat debugging maupun serialisasi data.
 */
enum WeatherConditions {
    /** Kondisi cerah. */
    Sunny = "sunny",
    /** Kondisi berawan. */
    Cloudy = "cloudy",
    /** Kondisi hujan. */
    Rainy = "rainy",
    /** Kondisi bersalju. */
    Snowy = "snowy",
}

/**
 * Variabel `currentWeather` hanya menerima anggota dari enum `WeatherConditions`.
 */
const currentWeather: WeatherConditions = WeatherConditions.Sunny
console.log(`Cuaca hari ini: ${currentWeather}`) // Cuaca hari ini: sunny

/**
 * Contoh Error (TypeScript Compile-Time Error):
 * Urutan tipe atau jumlah elemen tuple yang tidak cocok akan ditolak.
 *
 * ```ts
 * const invalidTuple: [number, string] = ["TypeScript", 10] // Error: urutan tipe terbalik.
 * const invalidWeather: WeatherConditions = "sunny"         // Error: harus menggunakan anggota enum.
 * ```
 */

export {}
