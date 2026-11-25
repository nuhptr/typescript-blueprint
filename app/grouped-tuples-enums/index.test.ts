/**
 * Unit Test Modul `grouped-tuples-enums` (`index.test.ts`)
 *
 * Menguji tuple dengan panjang dan urutan tipe tetap, destructuring tuple,
 * serta konstanta bernama pada string enum `WeatherConditions`.
 * Jalankan: `npx jest app/grouped-tuples-enums`
 */

import { currentWeather, first, games, myTuple, second, WeatherConditions } from "./index"

/** Suite pengujian untuk struktur data Tuple dan Enum. */
describe("grouped-tuples-enums", () => {
    /** Memastikan posisi elemen tuple dan variabel hasil destructuring memiliki nilai yang tepat. */
    it("menjaga urutan tipe dan panjang tetap pada tuple beserta destructuring", () => {
        expect(myTuple).toEqual([10, "TypeScript"])
        expect(first).toBe(10)
        expect(second).toBe("TypeScript")
        expect(games).toHaveLength(3)
    })

    /** Memastikan nilai string pada setiap anggota enum `WeatherConditions` sesuai definisi. */
    it("memetakan anggota string enum WeatherConditions dengan benar", () => {
        expect(currentWeather).toBe(WeatherConditions.Sunny)
        expect(WeatherConditions.Sunny).toBe("sunny")
        expect(WeatherConditions.Rainy).toBe("rainy")
    })
})
