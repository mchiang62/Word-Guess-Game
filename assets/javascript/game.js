// GLOBAL VARIABLES

// ARRAYS AND VARIABLES

var wordList = [
    "broccoli",
    "asparagus",
    "lettuce",
    "spinach",
    "cabbage",
    "cauliflower",
    "eggplants",
    "zucchini",
    "squash"
];

// words selected
var selectedWord = "";

// need var to split the letters in the word
var lettersinWord = [];

// 
var numofBlanks = 0;

// b r _ _ c c_ _ _ 
var blanksAndSuccesses = []; 

// Wrong letters guessed
var wrongGuesses = [];

// Game counts
var wins = 0;
var losses = 0;
var guessesLeft = 7;



// FUNCTIONS

function startGame () {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];

    // to debug and test:
    console.log(selectedWord);

}

// in order for the function to work:
startGame ();







// MAIN PROCESS



// var directions = document.getElementById("directionstext");


// document.onkeyup = function(event) {





// var answers = [];

// for (var i = 0; i < randomWords.length; i++) {
//     answers[i] = "_";
// }

// var remainingLetters = randomWords.length; 
// {
// document.getElementById ("answers").innerHTML = answers.join(" ");
// }








