// function refresh() {
//     document.location.reload();
// }

function randomNo() {
    return Math.floor(Math.random() * 6) + 1;
}

var d1 = randomNo();
var d2 = randomNo();

const loc = "images/dice";
document.querySelector(".img1").setAttribute("src", loc + d1 + ".png");
document.querySelector(".img2").setAttribute("src", loc + d2 + ".png");


if (d1 > d2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if (d1 < d2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

