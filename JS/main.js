function rpsGame(yourChoice) {

   var humanChoice, botChoice;
   humanChoice = yourChoice.id;

   botChoice = numberToChoice(randToRpsInt());
   
   results = decideWinner(humanChoice, botChoice);
   message = finalMessage(results);
   rpsFrontEnd(message, humanChoice, botChoice,botChoice);
}

function randToRpsInt() {
   return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
   return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
   var rpsDatabase = {
      rock: {
         scissors: 1,
         rock: 0.5,
         paper: 0,
      },
      paper: {
         scissors: 0,
         rock: 1,
         paper: 0.5
      },
      scissors: {
         scissors: 0.5,
         rock: 0,
         paper: 1
      },
   };

   var yourScore = rpsDatabase[yourChoice][computerChoice];
   var computerScore = rpsDatabase[computerChoice][yourChoice];

   return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {

   if (yourScore === 0) {
      return { "message": "You Lost", "color": "rgb(255, 8, 0)" }
   }
   else if (yourScore === 0.5) {
      return { "message": "You Tied", "color": "rgb(10, 242, 250)" }
   } else {
      return { "message": "You Won", "color": "rgb(9, 255, 0)" }
   }

}

function rpsFrontEnd({ message, color }, humanChoice, botChoice,random) {

   // Romove Old Version 
   $(".rps").remove();
   $(".col-3 h2").remove();

   // Showing result
   var humanDiv = $("#rock");
   var botDiv = $("#paper");
   var messageDiv = $("#scissors");

   humanDiv.append("<h2 style='margin-bottom: 2rem;'>You</h2><div class='rps' ><h2>"+humanChoice+"</h2></div>");



   botDiv.append("<h2 style='margin-bottom: 2rem;'>Computer</h2><div class='rps' ><h2>"+botChoice+"</h2></div>");
   messageDiv.append("<h2 style='margin-bottom: 2rem;color: "+color+"'>Result</h2> <div class='rps' style='color:"+color+"' ><h2>"+message+"</h2></div>");

   $("#rock").attr('onclick', '');
   $("#paper").attr('onclick', '');
   $("#scissors").attr('onclick', '');

}

// reload page
document.getElementById('button').addEventListener('click',function(){
   location.reload(); 
})


