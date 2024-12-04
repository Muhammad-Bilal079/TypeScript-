export{}

// code running commands 
// tsc >> convet ts file to js
// node dist/index.js >> run js file
// *******************************************************************************
// ******************************************************************************

// variable declaration with types 

let name:string = "hello Bilal welcome to typescript";
// console.log(name);

let age:number = 20;
// console.log(age);

let isMarried:boolean = true;
// console.log(isMarried);

// **********************************
// array declaration with types

let arr:number[] = [1,2,3];
// console.log(arr);

let arr1:string[] = ["bilal","saad","ali","ahmed"];
// console.log(arr1);

let arr2:[number,string] = [1,"bilal"];
// console.log(arr2);

// **************************
// object declaration with types

// one type of object
let obj:{name:string,age:number} = {name:"bilal",age:20};
// spread operator ka kam yahn kam nhi karay ga qk type defined hai object ka
// console.log(obj);


// another type of object
let obj1:object ={
    name:"bilal",
    age:20,
    isMarried:true
}
// console.log(obj1);

// using spread operator
let obj2:object= {
    name:"saad",
    age:55
}
obj2 = {...obj2,phone:123456}
// spread operator ka kam yahn kam  karay ga qk type defined nahi hai object ka
// console.log(obj2);

// ****************************
// basic function 

function add(num1:number,num2:number){
    return num1+num2;
}

// console.log(add(44,20));

// arrow function

let add1 = (num1:number,num2:number):number=>{
    return num1+num2;
}

// console.log(add1(10,20));

// **************************
// ANY Type in typescript

// any type woh type hoti hai jisay hum bad main 
// reinitialize karsaktay hain but yeah rule voilet kartai hai typescript kay
// qk yeah kam to simple js main bhi hosakta hai 

let variable:any = 10;

variable = "hello";
variable = true;
variable = [1,2,3];
variable = {name:"bilal",age:20};

// console.log(variable);

// *************************
// Tupples in typescript
// tuple main jo type jitni bar defind hai us ki values bhi utni hi honi chahiay

let tupple:[number,string] = [1,"bilal"];
// console.log(tupple);

let tupple1:[number,string,boolean] = [1,"bilal",true];
// console.log(tupple1);

let tupple2:[number,string,number] = [1,"bilal",4];
// console.log(tupple2);

let tupple3:[number,string,string] = [1,"bilal","saad"];
// console.log(tupple3);

let tupple4:[number,number,number,number] = [1,2,3,4];
// console.log(tupple4);

// one drawback of tupple 

let tupple5:[number,string] = [1,"sufyan"];
tupple5.push("drawback")
// yahan yeah value append nhi honi chahiay thi qk iski type defined nahi hai but hogai so yeah tupple ka drawback hai 
// console.log(tupple5);

// **************************
// enum in typescript

// enum multiple variables kay kam ko single variable main store karta hai

enum Color{  //Color is in pascalcase
Red = 'red',
Blue = 'blue',
Green = 'green'
}
// console.log(Color.Red); //yahan color batay ga

enum Color1{
    Red = 1,
    Blue = 2,
    Green = 3
}

let color1:Color1 = Color1.Blue; //yahan color ka number batay ga
// console.log(color1);

const enum Size{
    Small = 1,
    Medium = 2,
    Large = 3
}
let size = Size.Medium;
// console.log(size);

// enum basically bari chezon ko ek small key main store karta hai
// takay yad rakhnay main asani hosakay
enum Urls{
    Home = "https://google.com",
    About = "https://google.com",
    Contact = "https://google.com",
    Login = "https://google.com",
    Register = "https://google.com"
}

// console.log(Urls.Home);

// **************************

// Unknown Type in typescript

// yeah jab use karain gay jab hamain anany walay variable ki value ki type ka pata na ho 

let notSure:unknown = 4;
// console.log(notSure);

if(typeof notSure === "number"){
    // console.log("this is number");
}else if(typeof notSure === "string"){
    // console.log("this is string");
}else if(typeof notSure === "boolean"){
    // console.log("this is boolean");
}else{
    // console.log("this is unknown");
}

// **************************
// Void type in typescript

function logMessage(message:string):void{
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

let message1:any = "hello Bilal welcome to typescript";
let strlength:number = (message1 as string).length; //yahan per type assertion wala kam kia hai warna suggestion nhi deta 
// console.log(strlength);

// **************************
// Union type in typescript

// ek variable o multiple types dy saktay hain 
let id:string|number|boolean;
id = 1;
id = "1";
id = true;

function printId(id:string|number){
    console.log(`your id is ${id}`);
}

// printId(1);
// printId("bilal");

// **************************
// Interface in typescript

// interface mostly type security kay liay used hota hai is main ek interface main jo object based hota hai us main values or function defined karsaktay hain 
// yeah bar bar type defined karna asan kardeta hai 

interface Person{
    name:string,
    age:number,
    greet():void
}

let person:Person = {
    name:"bilal",
    age:20,
    greet(){
        console.log("hello");
    }
}

// console.log(person.name);
// console.log(person.age);
// person.greet();

// interface with function types 

interface MathFunc{
    (a:number,b:number):number
}

const addValues :MathFunc = (a,b) => a+b;
const subtract :MathFunc = (a,b) => a-b;
const multiply :MathFunc = (a,b) => a*b;
const divide :MathFunc = (a,b) => a/b;

// console.log(addValues(1,2));
// console.log(subtract(8,3));
// console.log(multiply(2,3));
// console.log(divide(8,3));

// ************************************

// Alias type in typescript

type UserId = string;

let userid:UserId = "abc123"; //ab jahan bhi userid use karkay us main values ko store karain gay to woh value string hi hogi
// console.log(typeof userid);

type Person1 = {
    name:string,
    age:number
}

let person1:Person1 = {
    name:"bilal",
    age:20
}
// console.log(person1.name,person1.age);

type ID = string | number;

let userid1 = "abc123";
let orderid = 123;
// console.log(userid1,orderid);

// **************************

// Interface vs/ Type Alias 

// In interface 

interface User {
    name:string,
    age:number
}

// 1>>> kisi ek interface main new value ko add karnay ka ek tarika yeah hai (extend ) wala 

// interface Customer extends User{
//     phone:string,
//     membership:boolean
// }

// let customer:Customer = {
//     name:"bilal",
//     age:20,
//     phone:"1234567890",
//     membership:true
// }
// console.log(customer);

//2>>> or dusra tarika yeah hai jis main same interface ko call karkay new value ko add karsaktay hainn 

interface User{
    phone:string,
    membership:boolean
}

let customer:User = {
    name:"bilal",
    age:20,
    phone:"1234567890",
    membership:true
}
// console.log(customer);

// In Aliyas type 

type User1 = {
    name:string,
    age:number
}

// Alias type main new vlaue ko append karnay liay(insection type => &) ka used karna hota hai yeah dubara call nhi hosakta interface ki tarha

type Customer1 = User1 & {
    phone:string,
}

let customer1:Customer1 = {
    name:"bilal",
    age:20,
    phone:"1234567890"
}
// console.log(customer1);

// **************************
// Intersection type in typescript

let config :{server:string , port:number} & {secure:boolean} = {
    server:"localhost",
    port:8080,
    secure:true
}
console.log(config);


