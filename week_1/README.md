# Week 1: Recap of JavaScript Essentials 1 and Intermediate Concepts 

## Comprehensive Review of JavaScript Fundamentals

### **1. Variables**
#### Definition:
Variables store data values that can be used and manipulated throughout a program.

#### Types of Variable Declarations:
- **`var`**: Old and function-scoped.
- **`let`**: Block-scoped and recommended for mutable variables.
- **`const`**: Block-scoped, for constants or immutable variables.

#### Syntax:
```javascript
let name = "John";
const age = 30;
var country = "USA";
```

#### Key Points:
- Variables declared with `let` or `const` cannot be redeclared in the same scope.
- Use `const` by default unless the value needs to change.

Reference: [Variables](https://javascript.info/variables)

---

### **2. Primitive and Non-Primitive Data Types**
#### **Primitive Data Types**
1. **Number:** Represents numeric values, including integers and floats
    ```javascript
      let age = 25;
      let price = 9.99;
    ```
2. **String:** Represents sequences of characters 
    ```javascript
    let confess = "I miss you too";
    // Even emoji is string
    let emoji = "💋"; // U+1F48B
    // UTF-16 Encoding:
    ```
3. **Boolean:** Represents `true` or `false`
    ```javascript
    let youHaveACrushOnMe = false;
    ```
4. **Undefined**: A variable declared but not assigned a value.
    ```javascript
    let something;
    console.log(something); // undefined
    ```
5. **Null**: Represents an intentional absence of value.
    ```javascript
    let empty = null;
    ```
6. **Symbol**: A unique and immutable primitive value.
    ```javascript
    let uniqueKey = Symbol("key");
    ```
7. **BigInt**: Represents integers larger than Number. `MAX_SAFE_INTEGER`.
   ```javascript
   let bigNumber = 123456789012345678901234567890n;
    ```
#### **Non-Primitive Data Types**:
- **Object**: A collection of key-value pairs.
- **Array**: A type of object used to store ordered collections of values
- **Function**: A callable object. <br>
  
Reference: [Data Types](https://javascript.info/types)

### **3. Conditional Statements**

Conditional statements control program flow based on conditions.

Types:
- `if` **Statement**:
    ```javascript
      let age = 18;
      if (age >= 18) {
        console.log("You are an adult.");
      }
    ```
- `if...else` **Statement**:
    ```javascript
      if (age >= 18) {
          console.log("You are an adult.");
      } else {
        console.log("You are a minor.");
      }
  ```
- `else if` **Statement**:
    ``` javascript
      if (age < 13) {
          console.log("Child");
      } else if (age < 20) {
        console.log("Teenager");
      } else {
        console.log("Adult");
      }
  ```
- **Ternary Operator** `(? :)`:
  ```javascript
    let access = age >= 18 ? "Granted" : "Denied";
    console.log(access);
  ```
Reference: [Conditional Statement](https://javascript.info/ifelse) 


### **4. Mathematical and Logical Symbols**
**Common Operators**:
- Arithmetic Operators:

  - `+` (Addition): $5$ `+` $3$ $→$ $8$
  - `-` (Subtraction): $5$ `-` $3$ → $2$
  - `*` (Multiplication): $5$ `*` $3$ $→$ $15$
  - `/` (Division): $6$ `/` $3$ $→$ $2$
  - `%`(Modulo): $5$ `%` $2$ $→$ $1$
  - `**` (Exponentiation): $2$ `**` $3$ $→$ $8$ <br>
- Logical Operators:
  - `&&`: Logical AND.
  - `||`: Logical OR.
  - `!`: Logical NOT.
- Less than or greater than comparisons.
  - `<`, `<=`, `>`, `>=`: <br>
- Comparison Operators:
  - `==`: Equal (loose equality, type coercion allowed).
  - `===`: Strictly equal (no type coercion).
  - `!=`: Not equal.
  - `!==`: Strictly not equal. <br>

**Key Points**:
- Always prefer `===` over `==` to avoid unexpected type coercion.
- Use parentheses `()` to group conditions for clarity.

References: [Mathematical Operators](https://javascript.info/operators), 
[Comparison Operator](https://javascript.info/comparison),
[Logical Operators](https://javascript.info/logical-operators)
### **5. Arrays**
#### Definition:
Arrays are special objects used to store ordered collections of data.

#### Syntax:
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
```

#### Common Operations:
- **Access Elements:**
  ```javascript
  console.log(fruits[0]); // "Apple"
  ```
- **Add/Remove Elements:**
  ```javascript
  fruits.push("Date");  // Add to end
  fruits.pop();          // Remove from end
  fruits.shift();        // Remove from start
  fruits.unshift("Fig"); // Add to start
  ```
- **Iterate Over Elements:**
  ```javascript
  for (let fruit of fruits) {
      console.log(fruit);
  }
  ```

#### Key Points:
- Arrays have a `length` property.
- Methods like `map`, `filter`, and `reduce` enable functional programming.

Reference: [Arrays](https://javascript.info/array)

---

### **6. Loops**
#### Definition:
Loops execute a block of code repeatedly based on a condition.

#### Types:
- **`for` Loop:**
  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log(i);
  }
  ```
- **`while` Loop:**
  ```javascript
  let i = 0;
  while (i < 5) {
      console.log(i);
      i++;
  }
  ```
- **`do...while` Loop:** Executes at least once:
  ```javascript
  let i = 0;
  do {
      console.log(i);
      i++;
  } while (i < 5);
  ```
- **`for...of` Loop:** Iterates over iterable objects:
  ```javascript
  let numbers = [10, 20, 30];
  for (let number of numbers) {
      console.log(number);
  }
  ```
- **`for...in` Loop:** Iterates over object properties (not recommended for arrays):
  ```javascript
  let obj = {a: 1, b: 2};
  for (let key in obj) {
      console.log(key, obj[key]);
  }
  ```

Reference: [Loops](https://javascript.info/while-for) | [MDN Loops](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops)

---

### **7. Functions**
#### Definition:
Functions are blocks of code designed to perform a specific task.

#### Types:
- **Function Declaration:**
  ```javascript
  function greet(name) {
      return `Hello, ${name}!`;
  }
  ```
- **Function Expression:**
  ```javascript
  const greet = function(name) {
      return `Hello, ${name}!`;
  };
  ```
- **Arrow Functions:**
  ```javascript
  const greet = (name) => `Hello, ${name}!`;
  ```

#### Key Features:
- Functions can have default parameters:
  ```javascript
  function greet(name = "Guest") {
      return `Hello, ${name}!`;
  }
  ```
- Functions can return other functions or be passed as arguments.
- Arrow functions have implicit `return` for single-line expressions and no `this` binding.

Reference: [Function Basics](https://javascript.info/function-basics) | [Function Expressions](https://javascript.info/function-expressions) | [Arrow Functions](https://javascript.info/arrow-functions-basics)

---

### **8. Advanced Array Methods**
#### **`map()` Method:**
- Creates a new array by applying a function to each element of the array.
  ```javascript
  let numbers = [1, 2, 3];
  let doubled = numbers.map(num => num * 2);
  console.log(doubled); // [2, 4, 6]
  ```
Reference: [MDN map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

#### **`filter()` Method:**
- Creates a new array with elements that pass a test provided by a function.
  ```javascript
  let numbers = [1, 2, 3, 4];
  let evens = numbers.filter(num => num % 2 === 0);
  console.log(evens); // [2, 4]
  ```
Reference: [MDN filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

#### **`reduce()` Method:**
- Reduces an array to a single value by executing a function on each element.
  ```javascript
  let numbers = [1, 2, 3, 4];
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(sum); // 10
  ```
Reference: [MDN reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

Reference: [General Array Methods](https://javascript.info/array-methods)

---

### **9. JavaScript Objects**
#### **Object Creation and Manipulation:**
- Objects store collections of key-value pairs.
  ```javascript
  let user = {
      name: "Alice",
      age: 25
  };
  console.log(user.name); // Alice
  user.email = "alice@example.com";
  delete user.age;
  ```
Reference: [Objects](https://javascript.info/object)

#### **Object.keys() and Object.values():**
- **`Object.keys()`**: Returns an array of keys.
  ```javascript
  let user = {name: "Alice", age: 25};
  console.log(Object.keys(user)); // ["name", "age"]
  ```
  Reference: [MDN Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

- **`Object.values()`**: Returns an array of values.
  ```javascript
  console.log(Object.values(user)); // ["Alice", 25]
  ```
  Reference: [MDN Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

Reference: [Keys and Values](https://javascript.info/keys-values-entries)

---

### **10. Other of Key Concepts**
#### Language Features:
- **Dynamic Typing:** Variables are not explicitly typed.
- **Prototypes:** Every object has a prototype, enabling inheritance.
- **Closures:** Functions retain access to their outer scope variables.
- **Event Loop:** JavaScript is single-threaded with an event loop for asynchronous operations.

#### Code Example:
```javascript
let user = {
    name: "Alice",
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};

user.greet(); // "Hello, Alice!"
```

Reference: [JavaScript Summary](https://javascript.info/javascript-specials)

---
