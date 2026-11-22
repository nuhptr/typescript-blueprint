interface User {
    name: string
    role: string
}

function greet(user: User): string {
    return `Halo, ${user.name}! Selamat datang di TypeScript (${user.role}).`
}

const developer: User = {
    name: "Anmastery",
    role: "TypeScript Blueprint",
}

console.log(greet(developer))
