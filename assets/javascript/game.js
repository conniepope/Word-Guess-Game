

/*  VARIABLES  */
 var wins = 0;
 var losses = 0;
 var numGuessRemain = 10;
 var lettersGuessed = " ";
 var currentWord = ["venezuela", "mozambique", "madagascar", "portugal", "australia", "kazakhstan", "cameroon"];
 var keyPress;

 var correctCharacters;
 var gameInProgress = true;

 /* FUNCTIONS */
        
 /* picks random word */
 var word = currentWord[Math.floor(Math.random() * currentWord.length)].toUpperCase();
 console.log(word)


/* displays answer spaces */
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

 
/*   FUNCTIONS  */

/* when a key is pressed, the game starts. */

var gameStart = function () {

}

/* game loop */

document.onkeyup = function (event) {
    if (gameInProgress = false) {
        gameStart(); /*hide "press any key" text */
    } else {
        gamePlay();
    }
}

var gamePlay = function () {

    document.onkeyup = function (event) {
        keypress = event.key;
    
            /* to make letters appear in place of underscores */
            for (var i = 0; i < word.length; i++) {
                if (word[i] === keyPress) {
                    correctCharacters.push(word[i]);
                    numGuessRemain--;
                }
            /* if not a letter in the word */
                else if (word[i] !== keyPress) {
                    (lettersGuessed.push + " " + keyPress);
                    numGuessRemain--;
                }
            /* if letter already pressed, do not take away guesses    */
                else if (keyPress === letterGuessed) {
                        numGuessRemain + 0;
                }
            }

            /* Determine if win or loss. Automatically choose another word to be played. */
            if (numGuessRemain === 0 && answer === word) {
                wins++;

            } else if
                (numGuessRemain === 0 && answer !== word) {
                losses++;

            }; 
        }
}


/*  CALLS  */

    /* game is not started, then start. if game is started... */



document.querySelector("#winsText").innerHTML = "Wins: " + wins;
document.querySelector("#lossesText").innerHTML = "Losses: " + losses;
document.querySelector("#numGuessRemainText").innerHTML = "Number of Guesses Remaining: " + numGuessRemain;
document.querySelector("#lettersGuessedText").innerHTML = "Letters Already Guessed: " + lettersGuessed.toUpperCase();
document.querySelector("#currentWordText").innerHTML = answer;





