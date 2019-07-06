var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("the computers guess is " + computerGuess)
var wins = 0;   
var losses = 0;
var remainGuesses = 5;

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
winsText.innerHTML="wins"+" "+ wins


document.onkeyup = function(event) {
    alert(event.key);
    console.log (event.key);
     var userChoice = (event.key);
  
     


    if (event.key === computerGuess){
        console.log ("wins!");
        console.log (remainGuesses + "guesses remaining");
    
        
    }  else { 
        console.log (remainGuesses + "guesses remaining");


    }
    
}