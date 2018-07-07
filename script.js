var squares = document.querySelectorAll(".squares");
var rgbDisplay = document.querySelector("#rgbDisplay");
var title = document.querySelector("#title");

var gameOver = false;
// Gives out random colors for the squares
for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
}

// Chooses a square as the one to guess
var chosenColor = squares[Math.floor(Math.random() * squares.length)].style.backgroundColor;
rgbDisplay.textContent = chosenColor;

// Make squares dissapear if it is not the correct one
for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		var pickedColor = this.style.backgroundColor;

		if(pickedColor === chosenColor) {
			title.style.backgroundColor = chosenColor;
			gameOver = true;

			changeAll(chosenColor);
		}
		else {
			if(!gameOver) {
				this.style.backgroundColor = "black";
			}
		}

	});
}

function changeAll(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}