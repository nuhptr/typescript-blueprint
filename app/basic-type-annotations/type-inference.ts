/**
 * Type Inference (Inferensi Tipe)
 *
 * TypeScript secara otomatis menebak (infer) tipe suatu variabel berdasarkan
 * nilai awal yang diberikan, meskipun kita tidak menulis anotasi tipe secara eksplisit.
 *
 * Keuntungan:
 * - Kode lebih ringkas dan mengurangi boilerplate.
 * - Tetap mendapatkan keamanan pemeriksaan tipe penuh dari TypeScript.
 */

/**
 * TypeScript otomatis menyimpulkan tipe `string`.
 */
let tech = "TypeScript"

/**
 * TypeScript otomatis menyimpulkan tipe `number`.
 */
let version = 5

/**
 * TypeScript otomatis menyimpulkan tipe `boolean`.
 */
let isTyped = true

console.log("Values:", tech, version, isTyped) // "TypeScript" 5 true
console.log("Runtime types:", typeof tech, typeof version, typeof isTyped) // "string" "number" "boolean"

/**
 * Contoh Error (TypeScript Compile-Time Error):
 * Walaupun tidak ditulis `: string`, `: number`, atau `: boolean`,
 * mengubah nilainya ke tipe berbeda tetap ditolak TypeScript.
 *
 * ```ts
 * tech = false     // Error: Type 'boolean' is not assignable to type 'string'.
 * version = "lima" // Error: Type 'string' is not assignable to type 'number'.
 * isTyped = 20     // Error: Type 'number' is not assignable to type 'boolean'.
 * ```
 */

export { tech, version, isTyped }
