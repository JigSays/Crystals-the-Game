//sets up the inital values of the variables for the game
var wins = 0;
var losses = 0;

var crystalOneVal;
var crystalTwoVal;
var crystalThreeVal;
var crystalFourVal;

var playerScore = 0;
var targetScore;



//creates an enviroment for starting/re-starting the game
function play (){
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    playerScore = 0;
    targetScore = getRndInteger(19, 120);
    crystalOneVal = getRndInteger(1, 13);
    crystalTwoVal = getRndInteger(1, 13);
    crystalThreeVal = getRndInteger(1, 13);
    crystalFourVal = getRndInteger(1, 13);
    console.log("target", targetScore);
    console.log("crystal1:", crystalOneVal);
    console.log("crystal2:", crystalTwoVal);
    console.log("crystal3:", crystalThreeVal);
    console.log("crystal4:", crystalFourVal);
}

play();

$("#c1").click(function() {
    playerScore += crystalOneVal;
    render();
})

$("#c2").click(function() {
    playerScore += parseInt(crystalTwoVal);
    render();
})

$("#c3").click(function() {
    playerScore += parseInt(crystalThreeVal);
    render();
})

$("#c4").click(function() {
    playerScore += parseInt(crystalFourVal);
    render();
})

console.log(playerScore);

//Displays to dom
function render(){
    $("#winBox").text("Wins: " + wins);
    $("#lossBox").text("Losses: " + losses);
    $("#targetScore").text("Target Score: " + targetScore);
    $("#yourBox").text(" " + playerScore);
//advances scoreboard for win/loss and resets the game.
    if (playerScore === targetScore) {
        wins++;
        alert("You won!!!!")
        play();
    }
    else if (playerScore > targetScore) {
        losses++;
        alert("You lost!!!!")
        play();
    }
}
render();





