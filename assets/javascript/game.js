


//crystals<script>
        $(document).ready(function () {

          //All variables
      
          var targetNumber;
          var currentScore;
          var win = 0;
            console.log(win)
          var lose = 0;
             console.log(lose);
          var isOver;
        
 
  function initializeGame() {
              targetNumber = Math.floor(Math.random() * (80)) + 19;
              currentScore = 0;                         
              $("#computer-score").text(targetNumber);
              $("#user-score").text(currentScore);
          }
   initializeGame();

          $("#btn-1").on("click", function () {
          $("#btn-1").attr("number-value", Math.floor(Math.random() * 10) + 1);
          btnValue = ($(this).attr("number-value"));
           btnValue = parseInt(btnValue);
          currentScore += btnValue;
          $("#user-score").text(currentScore);
          checkWins();
          console.log(currentScore)
              })
                // onclick functon generate rundome number for cristals
   $("#btn-2").on("click", function () {
           $("#btn-2").attr("number-value", Math.floor(Math.random() * 10) + 1);
              
          btnValue = ($(this).attr("number-value"));
          btnValue = parseInt(btnValue);
          currentScore += btnValue;
          $("#user-score").text(currentScore);
          checkWins();
           console.log(currentScore)
                      });
                      
  $("#btn-3").on("click", function () {
          $("#btn-3").attr("number-value", Math.floor(Math.random() * 10) + 1);  
               btnValue = ($(this).attr("number-value"));
          btnValue = parseInt(btnValue);
           currentScore += btnValue;
       $("#user-score").text(currentScore);
          checkWins();
       console.log(currentScore)
                  })
   $("#btn-4").on("click", function () {
              $("#btn-4").attr("number-value", Math.floor(Math.random() * 10) + 1);
              btnValue = ($(this).attr("number-value"));
                   btnValue = parseInt(btnValue);
               currentScore += btnValue;
              $("#user-score").text(currentScore);
               checkWins();
                console.log(currentScore)
      })

 var checkWins = function(){
 // var lose = 0;
  if (currentScore > targetNumber){
      $("#screen").html("You lost");
      alert("You lost")
         
      console.log(screen);
      
      console.log("you lost");
      lose++;
      $("#losses").html(lose);
      //restart game
      reset();
    
  }
else if(currentScore === targetNumber){
      // var win = 0;
      $("#screen").html("You won")
          console.log("you won");
          alert("You win")
                  win++;
          $("#win").html(win);
          //restart game
          reset();
          }
};
function reset () {
  //initialize current score to 0
      currentScore = 0;
      //get random number for the target score
      targetNumber = Math.floor(Math.random() * (100)) + 1;
      console.log(targetNumber);
      $("#computer-score").html(targetNumber);;
      $("#user-score").html(currentScore)}
        });
      
var currentCallback;


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
    alert("You will be given a random number at the start of the game.  There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.You win the game by matching your total score to the ramdom number, you lose the game if your total score goes above the random number.The value of each crystal is hidden from you until you click on it. Each time when the game starts,the game will change the values of each crystal.", function(){
      console.log("Callback executed");
    })
  });
  
  // our custom alert box
  setTimeout(function(){
    alert('You will be given a random number at the start of the game.There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.You win the game by matching your total score to the ramdom number, you lose the game if your total score goes above the random number.The value of each crystal is hidden from you until you click on it. Each time when the game starts,the game will change the values of each crystal', function(){
        console.log("Callback executed");
      });
  }, 500);
});

//onclick audio
var bleep = new Audio();
bleep.src = "assets/images/light_bulb_breaking.aac";

var bleep1 = new Audio();

bleep.src = "assets/images/beep1.mp3";
