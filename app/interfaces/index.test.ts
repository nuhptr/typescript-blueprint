/**
 * Unit Test Modul `interfaces` (`index.test.ts`)
 *
 * Menguji kontrak objek `Computer`, function interface `MathOperation`,
 * pewarisan `MovieGenre`, implementasi `Car implements Vehicle`,
 * dan declaration merging `AppUser`.
 * Jalankan: `npx jest app/interfaces`
 */

import { add, appUser, Car, laptop, movie, subtract } from "./index"

/** Suite pengujian untuk berbagai penggunaan `interface` di TypeScript. */
describe("interfaces", () => {
    /** Memastikan objek, fungsi matematika, dan method dari interface turunan bekerja sesuai kontrak. */
    it("memvalidasi implementasi Computer, MathOperation, dan MovieGenre", () => {
        expect(laptop).toEqual({ name: "MacBook Pro", ram: 16, hdd: 512 })
        expect(add(5, 3)).toBe(8)
        expect(subtract(7, 2)).toBe(5)
        expect(movie.printMovieInfo(15)).toBe("John Wick (Action) - Rating: 8.5, Price: $15")
    })

    /** Memastikan class `Car` memenuhi method `Vehicle` dan `AppUser` menggabungkan dua deklarasi. */
    it("memvalidasi class Car implements Vehicle dan declaration merging AppUser", () => {
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {})
        const car = new Car()

        car.start()
        car.stop()

        expect(logSpy).toHaveBeenCalledWith("Car started")
        expect(logSpy).toHaveBeenCalledWith("Car stopped")
        expect(appUser.getSummary()).toBe("Jane Doe (28)")

        logSpy.mockRestore()
    })
})
