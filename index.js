alert("\nWelcome!!!, to 'Dicee' Game.  \n\n•Hereafter, two Dices will appear infront of you .\n•The number's in the dice is generated randomly by computer only, to play the game you just have to REFRESH the page and random number's will be generated on both the dices and whichever number is Greater, The Player will WIN.\n•To play again - refresh again.\n\n CLICK OK!!!")
function functionName() {
  var rannum1 = "images/dice" + Math.floor(Math.random() * 6 + 1) + ".png";
  var rannum2 = "images/dice" + Math.floor(Math.random() * 6 + 1) + ".png";

  document.querySelector(".dice1").setAttribute("src", rannum1);
  document.querySelector(".dice2").setAttribute("src", rannum2);
  document.getElementById("myButton1").value = "Refresh ME";

  if (rannum1 < rannum2) {
    document.querySelector("h1").innerHTML = "PLAYER TWO WINS! 🚩";
  } else if (rannum1 > rannum2) {
    document.querySelector("h1").innerHTML = "🚩 PLAYER ONE WINS!";
  } else {
    document.querySelector("h1").innerHTML = "DRAW!";
  }
}



