/**
 * Unit Test Modul `core-functions` (`index.test.ts`)
 *
 * Menguji anotasi parameter, default parameter, return type, fungsi `void`,
 * serta fungsi `never` yang melempar error.
 * Jalankan: `npx jest app/core-functions`
 */

import { addOne, double, doubleSquare, greet, printMessage, throwError } from "./index"

/** Suite pengujian untuk fungsi-fungsi dasar di TypeScript. */
describe("core-functions", () => {
    /** Memastikan operasi matematika pada fungsi regular dan arrow mengembalikan angka yang benar. */
    it("menghitung addOne, double, dan doubleSquare dengan tepat", () => {
        expect(addOne(3)).toBe(4)
        expect(double(2, 10)).toBe(20)
        expect(doubleSquare(4)).toBe(16)
    })

    /** Memastikan `greet()` memakai nilai bawaan `"Anonymous"` saat dipanggil tanpa argumen. */
    it("mendukung nilai default maupun argumen kustom pada greet()", () => {
        expect(greet()).toBe("Hello, Anonymous!")
        expect(greet("Ayu")).toBe("Hello, Ayu!")
    })

    /** Memastikan fungsi `void` tidak mengembalikan nilai dan fungsi `never` melempar `Error`. */
    it("menjalankan fungsi void printMessage dan melempar error pada throwError", () => {
        const logSpy = jest.spyOn(console, "log").mockImplementation(() => {})

        expect(printMessage("Halo")).toBeUndefined()
        expect(logSpy).toHaveBeenCalledWith("Void message:", "Halo")
        expect(() => throwError("Contoh error")).toThrow("Contoh error")

        logSpy.mockRestore()
    })
})
