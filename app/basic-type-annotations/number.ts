/**
 * Number Type Annotation (`number`)
 *
 * Anotasi tipe `number` digunakan untuk menyimpan nilai numerik,
 * baik bilangan bulat (integer), desimal (float), maupun negatif.
 *
 * Sintaks:
 * `let namaVariabel: number = 42`
 */

/**
 * Variabel `favNumber` hanya boleh diisi nilai bertipe `number`.
 * Operasi aritmatika seperti `+=` tetap valid karena hasilnya bertipe `number`.
 */
let favNumber: number = 7
favNumber += 2

/**
 * Tipe `number` juga mendukung angka desimal.
 */
const price: number = 19.99

console.log("favNumber:", favNumber) // 9
console.log("price:", price) // 19.99

/**
 * Contoh Error (TypeScript Compile-Time Error):
 * Mengisi variabel `number` dengan `string` akan menghasilkan error tipe.
 *
 * ```ts
 * favNumber = "eleven" // Error: Type 'string' is not assignable to type 'number'.
 * ```
 */

export { favNumber, price }
