// 1. Parameter Annotations
function addOne(num: number): number {
    return num + 1;
}

const double = (x: number, y: number): number => x * y;
console.log("addOne:", addOne(3));
console.log("double:", double(2, 10));

// 2. Default Parameters
function greet(person: string = "Anonymous"): string {
    return `Hello, ${person}!`;
}
console.log("Default param:", greet(), "| Custom:", greet("Ayu"));

// 3. Return Annotations
const doubleSquare = (x: number): number => x * x;
console.log("Return annotation:", doubleSquare(4));

// 4. Void (fungsi tanpa return value)
function printMessage(message: string): void {
    console.log("Void message:", message);
}
printMessage("Ini fungsi bertipe void.");

// 5. Never (fungsi yang selalu melempar error / tidak pernah selesai)
function throwError(msg: string): never {
    throw new Error(msg);
}

try {
    throwError("Contoh error dari fungsi bertipe never");
} catch (err) {
    if (err instanceof Error) {
        console.log("Caught never error:", err.message);
    }
}
