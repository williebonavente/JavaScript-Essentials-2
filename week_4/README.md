# Week 4: Advanced Topics and Problem Solving in JavaScript
---

## **Modules in JavaScript: Importing and Exporting Code**
Modules in JavaScript allow you to split your code into reusable pieces, improving maintainability and readability. Each module can define its functionality and export it for use in other parts of the application.

### **Key Concepts**
1. **Exporting Code**
   - **Named Exports**: Export multiple values.
   - **Default Exports**: Export a single value.

   ```javascript
   // utils.js
   export const add = (a, b) => a + b;
   export const subtract = (a, b) => a - b;
   export default function greet(name) {
       return `Hello, ${name}!`;
   }
   ```

2. **Importing Code**
   - Use `import` to bring functionality from other modules.

   ```javascript
   // main.js
   import greet, { add, subtract } from './utils.js';

   console.log(greet("Alice")); // Hello, Alice!
   console.log(add(5, 3));      // 8
   ```

### **Practical Example**
- Create a utility library (`mathUtils.js`) for common math operations.
- Use `main.js` to calculate the area and circumference of a circle.

---

## **Functional Programming Concepts**
Functional programming emphasizes writing code that avoids changing state and mutable data, focusing instead on pure functions and composition.

### **Core Concepts**

1. **Pure Functions**
   - Always return the same output for the same input.
   - Do not cause side effects.

   ```javascript
   const double = (x) => x * 2;
   ```

2. **Immutability**
   - Avoid modifying original objects or arrays.
   - Use methods like `map`, `filter`, and `reduce`.

   ```javascript
   const numbers = [1, 2, 3];
   const doubled = numbers.map((num) => num * 2);
   ```

3. **Higher-Order Functions**
   - Functions that accept or return other functions.

   ```javascript
   const applyOperation = (operation, value) => operation(value);
   const square = (x) => x * x;
   console.log(applyOperation(square, 5)); // 25
   ```

4. **Closures**
   - Functions that retain access to variables in their lexical scope.

   ```javascript
   function makeMultiplier(multiplier) {
       return (num) => num * multiplier;
   }

   const triple = makeMultiplier(3);
   console.log(triple(4)); // 12
   ```

5. **Decorators**
   - Modify the behavior of functions.

   ```javascript
   function logExecution(fn) {
       return (...args) => {
           console.log(`Executing with args: ${args}`);
           return fn(...args);
       };
   }

   const addLogged = logExecution((a, b) => a + b);
   console.log(addLogged(3, 4)); // Logs: Executing with args: 3,4 and returns 7
   ```

6. **Iterators and Generators**
   - Iterators provide a way to iterate over data.
   - Generators simplify custom iteration logic.

   ```javascript
   function* generateSequence() {
       yield 1;
       yield 2;
       yield 3;
   }

   const iterator = generateSequence();
   console.log(iterator.next().value); // 1
   ```

### **Practical Example**
- Build a generator-based pagination system.
- Use decorators to log the generator's calls.

---

## **Debugging and Testing JavaScript Code**

### **Debugging Techniques**

1. **Browser DevTools**
   - Use the Console to log values and errors.
   - Set breakpoints and step through the code.

   ```javascript
   console.log("Value of x:", x);
   debugger; // Opens the debugger at this point.
   ```

2. **Common Debugging Tools**
   - Error stack traces.
   - Network tab for inspecting API requests.

3. **Testing Code**
   - Use frameworks like Jest for writing unit tests.
   - Test edge cases and inputs.

   ```javascript
   // bmiCalculator.test.js
   const calculateBMI = (weight, height) => weight / (height * height);

   test('Calculate BMI correctly', () => {
       expect(calculateBMI(70, 1.75)).toBeCloseTo(22.86, 2);
   });
   ```

---
