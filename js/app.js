// secret number, guess numbers, hotter/colder, guess counts need to be global variables
// warmer returns 1, colder returns 2, exact guess returns 0
var secretNumber, guessNumber, guessList, count = 0;

$(document).ready(function(){

	secretNumber = Number($('#secretNumber').text());
	guessList = [];

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
	$('#count').text("0");

	// clear guess input
	$('#userGuess').val("")

	// restore #feedback to default
	$('#feedback').text("Make your Guess!");

	// reset CSS props
	$('#userGuess').css('display', 'block');

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
	guessNumber = $('#userGuess').val();

	// lastGuess is for storing the most recent guess for comparison with guessNumber
	var lastGuess = Math.abs((Number($('#guessList li').last().text())) - secretNumber);
	var currentGuess = Math.abs(Number(guessNumber - secretNumber));

	if (guessNumber == secretNumber) {
		feedback.text("Correct!");

		// force user to start new game
		$('#userGuess').toggle();
	} else {
		// provide guess feedback
		console.log("guessNumber is: " + guessNumber);
		console.log("secretNumber is: " + secretNumber);

		if ( count == 0) {
			if ( guessNumber < secretNumber) {
				feedback.text("Too low!");
			} else {
				feedback.text("Too high!");
			}
		} else {
			// "warmer" or "cooler" code goes here
			if (lastGuess > currentGuess) {
				feedback.text("Getting warmer!");
			} else {
				feedback.text("Getting cooler!");
			}
		}

		// add guess to #guessList and reset input
		$('#guessList').append('<li>' + guessNumber + '</li>');
		guessList.push(guessNumber);
		$('#userGuess').val(' ');

		// increment count
		count++;
		$('#count').text(count);
	}
}

function checkGuess() {
	if (guessNumber === undefined || guess === null || guess.trim().length === 0 || 
		!isInteger(guessNumber) || guessNumber < 1 || guessNumber > 100) {
		alert("Please enter an integer between 1 and 100.");
		return false;
	}

	if ($.inArray(guessNumber, guessList) !== -1) {
		alert("You have already guessed " + guessNumber + "!");
		return false;
	}

	return true;
}