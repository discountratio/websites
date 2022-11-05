

function calculate() {
  const displayBottom = document.getElementById("display-bottom");
  const displayTop = document.getElementById("display-top");
  const displayLeft = document.getElementById("display-left");
  const buttons = [...document.querySelectorAll("button")];
  // const operators = [...document.querySelectorAll(".operator")];
  // const numbers = [...document.querySelectorAll(".number")];
  // const equal = document.getElementById("equal");

  //declare variables
  let inputArray = [];
  let num1 = "";
  let num2 = "";
  let currentClick;
  let previousClick;
  let prevOp = "";
  let operator;
  let operatorDisplay;
  let result;

  //mathematical functions
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;
  const sqrt = (a) => Math.sqrt(a);

  //function to prevent to large numbers, and too many digits
  function precise(x) {
    let maxSize = 8888888888;
    x > maxSize ? (x = maxSize) : (x = x);
    return parseFloat(x.toFixed(4));
  }

  //add button clicks
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonType = button.classList[0]; //USE FOR MAIN SWITCH
      const buttonId = button.id; //USE FOR INNER SWITCH
      const buttonText = button.textContent; //Use for display (prettier symbols)

      //log each button press
      console.log(`${button.id}`);
      currentClick = buttonId;

      console.log(`${num1}${operatorDisplay}${num2}=${result}`);
      switch (buttonType) {
        /*------------------------------------------
      switch based on class
      -  number[0-9, . ]
      -  operator[add, subtract, multiply, divide, sqrt]
      -  clear[backspace, clear]
      -  equal
      ------------------------------------------*/
        case "number":
          //adds to input, updates display
          inputArray.push(buttonText);
          displayBottom.textContent = inputArray.join("");
          break;

        //Operator----------------------------------------------
        case "operator":
          //prevents losing num1
          if (inputArray.length > 0) {
            //store num1, clear input
            num1 = Number(inputArray.join(""));
            inputArray = [];
          }

          operator = buttonId;
          operatorDisplay = buttonText;

          displayLeft.textContent = `${operatorDisplay}`;
          displayTop.textContent = `${num1}${operatorDisplay}`;
          prevOp = operatorDisplay;
          break;

        //Clear----------------------------------------------
        case "clear":
          switch (button.id) {
            case "clear":
              inputArray = [];
              num1 = "";
              num2 = "";
              operator = "";
              operatorDisplay = "";
              displayTop.textContent = "";
              displayBottom.textContent = "";
              break;

            case "backspace":
              inputArray.pop();
              displayBottom.textContent = inputArray.join("");
              break;

            default:
              console.log("error in clear switch");
              break;
          }
          break;

        //Equal----------------------------------------------
        case "equal":
          //allows to repeat pressing '=' to repeat operation
          if (previousClick !== currentClick) {
            //store num2, clear input
            num2 = Number(inputArray.join(""));
            inputArray = [];
            displayTop.textContent = `${num1}${prevOp}${num2}`;
          }
          //display top info

          //Clear----------------------------------------------
          switch (operator) {
            case "sqrt":
              result = precise(sqrt(num1));
              num2 = "";
              //overrides the display info, default looks bad with sqrt
              displayLeft.textContent = `${num1}`;

              break;
            case "add":
              result = precise(add(num1, num2));
              break;
            case "subtract":
              result = precise(subtract(num1, num2));
              break;
            case "multiply":
              result = precise(multiply(num1, num2));
              break;
            case "divide":
              result = precise(divide(num1, num2));
              break;
            default:
              console.log("error in equal swtich");
              break;
          }
          //Always run -- display information, change num1 and num2
          console.log(`${num1}${operatorDisplay}${num2}=${result}`);

          operatorDisplay = buttonText;

          displayTop.textContent = `${num1}${prevOp}${num2}`;
          displayLeft.textContent = `${operatorDisplay}`;
          displayBottom.textContent = `${result}`;

          num1 = result;
          num2 = num2;
          break;

        //Default----------------------------------------------
        default:
          console.log("error in calculator switch");
          break;
      }

      previousClick = buttonId;
    });
  });
}

calculate();
