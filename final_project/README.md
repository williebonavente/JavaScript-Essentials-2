# **Interactive Personal Budget Manager CLI**

## **Project Overview**
The **Interactive Personal Budget Manager CLI** is a command-line interface application designed to help users efficiently manage their finances. Built using advanced JavaScript concepts, this project demonstrates modular programming, functional programming principles, asynchronous programming, and error handling techniques. It also incorporates user authentication and persistent storage for real-world functionality.

---

## **Specifications**
### **Core Features**
1. **User Authentication**:  
   - Login and registration system for multiple users.
   - Secure storage of credentials in a JSON file.

2. **Transaction Management**:  
   - Add, view, and delete transactions (income and expenses).
   - Persistent transaction data storage using JSON.

3. **Budget Summary**:  
   - Real-time calculation of total income, expenses, and remaining budget.

4. **Interactive Menu**:  
   - User-friendly menu options powered by `readline` or `inquirer`.

5. **Error Handling**:  
   - Graceful handling of invalid inputs and unexpected errors.
   - Debugging tools to assist development and testing.

6. **Persistence**:  
   - Data stored locally using JSON files for user credentials and transactions.

---

## **Technical Details**
### **Project Architecture**
The project is modularized into the following components:

1. **`userAuth.js`**:  
   Handles user authentication, including login and registration.  
   **Key Functions**:  
   - `login(username, password)`  
   - `register(username, password)`  

2. **`budgetManager.js`**:  
   Manages core budget operations like adding transactions and summarizing data.  
   **Key Functions**:  
   - `addTransaction(transactions, transaction)`  
   - `getSummary(transactions)`  

3. **`transaction.js`**:  
   Manages transaction-related operations.  
   **Key Functions**:  
   - `deleteTransaction(transactions, id)`  
   - `listTransactions(transactions)`  

4. **`cliManager.js`**:  
   Handles user interactions through the command line interface.  
   **Key Functions**:  
   - `showMenu()`  
   - `promptUserInput(promptText)`  
   - `handleCommand(command)`  

5. **`helpers.js`**:  
   Utility functions for validation, formatting, and ID generation.  
   **Key Functions**:  
   - `validateInput(input, type)`  
   - `formatCurrency(amount)`  
   - `generateId()`  

---

## **Execution Flow**
1. **User Authentication**:
   - Prompt the user to log in or register.
   - Validate credentials using `async/await`.

2. **Interactive Menu**:
   - Present options like "Add **Transaction**," "View Transactions," or "View Summary."
   - Handle commands dynamically based on user input.

3. **Transaction Management**:
   - Collect transaction details (description, amount, type) through prompts.
   - Update JSON data and display real-time summaries.

4. **Budget Summary**:
   - Calculate and display total income, total expenses, and remaining budget.

5. **Error Handling**:
   - Validate all inputs for correctness.
   - Display meaningful error messages for invalid operations.

---

## **File Structure**
```
InteractiveBudgetCLI/
├── src/
│   ├── userAuth.js
│   ├── budgetManager.js
│   ├── transaction.js
│   ├── cliManager.js
│   ├── helpers.js
├── data/
│   ├── users.json
│   └── transactions.json
├── tests/
│   ├── budgetManager.test.js
│   ├── transaction.test.js
│   └── userAuth.test.js
├── package.json
└── README.md
```

---

## **Example JSON Structure**
### `users.json`
```json
[
  {
    "username": "john_doe",
    "password": "hashed_password"
  }
]
```

### `transactions.json`
```json
[
  {
    "id": "1a2b3c",
    "description": "Salary",
    "amount": 50000,
    "type": "income",
    "user": "john_doe"
  }
]
```
## **Example of Interaction**
```
Welcome to Personal Budget Manager CLI!

1. Login
2. Register
3. Exit
> 1

Enter username: willieRevillame50saBalota
Enter password: ********
Login successful!

Main Menu:
1. Add Transaction
2. View Transactions
3. View Summary
4. Delete Transaction
5. Exit
> 1

Enter description: Salary
Enter amount: 50000
Enter type (income/expense): income
Transaction added successfully!

Main Menu:
1. Add Transaction
2. View Transactions
3. View Summary
4. Delete Transaction
5. Exit
> 3

Summary:
Total Income: ₱50,000.00
Total Expenses: ₱0.00
Remaining Budget: ₱50,000.00

Main Menu:
1. Add Transaction
2. View Transactions
3. View Summary
4. Delete Transaction
5. Exit
> 5

Goodbye!
```
---

## **Tips for Development**
1. **Start Simple**:  
   Begin with core functionalities like user authentication and transaction management. Expand incrementally.

2. **Test Frequently**:  
   - Use a testing framework like Jest to ensure functions work as expected.  
   - Test edge cases like invalid inputs and empty data files.

3. **Debugging**:  
   - Use `console.log()` statements for tracking execution flow.  
   - Leverage browser or Node.js debugging tools for troubleshooting.

4. **Enhance Interaction**:  
   - Use the `inquirer` library for intuitive prompts and menus.  
   - Include confirmation dialogs for critical actions like deleting transactions.

5. **Error Handling**:  
   - Validate inputs to prevent application crashes.  
   - Use `try-catch` blocks for file I/O operations.

---

## **Future Enhancements**
- **Data Encryption**: Secure sensitive data like user credentials using hashing techniques.
- **Multi-Currency Support**: Allow users to manage transactions in different currencies.
- **Analytics**: Provide insights like spending trends and monthly savings.

---

## Sample Project
Here's a sample project for you, although some parts of it is not completed. \
 [JavaScript Essentials 2 Final Project](https://github.com/williebonavente)

## **Acknowledgments**
This project is inspired by the practical needs of personal financial management and serves as a comprehensive exercise in JavaScript programming.

**Good luck, and happy coding!** 🎉