//lets crate a filter array
const numbers = [34, 12, 33, 10];
let arrayFilter = numbers.filter(fun);
function fun(value, index, completeArray) {
  console.log("array element: " + value);
  console.log("array index: " + index);
  console.log("complete array: " + completeArray);
  //apply condition to filer the array
  return value < 14;
}
console.log("filer number return: " + arrayFilter);

// the difference between every array and some array
// the every array demand to check every element to pass the condition
// but the some array demand if even only one array element pass the test

// create every array
let every = numbers.every(everyFun);
function everyFun(value) {
  return value < 60;
}
console.log("every array return value: " + every);

// create some array
let some = numbers.some(someFun);
function someFun(value) {
  return value < 12;
}
console.log("some array return value: " + some);

// create every array with the other type of element
const names = ["hassan", "hassan", "hassan"];
let everyName = names.every(everyNameFun);
function everyNameFun(name, index) {
  return name == "hassan";
}
console.log("every array return name:" + everyName);

//create some array with the other type of element
let someName = names.some(someNameFun);
function someNameFun(name) {
  return name == "hassan";
}
console.log("some array return name: " + someName);

// find array method return the first element that pass the test4
let find = numbers.find(findFun);
function findFun(value) {
  return value > 18;
}
console.log("return the find value: " + find);

// find array index return the first element that pass the test
let findIndex = numbers.findIndex(findFunIndex);
function findFunIndex(value) {
  return value < 12;
}
console.log("return the find index value: " + findIndex);

//array form
let arrayform = Array.from("83754949");
console.log(arrayform);

//the keys  method in array
let saveKey = numbers.keys();
for (let x of saveKey) {
  console.log("key method: " + x);
}

//the entries  method in array
let arrayEntries = numbers.entries();
for (let x of arrayEntries) {
  console.log("the entries method: " + x);
}

// hoisting
// we can do that in var but we cant do in let and const
x = 5; // Assign 5 to x
var x; // Declare x
console.log(x);
//we can also do that in var ofCourse but we cant do this in let and const
var x; // Declare x
x = 5; // Assign 5 to x
console.log(x);

//now the var will be undefined because we console before
console.log(y);
var y = 7; // Initialize y

//bigint data type

//explicit type casting
console.log(23);
console.log("here is the number " + 23 + ".. .");

//implicit type casting5684
let num = "23";
console.log(Number(num));

//loops and iteration

//for loop
for (let i = 0; i < numbers.length; i++) {
  console.log("array number: " + numbers[i]);
}
//for in loop
const person = { fname: "John", lname: "Doe", age: 25 };
for (let p in person) {
  console.log("person data: " + person[p]);
}

//the for of loop
//the x of number directly show the values instead of  index
for (let x of numbers) {
  console.log("for off loop: " + x);
}

//do while loop
let i = 0;
while (i < 10) {
  console.log("the number is:" + i);
  i++;
}

function isSumPossible(target, arr) {
  // return true if possible
  return true;
}

console.log(isSumPossible(7, [1, 3, 4]));

function removeRepeatedValues(arr) {}

console.log(removeRepeatedValues([2, 3, 13, 42, 1, 2, 42]));
