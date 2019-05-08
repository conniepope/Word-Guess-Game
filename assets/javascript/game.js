

/*  VARIABLES  */
 var wins = 0;
 var losses = 0;
 var numGuessRemain = 0;
 var lettersGuessed = " ";
 var currentWord = ["venezuela", "mozambique", "madagascar", "portugal", "australia", "kazakhstan", "cameroon"];
 var answer = [];
 //  var answer = currentWord[i]; ???
 var event;
 var winsText = document.getElementById("winsText");
 var lossesText = document.getElementById("lossesText");
 var currentWordText = document.getElementById("currentWordText");
 var numGuessRemainText = document.getElementById("numGuessRemainText");
 var lettersGuessedText = document.getElementById("lettersGuessedText");

 /* FUNCTIONS */
        
 /* picks random word */
 var word = function () {
     currentWord[Math.floor(Math.random() * currentWord.length)];
 }

/* display numbGuessRemain */
 var display = function () {
   numGuessRemain = word.length;
    }

/* displays answer spaces  -- doesn't work  */
 var spaces = function () {
    for (var i = 0; i < word.length; i++) {
        answer[i] = " _";
    }
 }


/*  MAIN FUNCTIONS  */

/* when a key is pressed, the game starts. Need a function that starts game.  */

var gameStart = function () {
        word();
        display();
        spaces();
}


document.onkeyup = function (event) {
    keyPress = event.key;
}
/* game loop */

    while (numGuessRemain > 0) {
        console.log(answer.join("_"));

            
        /* to make letters appear in place of underscores */

        for (var i = 0; i < word.length; i++) {
            if (word[i] === keyPress) {
                answer[i] = keyPress;
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
        } else {
            losses++;
        }; 
    };
       


/*  CALLS  */
gameStart();

/* coming up in console as "null"  ????*/
winsText.textContent = "Wins: " + wins;    
lossesText.textContent = "Losses: " + losses;
currentWordText.textContent = answer;
numGuessRemainText.textContent = "Number of Guesses Remaining: " + numGuessRemain;
lettersGuessedText.innerHTML = "Letters Already Guessed: " + lettersGuessed.toUpperCase();




/* OTHER IDEAS */

/*   


innerHTML instead of textContent ???

auto-select a word from the currentWord array, then run the function that applies. 

object with method????
    if (currentWord[i] === venezuela) {
        venezuela.runVenezuela();
    

*/
