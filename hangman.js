var fs = require("fs");
var inquirer = require("inquirer");
var prompt = require("prompt");

//=======================================================================================================================================================
//LOOP LOGIC

//WORD OBJECT {
//1...n: Letters
//exposeLetter(letter)
//isExposed()

function Word(value) {
    this.letters = [];
    for (var l = 0; l < value.length; l++) {
        this.letters.push(new Letter(value[l]));
    }

    //initialize letters array

    this.exposeLetter = function() {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].exposeIfMatches(letter);
        }
    };

    this.isExposed = function() {
        var result = true;
        for (var i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].exposed) {
                return false;
            }
        }
        return true;
    }
}

//LETTER OBJECT
//character
//exposeIfMatches(letter)

function Letter(character) {
    this.exposed = false;
    this.character = character;

    this.exposeIfMatches = function(letter) {
        if (this.character === letter) {
            this.exposed = true;
        }
    }
}



//New Game//
//Need to set a number of guesses remaining for the user to 10
//Randomly pick a word from an array of choices


//Confirm new game
//Ask if they want to play again
//If yes:
//start a new game
//Else:
//Exit game

//Guess Letter//
//If guesses > 0:
//Ask the user to guess a letter
//Expose letter in the current random word if the letter guessed is being used
//If user wins (word is completely exposed):
//alert user of victory
//Confirm New Game
//Else (if word not completely exposed)
//Decrement the number of guesses by 1
//Guess another letter

//Else (if guesses are <= 0):
//"Do you want to play again? (Y/N)"
//if yes:
//New game
//else:
//do nothing (i.e. quit)



//======================================================================================================================================================

var currentWord;
var numGuesses;
var wordChoices = ["Apple", "Banana"];

function guessLetter() {
    if (numGuesses > 0) {
        inquirer.prompt([{
                "message": "Guess A Letter:",
                "name": "letter"
            }])
            .then(function(userInput) {
                currentWord.exposeLetter(userInput.letter);
                if (currentWord.isExposed()) {
                    //user won
                    //confirm next game
                }
                else {
                    numGuesses--;
                    guessLetter(); //asynchronous uses recursion

                }

            })
        //ask user to guess a letter

    }
    else {
        //ask the user if they want to play again
        //if yes start new game

    }
}

function newGame() {
    numGuesses = 10;
    currentWord = new Word(wordChoices[0]);
    //randomly select a word from the array above
    guessLetter();
}

newGame();

// MVP: Absorb how Jeff worked through what the word object and letter objects should do. deciding to put the exposed methods.
