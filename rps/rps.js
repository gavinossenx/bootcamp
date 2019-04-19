var winner =function(){stats.win++;stats.totalgames++;userwins()
}
var tier =function(){ stats.tie++;stats.totalgames++;tiecounter();totalgamecounter()
}
var loser =function(){stats.loss++;stats.totalgames++;userloses()
}

var stats = {win:0,loss:0,tie:0,totalgames:0};
var userwins =function(){document.getElementById("result").innerHTML = "user wins";
}
var userloses=function(){document.getElementById("result").innerHTML = "user loses";
}
var tiecounter=function(){document.getElementById("tie_counter").innerHTML="ties "+ stats.tie;
}
var totalgamecounter=function(){document.getElementById("game_counter").innerHTML="total games "+ stats.totalgames;
}
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  
  // Determines which key was pressed.
  var userGuess = event.key;
  
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  var wins=function(userGuess,computerGuess){
    if ((userGuess === "r"&& computerGuess === "s")|| (userGuess === "p"&&computerGuess === "r")||(userGuess === "s"&& computerGuess)){ 
      winner()
    }
  }

  // Alerts the key the user pressed (userGuess).
  document.getElementById("user_guess").innerHTML="user guess:"+ userGuess

  // Alerts the Computer's guess.
  document.getElementById("computer_guess").innerHTML="computer guess:"+ computerGuess
  
  var match = function(){
    if (userGuess !=="r"&&userGuess !=="p"&& userGuess !=="s"){document.getElementById("error").innerHTML = "ERROR NOT A VALID CHOICE"}

  if (userGuess === computerGuess){
    document.getElementById("result").innerHTML = "tie game";
    tier()
}
  else{
   if (userGuess ==="r")
   {
      if(computerGuess ==="s")
      {
        winner();
    }
      else{
        loser();
    }
    }
  else if (userGuess === "p")
  {
      if(computerGuess === "r")
      {
       winner();
      }
      else{
        loser();
    }
      }
   else if(userGuess === "s"){
      if(computerGuess === "p"){
      winner();
      }
      else{
        loser();
    }
      }
    document.getElementById("win_counter").innerHTML="wins "+ stats.win;
    document.getElementById("loss_counter").innerHTML="losses "+ stats.loss;
    totalgamecounter()
    }
}

match()}
   
   
  
