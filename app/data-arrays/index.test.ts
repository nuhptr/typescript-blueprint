/**
 * Unit Test Modul `data-arrays` (`index.test.ts`)
 *
 * Menguji deklarasi array dengan notasi `T[]`, `Array<T>`, serta struktur
 * array multidimensi (1D, 2D, dan 3D).
 * Jalankan: `npx jest app/data-arrays`
 */

import { items, multiDi, nums, singleDi, tools, tripleDi } from "./index"

/** Suite pengujian untuk koleksi array bertipe di TypeScript. */
describe("data-arrays", () => {
    /** Memastikan isi array 1 dimensi sesuai dengan tipe elemen yang dideklarasikan. */
    it("menyimpan elemen bertipe tepat pada notasi T[] dan Array<T>", () => {
        expect(nums).toEqual([1, 2, 4, 6])
        expect(items).toEqual(["Keyboard", "Mouse"])
        expect(tools).toEqual(["TypeScript", "Bun", "VS Code"])
    })

    /** Memastikan kedalaman dan elemen array bersarang 1D, 2D, dan 3D terbentuk akurat. */
    it("membentuk struktur array multidimensi 1D, 2D, dan 3D dengan benar", () => {
        expect(singleDi).toEqual([1, 2, 3, 4, 5])
        expect(multiDi).toEqual([
            [1, 2, 3],
            [4, 5, 6],
        ])
        expect(tripleDi).toEqual([
            [
                [1, 2],
                [3, 4],
            ],
        ])
    })
})
