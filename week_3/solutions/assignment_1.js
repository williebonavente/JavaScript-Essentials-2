// Function to send notifications
function sendNotification(message) {
    console.log(`Notification: ${message}`);
}

// Welcome message (One-time alert using setTimeout)
setTimeout(() => {
    sendNotification("Welcome to the notification system!");
}, 2000);

// Periodic updates (Using setInterval)
const intervalId = setInterval(() => {
    sendNotification("You have a new comment!");
}, 5000);

// Stop periodic updates after 20 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped notifications.");
}, 20000);
