// secret number, guess numbers, hotter/colder, guess counts need to be global variables
// warmer returns 1, colder returns 2, exact guess returns 0
var secretNumber = Number($('#secretNumber').text());
var guessNumber = Number($('#userGuess').val());
var counter = 0

$(document).ready(function(){

	newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start new game ---*/
  	$("#newGame").click(newGame);

  	/*--- Guessing ---*/
	$("#guessButton").click(makeGuess);

});


function newGame() {	

	// erase previous guesses
	$('#guessList').empty()

	// set guess count to 0
	$('#count').val(0);

	// generate secret number
	numberGenerator();
}

function numberGenerator() {

	secretNumber = Math.floor((Math.random() * 100) + 1);
	$('<li id="secretNumber" style="display:none">' + secretNumber + '</li>').appendTo('#guessList');
	return secretNumber;
}

function makeGuess(event) {

	event.preventDefault();

	var feedback = $('#feedback');

	if (count == 0) {
		if (guessNumber !== secretNumber) {
			feedback.text("Incorrect! Try again!");
			count = count++;
			return count;
		}
	} 


}

// function checkGuess(guessNumber, secretNumber, counter) {
	
// 	var x;

// 	if (guessNumber === secretNumber) {

// 	}
// }