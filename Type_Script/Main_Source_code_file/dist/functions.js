"use strict";
// Functions in typescript
// 1>>>> Regular Function
function add1(a, b) {
    return a + b;
}
// console.log(add1(10, 20));
// 2>>>> Function Expression
// ek variable main callback function store karta hai
const divide = function (a, b) {
    return a / b;
};
// console.log(divide(8, 2));
// 3>>>> Arrow Functions
const multiply = (a, b) => {
    return a * b;
};
// console.log(multiply(2, 3));
// 4>>>> Optional Parameters
const greet = (name, age) => {
    // console.log(`Hello ${name}, you are ${age} years old`);
};
greet("Bilal");
// 5>>>> Default Parameters
// deafult parameters main default value set kartay hain kisi bhi variable 
// ager usay koi value na milay to woh default value hi layly 
const greet1 = (name, age = 20) => {
    // console.log(`Hello ${name}, you are ${age} years old`);
};
greet1("Bilal");
// 6>>>> Rest Parameters
// example : 01
const sum = (...numbers) => {
    return numbers.reduce((previous, current) => previous + current, 0);
};
// console.log(sum(1, 2, 3, 4, 5));
// example : 02
const total = (a, b, ...rest) => {
    return a + b + rest.reduce((a, b) => a + b, 0);
};
// console.log(total(1, 2, 3, 4, 5));
// example : 03
function greets(greeting, ...names) {
    //   names.forEach((name) => console.log(`${greeting} ${name}`)); 
}
greets("Hello", "Bilal", "Ali", "Ahmed");
function addValues(a, b) {
    return a + b;
}
function getLength(value) {
    return value.length;
}
// console.log(getLength("hello bilal bhai"));
// console.log(getLength([1,2,3]));
