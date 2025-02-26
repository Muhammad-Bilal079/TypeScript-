"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// code running commands 
// tsc >> convet ts file to js
// node dist/index.js >> run js file
// *******************************************************************************
// ******************************************************************************
// variable declaration with types 
let name = "hello Bilal welcome to typescript";
// console.log(name);
let age = 20;
// console.log(age);
let isMarried = true;
// console.log(isMarried);
// **********************************
// array declaration with types
let arr = [1, 2, 3];
// console.log(arr);
let arr1 = ["bilal", "saad", "ali", "ahmed"];
// console.log(arr1);
let arr2 = [1, "bilal"];
// console.log(arr2);
// **************************
// object declaration with types
// one type of object
let obj = { name: "bilal", age: 20 };
// spread operator ka kam yahn kam nhi karay ga qk type defined hai object ka
// console.log(obj);
// another type of object
let obj1 = {
    name: "bilal",
    age: 20,
    isMarried: true
};
// console.log(obj1);
// using spread operator
let obj2 = {
    name: "saad",
    age: 55
};
obj2 = Object.assign(Object.assign({}, obj2), { phone: 123456 });
// spread operator ka kam yahn kam  karay ga qk type defined nahi hai object ka
// console.log(obj2);
// ****************************
// basic function 
function add(num1, num2) {
    return num1 + num2;
}
// console.log(add(44,20));
// arrow function
let add1 = (num1, num2) => {
    return num1 + num2;
};
// console.log(add1(10,20));
// **************************
// ANY Type in typescript
// any type woh type hoti hai jisay hum bad main 
// reinitialize karsaktay hain but yeah rule voilet kartai hai typescript kay
// qk yeah kam to simple js main bhi hosakta hai 
let variable = 10;
variable = "hello";
variable = true;
variable = [1, 2, 3];
variable = { name: "bilal", age: 20 };
// console.log(variable);
// *************************
// Tupples in typescript
// tuple main jo type jitni bar defind hai us ki values bhi utni hi honi chahiay
let tupple = [1, "bilal"];
// console.log(tupple);
let tupple1 = [1, "bilal", true];
// console.log(tupple1);
let tupple2 = [1, "bilal", 4];
// console.log(tupple2);
let tupple3 = [1, "bilal", "saad"];
// console.log(tupple3);
let tupple4 = [1, 2, 3, 4];
// console.log(tupple4);
// one drawback of tupple 
let tupple5 = [1, "sufyan"];
tupple5.push("drawback");
// yahan yeah value append nhi honi chahiay thi qk iski type defined nahi hai but hogai so yeah tupple ka drawback hai 
// console.log(tupple5);
// **************************
// enum in typescript
// enum multiple variables kay kam ko single variable main store karta hai
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Blue"] = "blue";
    Color["Green"] = "green";
})(Color || (Color = {}));
// console.log(Color.Red); //yahan color batay ga
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Blue"] = 2] = "Blue";
    Color1[Color1["Green"] = 3] = "Green";
})(Color1 || (Color1 = {}));
let color1 = Color1.Blue; //yahan color ka number batay ga
let size = 2 /* Size.Medium */;
// console.log(size);
// enum basically bari chezon ko ek small key main store karta hai
// takay yad rakhnay main asani hosakay
var Urls;
(function (Urls) {
    Urls["Home"] = "https://google.com";
    Urls["About"] = "https://google.com";
    Urls["Contact"] = "https://google.com";
    Urls["Login"] = "https://google.com";
    Urls["Register"] = "https://google.com";
})(Urls || (Urls = {}));
// console.log(Urls.Home);
// **************************
// Unknown Type in typescript
// yeah jab use karain gay jab hamain anany walay variable ki value ki type ka pata na ho 
let notSure = 4;
// console.log(notSure);
if (typeof notSure === "number") {
    // console.log("this is number");
}
else if (typeof notSure === "string") {
    // console.log("this is string");
}
else if (typeof notSure === "boolean") {
    // console.log("this is boolean");
}
else {
    // console.log("this is unknown");
}
// **************************
// Void type in typescript
function logMessage(message) {
    console.log(message);
    return undefined;
}
// console.log(logMessage("hello"));
// **************************
// Type inference 
let message = "hello Bilal welcome to typescript";
// message = 20;  // ager hum type define na karain phir bhi bad main change nahi karsaktay
// console.log(message);
// type assertion
// type assertion is liay zaruri hai qk variable ki type any hai to jab hum is variable ka use karain gay to suggestion nahi 
// dyga qk editor ko is variable ki type any maloom hai but hakikat main variable ki type string hai
let message1 = "hello Bilal welcome to typescript";
let strlength = message1.length; //yahan per type assertion wala kam kia hai warna suggestion nhi deta 
// console.log(strlength);
// **************************
// Union type in typescript
// ek variable o multiple types dy saktay hain 
let id;
id = 1;
id = "1";
id = true;
function printId(id) {
    console.log(`your id is ${id}`);
}
let person = {
    name: "bilal",
    age: 20,
    greet() {
        console.log("hello");
    }
};
const addValues = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
let userid = "abc123"; //ab jahan bhi userid use karkay us main values ko store karain gay to woh value string hi hogi
let person1 = {
    name: "bilal",
    age: 20
};
let userid1 = "abc123";
let orderid = 123;
let customer = {
    name: "bilal",
    age: 20,
    phone: "1234567890",
    membership: true
};
let customer1 = {
    name: "bilal",
    age: 20,
    phone: "1234567890"
};
// console.log(customer1);
// **************************
// Intersection type in typescript
let config = {
    server: "localhost",
    port: 8080,
    secure: true
};
console.log(config);
