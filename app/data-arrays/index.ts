// 1. Bracket Notation (T[])
const nums: number[] = [1, 2, 4, 6];
const items: string[] = [];
items.push("Keyboard", "Mouse");
console.log("Bracket notation:", nums, items);

// 2. Alternate Syntax (Array<T>)
const tools: Array<string> = ["TypeScript", "Bun", "VS Code"];
console.log("Alternate syntax:", tools);

// 3. Multidimensional Arrays
const singleDi: number[] = [1, 2, 3, 4, 5];
const multiDi: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
];
const tripleDi: number[][][] = [[[1, 2], [3, 4]]];

console.log("1D:", singleDi);
console.log("2D:", multiDi);
console.log("3D:", tripleDi);
