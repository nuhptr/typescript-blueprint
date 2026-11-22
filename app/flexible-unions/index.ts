// 1. Union Types pada variabel & array
let password: string | number = 20;
password = "rahasia123";
console.log("Password union:", password);

const mixedItems: (number | string)[] = [1, 5, 5, "hello"];
console.log("Mixed array:", mixedItems);

// 2. Union pada Object Types
type UserInfo = {
    first: string;
    last: string;
    age: number;
};

type AccountDetails = {
    email: string;
    password: string;
};

let profile: UserInfo | AccountDetails = {
    email: "dev@example.com",
    password: "password123",
};
console.log("Union object:", profile);

// 3. Literal Types
let color: "red" | "blue" | "green" = "red";
color = "blue";

let priority: 1 | 2 | 3 = 1;
let isConfirmed: true = true;

console.log("Literals:", { color, priority, isConfirmed });
