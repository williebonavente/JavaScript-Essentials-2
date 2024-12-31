// Pure function to add an expense
function addExpense(expenses, newExpense) {
    return [...expenses, newExpense]; // Immutability: Create a new array
}

// Pure function to remove an expense by ID
function removeExpense(expenses, id) {
    return expenses.filter(expense => expense.id !== id);
}

// Using reduce to calculate total expenses
function calculateTotal(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

// Example usage
let expenses = [];
expenses = addExpense(expenses, { id: 1, name: "Groceries", amount: 500 });
expenses = addExpense(expenses, { id: 2, name: "Electricity Bill", amount: 1200 });

console.log("Expenses:", expenses);
console.log("Total:", calculateTotal(expenses));

expenses = removeExpense(expenses, 1);
console.log("Updated Expenses:", expenses);
console.log("Total:", calculateTotal(expenses));
