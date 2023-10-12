console.log("my first day");

// the difference between let and const
//let
//variables defined with let cannot be redeclare
//variables defined with let must be Declared before use
//we cant do this
// let x = "John Doe";
// let x = 0;
// x can NOT be used here
//but we can do this in var
var value = "John Doe";
console.log("var before update: " + value);
var value = 0;
console.log("var after update: " + value);
//with let we cant access the variable outside of the block
//but with var we can access variable outside of the block
//and the block means {}
//for example
let x = 10;
// Here x is 10

{
  let x = 2;
  // Here x is 2
}
console.log("x is updated inside the block: " + x);
// Here x is 10 because the x update inside the block that we can also access outside
//const
//a const variable cannot be reassigned:
const num = 10;
//constant objects and arrays
//The keyword const is a little misleading. It does not define a constant value. It defines a constant reference to a value.
//const array
//we can change the element of const array, but we cant change the name of array
const carsCompany = ["Saab", "Volvo", "BMW"];
console.log("elements before the update: " + carsCompany);
// we can update the element
carsCompany[0] = "obv";
console.log("elements after the update: " + carsCompany);
//we can also add new element
carsCompany.push("audi");
console.log("elements after adding the new element: " + carsCompany);
//but you can not directly reassign the array:
const carsAnotherCompany = ["obv", "Volvo", "Audi"];
//we can update or change value like this
//carsAnotherCompany = ["Toyota", "Volvo", "Audi"];    // ERROR
//console.log(carsAnotherCompany);

//constant Objects
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car);
// we can change or update the property name
car.color = "green";
console.log("car color updated: " + car.color);
// we can also add new property
car.owner = "Hassan";
console.log("after adding the new property: " + car.owner);
//So, by using JSON.stringify(), you ensure that the object is converted into a string
console.log("after update and adding the new property: " + JSON.stringify(car));

// datatypes
let length = 16;
console.log("number:" + length);

let name = "Hassan";
console.log(name);

let y = true;
console.log(y);

// Object:
//Objects are used to organize and store data and behavior in a structured way.
// here property name used to access vale
const person = { firstName: "Hassan", lastName: "Ali" };
console.log("person first name: " + person.firstName);

//array
//array elements are accessed by their numerical index.
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]);

// difference between let and var in for loop:

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 300);
}
for (var k = 0; k < 3; k++) {
  setTimeout(() => {
    console.log(k);
  }, 300);
  const z = k;
  console.log(z);
}

//functions
function fun(p1, p2) {
  return p1 * p2;
}
//call function
result = fun(3, 3);
console.log(result);

//Real Life Objects, Properties, and Methods
//a car has properties like weight and color, and methods like start and stop:
//already read about the property

//Object Methods
//methods are actions that can be performed on properties
//a method is a function stored as a property.
const methodExample = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName+ "" + this.lastName;
    //this keyword refer to an object
  },
};
console.log(methodExample);
//using an array literal is the easiest way to create a JavaScript Array.
const literal = ["Saab", "Volvo", "BMW"];
//using the JavaScript Keyword new with array
const newArray = new Array("Saab", "Volvo", "BMW");
//both arrays are same so no need to use the new keyword
// so for simplicity, readability and execution speed, use the array literal method.
//arrays are Objects
// arrays are special type of object
//JavaScript variables can be objects. Arrays are special kinds of objects.

//Because of this, you can have variables of different types in the same Array.

//You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

//array Properties and Methods
//The real strength of JavaScript arrays are the built-in array properties and methods:
//The length Property
let arrayLength = literal.length;
console.log("array length: " + arrayLength);
//accessing the Last Array Element
arrayLastItem = literal[literal.length - 1];
console.log(arrayLastItem);
//looping Array Elements
for (i = 0; i < arrayLength; i++) {
  console.log("here is the array " + i + " element: " + literal[i]);
}

