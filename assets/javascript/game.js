

//onclick audio
var bleep = new Audio();
bleep.src = "assets/images/light_bulb_breaking.aac";

var bleep1 = new Audio();

bleep.src = "assets/images/beep1.mp3";

//crystals
var crystal = {
    blue:
    {
        name: "blue",
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

//the initialize game 
var initGame = function(){
    //initialize current score to 0
        currentScore = 0;
       
        //get random number for the target score
        targetNumber = getRandom(10,100);
        console.log(targetNumber);
        $(".targetScore").html(targetNumber);
        $(".userScore").html(currentScore);
        
};

//get random number for each crystal
    crystal.blue.value = getRandom(1, 12);
    crystal.ribio.value = getRandom(1, 12);
    crystal.tenor.value = getRandom(1, 12);
    crystal.crystal.value = getRandom(1,12);

    console.log("blue:" + crystal.blue.value);
    console.log("ribio:" + crystal.ribio.value);
    console.log("tenor:" + crystal.tenor.value);
    console.log("crystal:" + crystal.crystal.value);

    //function to add the value of the crystals to the current score
    var crystalValue = function(crystal){
        currentScore = currentScore + crystal.value;
        $("#userScore").html(currentScore);
        console.log(currentScore);

        checkWins();
    }

//check to see if you have matched the target score thereby winning ...else losing
var checkWins = function(){
   // var lose = 0;
    if(currentScore > targetNumber){
      
        $("#userScore").html(currentScore);
        $("#screen").html("You lost");
        alert("You lost")
              
       
        console.log(screen);
        
        console.log("you lost");
        lose++;
        $("#losses").html(lose);
        //restart game
        initGame();
    }
else if(currentScore === targetNumber){
   // var win = 0;
   $("#screen").html("You won")
    console.log("you won");
    alert("You win")
    

    win++;
    $("#win").html(win);
    //restart game
    initGame();
    }
};


initGame();

    $("#blue").on("click", function(){
    crystalValue(crystal.blue);
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

var currentCallback;

// override default browser alert
window.alert = function(msg, callback){
  $('.message').text(msg);
  $('.customAlert').css('animation', 'fadeIn 0.3s linear');
  $('.customAlert').css('display', 'inline');
  setTimeout(function(){
    $('.customAlert').css('animation', 'none');
  }, 300);
  currentCallback = callback;
}

$(function(){
  
  // add listener for when our confirmation button is clicked
	$('.confirmButton').click(function(){
    $('.customAlert').css('animation', 'fadeOut 0.3s linear');
    setTimeout(function(){
     $('.customAlert').css('animation', 'none');
		$('.customAlert').css('display', 'none');
    }, 300);
    currentCallback();
  })
  
  $('.rab').click(function(){
    alert("You will be given a random number at the start of the game.  There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.You win the game by matching your total score to the ramdomnumber, you lose the game if your total score goes above the random number.The value of each crystal is hidden from you until you click on it. Each time when the game starts,the game will change the values of each crystal.", function(){
      console.log("Callback executed");
    })
  });
  
  // our custom alert box
  setTimeout(function(){
    alert('You will be given a random number at the start of the game.There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.You win the game by matching your total score to the ramdomnumber, you lose the game if your total score goes above the random number.The value of each crystal is hidden from you until you click on it. Each time when the game starts,the game will change the values of each crystal', function(){
        console.log("Callback executed");
      });
  }, 500);
});