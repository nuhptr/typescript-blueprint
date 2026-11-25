/**
 * Unit Test Modul `essential-objects` (`index.test.ts`)
 *
 * Menguji inline object types, factory function `createDefaultUser()`,
 * type alias `User` (optional & readonly), dan intersection `UserAccount`.
 * Jalankan: `npx jest app/essential-objects`
 */

import { account, createDefaultUser, person, printUserInfo, user, type User } from "./index"

/** Suite pengujian untuk pemodelan tipe objek di TypeScript. */
describe("essential-objects", () => {
    /** Memastikan struktur properti objek inline dan nilai balik fungsi factory sesuai kontrak. */
    it("membentuk objek inline dan factory object sesuai struktur properti", () => {
        expect(person).toEqual({ firstName: "John", lastName: "Doe", age: 30 })
        expect(createDefaultUser()).toEqual({
            name: "Alex",
            age: 24,
            location: "Indonesia",
        })
    })

    /** Memastikan properti opsional `age` ditangani dengan fallback `"N/A"` ketika kosong. */
    it("memformat User dengan maupun tanpa properti opsional age", () => {
        const userWithAge: User = { id: 9, name: "Sari", age: 22, location: "Bandung" }

        expect(printUserInfo(user)).toBe("#1 Rina (N/A) - Jakarta")
        expect(printUserInfo(userWithAge)).toBe("#9 Sari (22) - Bandung")
    })

    /** Memastikan tipe intersection `User & AccountInfo` menggabungkan seluruh properti kedua tipe. */
    it("menggabungkan properti User dan AccountInfo pada intersection UserAccount", () => {
        expect(account.name).toBe("Budi")
        expect(account.email).toBe("budi@example.com")
        expect(account.location).toBe("Surabaya")
    })
})
