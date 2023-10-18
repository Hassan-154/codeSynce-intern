let data = fetch('https://dummyjson.com/products/1');
data.then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(value)
})
//difference between Synchronous vs Asynchronous
console.log("I");
console.log("will");
console.log("do");
console.log("figma")
console.log("React");

//fetch
//than will handle the response
//if any error happend the catch will catch the error
//fetch('http/.. .').then().catch()

// promise
function myDisplayer(some) {
    console.log( "Promise final result: " + some)
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 1;
  
    if (x == 1) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

  //live example of promise

  let store = fetch("https://dummyjson.com/products/1")
  .then((res) => {
    res.json().then((res)=>{
        console.log(res)
    })
  })
  .catch((err) => {
    console.log("error during fetching the data: " + err);
  });


  let array = ["hassan", "hamza", "ali"]
  console.log( "array: " +array);
  let total = array.length;
  total--;
  for(let i = total; i >= 0; i--){
   console.log( "name reverse: " + array[i])
  }
  
  //async and await
  async function networkData( ){
  const response = await fetch('https://dummyjson.com/products/1')
  let show = await response.json()
  console.log("now show data: " + show)
  }

  //call function
  networkData();


