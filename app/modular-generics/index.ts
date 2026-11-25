/**
 * Modular Generics (Generics di TypeScript)
 *
 * Modul ini membahas penggunaan *generics* (`<T>`, `<T, U>`) untuk membuat
 * fungsi, utilitas array/objek, batasan tipe (*type constraints* dengan `extends`),
 * serta class yang fleksibel namun tetap aman secara tipe (*type-safe*).
 *
 * Contoh penggunaan umum:
 * - Membuat fungsi reusable tanpa kehilangan informasi tipe (menghindari `any`).
 * - Menyaring atau mentransformasi koleksi data dengan berbagai tipe elemen.
 * - Membuat struktur kontainer generik seperti `Box<T>`, respons API, atau cache.
 */

/**
 * 1. Generic Function
 *
 * Memasangkan sebuah nilai dengan nilai default yang bertipe sama ke dalam tuple `[T, T]`.
 *
 * @template T Tipe data elemen yang dipasangkan.
 * @param {T} item Nilai utama.
 * @param {T} defaultValue Nilai cadangan bertipe sama dengan `item`.
 * @returns {[T, T]} Tuple berisi `[item, defaultValue]`.
 */
function pairWithDefault<T>(item: T, defaultValue: T): [T, T] {
    return [item, defaultValue]
}
console.log("Generic pair:", pairWithDefault<number>(42, 0), pairWithDefault("hello", "world")) // Generic pair: [ 42, 0 ] [ "hello", "world" ]

/**
 * 2. Generic Dictionary & Filter Array
 *
 * Mengambil satu pasangan `key` dan `value` secara acak dari objek kamus `Record<string, T>`.
 *
 * @template T Tipe nilai pada setiap properti objek.
 * @param {Record<string, T>} obj Objek kamus yang tidak kosong.
 * @returns {{ key: string; value: T }} Pasangan kunci dan nilai yang dipilih secara acak.
 */
function getRandomKeyValuePair<T>(obj: Record<string, T>): { key: string; value: T } {
    const keys = Object.keys(obj)
    const randKey = keys[Math.floor(Math.random() * keys.length)]!
    return { key: randKey, value: obj[randKey]! }
}

/**
 * Menyaring elemen array bertipe `T` berdasarkan fungsi predikat `condition`.
 *
 * @template T Tipe elemen di dalam array.
 * @param {T[]} array Array sumber yang akan disaring.
 * @param {(item: T) => boolean} condition Fungsi penguji untuk menentukan elemen yang dipertahankan.
 * @returns {T[]} Array baru berisi elemen yang memenuhi `condition`.
 */
function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter(condition)
}

console.log("Random pair:", getRandomKeyValuePair({ a: "apple", b: "banana", c: "cherry" })) // Random pair: { key: "a" | "b" | "c", value: ... }
console.log(
    "Even numbers:",
    filterArray([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0),
) // Even numbers: [ 2, 4, 6 ]

/**
 * 3. Multiple Type Parameters (`<T, U>`)
 *
 * Membalik urutan dua nilai yang masing-masing dapat memiliki tipe berbeda.
 *
 * @template T Tipe nilai pertama.
 * @template U Tipe nilai kedua.
 * @param {T} value1 Nilai pertama.
 * @param {U} value2 Nilai kedua.
 * @returns {[U, T]} Tuple dengan urutan terbalik `[value2, value1]`.
 */
function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1]
}
console.log("Reverse pair:", reversePair("Hello", 42)) // Reverse pair: [ 42, "Hello" ]

/**
 * 4. Type Constraints (`extends`)
 *
 * Kontrak minimum bagi tipe yang memiliki identitas numerik `id`.
 */
interface Identifiable {
    /** Identitas unik bertipe angka. */
    id: number
}

/**
 * Menggabungkan dua objek dengan syarat `obj1` wajib memenuhi `Identifiable`
 * dan `obj2` berupa objek `Record<string, unknown>`.
 *
 * @template T Tipe objek pertama yang harus memiliki properti `id: number`.
 * @template U Tipe objek kedua berupa pasangan key-value.
 * @param {T} obj1 Objek utama ber-`id`.
 * @param {U} obj2 Objek tambahan yang digabungkan.
 * @returns {T & U} Objek gabungan yang membawa seluruh properti `T` dan `U`.
 */
function mergeObjects<T extends Identifiable, U extends Record<string, unknown>>(
    obj1: T,
    obj2: U,
): T & U {
    return { ...obj1, ...obj2 }
}

const merged = mergeObjects({ id: 1, name: "Item 1" }, { description: "Generic constraint demo" })
console.log("Merged:", merged) // Merged: { id: 1, name: "Item 1", description: "Generic constraint demo" }

/**
 * 5. Generic Classes
 *
 * Kontainer generik untuk menyimpan dan memperbarui satu nilai bertipe `T`.
 *
 * @template T Tipe konten yang disimpan di dalam kotak.
 */
class Box<T> {
    /** Nilai internal yang disimpan di dalam instance `Box`. */
    private content: T

    /**
     * Menginisialisasi `Box` dengan konten awal.
     *
     * @param {T} initialContent Nilai awal yang disimpan.
     */
    constructor(initialContent: T) {
        this.content = initialContent
    }

    /**
     * Mengambil konten yang tersimpan saat ini.
     *
     * @returns {T} Nilai konten saat ini.
     */
    getContent(): T {
        return this.content
    }

    /**
     * Mengganti konten yang tersimpan dengan nilai baru bertipe `T`.
     *
     * @param {T} newContent Nilai pengganti.
     * @returns {void}
     */
    setContent(newContent: T): void {
        this.content = newContent
    }
}

const stringBox = new Box<string>("Hello, Generics!")
stringBox.setContent("Updated content")
const numberBox = new Box<number>(2026)
console.log("Generic Box:", stringBox.getContent(), "|", numberBox.getContent()) // Generic Box: Updated content | 2026

export {
    pairWithDefault,
    getRandomKeyValuePair,
    filterArray,
    reversePair,
    mergeObjects,
    Box,
    merged,
    stringBox,
    numberBox,
}
export type { Identifiable }
