var directions = document.getElementById("directionstext");



document.onkeyup = function(event) {

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

var randomWords = wordList[Math.floor(Math.random() * wordList.length)];

var answers = [];

for (var i = 0; i < randomWords.length; i++) {
    answers[i] = "_";
}

var remainingLetters = randomWords.length; {
    document.getElementById ("answers").innerHTML = answers.join(" ");
}








}

