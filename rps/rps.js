var winner =function(){stats.win++;stats.totalgames++;userwins()
}
var tier =function(){ stats.tie++;stats.totalgames++;tiecounter();totalgamecounter()
}
var loser =function(){stats.loss++;stats.totalgames++;userloses()
}
var stats = {win:0,loss:0,tie:0,totalgames:0};

var userwins =function(){
  document.getElementById("result").innerHTML = "user wins";
}
var userloses=function(){
  document.getElementById("result").innerHTML = "user loses";
}
var tiecounter=function(){
  document.getElementById("tie_counter").innerHTML="ties "+ stats.tie;
}
var totalgamecounter=function(){
  document.getElementById("game_counter").innerHTML="total games "+ stats.totalgames;
}
var checkoutcome = function(userGuess,computerGuess)
{
  if ((userGuess === "r"&& computerGuess === "s")|| (userGuess === "p"&&computerGuess === "r")||(userGuess === "s"&& computerGuess)){ 
    winner();
  }
  else if(userGuess === computerGuess){
    document.getElementById("result").innerHTML = "tie game";
    tier();
    console.log(userGuess,computerGuess)
  }
  else{
    loser();
  }
}

//add comment
var validateinput = function(userGuess){
  if (userGuess !=="r"&&userGuess !=="p"&& userGuess !=="s"){
    document.getElementById("error").innerHTML = "ERROR NOT A VALID CHOICE";
  }


}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];

var computedchoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
   validateinput(event.key);

  checkoutcome(event.key,computedchoice);
  // Alerts the key the user pressed (userGuess).
  document.getElementById("user_guess").innerHTML="user guess:"+ event.key;

  // Alerts the Computer's guess.
  document.getElementById("computer_guess").innerHTML="computer guess:"+ computedchoice;

  document.getElementById("win_counter").innerHTML="wins "+ stats.win;

  document.getElementById("loss_counter").innerHTML="losses "+ stats.loss;
 
  totalgamecounter();


}
   
   
  
