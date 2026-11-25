/**
 * Unit Test Modul `modular-generics` (`index.test.ts`)
 *
 * Menguji fungsi generik (`pairWithDefault`, `getRandomKeyValuePair`,
 * `filterArray`, `reversePair`, `mergeObjects`) serta generic class `Box<T>`.
 * Jalankan: `npx jest app/modular-generics`
 */

import {
    Box,
    filterArray,
    getRandomKeyValuePair,
    mergeObjects,
    pairWithDefault,
    reversePair,
} from "./index"

/** Suite pengujian untuk fitur Generics di TypeScript. */
describe("modular-generics", () => {
    /** Memastikan fungsi generik mempertahankan tipe elemen pada tuple, array, dan dictionary. */
    it("menjalankan fungsi generik satu maupun dua parameter tipe dengan tepat", () => {
        expect(pairWithDefault<number>(42, 0)).toEqual([42, 0])
        expect(reversePair("Hello", 42)).toEqual([42, "Hello"])
        expect(filterArray([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)).toEqual([2, 4, 6])

        const randomPair = getRandomKeyValuePair({ a: "apple", b: "banana" })
        expect(["a", "b"]).toContain(randomPair.key)
        expect(["apple", "banana"]).toContain(randomPair.value)
    })

    /** Memastikan generic constraint `extends Identifiable` dan penyimpanan state pada `Box<T>` bekerja. */
    it("menerapkan constraint pada mergeObjects dan menyimpan state di Box<T>", () => {
        const combined = mergeObjects({ id: 1, name: "Item 1" }, { active: true })
        expect(combined).toEqual({ id: 1, name: "Item 1", active: true })

        const box = new Box<string>("awal")
        expect(box.getContent()).toBe("awal")
        box.setContent("baru")
        expect(box.getContent()).toBe("baru")
    })
})
