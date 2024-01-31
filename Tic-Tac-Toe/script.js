const cells = document.querySelectorAll(".cell");
const tableBody = document.querySelector("table");

let board = "";

const player1 = "X";
const player2 = "O";
let cnt = 0;

const winComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startGame();

function startGame() {
  cnt = 0;
  document.querySelector(".endGame").style.display = "none";
  //make an array with 9 elements from 0 to 0, and return keys
  //and create other array from it
  board = Array.from(Array(9).keys());
  //remove all x and o from the board
  for (let i = 0; i < cells.length; i++) {
    //empty board
    cells[i].innerHTML = "";
    //remove background color
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnclick, false);
  }
}

function turnclick(e) {
  // let playerRound = board[e.target.id];
  const playerRound = board[e.target.id];
  const playerRound1 = document.getElementById(e.target.id).innerHTML;

  console.log(playerRound, playerRound1);

  turn(e.target.id, player2);
}

function turn(id, player) {
  cnt++;
  board[id] = player;
  document.getElementById(id).innerHTML = player;
  board.splice(id, 1, player);
  // console.log("a" + board);
  // console.log(board);

  if (cnt === 9) {
    document.querySelector(".endGame").style.display = "block";
    document.querySelector(".endGame").innerHTML = "End Game";
  }
}
