let result;
function computerChoice() {
  let rand = Math.floor(Math.random() * 3) + 1;
  result =rand;

  if (rand === 1) {
    document.querySelector(".com_stat").innerHTML =
      "Stone is selected by Computer";
  } else if (rand === 2) {
    document.querySelector(".com_stat").innerHTML =
      "Paper is selected by Computer";
  } else {
    document.querySelector(".com_stat").innerHTML =
      "Scissor is selected by Computer";
  }
}
let score={
   win:0,
   loss:0,
   tie:0,

};

document.querySelector(".stone").addEventListener("click", function () {
  console.log("Stone was Clicked!");
  document.querySelector(".stat").innerHTML = "Stone is Clicked";
  computerChoice();
  if(result===1){
    document.querySelector(".result").innerHTML = "Draw";
    score.tie++;
    document.querySelector(".tie").innerHTML=`Tie:${score.tie}`;
  }
  else if(result===2){
    document.querySelector(".result").innerHTML = "You Lose the Game";
    score.loss++;
    document.querySelector(".loss").innerHTML=`loss:${score.loss}`;
    
  }
  else{
    document.querySelector(".result").innerHTML = "You Won the Game";
    score.win++;
    document.querySelector(".win").innerHTML=`win:${score.win}`;
  }
});

document.querySelector(".paper").addEventListener("click", function () {
  console.log("Paper was Clicked!");
  document.querySelector(".stat").innerHTML = "Paper is Clicked";
  computerChoice();
  if(result===2){
    document.querySelector(".result").innerHTML = "Draw";
    score.tie++;
    document.querySelector(".tie").innerHTML=`Tie:${score.tie}`;
  }
  else if(result===1){
    document.querySelector(".result").innerHTML = "You Won the Game";
    score.win++;
    document.querySelector(".win").innerHTML=`win:${score.win}`;
  }
  else{
    document.querySelector(".result").innerHTML = "You Lose the Game";
    score.loss++;
    document.querySelector(".loss").innerHTML=`loss:${score.loss}`;
  }
});

document.querySelector(".secissor").addEventListener("click", function () {
  console.log("Stone was Clicked!");
  document.querySelector(".stat").innerHTML = "Secissor is Clicked";
  computerChoice();
  if(result===3){
    document.querySelector(".result").innerHTML = "Draw";
    score.tie++;
    document.querySelector(".tie").innerHTML=`Tie:${score.tie}`;
  }
  else if(result===1){
    document.querySelector(".result").innerHTML = "You Lose the Game";
    score.loss++;
    document.querySelector(".loss").innerHTML=`loss:${score.loss}`;
  }
  else{
    document.querySelector(".result").innerHTML = "You Won the Game";
    score.win++;
    document.querySelector(".win").innerHTML=`win:${score.win}`;
  }
});
