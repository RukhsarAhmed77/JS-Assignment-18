var forward1 = 0;
var forward2 = 0;
var character1IdleSrc = "dio-standing.gif";
var character2IdleSrc = "Rugal.jpeg";
var character1WalkSrc = "dio-walk.gif";
var character2WalkSrc = "rugal-walk.gif";

var character1State = "idle";
var character2State = "idle";

function moveCharacters(event) {
    var character1 = document.getElementById("player1");
    var character2 = document.getElementById("player2");

    switch (event.keyCode) {
        case 65:
            forward1 -= 10;
            character1.style.left = forward1 + "px";
            if (character1State !== "walking") {
                character1.src = character1WalkSrc;
                character1State = "walking";
            }
            break;
        case 68:
            forward1 += 10;
            character1.style.left = forward1 + "px";
            if (character1State !== "walking") {
                character1.src = character1WalkSrc;
                character1State = "walking";
            }
            break;
    }

    switch (event.keyCode) {
        case 37: // Left Arrow key
            forward2 += 10;
            character2.style.right = forward2 + "px";
            if (character2State !== "walking") {
                character2.src = character2WalkSrc;
                character2State = "walking";
            }
            break;
        case 39: // Right Arrow key
            forward2 -= 10;
            character2.style.right = forward2 + "px";
            if (character2State !== "walking") {
                character2.src = character2WalkSrc;
                character2State = "walking";
            }
            break;
    }
}

function stopCharacters(event) {
    var character1 = document.getElementById("player1");
    var character2 = document.getElementById("player2");

    switch (event.keyCode) {
        case 65: // A key
        case 68: // D key
            if (character1State !== "idle") {
                character1.src = character1IdleSrc;
                character1State = "idle";
            }
            break;
        case 37: // Left Arrow key
        case 39: // Right Arrow key
            if (character2State !== "idle") {
                character2.src = character2IdleSrc;
                character2State = "idle";
            }
            break;
    }
}

window.onkeydown = moveCharacters;
window.onkeyup = stopCharacters;
