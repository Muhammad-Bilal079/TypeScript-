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

console.log(Urls.Home);

// **************************

// Unknown Type in typescript
