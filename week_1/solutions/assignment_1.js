// Your submission should be placed in the folder named `submission` the file name should be  
// assignment_1.js, for the solution of the first assignment of the first week.
// You can run the file by using the command `node assignment_1.js` in the terminal.
// You don't need to exactly replicate the examples given below, you can use your own examples as well.
// Be creative and have fun.

let age = 25;
console.log(typeof age); // "number"

const name = "John";
console.log(typeof name); // "string"

let isMarried = false;
console.log(typeof isMarried); // "boolean"

let height;
console.log(typeof height); // "undefined"

let weight = null;
console.log(typeof weight); // "object"

let person = {
    name: "John",
    age: 25,
    isMarried: false,
    };
console.log(typeof person); // "object"

let fruits = ["apple", "banana", "cherry"];
console.log(typeof fruits); // "object"

let date = new Date();
console.log(typeof date); // "object"

let greet = function() {
    return "Hello!";
}
console.log(typeof greet); // "function"

let x = 5;
let y = 10;
let z = x + y;
console.log(z); // 15

let isDirectory = (5 > 10 || 10 > 5) ? true : false;
console.log(typeof isDirectory); // "boolean"
