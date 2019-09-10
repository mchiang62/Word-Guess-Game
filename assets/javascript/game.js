// create a restart game function to reset game; create if statement = 0. if statement should run reset game function


// GLOBAL VARIABLES

// ARRAYS AND VARIABLES

var wordList = [
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

// words selected - random
var selectedWord = "";

// need var to split the letters in the word
var lettersinWord = [];

//number of blanks
var numofBlanks = 0;

// b r _ _ c c_ _ _ 
var blanksAndSuccesses = []; 

// Wrong letters guessed
var wrongGuesses = [];

// Game counts
var wins = 0;
var losses = 0;
var guessesLeft = 7;

// create variables  - document.ElementbyId

// var directions = document.getElementById("directionstext");
// var wordToGuess = document.getElementById("wordGuess");
// var wrong = document.getElementById("wrongGuess");
var remainder = document.getElementById("guessesRemaining");
var guessed = document.getElementById("guessedLetters");
var win = document.getElementById("winCount");
var loss = document.getElementById("lossCount");
var guesses = document.getElementById("guesses");




// FUNCTIONS - this starts the game



function startGame () {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersinWord = selectedWord.split("");
    numofBlanks = lettersinWord.length;

    // splits words into an array .split

    // create a reset - need to reset or it won't work
    guessesleft = 7;
    wrongGuesses = [];
    blanksAndSuccesses = [];

    // square brackets - array, initialize arrays,
    // need to create loop to populate blanks and successes

    for (var i = 0; i < numofBlanks; i++) {
     blanksAndSuccesses.push("_");

    }

    console.log(blanksAndSuccesses);

// trying to use innerHTML to change HTML text but it won't work ******

   guesses.textContent = blanksAndSuccesses.join("  ");
   remainder.textContent = guessesLeft;
   win.textContent = wins;
   loss.textContent = losses;


   
    // to debug and test:
    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numofBlanks);
    console.log(blanksAndSuccesses);

}

// this function isn't working???
function checkLetters (letter) {



    var LetterInWord = false;
    for (var i = 0; i<numofBlanks; i++) {
    // console.log(selectedWord[i]);
        if (selectedWord[i] == letter) {
            LetterInWord = true;

        }
    }


// create for loop to check existing letters - blanksAndSuccesses 
if(LetterInWord) {
    for (var i=0; i<numofBlanks; i++) {
    if(selectedWord[i] == letter) {
        blanksAndSuccesses[i] = letter;
     }
    }
}



else {
    wrongGuesses.push(letter);
    guessesLeft--

}

console.log(blanksAndSuccesses);

}

function roundComplete(){
    console.log("Win Count: " + wins + " | Loss Count: " + losses + " | Guesses Remaining " + guessesLeft);

guessesRemaining.textContent = guessesLeft;
guesses.textContent = blanksAndSuccesses.join(" ");
guessed.textContent = wrongGuesses.join("  ");



    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        wins++;
        alert("YOU WIN :)");
        
win.textContent = wins;

startGame();


    }

else if (guessesLeft == 0) {
    losses++;
    alert("YOU LOSE :(");

    loss.textContent = losses;

    startGame(); 

    // put restart game. 

}

}

// MAIN PROCESS in order for the function to work:
startGame ();

// keyclicks
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
checkLetters(letterGuessed);
roundComplete();


  console.log(letterGuessed);



}






// add function so 


// need to add textcontent

















// var answers = [];



// var remainingLetters = randomWords.length; 
// {
// document.getElementById ("answers").innerHTML = answers.join(" ");
// }








