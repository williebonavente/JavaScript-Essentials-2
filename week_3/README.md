# Week 3 - Asynchronous JavaScript

## Comprehensive Guide to Asynchronous JavaScript

---

### **1. Understanding the Event Loop**

#### **What is the Event Loop?**
The event loop is a mechanism in JavaScript that handles asynchronous operations. JavaScript is single-threaded, meaning it can execute one task at a time. The event loop allows JavaScript to perform non-blocking I/O operations, such as handling user input, network requests, and timers.

#### **Key Components:**
1. **Call Stack:** Where synchronous tasks are executed.
2. **Task Queue:** Holds callback functions waiting to be executed.
3. **Microtask Queue:** Holds promises and `MutationObserver` callbacks. It has higher priority than the task queue.

#### **How It Works:**
1. Executes tasks in the call stack.
2. Checks the microtask queue for pending promises or microtasks.
3. Processes the task queue for callbacks like `setTimeout`.

#### **Code Example:**
```javascript
console.log('Start');

setTimeout(() => console.log('Timeout'), 0);

Promise.resolve().then(() => console.log('Promise resolved'));

console.log('End');
```

**Output:**
```
Start
End
Promise resolved
Timeout
```

#### **Reference:**  
- [Event Loop](https://javascript.info/event-loop)  
- [setTimeout and setInterval](https://javascript.info/settimeout-setinterval)

---

### **2. Promises and async/await**

#### **Promises**
Promises represent a value that may be available now, in the future, or never. They help manage asynchronous operations by avoiding callback hell.

**States of a Promise:**
1. **Pending:** Initial state.
2. **Fulfilled:** Operation completed successfully.
3. **Rejected:** Operation failed.

**Creating a Promise:**
```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve('Operation successful');
    } else {
        reject('Operation failed');
    }
});

promise
    .then(result => console.log(result)) // Handle success
    .catch(error => console.error(error)); // Handle failure
```

#### **Promise Chaining:**
Link multiple `.then()` calls for sequential operations.
```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

#### **Promise API:**
1. **`Promise.all`**: Runs multiple promises in parallel, resolves when all are fulfilled.
2. **`Promise.race`**: Resolves as soon as one promise settles.

#### **Async/Await**
A syntactic sugar over promises, making asynchronous code look synchronous.

**Example:**
```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
fetchData();
```

#### **References:**
- [Promises Basics](https://javascript.info/promise-basics)
- [Async/Await](https://javascript.info/async-await)

---

### **3. setTimeout() and setInterval()**

#### **setTimeout():**
Executes a function after a specified delay.

**Syntax:**
```javascript
setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);
```

#### **setInterval():**
Repeats a function execution at specified intervals.

**Syntax:**
```javascript
const intervalId = setInterval(() => {
    console.log('This runs every 3 seconds');
}, 3000);

// Stop the interval after 10 seconds
setTimeout(() => clearInterval(intervalId), 10000);
```

#### **Reference:**  
- [setTimeout and setInterval](https://javascript.info/settimeout-setinterval)

---

### **4. Error Handling in Asynchronous Code**

#### **Why Handle Errors in Async Code?**
Asynchronous errors can cause crashes or unexpected behavior. Proper error handling ensures application stability.

#### **Error Handling in Promises:**
Use `.catch()` to handle rejections.
```javascript
fetch('https://invalid-url.com')
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
```

#### **Error Handling in Async/Await:**
Wrap async code in a `try...catch` block.
```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
```

#### **Custom Error Example:**
```javascript
async function fetchDataWithErrorHandling() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Custom Error:', error.message);
    }
}
fetchDataWithErrorHandling();
```

#### **Reference:**  
- [Promise Error Handling](https://javascript.info/promise-error-handling)

---

### **Key Concepts**
1. The **event loop** enables JavaScript to handle asynchronous operations.
2. **Promises** and **async/await** simplify async code.
3. Use **`setTimeout()`** and **`setInterval()`** for timers.
4. Always implement proper **error handling** for reliable async programming.