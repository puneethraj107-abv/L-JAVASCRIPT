//Create a game where you start with any random game number.Ask user to keep guessing the game number until they get it right.
// let randomNumber = Math.floor(Math.random() * 10) + 1;

// console.log(randomNumber);
let randomNumber = 25;
let guess;
gameOn = true;
while (gameOn) {
    guess = prompt("guess the number:");
    if (guess == randomNumber || guess === "break") {
        gameOn = false;
    }
    if (guess === "break") {
        break;
    }
    if (guess != randomNumber) {
        alert("you have guessed wrong. type 'break' to exit")
    }
}

console.log("you entered the right number.");