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
var anyKey;
var gameStart;
 /* picks random word */
var word = currentWord[Math.floor(Math.random() * currentWord.length)].toUpperCase();
console.log(word)
// var lettersInWord = word.split(" ");
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
        anyKey = event.key;
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
// gameStart();

 /* Game in Progress */
var gamePlay = function () {
//  Once an (alpha) key is pressed
    document.onkeyup = function (event) {
        keyPress = event.key;
        console.log(keyPress);
//  determine if that letter is in the chosen word   ???????
// var compareLetters = function (keyPress){
//     if (word.indexOf(keyPress) > -1){
        for (var i = 0; i < word.length; i++) {
                if (keyPress = word[i]) {
                    console.log("i work")
                }
        }   


    }
}   
gamePlay();
    // function checkGuess(letter) {
    //     //if letter is not in guessedLetters array then push the letter to the array
    //     if (guessedLetters.indexOf(letter) === -1) {
    //         guessedLetters.push(letter);
    //         //if the letter isn't in the answer word then -1 the numGuessesRemaining
    //         if (ansWord.indexOf(letter) === -1) {
    //             numGuessesRemaining--;
    //             //if numGuessesRemaining is 3 or less then change the color
    //             if (numGuessesRemaining <=3) {
    //                 document.getElementById("numGuesses").style.color = "#e12d2e";
    //             }
    //             //if letter is in answer then replace the positioned "_" with the letter
    //         } else { 
    //             for (var i = 0; i < ansWord.length; i++) {
    //                 if (letter === ansWord[i]) {
    //                     ansWordArr[i] = letter;
    //                 } 
    //             }                
    //         }
    //     }
    
    // }; 
 
//  if it is, replace the underscore with the letter.

//  If it does not match, then the letter gets listed in the Letters Already Guessed array,

//  and Number of Guesses deincrements */
 numGuessRemain--;
/*  Repeat this process until # of guesses = 0

(which is a loss)

or the whole word is displayed (no underscores remaining)

(a win). */
    

// Once a win || loss increments, start over by

// selecting a new random word

// replacing the letters with underscores

// Number of Guesses Remaining = 0 */
// numGuessRemain = 10;

// clear letters guessed array */
lettersGuessed = [];

