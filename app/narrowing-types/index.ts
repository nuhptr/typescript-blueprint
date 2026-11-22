// 1. typeof Type Guard
type MyType = string | number;

function formatValue(value: MyType): void {
    if (typeof value === "string") {
        console.log("String uppercase:", value.toUpperCase());
    } else {
        console.log("Number fixed:", value.toFixed(2));
    }
}

formatValue("hello");
formatValue(42);

// 2. instanceof Operator
class Dog {
    bark(): void {
        console.log("Dog: Woof!");
    }
}

class Cat {
    meow(): void {
        console.log("Cat: Meow!");
    }
}

function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}

animalSound(new Dog());
animalSound(new Cat());

// 3. Intersection Types
type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    role: string;
};

type ManagerWithEmployeeInfo = Employee & Manager;

const manager: ManagerWithEmployeeInfo = {
    id: 123,
    name: "John Doe",
    department: "Engineering",
    role: "Team Lead",
};

console.log("Manager:", manager);
