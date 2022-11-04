const gameContainer = document.getElementById("game-container");
const menuButtons = [...document.querySelectorAll(".menu-button")];
const screens = [...document.querySelectorAll(".screens")];

//currentScreen switches on button clicks
let currentScreen;

const gameWidth = 600;
const gameHeight = 900;
const buttonWidth = `${Math.floor(gameWidth / menuButtons.length)}`;
const buttonHeight = `${Math.floor(gameWidth / menuButtons.length)}`;
const displayScreenSize = Math.floor(gameHeight - buttonHeight);

gameContainer.style["width"] = `${gameWidth}px`;
gameContainer.style["height"] = `${gameHeight}px`;
gameContainer.style[
  "grid-template-rows"
] = `${buttonHeight}px, $${displayScreenSize}px`;


//only switches current screen
function toggleCurrentScreen(makeNewCurrentScreen) {
  if (!makeNewCurrentScreen.classList.contains("screens"))
    console.log(`ERROR \n${makeNewCurrentScreen}\nis not a screen`);
  else {
    screens.forEach((screen) => {
      screen.classList.remove("current-screen");
    });
    makeNewCurrentScreen.classList.add("current-screen");
    makeNewCurrentScreen.style.height = `${displayScreenSize}px`;
    currentScreen = makeNewCurrentScreen.textContent;
  }
}

function makeButtons() {
  menuButtons.forEach((button) => {

    //width and height are calculate here to account for buttons being added or removed
    button.style["width"] = `${buttonWidth}px`;
    button.style["height"] = `${buttonHeight}px`;

    //event listener for swtichign display based on click
    button.addEventListener("click", () => {
      console.log("button: " + button.value); //print button clicked
      button.classList.remove("current-button"); //remove selection
      menuButtons.forEach((removeCurrent) =>
        removeCurrent.classList.remove("current-button")
      );
      const buttonPressed = document.querySelector(`.${button.value}-screen`);
      toggleCurrentScreen(buttonPressed);
      button.classList.add("current-button");
    });
  });
}

makeButtons();
