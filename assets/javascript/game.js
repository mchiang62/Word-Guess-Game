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

var words = wordList[Math.floor(Math.random() * wordList.length)];

var answers = [];

for (var i = 0; i < words.length; i++) {
    answers[i] = "_";
}



