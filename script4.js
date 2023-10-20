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
chessGame("g3");

let stock = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
};

let shopOpen = false;

//now order
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (shopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      console.log("our shop is closed: " + reject);
    }
  });
};

//call the order function
order(2000, () => console.log(stock.fruits[0] + " was selected: "))
  .then(() => {
    return order(0, () => console.log("production has started:"));
  })
  .then(() => {
    return order(1000, () =>
      console.log("machine started for next process.. .")
    );
  })
  // the catch will only work when the promise is rejected:
  .catch(() => {
    console.log("sorry our shop is closed now.. .");
  })
  .finally(() => {
    console.log("day ended, shop is closed now");
  });

// work with async await
async function orderNow() {
  try {
    //create a fake function
    await abc;
  } catch (err) {
    console.log("abc does not exist: " + err);
  } finally {
    console.log("run code anyways.. .");
  }
}
//call function
orderNow();

function ab() {
  console.log("ab is started");
  setTimeout(() => {
    console.log("in timeout");
  }, 0);
  console.log("after timeout");
  function abc() {
    console.log("r");
  }
  abc();
}
ab();
