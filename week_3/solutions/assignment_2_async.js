async function handleOrder(order) {
    try {
        const placed = await placeOrder(order);
        console.log(placed);

        const processed = await processOrder(placed);
        console.log(processed);

        const delivered = await deliverOrder(processed);
        console.log(delivered);
    } catch (error) {
        console.error("Order failed:", error.message);
    }
}

handleOrder("Pizza");
