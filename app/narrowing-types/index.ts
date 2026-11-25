/**
 * Narrowing Types (Penyempitan Tipe di TypeScript)
 *
 * Modul ini membahas teknik *type narrowing* untuk mempersempit tipe union
 * menjadi tipe yang lebih spesifik pada cabang logika tertentu menggunakan
 * `typeof` type guard, operator `instanceof`, serta penggabungan kontrak
 * melalui *intersection types* (`&`).
 *
 * Contoh penggunaan umum:
 * - Memanggil method spesifik `string` atau `number` secara aman pada nilai union.
 * - Membedakan instance class yang berbeda sebelum memanggil method masing-masing.
 * - Menggabungkan peran atau entitas objek dengan intersection type.
 */

/**
 * 1. `typeof` Type Guard
 *
 * Union tipe sederhana yang dapat berisi `string` atau `number`.
 */
type MyType = string | number

/**
 * Memformat nilai `string | number` dengan mempersempit tipenya memakai `typeof`.
 *
 * @param {MyType} value Nilai input bertipe `string` atau `number`.
 * @returns {void}
 */
function formatValue(value: MyType): void {
    if (typeof value === "string") console.log("String uppercase:", value.toUpperCase())
    else console.log("Number fixed:", value.toFixed(2))
}

formatValue("hello") // String uppercase: HELLO
formatValue(42) // Number fixed: 42.00

/**
 * 2. `instanceof` Operator
 *
 * Representasi hewan anjing dengan perilaku `bark()`.
 */
class Dog {
    /**
     * Mencetak suara gonggongan anjing ke konsol.
     *
     * @returns {void}
     */
    bark(): void {
        console.log("Dog: Woof!")
    }
}

/**
 * Representasi hewan kucing dengan perilaku `meow()`.
 */
class Cat {
    /**
     * Mencetak suara mengeong kucing ke konsol.
     *
     * @returns {void}
     */
    meow(): void {
        console.log("Cat: Meow!")
    }
}

/**
 * Memanggil method suara yang tepat berdasarkan hasil pengecekan `instanceof`.
 *
 * @param {Dog | Cat} animal Instance `Dog` atau `Cat`.
 * @returns {void}
 */
function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) animal.bark()
    else animal.meow()
}

animalSound(new Dog()) // Dog: Woof!
animalSound(new Cat()) // Cat: Meow!

/**
 * 3. Intersection Types (`&`)
 *
 * Informasi dasar seorang karyawan.
 */
type Employee = {
    id: number
    name: string
}

/**
 * Informasi jabatan manajerial.
 */
type Manager = {
    department: string
    role: string
}

/**
 * Gabungan tipe `Employee` dan `Manager` yang mewajibkan seluruh properti keduanya.
 */
type ManagerWithEmployeeInfo = Employee & Manager

const manager: ManagerWithEmployeeInfo = {
    id: 123,
    name: "John Doe",
    department: "Engineering",
    role: "Team Lead",
}

console.log("Manager:", manager) // Manager: { id: 123, name: "John Doe", department: "Engineering", role: "Team Lead" }

export { formatValue, Dog, Cat, animalSound, manager }
export type { MyType, Employee, Manager, ManagerWithEmployeeInfo }
