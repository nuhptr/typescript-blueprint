/**
 * Unit Test Modul `flexible-unions` (`index.test.ts`)
 *
 * Menguji union types (`|`) pada variabel, array campuran, objek union,
 * serta pembatasan nilai menggunakan literal types.
 * Jalankan: `npx jest app/flexible-unions`
 */

import { color, isConfirmed, mixedItems, password, priority, profile } from "./index"

/** Suite pengujian untuk union types dan literal types. */
describe("flexible-unions", () => {
    /** Memastikan variabel, array, dan objek bertipe union menyimpan nilai yang valid. */
    it("menyimpan nilai union pada variabel, array campuran, dan objek", () => {
        expect(password).toBe("rahasia123")
        expect(mixedItems).toEqual([1, 5, 5, "hello"])
        expect(profile).toEqual({
            email: "dev@example.com",
            password: "password123",
        })
    })

    /** Memastikan variabel bertipe literal hanya bernilai opsi spesifik yang diizinkan. */
    it("membatasi nilai sesuai literal types yang ditentukan", () => {
        expect(color).toBe("blue")
        expect(priority).toBe(1)
        expect(isConfirmed).toBe(true)
    })
})
