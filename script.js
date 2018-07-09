var squares = document.querySelectorAll(".squares");
var rgbDisplay = document.querySelector("#rgbDisplay");
var title = document.querySelector("#title");
var resetBoardButton = document.querySelector("#newBoard");
var barMessage = document.querySelector("#message");
var easybutton = document.querySelector("#easybutton");
var hardbutton = document.querySelector("#hardbutton");

var gameOver = false;
var numTiles = 6;
var chosenColor = "";

newColors(6);
chooseColor(6);

resetBoardButton.addEventListener("click", function() {
	reset();
});

easybutton.addEventListener("click", function() {
	easybutton.classList.add("active");
	hardbutton.classList.remove("active");

	numTiles = 3;

	reset();

	squares[3].style.display = "none";
	squares[4].style.display = "none";
	squares[5].style.display = "none";

});

hardbutton.addEventListener("click", function() {
	easybutton.classList.remove("active");
	hardbutton.classList.add("active");

	numTiles = 6;

	reset();

	squares[3].style.display = "initial";
	squares[4].style.display = "initial";
	squares[5].style.display = "initial";
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

function chooseColor(num) {
	chosenColor = squares[Math.floor(Math.random() * num)].style.backgroundColor;
	rgbDisplay.textContent = chosenColor;
}

function newColors(num) {
	for(var i = 0; i < num; i++) {
		squares[i].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
	}
}

function reset() {
	barMessage.textContent = "";
	title.style.backgroundColor = "black";
	gameOver = false;
	newColors(numTiles);
	chooseColor(numTiles);
}

console.log(squares.length);
