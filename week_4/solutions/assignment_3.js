// Decorator function to log calls
function logDecorator(fn) {
    return function(...args) {
        console.log(`Calling function: ${fn.name}`);
        return fn(...args);
    };
}

// Generator function to paginate data
function* paginateData(data, pageSize) {
    for (let i = 0; i < data.length; i += pageSize) {
        yield data.slice(i, i + pageSize);
    }
}

// Wrap the generator function with the decorator
const paginatedData = logDecorator(paginateData);

// Example usage
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pageSize = 3;
const paginator = paginatedData(data, pageSize);

for (let page of paginator) {
    console.log("Page:", page);
}
