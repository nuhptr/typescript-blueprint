// 1. Basic Object Interface
interface Computer {
    name: string;
    ram: number;
    hdd: number;
}

const laptop: Computer = { name: "MacBook Pro", ram: 16, hdd: 512 };
console.log("Computer:", laptop);

// 2. Interface for Functions
interface MathOperation {
    (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
console.log("Math:", add(5, 3), subtract(7, 2));

// 3. Interface with Methods & 4. Extending Interface
interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(price: number): string;
}

interface MovieGenre extends MovieDetails {
    genre: string;
}

const movie: MovieGenre = {
    name: "John Wick",
    ratings: 8.5,
    genre: "Action",
    printMovieInfo(price) {
        return `${this.name} (${this.genre}) - Rating: ${this.ratings}, Price: $${price}`;
    },
};
console.log("Movie:", movie.printMovieInfo(15));

// 5. Interface for Classes
interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log("Car started");
    }
    stop(): void {
        console.log("Car stopped");
    }
}

const myCar = new Car();
myCar.start();
myCar.stop();

// 6. Declaration Merging (Interface Extension)
interface AppUser {
    firstName: string;
    lastName: string;
}

interface AppUser {
    age: number;
    getSummary(): string;
}

const appUser: AppUser = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
    getSummary() {
        return `${this.firstName} ${this.lastName} (${this.age})`;
    },
};
console.log("Merged interface:", appUser.getSummary());
