//Asynchronous JavaScript
//callback in javascript

function fun1( )
{
  console.log("fun 1")
}
function fun2( para ){
  console.log("fun 2")
  setTimeout(() => {
    para();
  }, 2000);
}
fun2( fun1 )

function resolveAfter2Second(){
  console.log("wait for 2 second to resolve.. .")
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve("resolve");
    }, 2000);
  })
}

async function asyncCall(){
  console.log("I just called:")
  let result = await resolveAfter2Second();
  console.log( "final answer: " + result)
}

asyncCall();

//pass by value and pass by reference in javascript

//pass by value
let a = 4;
let b = a;
console.log(b)

//change by reference
let obj1 = {
  fname: "hassan",
  lname: "ali"
}
let obj2 = obj1;

obj2.lname = 'hamza';

console.log( "obj: " + obj1.fname);
console.log( "obj: " + obj1.lname);
console.log( "obj: " + obj2.fname);
console.log( "obj: " + obj2.lname);

//hoisting
//javascript default behavior of moving declaration to the top:

//in this cause javascript deal the x = 9 to global variable
 y = 9;
 console.log(y);

 function fun(para){
  console.log("run: " + para)
 }

 var v = 10;
 fun(v)

 //shallow copy and deep copy
  //what if we want to control the value that changed by reference
  console.log("how to control the value change by reference.. .")


   //shallow copy and deep copy
   let nameObj = {
    name: 'hassan ali',
    address:{
       city1: 'lahore',
       city2: 'Islamabad'
    },
    getData:function(){
      return 'all data is here now: '
    }
  }
   //let copyNameObj = Object.assign( {}, nameObj)
   //we can also use the spread operator
   //this will also give the same result
   //deep copy will handle object every level
  //  let copyNameObj = JSON.parse(JSON.stringify(nameObj))
  //so we use lodash so that we can also handle the function in object
  // let copyNameObj = _.cloneDeep(nameObj)
  let copyNameObj =  {...nameObj}
  copyNameObj.name = 'Hamza ali'
  copyNameObj.address.city1 = 'karachi'
   //so this will work only the first copy of the object the deeper level still be referred
   //here the object property will change by reference
   console.log("original obj: " + nameObj.name)
   console.log("copy obj: " + copyNameObj.name)
   console.log("original obj: " + nameObj.address.city1)
   console.log("copy of obj: " + copyNameObj.address.city1)
   console.log(nameObj);
   console.log(copyNameObj);
   // this is called show copy
  //here the location will not be copy but the value will be copy

