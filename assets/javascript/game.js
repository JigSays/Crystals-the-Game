//sets up the inital values of the variables for the game
var wins = 0;
var losses = 0;

var crystalOneVal;
var crystalTwoVal;
var crystalThreeVal;
var crystalFourVal;

var playerScore = 0;
var targetScore;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
 }
 
 var result = getRndInteger(19, 120);
 console.log(result);

//creates an enviroment for starting/re-starting the game
play = function(){

targetScore = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

crystalOneVal = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

crystalTwoVal = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

crystalThreeVal = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

crystalFourVal = function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

targetScore(19, 120);
crystalOneVal(1, 13);
crystalTwoVal(1, 13);
crystalThreeVal(1, 13);
crystalFourVal(1, 13);
playerScore = 0;
console.log(targetScore);
}

//sets eventlisteners
$("#c1").click(function(){
    $(crystalOneVal) += playerScore;
});

$("#c2").click(function(){
    $(crystalTwoVal) += playerScore;
});

$("#c3").click(function(){
    $(crystalThreeVal) += playerScore;
});

$("#c4").click(function(){
    $(crystalFourVal) += playerScore;
});

//Displays to dom
$("#winBox").innerText += wins;
$("#lossBox").innerText += losses;
$("#tagetScore").innerText = targetScore;
$("#yourBox").innerText = playerScore;

//advances scoreboard for win/loss and resets the game.
if (playerScore === targetScore) {
    wins +=1;
    play();
}

if (playerScore > targetScore){
    losses +=1;
    play();
}


