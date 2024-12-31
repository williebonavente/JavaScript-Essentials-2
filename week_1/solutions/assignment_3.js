// Create a array of student names

const students = ['John', 'Jane', 'Doe', 'Smith', 'Alex', 'Sara', 'Tom', 'Jerry', 'Alice', 'Bob'];

// Create a array of student ages
students.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});

// first letter of students that start with 'A' 
let aNames = students.filter(name => name.startsWith("A"));
console.log(aNames);