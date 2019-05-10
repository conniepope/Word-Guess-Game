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
    // clear letters guessed array */
    lettersGuessed = [];   
    //  Number of Guesses Remaining = 10 */
    numGuessRemain = 10; 
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
gameStart();

 /* Game in Progress */

var gamePlay = function () {
//  Once an (alpha) key is pressed
    document.onkeyup = function (event) {
        keyPress = event.key;
//  determine if that letter is in the chosen word   ??????? FROM HERE ON DOWN - CODE DOES NOT WORK PROPERLY.
        if (word.indexOf(keyPress) != -1) {
            for (var i = 0; i < word.length; i++) {
                if (keyPress === word[i]) {  
    //  if it is, replace the underscore with the letter.
                        answer[i] = keyPress;
                        document.querySelector("#currentWordText").innerHTML = answer.join("");
    //  If it does not match, then the letter gets listed in the Letters Already Guessed array,
                } else if (keyPress !== word[i]){
                    incorrectLetters.push(keyPress)
                    document.querySelector("#incorrectLettersText").innerHTML = incorrectLetters.join("");
                    //  and Number of Guesses deincrements */
                    numGuessRemain--;
                    console.log(lettersGuessed) 
                }
/* if letter already pressed, do not take away guesses & do not add it to the lettersGuessed array   */
                 else if (keyPress === letterGuessed) {
                    numGuessRemain + 0;
                }
            }
        }   
    }
}   
gamePlay();

 
/*  Repeat this process until # of guesses = 0

(which is a loss)

or the whole word is displayed (no underscores remaining)

(a win). */

        /* Determine if win or loss.  */
        if (numGuessRemain === 0 && answer === word) {
            wins++;

        } else if
            (numGuessRemain === 0 && answer !== word) {
            losses++;
/* show complete word */
    

// Once a win || loss increments, start over 
if (wins++ || losses++) {
    gameStart();
}





