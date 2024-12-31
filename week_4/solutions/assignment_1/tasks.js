// Named export for tasks array
export const tasks = [];

// Named exports for task operations
export function addTask(task) {
    tasks.push(task);
    console.log(`Task added: ${task}`);
}

export function deleteTask(task) {
    const index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Task deleted: ${task}`);
    } else {
        console.log(`Task not found: ${task}`);
    }
}

export function listTasks() {
    console.log("Current Tasks:");
    tasks.forEach((task, index) => console.log(`${index + 1}: ${task}`));
}

// Default export
export default tasks;
