
    
 /* 
Save any of your game's functions as methods, and call them underneath your object declaration using
EVENT LISTENERS.

Don't forget to place your global variables and functions above your object. */



/*  VARIABLES  */
 var keyPress
 var wins = 0
 var losses = 0
 var currentWord = ["venezuela", "mozambique", "madagascar", "portugal", "australia", "kazakhstan", "cameroon"]
 var numGuessRemain
 var lettersGuessed
 var word = currentWord[Math.floor(Math.random() * currentWord.length)];




 var winsText = document.getElementById("winsText");
 var lossesText = document.getElementById("lossesText");
 var currentWordText = document.getElementById("currentWordText");
 var numGuessRemainText = document.getElementById("numGuessRemainText");
 var lettersGuessedText = document.getElementById("lettersGuessedText");



/*  MAIN FUNCTIONS  */

/*   Use key events to listen for the letters that your players will type.  */
document.onkeyup = function (event) {
    keyPress = event.key;
}        

var answer = [];
for (var i = 0; i < currentWord.length; i++) {
     answer[i] = "_";
    
    if (numGuessRemain === 0) {
        losses++;
    }; 

    while (numGuessRemain > 0) {
        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === keyPress && !"_") {
                answer[i] = keyPress;
                numGuessRemain--;
            }
        }
    }
}

/* How to end word round and start new one? */



/* auto-select a word from the currentWord array, then run the function that applies. */


 
if (currentWord[i] === venezuela) {
    venezuela.runVenezuela();
    /* write _ _ _ _ _ _ _ _ _          .toUpperCase    */
}

 /* Determine if win or loss */

/* After the user wins/loses, the game should automatically choose another word and make the user play it. 


/*  CALLS  */

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
currentWordText.textContent = "";
numGuessRemainText.textContent = "Number of Guesses Remaining: " + i--;
lettersGuessedText.textContent = "Letters Already Guessed: " + lettersGuessed;



