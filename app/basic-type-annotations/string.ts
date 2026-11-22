/**
 * String Type Annotation (`string`)
 *
 * Anotasi tipe `string` digunakan untuk memastikan suatu variabel
 * hanya dapat menyimpan data berupa teks (string).
 *
 * Sintaks:
 * `let namaVariabel: string = "nilai teks"`
 */

/**
 * Variabel `myName` dianotasikan bertipe `string`.
 * Nilai awalnya bisa diubah selama nilai barunya tetap bertipe `string`.
 */
let myName: string = "TypeScript Blueprint"
myName = "Belajar TypeScript"

/**
 * Template literal juga menghasilkan tipe `string`.
 */
const greeting: string = `Halo, ${myName}!`

console.log("myName:", myName) // "Belajar TypeScript"
console.log("greeting:", greeting) // "Halo, Belajar TypeScript!"

/**
 * Contoh Error (TypeScript Compile-Time Error):
 * Mengisi variabel `string` dengan tipe lain seperti `number` akan ditolak.
 *
 * ```ts
 * myName = 12 // Error: Type 'number' is not assignable to type 'string'.
 * ```
 */

export {}
