const wordList = [
    "broccoli",
    "asparagus",
    "lettuce",
    "spinach",
    "cabbage",
    "cauliflower",
    "eggplant",
    "zucchini",
    "squash",
    "carrot",
    "kale",
];

// to generate random words
let selectedWord = "";

// split the letters in the word
let lettersinWord = [];

//number of blanks
let numofBlanks = 0;

// b r _ _ c c_ _ _ 
let blanksAndSuccesses = [];

// Wrong letters guessed
let wrongGuesses = [];

// Game counts
let wins = 0;
let losses = 0;
let guessesLeft = 7;

// create variables  - document.ElementbyId

let directions = document.getElementById("directionstext");
let remainder = document.getElementById("guessesRemaining");
let guessed = document.getElementById("guessedLetters");
let win = document.getElementById("winCount");
let loss = document.getElementById("lossCount");
let guesses = document.getElementById("guesses");




// FUNCTIONS - this starts the game

const startGame = () => {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersinWord = selectedWord.split("");
    numofBlanks = lettersinWord.length;

    // splits words into an array using array.split

    // create a reset - need to reset or it won't work
    guessesleft = 7;
    wrongGuesses = [];
    blanksAndSuccesses = [];


    // need to create loop to populate blanks and successes

    for (var i = 0; i < numofBlanks; i++) {
        blanksAndSuccesses.push("_");

    }

    console.log(blanksAndSuccesses);

    // linking js text to HTML

    guesses.textContent = blanksAndSuccesses.join("  ");
    remainder.textContent = guessesLeft;
    win.textContent = wins;
    loss.textContent = losses;


    // DEBUG & TEST:
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numofBlanks);
    console.log(blanksAndSuccesses);

}



function checkLetters(letter) {



    var LetterInWord = false;
    for (var i = 0; i < numofBlanks; i++) {
        // console.log(selectedWord[i]);
        if (selectedWord[i] == letter) {
            LetterInWord = true;

        }
    }

    // create for loop to check existing letters - blanksAndSuccesses 
    if (LetterInWord) {
        for (var i = 0; i < numofBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    } else {
        wrongGuesses.push(letter);
        guessesLeft--

    }

    console.log(blanksAndSuccesses);

}

function roundComplete() {
    console.log("Win Count: " + wins + " | Loss Count: " + losses + " | Guesses Remaining " + guessesLeft);

    guessesRemaining.textContent = guessesLeft;
    guesses.textContent = blanksAndSuccesses.join(" ");
    guessed.textContent = wrongGuesses.join("  ");



    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        wins++;
        alert("YOU WIN :)");

        win.textContent = wins;

        startGame();


    } else if (guessesLeft == 0) {
        losses++;
        alert("YOU LOSE :(");

        loss.textContent = losses;

        startGame();

        location.reload();

        // put restart game function?

    }

}


startGame();

// keyclicks
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();

    directions.textContent = "";

    console.log(letterGuessed);


}


//things to still work on
//when the user loses, it shouldn't restart - it should keep going 






// create a restart game function to reset game; create if statement = 0. if statement should run reset game function