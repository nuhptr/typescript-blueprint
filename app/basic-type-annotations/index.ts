/**
 * Basic Type Annotations adalah fitur dasar TypeScript untuk menentukan tipe data
 * secara eksplisit maupun otomatis (inference) pada variabel.
 *
 * File ini berfungsi sebagai entry utama folder `basic-type-annotations/` yang
 * menjalankan seluruh sub-topik secara berurutan. Setiap sub-file juga dapat
 * dijalankan secara terpisah menggunakan Bun.
 *
 * Daftar sub-topik:
 * 1. string.ts         - Anotasi tipe `string` untuk data teks.
 * 2. number.ts         - Anotasi tipe `number` untuk data angka.
 * 3. boolean.ts        - Anotasi tipe `boolean` untuk nilai logika `true`/`false`.
 * 4. type-inference.ts - Inferensi tipe otomatis oleh TypeScript.
 * 5. any-type.ts       - Tipe `any` dan risiko error saat runtime.
 */

/**
 * Menjalankan satu modul sub-topik dengan header pemisah agar output mudah
 * dibaca di terminal.
 *
 * @param {string} title Judul sub-topik yang ditampilkan.
 * @param {string} modulePath Path relatif ke file sub-topik.
 * @returns {Promise<void>}
 */
async function runTopic(title: string, modulePath: string): Promise<void> {
    console.log(`\n=== ${title} ===`)
    await import(modulePath)
}

/**
 * Titik masuk utama yang mengeksekusi seluruh sub-topik secara berurutan.
 *
 * @returns {Promise<void>}
 */
async function main(): Promise<void> {
    await runTopic("1. String Annotation", "./string")
    await runTopic("2. Number Annotation", "./number")
    await runTopic("3. Boolean Annotation", "./boolean")
    await runTopic("4. Type Inference", "./type-inference")
    await runTopic("5. Any Type", "./any-type")
}

main()

export {}
