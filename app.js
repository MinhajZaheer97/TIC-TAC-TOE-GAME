// const boxes = [...document.querySelectorAll(".box")];
// const resetBtn = document.querySelector(".reset");
// const winnerText = document.querySelector(".winner");

// const drawSound = new Audio("./draw.wav");
// const clickSound = new Audio("./click.wav");
// const winSound = new Audio("./winner.wav");
// const ok = new Audio("./ok.mp3");

// let turnO = true;
// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     clickSound.play();
//     box.classList.add("shake");
//     if (turnO) {
//       box.innerText = "O";
//       box.style.color = "blue";
//       turnO = false;
//     } else {
//       box.innerText = "X";
//       box.style.color = "red";
//       turnO = true;
//     }
//     box.disabled = true;
//     winner();
//   });
// });

// function winner() {
//   const winPoss = [
//     boxes[0].innerHTML === boxes[1].innerHTML &&
//       boxes[1].innerHTML === boxes[2].innerHTML &&
//       boxes[0].innerHTML !== "",
//       boxes[3].innerHTML === boxes[4].innerHTML &&
//       boxes[4].innerHTML === boxes[5].innerHTML &&
//       boxes[3].innerHTML !== "",
//       boxes[6].innerHTML === boxes[7].innerHTML &&
//       boxes[7].innerHTML === boxes[8].innerHTML &&
//       boxes[6].innerHTML !== "",
//       boxes[0].innerHTML === boxes[3].innerHTML &&
//       boxes[3].innerHTML === boxes[6].innerHTML &&
//       boxes[0].innerHTML !== "",
//       boxes[1].innerHTML === boxes[4].innerHTML &&
//       boxes[4].innerHTML === boxes[7].innerHTML &&
//       boxes[1].innerHTML !== "",
//       boxes[2].innerHTML === boxes[5].innerHTML &&
//       boxes[5].innerHTML === boxes[8].innerHTML &&
//       boxes[2].innerHTML !== "",
//       boxes[0].innerHTML === boxes[4].innerHTML &&
//       boxes[4].innerHTML === boxes[8].innerHTML &&
//       boxes[0].innerHTML !== "",
//       boxes[2].innerHTML === boxes[4].innerHTML &&
//       boxes[4].innerHTML === boxes[6].innerHTML &&
//       boxes[2].innerHTML !== "",
//     ];
//     if (
//       winPoss[0] ||
//       winPoss[1] ||
//       winPoss[2] ||
//       winPoss[3] ||
//       winPoss[4] ||
//       winPoss[5] ||
//       winPoss[6] ||
//       winPoss[7]
//     ) {
//       winnerText.innerText = turnO ? "Winner is X" : "Winner is O";
//       winnerText.classList.add("win");
//       winSound.play();
//       boxes.forEach((box) => {
//         box.disabled = true;
//       });
//     } else if (boxes.every((box) => box.innerHTML !== "")) {
//       winnerText.classList.add("win");
//       winnerText.innerText = "It's a tie!";
//       drawSound.play();
//     }
//   }
  
//   resetBtn.addEventListener("click", () => {
//     boxes.forEach((box) => {
//       box.innerText = "";
//       box.disabled = false;
//     });
//     turnO = true;
//     winnerText.innerHTML = "";
//     ok.play();
//   });



const boxes = [...document.querySelectorAll(".box")];
const resetBtn = document.querySelector(".reset");
const winnerText = document.querySelector(".winner");

const drawSound = new Audio("./draw.wav");
const clickSound = new Audio("./click.wav");
const winSound = new Audio("./winner.wav");
const ok = new Audio("./ok.mp3");

let turnO = true;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    clickSound.play();
    box.classList.add("shake");
    if (turnO) {
      box.innerText = "O";
      box.style.color = "blue";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true;
    winner();
  });
});

function winner() {
  const winPoss = [
    boxes[0].innerHTML === boxes[1].innerHTML &&
      boxes[1].innerHTML === boxes[2].innerHTML &&
      boxes[0].innerHTML !== "",
      boxes[3].innerHTML === boxes[4].innerHTML &&
      boxes[4].innerHTML === boxes[5].innerHTML &&
      boxes[3].innerHTML !== "",
      boxes[6].innerHTML === boxes[7].innerHTML &&
      boxes[7].innerHTML === boxes[8].innerHTML &&
      boxes[6].innerHTML !== "",
      boxes[0].innerHTML === boxes[3].innerHTML &&
      boxes[3].innerHTML === boxes[6].innerHTML &&
      boxes[0].innerHTML !== "",
      boxes[1].innerHTML === boxes[4].innerHTML &&
      boxes[4].innerHTML === boxes[7].innerHTML &&
      boxes[1].innerHTML !== "",
      boxes[2].innerHTML === boxes[5].innerHTML &&
      boxes[5].innerHTML === boxes[8].innerHTML &&
      boxes[2].innerHTML !== "",
      boxes[0].innerHTML === boxes[4].innerHTML &&
      boxes[4].innerHTML === boxes[8].innerHTML &&
      boxes[0].innerHTML !== "",
      boxes[2].innerHTML === boxes[4].innerHTML &&
      boxes[4].innerHTML === boxes[6].innerHTML &&
      boxes[2].innerHTML !== "",
    ];
    if (
      winPoss[0] ||
      winPoss[1] ||
      winPoss[2] ||
      winPoss[3] ||
      winPoss[4] ||
      winPoss[5] ||
      winPoss[6] ||
      winPoss[7]
    ) {
      winnerText.innerText = turnO ? "Winner is X" : "Winner is O";
      winnerText.classList.add("win");
      winSound.play();
      boxes.forEach((box) => {
        box.disabled = true;
      });
    } else if (boxes.every((box) => box.innerHTML !== "")) {
      winnerText.classList.add("win");
      winnerText.innerText = "It's a tie!";
      drawSound.play();
    }
  }
  
  resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
    });
    turnO = true;
    winnerText.innerHTML = "";
    ok.play();
  });
  
  
  function randomMove(){
    let random = (Math.random()*8).toFixed(0);
    boxes[random].innerText = "X";
  }
  
  randomMove()

