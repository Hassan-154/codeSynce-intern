console.log("script 3");

//reverse the string array
// let array = ["Hassan"]
// console.log(array);
// let total = array[0];
// console.log("total: " + total )
// for( let i = total.length; i >= 0; i--)
// {
//   console.log(total[i]);
// }

//reverse the string
let name = "Moiz";
//var result= str+ str[0];
let nameLength = name.length;
console.log( "total length: " + nameLength);
nameLength --;
let reverse = '';
for(let i = nameLength; i >= 0; i--){
  reverse = reverse + name[i];
  console.log(reverse);
}
console.log(reverse)
//count the character
let obj = {};
console.log(obj);
let str = 'HaSsan';
let store = str.length;
console.log( "total character: " + store);
for(let i = 0; i < store; i++ )
{
  console.log('compare character: ' + str[i])
  if(str[i] in obj)
  {
    let key = str[i]
        obj[key]++;
  }
  else{
    let key = str[i];
    obj[key] = 1;
  }
}
console.log(obj)

// let obj = {};
// let key = 'h';
// obj[key] = 30;
// console.log(obj);
//use axios to fetch data
//we can get data from get request
axios.get('https://dummyjson.com/products/1')
.then((response)=>{
  console.log(response);
})
//now do the same for posting data





