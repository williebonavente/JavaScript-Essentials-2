// Function to calculate BMI
// make sure you install jest using npm install jest
// run the test using npm test
// run the code using node assignment_4.js
function calculateBMI(height, weight) {
    if (height <= 0) {
        throw new Error("Height must be greater than zero");
    }
    return weight / (height ** 2);
}

// Example usage
try {
    console.log("BMI:", calculateBMI(1.75, 70)); // Correct case
    console.log("BMI:", calculateBMI(0, 70));   // Bug case
} catch (error) {
    console.error("Error:", error.message);
}
