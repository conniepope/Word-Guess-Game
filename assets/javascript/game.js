
    
 /* 
Save any of your game's functions as methods, and call them underneath your object declaration using
EVENT LISTENERS.

Don't forget to place your global variables and functions above your object. */



/*  VARIABLES  */
 var wins = 0
 var losses = 0
 var currentWordIndex = 0
 var currentWord = ["venezuela", "mozambique", "madagascar"]
 var numGuessRemain
 var lettersGuessed

 var winsText = document.getElementById("winsText");
 var lossesText = document.getElementById("lossesText");
 var currentWordText = document.getElementById("currentWordText");
 var numGuessRemainText = document.getElementById("numGuessRemainText");
 var lettersGuessedText = document.getElementById("lettersGuessedText");



/*  OBJECTS (& methods)  */

var venezuela = {
    letters: [v, e, n, e, z, u, e, l, a],
    guesses: 9,
    runVenezuela: function() {

        currentWordText = "_ _ _ _ _ _ _ _ _";

        /* how to replace underscores with proper letter when pushed?. Push to an index #?    */
        
        for (var i = 0; i < letters.length; i++) {
            if (numGuessRemain === 0) {
                losses++
            };

            if (keyPress  === v || e || n || z ||u || l || a) {
            return venezuela.findIndex
            }

            if (keyPress.indexOf(venezuela) === 0) {
            currentWordText.innerHTML = "V"
            } else if 
                (keyPress.indexOf(venezuela) === 1 && 3 && 6)  {
            currentWordText.innerHTML = "E"

            } else {
            /* write the letter in letters guessed:   */
            (lettersGuessed.push = keyPress) && numGuessRemain--
            }
        }
    }
/* How to end word round and start new one? */


};
var mozambique = {
    letters: [m, o, z, a, m, b, i, q, u, e],
    guesses: 10,
};


/*  MAIN FUNCTIONS  */

/* auto-select a word from the currentWord array, then run the function that applies. */
for (var i = 0; i < currentWord.length; i++) {
    currentWord[i]
}
/* make the # of spaces = the # of letters in the word, and # of guesses remaining to be set as # of guesses set for that word. */    
 
if (currentWord[i] === venezuela) {
    venezuela.runVenezuela();
    /* write _ _ _ _ _ _ _ _ _          .toUpperCase    */
}

/*   Use key events to listen for the letters that your players will type.  */
document.onkeyup = function (event) {
    keyPress = event.key;
}

 /* Determine if win or loss */

/* After the user wins/loses, the game should automatically choose another word and make the user play it. 


/*  CALLS  */


winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
currentWordText.textContent = "";
numGuessRemainText.textContent = "Number of Guesses Remaining: " + i--;
lettersGuessedText.textContent = "Letters Already Guessed: " + lettersGuessed;


/*   words for game:
VENEZUELA
MOZAMBIQUE
MADAGASCAR
PORTUGAL
AUSTRALIA
KAZAKHSTAN
CAMEROON   */

