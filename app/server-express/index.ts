interface ApiResponse {
    message: string;
    runtime: string;
    timestamp: string;
}

function handleRequest(req: Request): Response {
    const url = new URL(req.url);

    if (url.pathname === "/") {
        return new Response("Hello, TypeScript with Bun & Express Blueprint!", {
            headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
    }

    if (url.pathname === "/api/health") {
        const payload: ApiResponse = {
            message: "Server healthy",
            runtime: `Bun ${Bun.version}`,
            timestamp: new Date().toISOString(),
        };
        return Response.json(payload);
    }

    return new Response("Not Found", { status: 404 });
}

const isTestMode = Bun.argv.includes("--test");

if (isTestMode) {
    const homeRes = handleRequest(new Request("http://localhost:3000/"));
    const healthRes = handleRequest(new Request("http://localhost:3000/api/health"));
    console.log("GET / ->", await homeRes.text());
    console.log("GET /api/health ->", await healthRes.json());
} else {
    const server = Bun.serve({
        port: Number(Bun.env.PORT ?? 3000),
        fetch: handleRequest,
    });
    console.log(`Server is running at http://localhost:${server.port}`);
}
