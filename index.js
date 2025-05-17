function throwDice (){
    var number = Math.floor(Math.random()*6) + 1
    return number
}

var randomNumber1 = throwDice();

var pictureDice = "images/dice" + randomNumber1 + ".png";

var leftDice = document.getElementById("leftDice");

leftDice.setAttribute("src", pictureDice);

function throwDice2 (){
    var number = Math.floor(Math.random()*6) + 1
    return number
}

var randomNumber2 = throwDice2();

var pictureDice2 = "images/dice" + randomNumber2 + ".png";

var rightDice = document.getElementById("rightDice");

rightDice.setAttribute("src", pictureDice2);


if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "🚩 Player 1 Wins"
}
else if(randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 2 Wins 🚩"
}
else {
    document.querySelector('h1').innerHTML = "Draw"
}