function startGame(){
addEventListener("keydown", function(){

   game1();
 })
}

startGame();

function game1(){
//CHANGING HEADING
  $("h1").text("Level 1");

//RANDOM SELECTION OF COLOUR
  var boxList = ["green", "red", "yellow", "blue"];
  var boxIndex = Math.floor(Math.random()*4);
  var boxSelected = boxList[boxIndex];
//ADDING ANNIMATION TO THAT RANDOM COLOUR
  document.getElementById(boxList[boxIndex]).classList.add("pressed");

//ADDING SOUND TO THAT RANDOM COLOR
  var sund = new Audio("sounds/"+boxList[boxIndex]+".mp3");
  sund.play();

//REMOVING ANNIMATION OF THAT COLOR
  setTimeout(function(){document.getElementById(boxList[boxIndex]).classList.remove("pressed");}, 150);

  // for(var i=0; i<4; i++){
  //   document.getElementsByClassName("btn")[i].addEventListener("click", function(){
  //
  //
  //     if(boxSelected===this.classList[1]){
  //         game1();
  //     }else{
  //         gameOver();
  //     }
  //
  //   });
  // }

  }


function gameOver(){
    $("h1").text("You Lost!. Press Any Key To Retry...");
    startGame();
}


// var boxBeingSelected = boxSelected;
//
// function game2(){
//   $("btn"+boxBeingBeingSelected).click(function(){
//     $(this).css("background-color", "yellow");
//   });
//
//     // if(i===boxIndex){
//     //   alert("hello");
//     // }
// }






// function createAnimation(){
//
//
//
//   $("btn").addClass("pressed");
// }

// function removeAnimation(key2){
//   $(key2).remove("pressed");
// }
