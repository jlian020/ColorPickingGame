var squares = document.querySelectorAll(".squares");
var rgbDisplay = document.querySelector("#rgbDisplay");
var title = document.querySelector("#title");
var resetBoardButton = document.querySelector("#newBoard");
var barMessage = document.querySelector("#message");

var gameOver = false;
var chosenColor = "";

newColors();
chooseColor();

resetBoardButton.addEventListener("click", function() {
	newColors();
	chooseColor();
	title.style.backgroundColor = "black";
	gameOver = false;
	barMessage.textContent = "";
});

// Make squares dissapear if it is not the correct one
for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		var pickedColor = this.style.backgroundColor;

		if(pickedColor === chosenColor) {
			title.style.backgroundColor = chosenColor;
			gameOver = true;

			console.log("WINNER");
			barMessage.textContent = "WINNER!";
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

function chooseColor() {
	chosenColor = squares[Math.floor(Math.random() * squares.length)].style.backgroundColor;
	rgbDisplay.textContent = chosenColor;
}

function newColors() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
	}
}
