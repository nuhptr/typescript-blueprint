import type { Todo } from "./todo";

const TODO_URL = "https://jsonplaceholder.typicode.com/todos/1";

const fallbackTodo: Todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem (offline fallback)",
    completed: false,
};

async function fetchTodo(url: string): Promise<Todo> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as Todo;
}

async function main(): Promise<void> {
    try {
        const todo = await fetchTodo(TODO_URL);
        console.log("Fetched Todo:", todo);
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.log(`Network tidak tersedia (${message}), menggunakan fallback Todo:`);
        console.log("Fallback Todo:", fallbackTodo);
    }
}

await main();
