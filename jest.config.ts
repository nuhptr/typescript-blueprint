/**
 * Konfigurasi Jest (`jest.config.ts`)
 *
 * Mengatur Jest dengan preset `ts-jest` untuk menemukan dan menjalankan
 * seluruh file pengujian `*.test.ts` yang berada di masing-masing folder
 * topik di dalam direktori `app/`.
 */

import type { Config } from "jest"

/**
 * Konfigurasi utama Jest untuk repositori TypeScript Blueprint.
 */
const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/app"],
    testMatch: ["**/*.test.ts"],
    transform: {
        "^.+\\.ts$": ["ts-jest", { tsconfig: { esModuleInterop: true } }],
    },
    silent: true,
    verbose: true,
}

export default config
