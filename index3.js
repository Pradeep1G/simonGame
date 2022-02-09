var lst = ["red", "blue", "green", "yellow"];

var clickedList = [];
var fixedRandomList = [];

var level = 0;
var started = false;

$(document).keypress(function(){
  if(!started){
  $("h1").text("Level "+level);
  machineSequence();
  started = true;
  }
});

$(".btn").click(function(){
  var clickedButton = $(this).attr("id");
  clickedList.push(clickedButton);
  console.log("h");
  //alert("hel");
  animation(clickedButton);
  playAudio(clickedButton);


  checkAnswer(clickedList.length-1);
});

function checkAnswer(currentLevel){
  if(clickedList[currentLevel]===fixedRandomList[currentLevel-1]){console.log(currentLevel);
    if(clickedList.length===fixedRandomList.length){console.log(clickedList.length);
      setTimeout(function () {
        machineSequence();
      }, 1000);
    }
  }
  else{
    playAudio("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");

    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);

    reStart();
  }
}


function machineSequence(){
  clickedList=[];
  level++;
  $("h1").text("Level "+level);
  var x = Math.floor(Math.random()*4);
  var randomItem = lst[x];
  fixedRandomList.push(randomItem);

  animation(randomItem);
  playAudio(randomItem);
}



function playAudio(name){
  var sund = new Audio(name+".mp3");
  sund.play();
}


function animation(name){
  document.getElementById(name).classList.add("pressed");
  setTimeout(function(){document.getElementById(name).classList.remove("pressed");}, 150);
}


function reStart(){
  level = 0;
  fixedRandomList = [];
  started  = false;
}
