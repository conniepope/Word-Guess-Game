/* VARIABLES */


/*  VARIABLES  */
var wins = 0;
var losses = 0;
var numGuessRemain = 10;
var lettersGuessed = [];
var incorrectLetters = [];
var currentWord = ["venezuela", "mozambique", "madagascar", "portugal", "australia", "kazakhstan", "cameroon"];
var answer = [];
var keyPress;
 /* picks random word */
 var word = currentWord[Math.floor(Math.random() * currentWord.length)].toUpperCase();
console.log(word)

/* displays answer spaces (without commas) */
var answer = [];
for (var i = 0; i < word.length; i++) {
    var x = word.charAt(i);

    if(x === " " || x === "/'")
    {
      answer += x;
    }
    else {
      answer += "_ ";
    }   
};
 console.log(answer)

 /* Start of game */
var gameStart = function () {
    /* When any key is pressed: */
    document.onkeyup = function (event) {
        keyPress = event.key;
        console.log(keyPress);
    //  "Press any key to get started" hides / disappears.
        document.querySelector("#getStarted").innerHTML = " ";
    //  Wins = 0
        document.querySelector("#winsText").innerHTML = "Wins: " + wins;
    //  Losses = 0
        document.querySelector("#lossesText").innerHTML = "Losses: " + losses;
    //  A random word is diplayed as underscores. (The same # as there are letters in that word.)
        document.querySelector("#currentWordText").innerHTML = answer;
    //  Number of Guesses Remaining = 0
        document.querySelector("#numGuessRemainText").innerHTML = "Number of Guesses Remaining: " + numGuessRemain;
    }
}
 /* Game in Progress */
var gamePlay = function () {}
//  Once an (alpha) key is pressed
    document.onkeyup = function (event) {
        keyPress = event.key;
        console.log(keyPress)
//  determine if that letter is in the chosen word
    for (var j = 0; j < word.length; j++) {
    if (word[j] === keyPress) {
            // indexOf(word[i]);
            console.log("i work")
        }
    }
            
//  if it is, replace the underscore with the letter.

//  If it does not match, then the letter gets listed in the Letters Already Guessed array,

//  and Number of Guesses deincrements */
 numGuessRemain--;
/*  Repeat this process until # of guesses = 0

(which is a loss)

or the whole word is displayed (no underscores remaining)

(a win). */
};

// Once a win || loss increments, start over by

// selecting a new random word

// replacing the letters with underscores

// Number of Guesses Remaining = 0 */
// numGuessRemain = 10;

// clear letters guessed array */
lettersGuessed = [];

