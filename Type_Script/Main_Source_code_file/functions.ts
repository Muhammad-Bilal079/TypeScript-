// Functions in typescript

// 1>>>> Regular Function

function add1(a: number, b: number): number {
    return a + b;
}

// console.log(add1(10, 20));

// 2>>>> Function Expression

// ek variable main callback function store karta hai
const divide = function (a: number, b: number): number {
    return a / b;
};  

// console.log(divide(8, 2));

// 3>>>> Arrow Functions

const multiply = (a: number, b: number): number => {
    return a * b;
}

// console.log(multiply(2, 3));

// 4>>>> Optional Parameters

const greet = (name: string, age?: number): void => {
    // console.log(`Hello ${name}, you are ${age} years old`);
}

greet("Bilal");

// 5>>>> Default Parameters

// deafult parameters main default value set kartay hain kisi bhi variable 
// ager usay koi value na milay to woh default value hi layly 

const greet1 = (name: string, age: number = 20): void => {
    // console.log(`Hello ${name}, you are ${age} years old`);
}

greet1("Bilal");

// 6>>>> Rest Parameters

// example : 01

const sum = (...numbers : number[]): number => {
    return  numbers.reduce((previous, current) => previous + current, 0)
};

// console.log(sum(1, 2, 3, 4, 5));

// example : 02
const total = (a: number, b: number, ...rest: number[]): number => {
    return a + b + rest.reduce((a, b) => a + b, 0);
}

// console.log(total(1, 2, 3, 4, 5));

// example : 03

function greets(greeting: string, ...names: string[]): void {
//   names.forEach((name) => console.log(`${greeting} ${name}`)); 
}

greets("Hello", "Bilal", "Ali", "Ahmed");

// 7>>> Function Overloading

// example : 01
function addValues(a: number, b: number): number;   
function addValues(a: string, b: string): string;

function addValues(a: any, b: any): any {   
    return a + b;   
}

// console.log(addValues(1, 2));
// console.log(addValues("value1", " ||value2"));



// example : 02
// jo value di jay gi us ki lenth batay ga 

function getLength(value:string):number;
function getLength(value:any[]):number;

function getLength(value:any):number{
    return value.length;
}

// console.log(getLength("hello bilal bhai"));
// console.log(getLength([1,2,3]));