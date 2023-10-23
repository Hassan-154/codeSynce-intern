console.log("task.. . ");
//create chess game task:
let number = [1, 2, 3, 4, 5, 6, 7, 8];
let str = ["a", "b", "c", "d", "e", "f,", "g", "h"];
let check = false;
//create a function that return true or false
function chessGame(userInput) {
  console.log("user input : " + userInput);
  //check the number is odd or even
  if (userInput[1] % 2 == 1) {
    console.log("for odd number:");
    for (let i = 0; i < str.length; i++) {
      if (userInput[0] == str[i]) {
        if (i % 2 == 0) {
          console.log("true on index: " + i);
          check = true;
        }
      }
    }
  } else {
    if (userInput[1] % 2 == 0) {
      console.log("for even number:");
      for (let i = 0; i < str.length; i++) {
        if (userInput[0] == str[i]) {
          if (i % 2 == 1) {
            console.log("true on index: " + i);
            check = true;
          }
        }
      }
    }
  }
  console.log("final answer: " + check);
}

//pass the string here
chessGame("g5");