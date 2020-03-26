//Vars the game
let min = 1,
  max = 10,
  winningGuess = getRandomNumber(min, max),
  guessLeft = 3;

//Get elements
const containerGame = document.querySelector(".container");
const inputNumber = document.querySelector("#input-number");
const inputSubmit = document.querySelector("#input-submit");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

inputSubmit.addEventListener("click", function(e) {
  let guess = parseInt(inputNumber.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} a ${max}`, "red");
  } else if (guess === winningGuess) {
    gameOver(true, `${winningGuess} is correct, YOU WIN!!`, "green");
    setTimeout(function() {
      location.reload();
    }, 2000);
  } else {
    guessLeft -= 1;
    inputNumber.value = "";
    if (guessLeft === 0) {
      gameOver(
        false,
        `GAME OVER you lost, the correct number was ${winningGuess}`,
        "red"
      );
      setTimeout(function() {
        location.reload();
      }, 2000);
    } else {
      setMessage(`${guess} is not a correct ${guessLeft} guesses left`, "red");
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  inputNumber.disabled = true;
  inputSubmit.disabled = true;
  inputSubmit.style.cursor = "not-allowed";
  inputSubmit.style.background = "hsl(0, 0%, 20%)";
  inputNumber.style.borderColor = color;
  message.style.color = color;

  setMessage(msg);
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
