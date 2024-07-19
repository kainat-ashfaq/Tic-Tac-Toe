var game_board = document.querySelector(".main-board-div");
var box = document.querySelectorAll(".box")
var msg = document.querySelector(".msg")
var resetBtn = document.getElementById("reset");
var new_Game = document.getElementById("new-game");
var turn = document.querySelector(".turn")
var getData = JSON.parse(localStorage.getItem("game_sign"))
var congratulations = document.getElementById("congratulations");
var funnyCat = document.querySelector(".funnyCat")
var thumbs_up = document.querySelector(".thumbs-up");
var confetti = document.querySelector(".confetti")
var player_one = getData.player1
// console.log(player_one.value);
var player_two = getData.player2
var game_Over = false

// game winning patterns 
var player1 = true
var winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]

// for show text in box 
box.forEach(function(box){
    box.addEventListener("click", function(){
        if(player1){
          box.innerText = `${player_one}`
          turn.innerText = `player ${player_two}'s turn`
          player1 = false
        }else{
            box.innerText = `${player_two}`
          turn.innerText = `player ${player_one}'s turn`;

            player1 = true
        }
        box.disabled = true
        checkWinner()
        checkDraw()
    })
})
// check the winner 
const checkWinner = () => {
  for (let patterns of winPatterns) {
    var position1 = box[patterns[0]].innerText;
    var position2 = box[patterns[1]].innerText;
    var position3 = box[patterns[2]].innerText;
    console.log(position1);
    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        showWinner(position1);
      } 
    }

  }
};
// show who is winner 
const showWinner = (winner) => {
  congratulations.innerText = "Congratulations";
  msg.innerHTML = `winner is ${winner}`;
  turn.innerText = ""
  new_Game.innerText = "New Game"
  game_board.style.display = "none"
  new_Game.style.display = "block"
  resetBtn.style.display = "none"
  thumbs_up.style.display = "block"
  confetti.style.display = "block"
  disabledBox();
};
// check match is draw or not 
const checkDraw = ()=>{
    if(!game_Over ){
        let isDraw = true
        box.forEach(e => {
            if(e.innerHTML === "" ) isDraw = false;  // if any box is not disabled then game_over becomes true.
        })
        if(isDraw ){
            game_Over = true
            msg.innerText = "Tie game! Good efforts from both sides, it's a draw!";
            turn.innerText = ""
            new_Game.innerText = "Play Again!"
            congratulations.innerText = ""
            game_board.style.display = "none"
            funnyCat.style.display = "block"
            new_Game.style.display = "block"
            resetBtn.style.display = 'none'
            confetti.style.display = "none"
            thumbs_up.style.display = "none"

        }
    }
}
// after winning the match box is disabled 
const disabledBox =() =>{
    for (const boxes of box) {
        boxes.disabled = true
    }
}
// for enableBox on reset btn 
const enableBox = () => {
  for (let boxes of box) {
    boxes.disabled = false;
boxes.innerText = ""
msg.innerText = ""
turn.innerText = ""

  }
};
// for clear the board 
const reset = () =>{
player1 = true
enableBox();

}
new_Game.addEventListener("click",function(){
  reset()
  
  game_Over = false
  game_board.style.display = "block"
  resetBtn.style.display = "block"
  congratulations.innerText = ""
  new_Game.style.display = "none"
  funnyCat.style.display = "none"
  thumbs_up.style.display = "none"
  confetti.style.display = "none"
})
// new_Game.addEventListener("click" , reset)
resetBtn.addEventListener("click" , reset)


