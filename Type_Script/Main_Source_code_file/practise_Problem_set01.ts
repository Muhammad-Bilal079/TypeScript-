// *************PRACTICE PROBLEMS SET 01*************
export { }

/*
Q1:write  type script function to calculate factorial
 of a number with proper type annotation?
 4*3*2*1 = 24
 */

const factorial = (num: number): number => {
    if (num === 1 || num === 0) return 1;
    return num * factorial(num - 1);
}
//  console.log(factorial(9));

/*
Q2: Define a function that accept a user object with name and age and email
and return a formated string
*/

interface User {
    name: string,
    age: number,
    email: string
}

const user: User = {
    name: "bilal",
    age: 24,
    email: "dNf7e@example.com"
}
//  console.log(`My Name is : ${user.name},and my  Age is: ${user.age},other than my Email is: ${user.email}`);


/*
Q3: calculate a total price : write a typescript function that calculate the total 
price of an array of products objects with quantity and price
*/

interface Product {
    price: number,
    quantity: number
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
}

const cart: Product[] = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 },
    { price: 8, quantity: 77 },
]

// console.log(calculateTotalPrice(cart));

/*
Q4:define a union type for a vechile that can either be a car or a motorcycle with different 
properties , write a function to log details based on the vechile type  
*/

type Car = {
    type: "car",
    model: string,
    year: number,
    make: string
}

type Motorcycle = {
    type: "motorcycle",
    model: string,
    year: number,
    make: string
}

type Vechile = Car | Motorcycle;
function getDetails(vechile: Vechile) {
    if (vechile.type === "car") {
        console.log(`Car details: Model: ${vechile.model}, Year: ${vechile.year}, Make: ${vechile.make}`);
    } else if (vechile.type === "motorcycle") {
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