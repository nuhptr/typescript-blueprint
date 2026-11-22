/**
 * Any Type (`any`)
 *
 * Tipe `any` adalah tipe khusus di TypeScript yang mengizinkan variabel
 * menyimpan nilai dengan tipe apa pun dan menonaktifkan pemeriksaan tipe
 * (*type checking*) untuk variabel tersebut.
 *
 * Peringatan:
 * - Gunakan `any` seminimal mungkin.
 * - Penggunaan `any` berlebihan menghilangkan manfaat utama TypeScript
 *   dan berisiko menimbulkan error saat runtime (bukan saat compile).
 */

/**
 * Variabel `color` bertipe `any` sehingga bebas diubah ke `string`, `number`, maupun `boolean`.
 */
let color: any = "crimson"
console.log("Awal (string):", color) // "crimson"

color = 20
console.log("Diubah ke number:", color) // 20

color = true
console.log("Diubah ke boolean:", color) // true

/**
 * Contoh Risiko `any` di Runtime:
 * TypeScript tidak akan memberi error saat compile jika kita memanggil method
 * yang tidak ada (misalnya `color.toUpperCase()` saat nilainya `boolean`),
 * sehingga error baru muncul saat program dijalankan.
 */
try {
    color.toUpperCase()
} catch (error) {
    if (error instanceof Error) {
        console.log("Runtime error akibat `any`:", error.message)
    }
}

export {}
