function ai (board) {
	let availSpots = board.filter(s => s.innerHTML !== "o" && s.innerHTML !== "x");
	let random = randomInteger(0, availSpots.length);

	availSpots[random].innerHTML = 'o'; 
}

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }