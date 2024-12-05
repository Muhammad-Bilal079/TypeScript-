"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Q1:write  type script function to calculate factorial
 of a number with proper type annotation?
 4*3*2*1 = 24
 */
const factorial = (num) => {
    if (num === 1 || num === 0)
        return 1;
    return num * factorial(num - 1);
};
const user = {
    name: "bilal",
    age: 24,
    email: "dNf7e@example.com"
};
function calculateTotalPrice(products) {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
}
const cart = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 },
    { price: 8, quantity: 77 },
];
function getDetails(vechile) {
    if (vechile.type === "car") {
        console.log(`Car details: Model: ${vechile.model}, Year: ${vechile.year}, Make: ${vechile.make}`);
    }
    else if (vechile.type === "motorcycle") {
        console.log(`Motorcycle details: Model: ${vechile.model}, Year: ${vechile.year}, Make: ${vechile.make}`);
    }
}
// getDetails({
//     type:"car",
//     model:"civic",
//     year:2022,
//     make:"honda"
// })
// getDetails({
//     type:"motorcycle",
//     model:"honda",
//     year:2022,
//     make:"honda"
// })
