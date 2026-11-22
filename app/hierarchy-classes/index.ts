// 1. Class Annotations, Fields, Readonly, Access Modifiers & Shorthand
class Player {
    public readonly location: string = "ID";

    constructor(
        public readonly first: string,
        public readonly last: string,
        protected _score: number = 0
    ) {}

    private logSecret(): void {
        console.log(`Internal player: ${this.first} ${this.last}`);
    }

    // Getters & Setters
    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }

    public inspect(): void {
        this.logSecret();
    }
}

// 2. Inheritance & Protected Modifier
class SuperPlayer extends Player {
    public isAdmin: boolean = true;

    public maxScore(): void {
        this._score = 99999;
    }
}

const player = new Player("Elton", "Steele", 10);
player.inspect();
player.score = 42;
console.log("Player:", player.fullName, "| Score:", player.score, "| Loc:", player.location);

const admin = new SuperPlayer("Ada", "Lovelace", 50);
admin.maxScore();
console.log("SuperPlayer:", admin.fullName, "| Admin:", admin.isAdmin, "| Score:", admin.score);
