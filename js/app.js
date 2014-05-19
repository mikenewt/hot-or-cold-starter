
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
  	$(".new").click(newGame);

  	/*--- Guessing ---*/
  	$('#guessButton').on('click', function(e) {
  		e.preventDefault();
		var guess = Number($(this).text());
		console.log(guess);

		var secretNumber = Number($('#secretNumber').text());
		console.log(secretNumber);
  	});

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
	var secretNumber = Math.floor((Math.random() * 100) + 1);
	$('<li id="secretNumber" style="display:none">' + secretNumber + '</li>').appendTo('#guessList');
}

function makeGuess() {

	// store guess in variable
	var guess = Number($(this).val());
	console.log(guess);

	// retrieve secret number
	var secretNumber = Number($('secretNumber').text());
	console.log(secretNumber);
}