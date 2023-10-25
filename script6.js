'use strict'
//delete property in js
let person = {
  fname: 'hassan',
  lname: 'ali',
  address:{
    location1: 'lahore',
    location2: 'karachi'
  }
}

//what if only want to put the question mark that show the property if exist to avoid the object error
console.log(person)
// console.log(person?.address)
//how to delete the object property ?
//using the delete property

//delete person.fname;

//console.log(person)

// x = 5;
// console.log(x);
// var x;

//Variables defined with let and const are hoisted to the top of the block, but not initialized.
// so this will give an reference error
//  y = 8;
//  console.log(y)
//  let y;

//this will give an syntax error
// n = 8;
// console.log(n)
// const n;

//is is because only the declaration (var y), not the initialization (=7) is hoisted to the top.
// var y;
// console.log(y)
// y = 9;

// to select anything in html use query selector
// to change anything in the html use inner.html



  var button  = document.querySelector('#button')
   button.addEventListener("click", function(){
   //get element by id method
   //we can only access the first id element only if we have multiple id
  document.getElementById('fname').innerHTML = person.fname
   document.querySelector('#lname').innerHTML = person.lname
   document.querySelector('location1').innerHTML = person.address.location1
  })





