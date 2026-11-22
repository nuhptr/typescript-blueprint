# Cara Install TypeScript Secara Global

Panduan untuk menginstal TypeScript secara global sehingga perintah compiler `tsc` dapat dijalankan dari direktori mana saja di terminal.

## Prasyarat

Pastikan **Node.js** dan package manager (seperti `npm`) sudah terpasang di sistem Anda. Cek dengan perintah berikut:

```bash
node -v
npm -v
```

Jika belum terpasang, unduh dan instal Node.js melalui [nodejs.org](https://nodejs.org/) atau gunakan version manager seperti `nvm`.

## Instalasi Global

### Menggunakan npm (Rekomendasi)

```bash
npm install -g typescript
```

### Menggunakan Package Manager Lain

- **pnpm**
    ```bash
    pnpm add -g typescript
    ```
- **Yarn**
    ```bash
    yarn global add typescript
    ```
- **Bun**
    ```bash
    bun add -g typescript
    ```

## Verifikasi Instalasi

Pastikan TypeScript sudah terpasang dengan mengecek versi `tsc`:

```bash
tsc -v
```

Atau:

```bash
tsc --version
```

Jika berhasil, terminal akan menampilkan versi TypeScript yang terpasang, misalnya:

```text
Version 5.x.x
```

## Uji Coba Cepat

1. Gunakan atau buat file [`hello.ts`](./hello.ts):

    ```ts
    interface User {
        name: string;
        role: string;
    }

    function greet(user: User): string {
        return `Halo, ${user.name}! Selamat datang di TypeScript (${user.role}).`;
    }

    const developer: User = {
        name: "Developer",
        role: "TypeScript Blueprint",
    };

    console.log(greet(developer));
    ```

### Menjalankan dengan `tsc` + Node.js

1. Compile ke JavaScript menggunakan `tsc`:

    ```bash
    tsc hello.ts
    ```

2. Jalankan file hasil compile (`hello.js`):

    ```bash
    node hello.js
    ```

### Menjalankan Langsung dengan Bun

Bun mendukung eksekusi file TypeScript secara native tanpa perlu compile ke `.js` terlebih dahulu:

```bash
bun hello.ts
```

Atau menggunakan `bun run`:

```bash
bun run hello.ts
```

Untuk mode watch (otomatis jalan ulang saat file berubah):

```bash
bun --watch hello.ts
```

> **Tips:** Bun mengeksekusi TypeScript dengan menghapus tipe (transpile) tanpa melakukan type-checking. Gunakan `tsc --noEmit hello.ts` jika ingin mengecek error tipe tanpa menghasilkan file `.js`.

## Update & Uninstall

- **Update ke versi terbaru:**
    ```bash
    npm install -g typescript@latest
    ```
- **Uninstall TypeScript global:**
    ```bash
    npm uninstall -g typescript
    ```

## Troubleshooting

- **`EACCES` / Permission denied (macOS/Linux):**
  Disarankan menggunakan `nvm` agar instalasi global tidak memerlukan `sudo`. Jika tetap memakai instalasi Node bawaan sistem, Anda bisa mengubah direktori global npm atau menggunakan `sudo npm install -g typescript`.
- **`tsc: command not found`:**
  Pastikan path global bin npm sudah terdaftar di environment variable `PATH`. Cek lokasi prefix global dengan:
    ```bash
    npm prefix -g
    ```
    Lalu pastikan `<prefix>/bin` (macOS/Linux) atau `<prefix>` (Windows) ada di `PATH`.

> **Catatan:** Instalasi global praktis untuk belajar atau eksperimen cepat. Untuk proyek nyata atau kerja tim, tetap disarankan menginstal TypeScript secara lokal sebagai `devDependency` (`npm install -D typescript`) agar versi compiler konsisten di semua environment.
