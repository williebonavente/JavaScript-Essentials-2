// Mock function to simulate fetching stock prices
function fetchStockPrice(stockSymbol) {
    return new Promise((resolve) => {
        const price = (Math.random() * 1000).toFixed(2); // Random price
        setTimeout(() => resolve(`${stockSymbol}: $${price}`), 1000);
    });
}

// Stock symbols to track
// use url if you want to fetch the stock prices from the internet instead of using the mock function
const stocks = ["AAPL", "GOOGL", "MSFT"];

// Fetch stock prices periodically
const intervalId = setInterval(async () => {
    for (const stock of stocks) {
        const price = await fetchStockPrice(stock);
        console.log(price);
    }
}, 10000);

// Stop fetching prices after 1 minute
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped tracking stock prices.");
}, 60000);
