let data = fetch('https://dummyjson.com/products/1');
data.then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(value)
})