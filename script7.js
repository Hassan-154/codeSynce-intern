console.log("script 7: ");
const inputField = document.getElementById('input')
//inputField.addEventListener('paste', e => e.preventDefault())
inputField.addEventListener('paste', (e)=>{
  e.preventDefault()
})
inputField.addEventListener('copy', e => e.preventDefault())

// for (i = 1; i < 1000; i++) { 
//   if (i === 6) {  
//       break;  
//   } 
//   console.log(i);
// }

// for (i = 1; i < 1000; i++) { 
//   if (i === 6) {  
//       continue;  
//   } 
//   console.log(i);
// }


//parameter example
function fun( x, y){
  return x + y;
}

res = fun( 2, 3);
console.log( "add number: " + res);

//how the argument works with parameter
function fun1( x, y, z, v){
  return x + z + v ;
}

res = fun1( 2, 3, 4, 2);
console.log( "add number: " + res);

//how to handle the undefined parameter
function fun2( x, y, z){
  if( z === undefined )
  z = 4;
  return x + y + z ;
}

res = fun2( 2, 3);
console.log( "add number: " + res);

//how to handle the default parameter
function fun3( x, y, z=4){
  return x + y + z ;
}

res = fun3( 2, 3);
console.log( "add number: " + res);

//loops in javascript
//every time before execution of the block of the code condition gets checked
//while loop
 let k =0;
 while( k < 10 ) {
   console.log("i: " + k)
  k++;
  }

  // do while loop
  // run at least one time even if the condition is false
let i =0;
do{
  console.log("i: " + i)
  i++;
 }
 while( i < 0 )

 //for loop
 //for loop and while are same, but
 //for loop has everything in one line,
 //like increment and decrement  also the condition
 //so the for loop has more better readability
 //also reduce the change of error

 //forEach method
 //for each method take a function as a parameter
 //than function has three parameter
 //1: current value /hold the present value that are being processed
 //2: the current index/ that are being passed
 //3: the complete array
 let array = [1, 2, 3, 4, 5,100,3349, 48]
 console.log("foEach loop---------------->")
 array.forEach(function( value, index, array){
  console.log(index + ' ' + value + ' ' +array)
 })

 //map method
//create a new array
//having a return value
//generated by function over the given 
//the map method also take three parameters
let mapRes = array.map(function(value, index, array){
  return value*2;
})
console.log(mapRes);


let obj = {fname: "hassan", lname: "ali" }
//for in loop
//this loop mainly developed to iterate over the object property
console.log("for in object iteration--------------->")
for(let i in obj)
{
  console.log('i: ' + i )
}

//so we can also iterate the array element using for loop
console.log("for in array iteration--------------->")
for(let i in array)
{
  console.log('i: ' + i )
}

//why array iteration using for loop is not preferable
//the for in loop should not user where array index order is important

//for of loop
//for off is that latest loop
//it can iterate over any iterable object
console.log('for of loop-------------------->')
let obj1 = 'hassan'
for (let x of obj1) {
  console.log(x)
}


for (let x of array) {
  console.log(x)
}