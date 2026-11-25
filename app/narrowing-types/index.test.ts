/**
 * Unit Test Modul `narrowing-types` (`index.test.ts`)
 *
 * Menguji penyempitan tipe union memakai `typeof` guard (`formatValue`),
 * `instanceof` guard (`animalSound`), serta intersection `ManagerWithEmployeeInfo`.
 * Jalankan: `npx jest app/narrowing-types`
 */

import { animalSound, Cat, Dog, formatValue, manager } from "./index"

/** Suite pengujian untuk teknik Type Narrowing di TypeScript. */
describe("narrowing-types", () => {
    /** Memastikan `formatValue()` menjalankan cabang `string` maupun `number` secara tepat. */
    it("mempersempit union string | number menggunakan typeof pada formatValue()", () => {
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {})

        formatValue("hello")
        formatValue(42)

        expect(logSpy).toHaveBeenCalledWith("String uppercase:", "HELLO")
        expect(logSpy).toHaveBeenCalledWith("Number fixed:", "42.00")

        logSpy.mockRestore()
    })

    /** Memastikan `animalSound()` membedakan `Dog` dan `Cat` lewat `instanceof` serta menguji objek intersection. */
    it("membedakan instance Dog dan Cat menggunakan instanceof serta memvalidasi manager", () => {
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {})

        animalSound(new Dog())
        animalSound(new Cat())

        expect(logSpy).toHaveBeenCalledWith("Dog: Woof!")
        expect(logSpy).toHaveBeenCalledWith("Cat: Meow!")
        expect(manager).toEqual({
            id: 123,
            name: "John Doe",
            department: "Engineering",
            role: "Team Lead",
        })

        logSpy.mockRestore()
    })
})
