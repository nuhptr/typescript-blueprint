/**
 * Data Arrays (Array Bertipe di TypeScript)
 *
 * Modul ini menjelaskan cara mendeklarasikan dan menggunakan array dengan
 * keamanan tipe di TypeScript menggunakan notasi kurung siku (`T[]`),
 * sintaks generik (`Array<T>`), serta array multidimensi (2D dan 3D).
 *
 * Contoh penggunaan umum:
 * - Menyimpan daftar data homogen (angka, teks, atau objek).
 * - Memastikan operasi seperti `.push()` hanya menerima elemen bertipe sesuai.
 * - Merepresentasikan matriks atau grid data bersarang.
 */

/**
 * 1. Bracket Notation (`T[]`)
 *
 * Cara paling umum dan ringkas untuk mendefinisikan array bertipe `number`
 * dan `string`.
 */
const nums: number[] = [1, 2, 4, 6]
const items: string[] = []
items.push("Keyboard", "Mouse")
console.log("Bracket notation:", nums, items) // Bracket notation: [ 1, 2, 4, 6 ] [ "Keyboard", "Mouse" ]

/**
 * 2. Alternate Syntax (`Array<T>`)
 *
 * Sintaks generik yang ekuivalen dengan `string[]`. Berguna saat menulis
 * tipe yang lebih kompleks atau konsisten dengan gaya generik lainnya.
 */
const tools: Array<string> = ["TypeScript", "Bun", "VS Code"]
console.log("Alternate syntax:", tools) // Alternate syntax: [ "TypeScript", "Bun", "VS Code" ]

/**
 * 3. Multidimensional Arrays (1D, 2D, dan 3D)
 *
 * Array bersarang dideklarasikan dengan menambahkan pasangan `[]` sesuai
 * kedalaman dimensinya (`number[]`, `number[][]`, `number[][][]`).
 */
const singleDi: number[] = [1, 2, 3, 4, 5]
const multiDi: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
]
const tripleDi: number[][][] = [
    [
        [1, 2],
        [3, 4],
    ],
]

console.log("1D:", singleDi) // 1D: [ 1, 2, 3, 4, 5 ]
console.log("2D:", multiDi) // 2D: [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
console.log("3D:", tripleDi) // 3D: [ [ [ 1, 2 ], [ 3, 4 ] ] ]

/**
 * Contoh Error (TypeScript Compile-Time Error):
 * Menambahkan elemen dengan tipe berbeda ke dalam array akan ditolak.
 *
 * ```ts
 * nums.push("delapan") // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
 * items.push(123)      // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
 * ```
 */

export {}
