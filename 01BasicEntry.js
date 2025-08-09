console.log("Hello-World")
// goodwill of learing


/*****************************Variables****************************/


var _abc = 1;
var $abc = "";
var Abc = true; //Boolean is true false NOT True False

console.log(typeof(_abc), typeof($abc), typeof(Abc));

// initialising variables
var a = 5;
var b = 3;
var c = 4; // Global initialisation

const d = 10; //Value cant be changed fo const

var sum = a+b+c+d;

// Block level Initialisation
{
    let x = 1;
    let y = "hello";

    console.log(x, y);
    
}
// this console.log() wont work variables are local 
// console.log(x, y); 

/***********************************************Outputs******************************************/


// String + Variable Output
console.log("Sum for variables is ", sum);

// Dynamic String Variable Output
console.log('Sum for veriables is ${sum}');

/*
    "Double Quotes" and 'Single Quotes' 

    Dont work for Dynamic String Variable Output
    they initialise strings


    `Backticks`     
    Initialise Dynamic String Variable Output
*/

// Right Way
console.log(`Sum for Variables is ${sum}`);


/*******************Object creation Non Primitive Data type*********************************/ 


// Best for small, fixed objects.
const car = {
  brand: "Hyundai",
  model: "i10",
  year: 2020
};

console.log(car.brand); // Hyundai


//  Less commonly used — object literals are shorter and clearer
const person = new Object();
person.name = "Kow";
person.age = 20;

console.log(person.name); // Kow


// Good for creating many objects with the same structure.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new Person("Kow", 20);
console.log(user1.name); // Kow


// Best for object-oriented programming
class Peerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user2 = new Person("Kow", 20);
console.log(user2.age); // 20


// Useful for inheriting from another object
const proto = { greet() { console.log("Hello!"); } };
const obj = Object.create(proto);
obj.greet(); // Hello!
