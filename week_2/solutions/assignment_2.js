class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class Catalog {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    filterByCategory(category) {
        return this.products.filter(product => product.category === category);
    }
    applyDiscount(percentage) {
        this.products.forEach(product => {
            product.price = product.price - (product.price * percentage / 100);
        });
    }
}

const catalog = new Catalog();
const product1 = new Product('Laptop', 1000, 'Electronics');
const product2 = new Product('T-shirt', 20, 'Clothing');
const product3 = new Product('Mobile Phone', 500, 'Electronics');
catalog.addProduct(product1);
catalog.addProduct(product2);
catalog.addProduct(product3);
catalog.applyDiscount(10);
console.log(catalog.filterByCategory('Electronics'));
console.log(catalog.filterByCategory('Clothing'));
console.log(catalog.filterByCategory('Books'));
// Output:
// [
//     Product { name: 'Laptop', price: 900, category: 'Electronics' },
//     Product { name: 'Mobile Phone', price: 450, category: 'Electronics' }
// ]
