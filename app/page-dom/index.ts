// TypeScript DOM Interaction
// Saat dijalankan di browser, script ini memanipulasi elemen HTML secara type-safe.
// Saat dijalankan via Bun CLI, script menampilkan panduan build untuk browser.

if (typeof document !== "undefined") {
    const heading = document.querySelector<HTMLHeadingElement>("#title");
    const button = document.querySelector<HTMLButtonElement>("#action-btn");

    if (heading && button) {
        let clicks = 0;
        button.addEventListener("click", () => {
            clicks += 1;
            heading.textContent = `Button clicked ${clicks} time(s)!`;
        });
    }
    console.log("DOM ready:", document.title);
} else {
    console.log("DOM tidak tersedia di CLI runtime.");
    console.log("Build untuk browser: bun build app/page-dom/index.ts --outdir app/page-dom/dist");
}
