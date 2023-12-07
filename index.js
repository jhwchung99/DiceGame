// Random value generator for first dice, uses that to generate path to image
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1ImagePath = "./images/dice" + randomNumber1 + ".png";

// Random value generator for first dice, uses that to generate path to image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2ImagePath = "./images/dice" + randomNumber2 + ".png";

// Sets the img src to the path
document.querySelector(".img1").setAttribute("src", dice1ImagePath);
document.querySelector(".img2").setAttribute("src", dice2ImagePath);

// Function that determines which player is the winner
function determineWinner() {
    if (randomNumber1 === randomNumber2) {
        return "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        return "🚩 Player 1 Wins!";
    } else {
        return "Player 2 Wins! 🚩";
    }
}

// Run the function
var playerWinner = determineWinner();

// Change the h1 header to display the winning player/draw
document.querySelector(".container > h1").textContent = playerWinner;