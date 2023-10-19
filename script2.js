//asynchronous
//callback function
//calling a function inside another function is called call back function
function fun1(){
  console.log("I am function 1: ")
}
function fun2(){
  console.log("I am function 2: ")
}

fun2()
fun1()
//now discuss the relationship between these function using callback function
//we can also set specific time to  call the function
//when we use multiple callback, then it will called callback hell
function fun3( callFun ){
  callFun();
  console.log("I am function 3: ")
  setTimeout(()=>{
    console.log("I will show after 2 second.. . ")
    setTimeout(()=>{
      console.log("")
    },2000)
  },2000)
}
function fun4( ){
  console.log("I am function 4: ")
}
fun3(fun4);

//if the same thing we do in promise, the promise will give us neat and clean structure of the code
//like .then do this and then do this etc

let stock = {
 fruits: [ "strawberry" , "grapes", "banana", "apple"],
 liquid: [ "water" , "ice"],
 holder: ["cone" , "cup", "stick" ]
};

let shopOpen = false;

//now order
let order=(( time, work )=>{
  return new Promise(( resolve, reject )=>{
    if(shopOpen){
      setTimeout(()=>{
        resolve(work())
      },time)
    }
    else{
      console.log("our shop is closed: " + reject )
    }
  })
})

//call the order function
order( 2000, ()=> console.log(stock.fruits[0] + " was selected: "))
.then(()=> { 
  return order( 0000, ()=> console.log("production has started:") )
})
.then(()=>{
  return order( 1000, ()=> console.log("machine started for next process.. .") )
})
// the catch will only work when the promise is rejected:
.catch(()=>{
  console.log("sorry our shop is closed now.. .")
})
.finally(()=>{
  console.log("day ended, shop is closed now")
})

let array = ['Hassan']
let find = array[0]
let findLength = find.length;
console.log("total length: " + findLength );
for(let i = findLength; i >= 0;  i--){
  console.log( "name index: " + i + find[i] )
}







