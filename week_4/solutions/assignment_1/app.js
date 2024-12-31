// Importing named and default exports
import tasks, { addTask, deleteTask, listTasks } from './tasks.js';

// Using the module functions
addTask("Complete homework");
addTask("Buy groceries");
listTasks();
deleteTask("Buy groceries");
listTasks();
