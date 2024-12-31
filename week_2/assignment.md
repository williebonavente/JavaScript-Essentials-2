# Week 2 Assignments: OOP Concepts in JavaScript
---

### **Assignment 1: Library Management System**
**Objective:** Create a class-based program to manage a library's book collection.

#### Requirements:
1. Create a `Book` class with the following properties:
   - `title`
   - `author`
   - `genre`
   - `isAvailable` (default is `true`)

2. Add methods to the `Book` class:
   - `borrowBook()` - Sets `isAvailable` to `false`.
   - `returnBook()` - Sets `isAvailable` to `true`.

3. Create a `Library` class that maintains a collection of books.
   - Add methods to:
     - `addBook(book)` - Adds a book to the collection.
     - `findBookByTitle(title)` - Returns the book object with the matching title.
     - `listAvailableBooks()` - Lists all books that are currently available.

#### Real-Life Scenario:
Simulate a small library system where users can borrow and return books.  

---

### **Assignment 2: E-commerce Product Catalog**
**Objective:** Build a modular product catalog system for an e-commerce site.

#### Requirements:
1. Create a `Product` class with the following properties:
   - `name`
   - `price`
   - `category`

2. Create a `Catalog` class to manage the collection of products:
   - Add methods to:
     - `addProduct(product)` - Adds a product to the catalog.
     - `filterByCategory(category)` - Returns all products in the given category.
     - `applyDiscount(percentage)` - Reduces the price of all products by a given percentage.

#### Real-Life Scenario:
Simulate managing an online store’s catalog with discounts and category filters.  

---

### **Assignment 3: Vehicle Fleet Management**
**Objective:** Implement a system to manage a fleet of vehicles using inheritance.

#### Requirements:
1. Create a base class `Vehicle` with the following properties:
   - `make`
   - `model`
   - `year`

2. Add a method `getDetails()` that returns a string with vehicle details.

3. Create two derived classes:
   - `Car` with an additional property `doors`.
   - `Truck` with an additional property `capacity`.

4. Override `getDetails()` in both child classes to include the specific properties.

5. Create a `Fleet` class to manage a list of vehicles:
   - Add methods to:
     - `addVehicle(vehicle)` - Adds a vehicle to the fleet.
     - `listFleet()` - Lists all vehicles with their details.

#### Real-Life Scenario:
Manage a company’s fleet of cars and trucks, keeping track of vehicle details.  

---

### **Assignment 4: Secure Banking System**
**Objective:** Build a banking system using encapsulation and private fields.

#### Requirements:
1. Create a `BankAccount` class with the following properties:
   - `#accountHolderName`
   - `#accountNumber`
   - `#balance` (default is `0`)

2. Add methods to the `BankAccount` class:
   - `deposit(amount)` - Increases the balance by `amount`.
   - `withdraw(amount)` - Decreases the balance by `amount` if sufficient funds are available.
   - `getBalance()` - Returns the current balance.

3. Ensure that the balance and account details are not directly accessible from outside the class.

4. Add a `Transaction` class to log transactions with:
   - `type` (`deposit` or `withdrawal`)
   - `amount`
   - `date`

5. Extend the system to manage multiple accounts and transactions for a user.

#### Real-Life Scenario:
Simulate a secure banking system for depositing, withdrawing, and checking balances while maintaining transaction logs.

---
