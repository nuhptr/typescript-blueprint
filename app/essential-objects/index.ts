// 1. Object Types
const person: { firstName: string; lastName: string; age: number } = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
console.log("Object:", `${person.firstName} ${person.lastName}, ${person.age}`);

function createDefaultUser(): { name: string; age: number; location: string } {
    return { name: "Alex", age: 24, location: "Indonesia" };
}
console.log("Factory object:", createDefaultUser());

// 2. Type Aliases, 3. Optional Properties, & 4. Readonly
type User = {
    readonly id: number;
    name: string;
    age?: number;
    readonly location: string;
};

const printUserInfo = (user: User): string => {
    return `#${user.id} ${user.name} (${user.age ?? "N/A"}) - ${user.location}`;
};

const user: User = { id: 1, name: "Rina", location: "Jakarta" };
// user.location = "Bandung"; // Error: readonly property
console.log("Type Alias:", printUserInfo(user));

// 5. Intersection Types (&)
type AccountInfo = {
    email: string;
    password: string;
};

type UserAccount = User & AccountInfo;

const account: UserAccount = {
    id: 2,
    name: "Budi",
    age: 27,
    location: "Surabaya",
    email: "budi@example.com",
    password: "secret",
};
console.log("Intersection:", account.name, account.email);
