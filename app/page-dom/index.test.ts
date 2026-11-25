/**
 * Unit Test Modul `page-dom` (`index.test.ts`)
 *
 * Menguji fungsi `initDomCounter()` baik ketika dijalankan di lingkungan CLI
 * (`doc === undefined`) maupun saat memanipulasi elemen DOM pada objek `Document`.
 * Jalankan: `npx jest app/page-dom`
 */

import { initDomCounter } from "./index"

/** Suite pengujian untuk interaksi DOM bertipe aman. */
describe("page-dom", () => {
    /** Memastikan `initDomCounter()` keluar dengan aman (`false`) saat `document` tidak tersedia. */
    it("mengembalikan false secara aman ketika DOM tidak tersedia (CLI)", () => {
        expect(initDomCounter(undefined)).toBe(false)
    })

    /** Memastikan klik pada `#action-btn` memperbarui `textContent` pada elemen `#title`. */
    it("memperbarui teks heading saat tombol diklik pada objek Document", () => {
        let clickHandler: (() => void) | undefined
        const fakeHeading = { textContent: "Initial" }

        const fakeButton = {
            addEventListener: (_event: string, callback: () => void) => {
                clickHandler = callback
            },
        }

        const fakeDoc = {
            title: "Demo DOM",
            querySelector: (selector: string) => {
                if (selector === "#title") return fakeHeading
                if (selector === "#action-btn") return fakeButton
                return null
            },
        } as unknown as Document

        expect(initDomCounter(fakeDoc)).toBe(true)
        clickHandler?.()
        expect(fakeHeading.textContent).toBe("Button clicked 1 time(s)!")
    })
})
