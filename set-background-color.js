
var colors = ["#080808", "white"];
var colorIndex = 0;

function changeColor() {
var col = document.getElementById("body");


if( colorIndex >= colors.length ) {
    colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    colorIndex ++;
}
