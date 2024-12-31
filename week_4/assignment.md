# Week 4: Advanced Topics and Problem Solving

### Assignment 1: **Using JavaScript Modules for a To-Do List App**

#### **Problem Statement:**
Create a To-Do List application using JavaScript modules.  
- **Module 1:** `tasks.js` – Handle the tasks array and provide functions to add, delete, and list tasks.  
- **Module 2:** `app.js` – Import the task functions and use them to create a working app.  
- Use both **named** and **default exports**.

#### **Requirements:**
1. Create and export functions for adding, deleting, and displaying tasks from the `tasks.js` module.
2. Import and utilize these functions in the `app.js` module.
3. Ensure the application demonstrates modular programming.

---

### Assignment 2: **Functional Programming in Expense Tracker**

#### **Problem Statement:**
Implement an **Expense Tracker** using functional programming concepts.  
- Use **pure functions** to add and remove expenses.  
- Maintain **immutability** by not mutating the original array.  
- Use **higher-order functions** like `map` and `filter`.

#### **Requirements:**
1. Write a function `addExpense(expenses, newExpense)` that returns a new array with the new expense added.  
2. Write a function `removeExpense(expenses, id)` that removes an expense by its ID.  
3. Use `reduce` to calculate the total expenses and return the result.

---

### Assignment 3: **Working with Generators and Decorators**

#### **Problem Statement:**
Build a **Pagination System** using **Generators** and add logging functionality to each call using **Decorators**.  
- Use a generator to yield data pages.
- Decorate the generator function to log each invocation.

#### **Requirements:**
1. Write a generator function `paginateData(data, pageSize)` that yields data chunks.
2. Create a decorator `logDecorator(fn)` that wraps the generator function to log its calls.
3. Test the implementation by paginating a sample dataset.

---

### Assignment 4: **Debugging and Testing JavaScript Code**

#### **Problem Statement:**
Create and debug a **BMI Calculator** that takes height (in meters) and weight (in kilograms) as inputs.  
- Include deliberate errors for debugging practice.
- Write test cases using JavaScript (or a testing library like Jest if applicable).

#### **Requirements:**
1. Write a `calculateBMI(height, weight)` function that returns the BMI value.
2. Add a bug (e.g., divide by zero or incorrect formula) and fix it using browser debugging tools.
3. Write unit tests for the function to check edge cases like zero or negative values.

---

