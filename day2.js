const { func } = require("prop-types");

//we can also use for each function in array
console.log("<----------foreach()---------->");
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
function myFunction(item) {
  sum += item;
}
console.log("total num: " + sum);
console.log(
  "<----------using foreach() will callback function for each element of an array together---------->"
);
numbers.forEach(secondFunction);
function secondFunction(item, index, arr) {
  console.log("item: " + item);
  console.log("index: " + index);
  console.log("index: " + arr);
}
console.log(
  "<----------we can use the function directly inside the foreach()---------->"
);
numbers.forEach(function (item, index, arr) {
  console.log("item: " + item);
  console.log("index: " + index);
  console.log("index: " + arr);
});
//break, continue and return, these are the difference in the simple for loop array and the for each array
//how to break and continue work
//break
console.log("<----------break statement---------->");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("loop break");
    break;
  } else {
    console.log(i + " loop continue.. .");
  }
}
console.log("<----------continue statement---------->");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("loop break");
    //continue will ignore the 5 index
    continue;
  } else {
    console.log(i + " loop continue.. .");
  }
}

//adding Array Elements
// the easy way to add element in array is push() method
const array = [12, 33, 52, 22];
array[array.length] = "43";
//adding element with high index can create the holes in the array
console.log("<----------filter array---------->");
//apply filter
const filterArray = numbers.filter(filterFun);
function filterFun(item, index, arr) {
  if (item == 4) {
    return item;
  }
}
console.log(filterArray);

// the reduce method in array
let add = numbers.reduce(myFunction, 0);
console.log("reduce: " + add);
function myFunction(total, value, index, array) {
  if (index === 0) {
    console.log(total);
  }
  return total + value;
}

// const arr = [4, 3, 2, 1, 34, 3];

const arr1 = ["1nd", "2-nd", "3-nd"];
const f1 =arr1.reduce(ab, {});
function ab(oldValue, currentItem, index) {
  console.log({ oldValue, currentItem });
  const newValue = { ...oldValue };

  newValue[`${index}-nd`] = currentItem;
  return newValue;
}
console.log("f", f1);


const arr2 = ["1nd", "2-nd", "3-nd"];
const f =arr2.reduce(ab, {});
function ab(oldValue, currentItem, index) {
  console.log({ oldValue, currentItem });
  const newValue = { ...oldValue };

  newValue[`${index}-nd`] = currentItem;
  return newValue;
}
console.log("f", f);

// array every
let every = numbers.every(everyFun)
function everyFun(value){
  return value > 2;
}
console.log(every)

//array some
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 20;
}
console.log(someOver18);

//array index of
let lom = numbers.indexOf(41) + 1;
console.log(lom);

//last index of
lom = numbers.lastIndexOf(4)
console.log("lastIndexOf: "+ lom)

//The JavaScript Math object allows you to perform mathematical tasks on numbers.
//generate a random number 
let randomNumber = Math.random();
console.log(randomNumber)

// Returns a random integer from 0 to 9:
//math.floor use to round off the numbers
let floorRandom = Math.floor(Math.random() * 10);
console.log("Generate random number using Math floor: " +floorRandom);


//generate random number from 0 to 100
floorRandom = Math.floor(Math.random() *100);
console.log("generate random number from 0 to 100: " + floorRandom)

