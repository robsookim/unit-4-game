var targetNumber = "";
for (var i = 0; i < 1; i++) {
    targetNumber = Math.floor(Math.random() * 76) + 11;
}

$("#targetNumber").text(targetNumber);

var totalCounter = 0;

var winCounter = 0;
var lossCounter = 0; 

var numberCrystals = [];
var pinkNumber = "";
var blueNumber = "";
var purpleNumber = "";
var greenNumber = "";

while (numberCrystals.length < 4) {

    var random = Math.floor(Math.random() * 20) + 1;

console.log(random);

    if (numberCrystals.indexOf(random) === -1 ) {
        numberCrystals.push(random);
    } 
    
    else {
        continue; 
    }

}

pinkNumber= numberCrystals[0];
blueNumber = numberCrystals[1];
purpleNumber = numberCrystals[2];
greenNumber = numberCrystals[3]; 

$("#pinkCrystal").attr("data", pinkNumber);
$("#blueCrystal").attr("data", blueNumber);
$("#purpleCrystal").attr("data", purpleNumber);
$("#greenCrystal").attr("data", greenNumber);

$(".crystalPics").on("click", function() {
    var crystalValue = ($(this).attr("data"));
    crystalValue = parseInt(crystalValue);

    totalCounter += crystalValue;

    alert("Your New Total Is: " + totalCounter);

    if (totalCounter === targetNumber) {
        alert ("YOU WIN!!! YAYYAYAYYY"); 
    }

    else if (totalCounter >= targetNumber) {
        alert ("YOU LOSEEE!! BOOOOOOO"); 
    }
}); 

function winLoss () {

    console.log("Wins: " + winCounter + " Losses: " + lossCounter);

    if (totalCounter === targetNumber) {
        winCounter++;
        $("#wins").text(winCounter);
    } 
    
    else if (totalCounter > targetNumber) {
        lossCounter++;
        $("#losses").text(lossCounter); 
    }
}