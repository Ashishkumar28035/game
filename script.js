let result;
function computerChoice() {
  let rand = Math.floor(Math.random() * 3) + 1;
  result = rand;

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
let score = {
  win: 0,
  loss: 0,
  tie: 0,
  displayScore() {
    return (document.querySelector(".score").innerHTML =
      `No Of Matches Won:${score.win} , Lost:${score.loss}, Tie:${score.tie}`);
  },
};

document.querySelector(".stone").addEventListener("click", function () {
  console.log("Stone was Clicked!");
  document.querySelector(".stat").innerHTML = "Stone is Clicked";
  computerChoice();
  if (result === 1) {
    document.querySelector(".result").innerHTML = "Draw";
    score.tie++;
    score.displayScore();
  } else if (result === 2) {
    document.querySelector(".result").innerHTML = "You Lose the Game";
    score.loss++;
    score.displayScore();
  } else {
    document.querySelector(".result").innerHTML = "You Won the Game";
    score.win++;
    score.displayScore();
  }
});

document.querySelector(".paper").addEventListener("click", function () {
  console.log("Paper was Clicked!");
  document.querySelector(".stat").innerHTML = "Paper is Clicked";
  computerChoice();
  if (result === 2) {
    document.querySelector(".result").innerHTML = "Draw";
    score.tie++;
    score.displayScore();
  } else if (result === 1) {
    document.querySelector(".result").innerHTML = "You Won the Game";
    score.win++;
    score.displayScore();
  } else {
    document.querySelector(".result").innerHTML = "You Lose the Game";
    score.loss++;
    score.displayScore();
  }
});

document.querySelector(".secissor").addEventListener("click", function () {
  console.log("Stone was Clicked!");
  document.querySelector(".stat").innerHTML = "Secissor is Clicked";
  computerChoice();
  if (result === 3) {
    document.querySelector(".result").innerHTML = "Draw";
    score.tie++;
    score.displayScore();
  } else if (result === 1) {
    document.querySelector(".result").innerHTML = "You Lose the Game";
    score.loss++;
    score.displayScore();
  } else {
    document.querySelector(".result").innerHTML = "You Won the Game";
    score.win++;
    score.displayScore();
  }
});
