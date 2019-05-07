

/*  VARIABLES  */
 var wins = 0;
 var losses = 0;
 var numGuessRemain = 0;
 var currentWord = ["venezuela", "mozambique", "madagascar", "portugal", "australia", "kazakhstan", "cameroon"];

 var winsText = document.getElementById("winsText");
 var lossesText = document.getElementById("lossesText");

 /* currentWordText needs connected in the code */
 var currentWordText = document.getElementById("currentWordText");
 var numGuessRemainText = document.getElementById("numGuessRemainText");
 var lettersGuessedText = document.getElementById("lettersGuessedText");


/*  MAIN FUNCTIONS  */

document.onkeyup = function (event) {
    var keyPress = event.key;
               
    /* picks random word */
    var word = currentWord[Math.floor(Math.random() * currentWord.length)]; 

    /* answer array - setup */
    var answer = [];
    for (var i = 0; i < word.length; i++) {
        answer[i] = "_";
    }
    var numGuessRemain = word.length;

/* game loop */

    while (numGuessRemain > 0) {
            
        /* to make letters appear in place of underscores */

        for (var i = 0; i < word.length; i++) {
            if (word[i] === keyPress) {
                answer[i] = keyPress;
                numGuessRemain--;
            }
        /* if not a letter in the word */
            else if (word[i] !== keyPress) {
                (lettersGuessed + " "  + keyPress);
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
        } else {
            losses++;
        }; 
    }
}       


/*  CALLS  */


/* coming up in console as "null"  ????*/
winsText.innerHTML = "Wins: " + wins;    
lossesText.textContent = "Losses: " + losses;
currentWordText.textContent = answer.join(" ");
numGuessRemainText.textContent = "Number of Guesses Remaining: " + numGuessRemain;
lettersGuessedText.textContent = "Letters Already Guessed: " + lettersGuessed.toUpperCase;




/* OTHER IDEAS */

/*   


innerHTML instead of textContent ???

auto-select a word from the currentWord array, then run the function that applies. 

object with method????
    if (currentWord[i] === venezuela) {
        venezuela.runVenezuela();
    

*/






