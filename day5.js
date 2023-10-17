//exceptional handling
//try and catch
try{
    console.log(hassan);
} catch(error){
    console.log("how the catch will show error: " +error)
}
//how the try block work here
//the try will only work inside the one block{}
//for example in this case the try will not work{{}}
try{
    setTimeout(()=>{
        console.log("setTimeOut: ");
    },1000)
}
catch(err){
    console.log(err)
}
//finally will work in any case, if there is an error or not
finally{
    console.log("The finally statement: ");
}

//default parameter
//already know about that
function fun( x, y, z ){
    console.log("fun called: " + x*y*z)
}
fun( 2, 6, 2 );

//rest parameter/ means infinite argument
function funRest(...args){
    let funRest = 0;
    for(let arg of args)
    funRest += arg;
    return funRest;
}
//call the function
let storeFunRest = funRest( 2, 2, 2, 2, 2, 2, 2, 2, 16 );
console.log( "fun store: " + storeFunRest);

//arrow function
let myfun=(a,b)=> a * b;
let arrowFunSum  =  myfun( 4, 3 );
console.log("arrow function without default return: " + arrowFunSum);

console.log("arrow function with default return: " + myfun(4, 5) )

//expressions and operator
//Conditional (ternary) operator
let operatorFun=(isNumber)=> isNumber? '23' : '30';

//call operator function
console.log(operatorFun(false));

// comma operator
let x = 10;
let y = (x++, x + 1);

console.log( "the comma operator values: " + x, y);

// create setinterval in javascript

function printName(){
    console.log("print Hassan after every 1.5 second.. .")
}

//setInterval( printName, 0 );

// this is how set interval works

//fetch
