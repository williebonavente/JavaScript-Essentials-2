function bookTicket(ticket) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Ticket booked for ${ticket}`), 2000);
    });
}

function processPayment(ticket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random failure
            if (Math.random() > 0.5) {
                resolve(`Payment successful for ${ticket}`);
            } else {
                reject(new Error(`Payment failed for ${ticket}`));
            }
        }, 3000);
    });
}

function confirmBooking(payment) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Booking confirmed: ${payment}`), 2000);
    });
}

// Workflow with Promises
bookTicket("Concert")
    .then(processPayment)
    .then(confirmBooking)
    .then(console.log)
    .catch(console.error);

// Workflow with Async/Await
async function handleBooking(ticket) {
    try {
        const booked = await bookTicket(ticket);
        console.log(booked);

        const payment = await processPayment(booked);
        console.log(payment);

        const confirmed = await confirmBooking(payment);
        console.log(confirmed);
    } catch (error) {
        console.error(error.message);
    }
}

handleBooking("Concert");
