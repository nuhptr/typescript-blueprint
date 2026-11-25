/**
 * Unit Test Modul `about-installation` (`hello.test.ts`)
 *
 * Menguji kontrak objek `User` dan fungsi sapaan `greet()` pada modul pengenalan.
 * Jalankan: `npx jest app/about-installation`
 */

import { developer, greet, type User } from "./hello"

/** Suite pengujian untuk script `hello.ts`. */
describe("about-installation / hello", () => {
    /** Memastikan objek `developer` memiliki properti `name` dan `role` yang sesuai. */
    it("memiliki objek developer yang sesuai kontrak User", () => {
        expect(developer).toEqual({
            name: "Anmastery",
            role: "TypeScript Blueprint",
        })
    })

    /** Memastikan `greet()` menggabungkan `name` dan `role` ke dalam string sapaan. */
    it("mengembalikan pesan sapaan terformat dari greet()", () => {
        const customUser: User = { name: "Budi", role: "Frontend Engineer" }

        expect(greet(developer)).toBe(
            "Halo, Anmastery! Selamat datang di TypeScript (TypeScript Blueprint).",
        )
        expect(greet(customUser)).toBe(
            "Halo, Budi! Selamat datang di TypeScript (Frontend Engineer).",
        )
    })
})
