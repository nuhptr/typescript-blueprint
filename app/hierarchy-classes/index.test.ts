/**
 * Unit Test Modul `hierarchy-classes` (`index.test.ts`)
 *
 * Menguji enkapsulasi class `Player`, getter/setter beserta validasi skor,
 * serta pewarisan (`extends`) dan akses `protected` pada `SuperPlayer`.
 * Jalankan: `npx jest app/hierarchy-classes`
 */

import { Player, SuperPlayer } from "./index"

/** Suite pengujian untuk konsep OOP dan Class di TypeScript. */
describe("hierarchy-classes", () => {
    /** Memastikan inisialisasi constructor shorthand, getter `fullName`, dan setter `score` bekerja. */
    it("menginisialisasi Player serta menjalankan getter fullName dan setter score", () => {
        const p = new Player("Elton", "Steele", 10)
        p.score = 42

        expect(p.fullName).toBe("Elton Steele")
        expect(p.score).toBe(42)
        expect(p.location).toBe("ID")
    })

    /** Memastikan setter `score` melempar error apabila diberi nilai kurang dari `0`. */
    it("menolak nilai skor negatif pada setter score", () => {
        const p = new Player("Elton", "Steele")

        expect(() => {
            p.score = -1
        }).toThrow("Score cannot be negative")
    })

    /** Memastikan subclass `SuperPlayer` dapat mengubah properti `protected _score`. */
    it("mewarisi Player dan memperbarui protected _score pada SuperPlayer", () => {
        const admin = new SuperPlayer("Ada", "Lovelace", 50)
        admin.maxScore()

        expect(admin.fullName).toBe("Ada Lovelace")
        expect(admin.isAdmin).toBe(true)
        expect(admin.score).toBe(99999)
    })
})
