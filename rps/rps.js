var winner =function(){stats.win++;stats.totalgames++;userwins()
}
var tier =function(){ stats.tie++;stats.totalgames++;tiecounter();totalgamecounter()
}
var loser =function(){stats.loss++;stats.totalgames++;userloses()
}
var computerGuess = "";
var userGuess = "";
var stats = {win:0,loss:0,tie:0,totalgames:0};

var userwins =function(){document.getElementById("result").innerHTML = "user wins";
}
var userloses=function(){document.getElementById("result").innerHTML = "user loses";
}
var tiecounter=function(){document.getElementById("tie_counter").innerHTML="ties "+ stats.tie;
}
var totalgamecounter=function(){document.getElementById("game_counter").innerHTML="total games "+ stats.totalgames;
}
var checkoutcome = function(userGuess,computerGuess)
{
  if ((userGuess === "r"&& computerGuess === "s")|| (userGuess === "p"&&computerGuess === "r")||(userGuess === "s"&& computerGuess)){ 
    winner()
  }
}

//add comment
var validateinput = function(){
  if (userGuess !=="r"&&userGuess !=="p"&& userGuess !=="s"){document.getElementById("error").innerHTML = "ERROR NOT A VALID CHOICE";
}
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

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
  // Determines which key was pressed.
   userGuess = event.key;
  
  // Alerts the key the user pressed (userGuess).
  document.getElementById("user_guess").innerHTML="user guess:"+ userGuess

  // Alerts the Computer's guess.
  document.getElementById("computer_guess").innerHTML="computer guess:"+ computerGuess
  



validateinput()}
   
   
  
