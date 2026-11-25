/**
 * Boolean Type Annotation (`boolean`)
 *
 * Anotasi tipe `boolean` digunakan untuk nilai logika yang hanya memiliki
 * dua kemungkinan: `true` atau `false`.
 *
 * Sintaks:
 * `let namaVariabel: boolean = false`
 */

/**
 * Variabel `tsHard` hanya menerima nilai `true` atau `false`.
 */
let tsHard: boolean = false

/**
 * Sering dipakai untuk status atau kondisi (flag).
 */
const isCompleted: boolean = true

console.log("tsHard:", tsHard) // false
console.log("isCompleted:", isCompleted) // true

/**
 * Contoh Error (TypeScript Compile-Time Error):
 * Nilai selain `true` atau `false` tidak diizinkan.
 *
 * ```ts
 * tsHard = 100   // Error: Type 'number' is not assignable to type 'boolean'.
 * tsHard = "yes" // Error: Type 'string' is not assignable to type 'boolean'.
 * ```
 */

export { tsHard, isCompleted }
