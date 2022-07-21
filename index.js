var rannum1 = "images/dice" + Math.floor(Math.random() * 6 + 1) + ".png";
var rannum2 = "images/dice" + Math.floor(Math.random() * 6 + 1) + ".png";

document.querySelector(".dice1").setAttribute("src", rannum1);
document.querySelector(".dice2").setAttribute("src", rannum2);

if (rannum1 < rannum2) {
  document.querySelector("h1").innerHTML = "🚩 PLAYER TWO WINS!";
} else if (rannum1 > rannum2) {
  document.querySelector("h1").innerHTML = "🚩 PLAYER ONE WINS!";
} else {
  document.querySelector("h1").innerHTML = "DRAW!";
}
