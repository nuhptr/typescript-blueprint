// 1. Generic Function
function pairWithDefault<T>(item: T, defaultValue: T): [T, T] {
    return [item, defaultValue];
}
console.log("Generic pair:", pairWithDefault<number>(42, 0), pairWithDefault("hello", "world"));

// 2. Generic Dictionary & Filter Array
function getRandomKeyValuePair<T>(obj: Record<string, T>): { key: string; value: T } {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)]!;
    return { key: randKey, value: obj[randKey]! };
}

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
    return array.filter(condition);
}

console.log("Random pair:", getRandomKeyValuePair({ a: "apple", b: "banana", c: "cherry" }));
console.log("Even numbers:", filterArray([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0));

// 3. Multiple Type Parameters (<T, U>)
function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1];
}
console.log("Reverse pair:", reversePair("Hello", 42));

// 4. Type Constraints (extends)
interface Identifiable {
    id: number;
}

function mergeObjects<T extends Identifiable, U extends Record<string, unknown>>(
    obj1: T,
    obj2: U
): T & U {
    return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ id: 1, name: "Item 1" }, { description: "Generic constraint demo" });
console.log("Merged:", merged);

// 5. Generic Classes
class Box<T> {
    private content: T;

    constructor(initialContent: T) {
        this.content = initialContent;
    }

    getContent(): T {
        return this.content;
    }

    setContent(newContent: T): void {
        this.content = newContent;
    }
}

const stringBox = new Box<string>("Hello, Generics!");
stringBox.setContent("Updated content");
const numberBox = new Box<number>(2026);
console.log("Generic Box:", stringBox.getContent(), "|", numberBox.getContent());
