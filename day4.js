//primitive and non primitive
//primitive
let x = 9;
let b = 0;
//changing by value
b = x;
console.log("primitive data type value: " + b);
//non primitive
const obj = { name: "hassan", age: "24" };
//changing by reference
obj.name = "hamza";
console.log(obj.name);
//changing by value will take own memory
//changing by reference will not not take memory

//object.is
Object.is(5, 5); // true
Object.is("5", 5); // false
Object.is(0, -0); // false
Object.is(NaN, NaN); // true
NaN === NaN; // false

//example related to object
const obj1 = { name: "hassan" };
const obj2 = { name: "hassan" };
let findAns = Object.is(true, true);
console.log("find object: " + findAns);

//next loop statements
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log("here is the value: " + i);
    break;
  }
  console.log("loop is running: " + i);
}

//do while loop
let i = 0;
while (i < 10) {
  console.log("the number is:" + i);
  i++;
}

//do while loop
// it will run one time even if the condition is false
let no = 1;
do {
  console.log("running loop: " + no);
  no++;
} while (no < 5);

const time = 35;
if (time < 10) {
  console.log("if");
} else if (time < 30) {
  console.log("else if");
} else {
  console.log("else");
}

//switch statement
var day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the workweek.");
    break;
  case "Friday":
    console.log("It's almost the weekend!");
    break;
  default:
    console.log("It's a regular day.");
}

let a = 10;
let c = "10";
console.log(a == c);
console.log(a === c);

const numbers = [4, 9, 16, 25, 44];
let info = numbers.map(myFun);

function myFun(value) {
  console.log("here is the value of array: " + value * 12);
}
// set, weekMap and workSet
let myArray = new Set(numbers);
console.log(myArray);
myArray.add(12);
myArray.delete(12);

//try block of code
try {
} catch (err) {}
//JavaScript Throws Errors
//JavaScript will actually create an Error object with two properties: name and message.

//The throw Statement
//The exception can be a JavaScript String, a Number, a Boolean or an Object:
//If you use throw together with try and catch, you can control program flow and generate custom error messages.
try {
  // Code that may throw an exception
  const result = someUndefinedVariable / 0;
  console.log(result); // This line will not be executed due to the exception
} catch (error) {
  // Handle the exception
  console.error("An error occurred:", error.message);
}

try {
  let m = 700;
  const result = m / 12;
  console.log(result);
} catch (err) {
  console.log("An error message:", err.message);
}

const ab = new WeakSet();
// const cd = [];

function abc() {
  const item = {};
  // cd.push(item);
  // const r = 4;
  // console.log(r);
  ab.add(item); 
}
abc();
