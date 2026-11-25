/**
 * Unit Test Modul `basic-type-annotations` (`index.test.ts`)
 *
 * Menguji nilai dan tipe hasil anotasi dasar (`string`, `number`, `boolean`,
 * `type-inference`, dan `any-type`) serta pemuat sub-topik `runTopic()`.
 * Jalankan: `npx jest app/basic-type-annotations`
 */

import { color } from "./any-type"
import { isCompleted, tsHard } from "./boolean"
import { runTopic } from "./index"
import { favNumber, price } from "./number"
import { greeting, myName } from "./string"
import { isTyped, tech, version } from "./type-inference"

/** Suite pengujian untuk seluruh sub-topik anotasi tipe dasar. */
describe("basic-type-annotations", () => {
    /** Memastikan variabel beranotasi eksplisit menyimpan nilai sesuai tipenya. */
    it("memvalidasi anotasi tipe string, number, dan boolean", () => {
        expect(myName).toBe("Belajar TypeScript")
        expect(greeting).toBe("Halo, Belajar TypeScript!")
        expect(favNumber).toBe(9)
        expect(price).toBe(19.99)
        expect(tsHard).toBe(false)
        expect(isCompleted).toBe(true)
    })

    /** Memastikan inferensi tipe otomatis dan mutasi nilai `any` berjalan sesuai contoh. */
    it("memvalidasi hasil type inference otomatis dan nilai akhir any", () => {
        expect(typeof tech).toBe("string")
        expect(typeof version).toBe("number")
        expect(typeof isTyped).toBe("boolean")
        expect(color).toBe(true)
    })

    /** Memastikan helper `runTopic()` berhasil mengimpor file sub-topik secara asinkron. */
    it("memuat modul sub-topik melalui runTopic()", async () => {
        await expect(runTopic("Test String", "./string")).resolves.toBeUndefined()
    })
})
