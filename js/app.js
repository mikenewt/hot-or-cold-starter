// secret number, guess numbers, hotter/colder, guess counts need to be global variables
// warmer returns 1, colder returns 2, exact guess returns 0
var secretNumber, guessNumber, counter, count = 0;

$(document).ready(function(){

	secretNumber = Number($('#secretNumber').text());
	// guessNumber = Number($('#userGuess').val());

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
	$('#userGuess').val(" ")

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
	var lastGuess = guessNumber;

	if (guessNumber == secretNumber) {
		feedback.text("Correct!");

		// force user to start new game
		$('#userGuess').toggle();
	} else {
		// provide guess feedback
		console.log("guessNumber is: " + guessNumber);
		console.log("secretNumber is: " + secretNumber);
		feedback.text("Incorrect! Try again!");

		// add guess to #guessList and reset input
		$('#guessList').append('<li>' + guessNumber + '</li>');
		$('#userGuess').val(' ');

		// increment count
		count++;
		$('#count').text(count);
		console.log("Count is: " + count);
	}
}

// function checkGuess(guessNumber, secretNumber, counter) {
	
// 	var x;

// 	if (guessNumber === secretNumber) {

// 	}
// }