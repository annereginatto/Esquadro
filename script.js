var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

function desenhaEsquadro(xa, ya, xc, yc, color) {
    brush.fillStyle = color;
    brush.beginPath();
    brush.moveTo(xa, ya);
    brush.lineTo(xa, yc);
    brush.lineTo(xc, yc);
    brush.fill();
}

desenhaEsquadro(150, 50, 500, 400, "black");
desenhaEsquadro(200, 175, 375, 350, "white");