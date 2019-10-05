var letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var userGuesses = [];
var psychicChoice = "";

psychicChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(psychicChoice);

document.onkeypress = function (event) {
    var userGuess = event.key;

    if (userGuess == psychicChoice) {
        winCount++;
        reset()
    }

    else if (userGuess !== psychicChoice) {
        guessesLeft--;
        userGuesses.push(userGuess)
    }

    if (guessesLeft <= 0) {
        lossCount++;
        reset()
    }

    document.getElementById("winCount").innerHTML = "Wins: " + winCount;
    document.getElementById("lossCount").innerHTML = "Losses: " + lossCount;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("userGuess").innerHTML = "Your Guesses So Far: " + userGuesses;

    if (document.getElementById("status") != null) {
        var idPost = document.getElementById("status").innerHTML;
    }
}

function reset() {
    guessesLeft = 9
    userGuesses = [];
    psychicChoice = ""
    psychicChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(psychicChoice);

}

