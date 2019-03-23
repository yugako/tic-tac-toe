function checkChests(elems,i) {
    return elems[i].innerHTML === `x`;
}

function checkBubbles(elems, i) {
    return elems[i].innerHTML === `o`;
}

function winBubbles(elems) {
    return checkBubbles(elems, 0) && checkBubbles(elems, 1) && checkBubbles(elems, 2) ||
        checkBubbles(elems, 3) && checkBubbles(elems, 4) && checkBubbles(elems, 5) ||
        checkBubbles(elems, 6) && checkBubbles(elems, 7) && checkBubbles(elems, 8) ||
        checkBubbles(elems, 0) && checkBubbles(elems, 3) && checkBubbles(elems, 6) ||
        checkBubbles(elems, 1) && checkBubbles(elems, 4) && checkBubbles(elems, 7) ||
        checkBubbles(elems, 2) && checkBubbles(elems, 5) && checkBubbles(elems, 8) ||
        checkBubbles(elems, 0) && checkBubbles(elems, 4) && checkBubbles(elems, 8) ||
        checkBubbles(elems, 2) && checkBubbles(elems, 4) && checkBubbles(elems, 6);
}

function winChests(elems) {
    return (
        (checkChests(elems, 0) && checkChests(elems, 1) && checkChests(elems, 2)) ||
        (checkChests(elems, 3) && checkChests(elems, 4) && checkChests(elems, 5)) ||
        (checkChests(elems, 6) && checkChests(elems, 7) && checkChests(elems, 8)) ||
        (checkChests(elems, 0) && checkChests(elems, 3) && checkChests(elems, 6)) ||
        (checkChests(elems, 1) && checkChests(elems, 4) && checkChests(elems, 7)) ||
        (checkChests(elems, 2) && checkChests(elems, 5) && checkChests(elems, 8)) ||
        (checkChests(elems, 0) && checkChests(elems, 4) && checkChests(elems, 8)) ||
        (checkChests(elems, 2) && checkChests(elems, 4) && checkChests(elems, 6))
    );
}


function draw(elems) {
    return elems.every(item => item.innerHTML != "");
}
function setCross(e) {
    e.target.innerHTML = "x";
    e.target.classList.add("cross");
}
function setBubbles(e) {
    e.target.innerHTML = "o";
    e.target.classList.add("circle");
}
function handleWinner(messageText, varText, elems, state) {
  state = true;
  varText = messageText;

  setTimeout(() => {
    cleanContent(elems, varText, state);
  }, 2000);
}

function cleanContent(elems, message, state, crossCount = 0, circleCount = 0) {
  crossCount = circleCount = 0;
  message = "";
  state = false;
  elems.forEach(item => {
    item.innerHTML = "";
    item.classList.remove("cross", "circle");
  });
}
export {
    winBubbles,
    winChests,
    draw,
    setCross,
    setBubbles,
    handleWinner,
    cleanContent
}