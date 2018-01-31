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
//creates an enviroment for starting/re-starting the game
function play (){
    playerScore = 0;
    var targetScore = getRndInteger(19, 120);
    var crystalOneVal = getRndInteger(1, 13);
    var crystalTwoVal = getRndInteger(1, 13);
    var crystalThreeVal = getRndInteger(1, 13);
    var crystalFourVal = getRndInteger(1, 13);
    console.log("target", targetScore);
    console.log("crystal1:", crystalOneVal);
    console.log("crystal2:", crystalTwoVal);
    console.log("crystal3:", crystalThreeVal);
    console.log("crystal4:", crystalFourVal);
}

play();

//sets eventlisteners
var c1 = $("#c1");
var c2 = $("#c2");
var c3 = $("#c3");
var c4 = $("#c4");

c1.click(addPts);
    function addPts() {
       $(crystalOneVal) += playerScore; 
    }
console.log("player score:", playerScore);
$("#c1").click(){
    $(crystalOneVal) += playerScore;
    render();
});

$("#c2").click(addPts) {
    $(crystalTwoVal) += playerScore;
    rendr();
}

$("#c3").click(function(){
    $(crystalThreeVal) += playerScore;
    render();
});

$("#c4").click(function(){
    $(crystalFourVal) += playerScore;
    render();
});

//Displays to dom
function render(){
    var newP = $("#scoreBox");
    winBox = $("<p>").text("Wins: " + wins);
    winBox.append(newP);
    $("#lossBox").html(losses);
    $("#tagetScore").text(targetScore);
    $("#yourBox").text(" " + playerScore);
}
render();

//advances scoreboard for win/loss and resets the game.
if (playerScore === targetScore) {
    wins++;
    render();
    then.play();
}

if (playerScore > targetScore) {
    losses++;
    render();
    then.play();
}


