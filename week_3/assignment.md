# Week 3: Asynchronous JavaScript 
### Assignment 1: **Event Loop and Timers - Real-Time Notification System**

#### **Problem Statement:**
Simulate a **real-time notification system** using the event loop, `setTimeout`, and `setInterval`.  
- Use `setInterval` to send periodic updates.  
- Use `setTimeout` to simulate a delayed one-time alert.  

#### **Scenario:**
1. Simulate notifications about user activity (e.g., "New comment added").  
2. Use `setInterval` to periodically check for new notifications every 5 seconds.  
3. Use `setTimeout` to simulate a one-time welcome message after 2 seconds.  

#### **Requirements:**
- Write a function `sendNotification(message)` to display notifications.  
- Demonstrate how the event loop handles multiple timers.  
- Use `clearInterval` to stop periodic updates after a certain duration.  

---

### Assignment 2: **Promises and Async/Await - Order Management System**

#### **Problem Statement:**
Create an **Order Management System** using Promises and async/await.  
- Simulate the process of placing, processing, and delivering orders asynchronously.  

#### **Scenario:**
1. `placeOrder`: A function that simulates order placement (resolved after 1 second).  
2. `processOrder`: A function that simulates order processing (resolved after 2 seconds).  
3. `deliverOrder`: A function that simulates delivery (resolved after 3 seconds).  

#### **Requirements:**
- Chain promises to simulate the workflow using `.then`.  
- Rewrite the same workflow using `async/await` for better readability.  
- Handle potential failures (e.g., "Order processing failed").  

---

### Assignment 3: **Event Loop with Promises - Stock Price Tracker**

#### **Problem Statement:**
Build a **Stock Price Tracker** to fetch and display stock prices using the event loop and Promises.  
- Use `setInterval` to fetch stock prices every 10 seconds.  
- Simulate API responses with Promises.  

#### **Scenario:**
1. Create a mock function `fetchStockPrice(stockSymbol)` that resolves with a random price.  
2. Use `setInterval` to call the function periodically for stock symbols like "AAPL", "GOOGL", and "MSFT".  
3. Display the fetched stock prices in the console.  

#### **Requirements:**
- Demonstrate the interaction between timers and Promises in the event loop.  
- Use `clearInterval` to stop fetching after 1 minute.  

---

### Assignment 4: **Error Handling - Ticket Booking System**

#### **Problem Statement:**
Design a **Ticket Booking System** with error handling for asynchronous operations.  
- Simulate scenarios like network failures or payment errors.  

#### **Scenario:**
1. `bookTicket`: A function that simulates ticket booking (resolved after 2 seconds).  
2. `processPayment`: A function that simulates payment processing (may fail randomly).  
3. `confirmBooking`: A function that confirms the booking (only if payment succeeds).  

#### **Requirements:**
- Use Promises to handle the flow with `.catch` for errors.  
- Rewrite the workflow with `async/await` and `try...catch` blocks for better error handling.  
- Log specific error messages for different failure scenarios.  

---

