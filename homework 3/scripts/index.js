function Product(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;
}

let products = [new Product("3D printer", "computer and office", null, 50),
new Product("Balea Hand Balsam", "beauty", 15, 10),
new Product("Women Long Sleeve T-Shirt", "clothes", 40, 18),
new Product("B Watch", "jewelry", null, 100),
new Product("Strawberries", "food", 10, 3),
new Product("Laptop", "computer and office", 60, 650),
new Product("Video Game", "electronics", null, 70),
new Product("Milk", "food", 15, 2),
new Product("Chocolate Milkshake", "food", null, 4),
new Product("Bicycle", "cars and motorcycles", null, 560),
new Product("Ring", "jewelry", 50, 15),
new Product("Drones", "electronics", 10, 150),
new Product("Highlight", "beauty", 40, 8),
new Product("Handmade skirt", "clothes", null, 8),
new Product("Apple", "food", null, 1)
];

function printProductName(product) {
    console.log(product.name);
}

console.log("Products with prices greater than 20:");
let productsPriceGreaterThan20 = products.filter(product => product.price > 20);
productsPriceGreaterThan20.forEach(printProductName);


let foodproductsWithDiscount = products.filter(product => product.hasDiscount !== null && product.category === "food");
console.log("Food products on discount:");
foodproductsWithDiscount.forEach(printProductName);


function printTheAverage() {
    let average = 0;
    for (let i = 0; i < averageOfProductsOnDiscount.length; i++) {
        average += averageOfProductsOnDiscount[i].price / averageOfProductsOnDiscount.length;
    }
    return average;
}

let averageOfProductsOnDiscount = products.filter(product => !!product.hasDiscount)
console.log("The average of products that are on discount: " + printTheAverage());

console.log("===Find the name and price of all products with name starting with a vowel, that are not on discount.===");
let productsWithoutDiscount = products.filter(product => !product.hasDiscount);
productsWithoutDiscount.map(product => product.name.charAt(0))
productsWithoutDiscount.filter(product => /[aeiou]/i.test(product[0]));
productsWithoutDiscount.forEach(product => console.log(product.name))




function copyProducts(arr) {
    let copied = [];
    arr.forEach(product => copied.push(product));
    return copied;
}
let productsCopy = copyProducts(products);
productsCopy.sort((product1, product2) => product1.price - product2.price);
console.log("===SORTED PRODUCTS:===");
productsCopy.forEach(product => console.log(`${product.name} - price: ${product.price}`));
