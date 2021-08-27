const numbers = [5, 13, 39, 40, 45, 71, 50];
const bigNUmber = numbers.filter(number => number > 40);
const smallNimber = numbers.filter(number => number < 50);
// console.log(smallNimber);

function getProduct(product) {
    return product
}

/* complex example */
const products = [
    { name: 'Water bottle', price: 90, color: 'red' },
    { name: 'Mobile phone', price: 15400, color: 'yellow' },
    { name: 'Smart watch', price: 8000, color: 'pink' },
    { name: 'Monitor benQ', price: 16000, color: 'black' },
    { name: 'Laptob benQ', price: 560000, color: 'black' },
    { name: 'iPhone - 10', price: 20000, color: 'silver' },
    { name: 'Mouse pad', price: 5000, color: 'green' },
];
const productFilter = products.filter(product => product.price > 9000);
const productColor = products.filter();
console.log(productFilter);