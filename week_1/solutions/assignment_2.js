// Your submission should be placed in the folder named `submission` the file name should be  
// assignment_1.js, for the solution of the first assignment of the first week.
// You can run the file by using the command `node assignment_1.js` in the terminal.
// You don't need to exactly replicate the examples given below, you can use your own examples as well.
// Be creative and have fun.


let numbers = [];
for (let i = 1; i <= 100; i++) { numbers.push(i); }
numbers.push(101); // Add 101 to the end of the array
numbers.shift(); // Remove the first element of the array
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 5050