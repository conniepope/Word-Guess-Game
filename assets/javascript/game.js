

/*  VARIABLES  */
 var wins = 0;
 var losses = 0;
 var numGuessRemain = 10;
 var lettersGuessed = [];
 var currentWord = ["venezuela", "mozambique", "madagascar", "portugal", "australia", "kazakhstan", "cameroon"];
 var keyPress;

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


var gameStart = function () {
/*hide "press any key" text */

/* when a key is pressed, the game starts. */
    document.onkeyup = function (event) {
        gamePlay();
    }
}

/* game loop */

var gamePlay = function () {

    gameinProgress = true;
    /* when i press a key */
    document.onkeyup = function (event) {
        keypress = event.key.toLowerCase();
    
        /* make letters appear in place of underscores if they match the selected word */
        for (var i = 0; i < word.length; i++) {
            if (word[i] === keyPress) {
                keyPress.push = answer[i].toUpperCase();
                numGuessRemain--;
                console.log(word[i] === keyPress) 
            }
        /* if keyPress is NOT a letter in the word, add to lettersGuessed array & numGuessRemain deincrements*/
            else if (word[i] !== keyPress) {
                (lettersGuessed.push + " " + keyPress);
                numGuessRemain--;
                console.log(word[i] !== keyPress) 

            }
        /* if letter already pressed, do not take away guesses & do not add it to the lettersGuessed array   */
            else if (keyPress === letterGuessed) {
                    numGuessRemain + 0;
            }
        };

        /* Determine if win or loss.  */
        if (numGuessRemain === 0 && answer === word) {
            wins++;

        } else if
            (numGuessRemain === 0 && answer !== word) {
            losses++;
            /* show complete word */
            
        }; 
            /* Automatically choose another word to be played. */

        
        console.log(event.key)

    }        

}


/*  CALLS  */

document.onkeyup = function (event) {
    if (gameInProgress = false) {
        gameStart(); 
    } else {
        gamePlay();
    }
}

document.querySelector("#winsText").innerHTML = "Wins: " + wins;
document.querySelector("#lossesText").innerHTML = "Losses: " + losses;
document.querySelector("#numGuessRemainText").innerHTML = "Number of Guesses Remaining: " + numGuessRemain;
document.querySelector("#lettersGuessedText").innerHTML = "Letters Already Guessed: " + lettersGuessed;
document.querySelector("#currentWordText").innerHTML = answer;





