function placeOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Order placed: ${order}`), 1000);
    });
}

function processOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${order} is being processed`), 2000);
    });
}

function deliverOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${order} delivered successfully!`), 3000);
    });
}

// Chaining Promises
placeOrder("Pizza")
    .then(processOrder)
    .then(deliverOrder)
    .then(console.log)
    .catch(console.error);
