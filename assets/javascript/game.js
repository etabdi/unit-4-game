//crystals
var crystal = {
    diamond:
    {
        name: "diamond",
        value: 0
    },

    ribio:
    {
        name: "ribio",
        value: 0
    },
    tenor:
    {
        name: "tenor",
        value: 0
    },
    crystal:
    {
        name: "crystal",
        value:0
    }
};

//variables
var currentScore = 0;
var targetScore = 0;

var lose = 0;
var win = 0;

//random number function
var getRandom = function(min, max){
    return Math.floor((Math.random() * max-min +1) + min);
};

//the initialize game function
var initGame = function(){
    //initialize current score to 0
        currentScore = 0;
        //get random number for the target score
        targetNumber = getRandom(19,100);
        console.log(targetNumber);
        $(".targetScore").html(targetNumber);
        $(".userScore").html(currentScore);
};

//get random number for each crystal
    crystal.diamond.value = getRandom(1, 12);
    crystal.ribio.value = getRandom(1, 12);
    crystal.tenor.value = getRandom(1, 12);
    crystal.crystal.value = getRandom(1,12);

    console.log("diamond:" + crystal.diamond.value);
    console.log("ribio:" + crystal.ribio.value);
    console.log("tenor:" + crystal.tenor.value);
    console.log("crystal:" + crystal.crystal.value);

    //function to add the value of the crystals to the current score
    var crystalValue = function(crystal){
        currentScore = currentScore + crystal.value;
        $("#userScore").html(currentScore);

        checkWins();
    }

//check to see if you have matched the target score thereby winning ...else losing
var checkWins = function(){
   // var lose = 0;
    if(currentScore > targetNumber){
        alert("you lost");
        console.log("you lost");
        lose++;
        $("#losses").html(lose);
        //restart game
        initGame();
    }
else if(currentScore === targetNumber){
   // var win = 0;
    
    console.log("you won");
    win++;
    $("#win").html(win);
    //restart game
    initGame();
    }
};


initGame();

    $("#diamond").on("click", function(){
    crystalValue(crystal.diamond);
    console.log(crystalValue);
});

$("#tenor").on("click", function(){
    crystalValue(crystal.tenor);
    console.log(crystalValue);
});

$("#ribio").on("click", function(){
    crystalValue(crystal.ribio);
    console.log(crystalValue);
});

$("#crystal").on("click", function(){
    crystalValue(crystal.crystal);
    console.log(crystalValue);
});

var bleep = new Audio();
bleep.src = "assets/images/light_bulb_breaking.aac";

var bleep1 = new Audio();
bleep.src = "assets/images/beep1.mp3";


