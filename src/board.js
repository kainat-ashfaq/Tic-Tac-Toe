var box = document.querySelectorAll(".box")
var msg = document.querySelector(".msg")
var resetBtn = document.getElementById("reset");
var new_Game = document.getElementById("new-game");
var turn = document.querySelector(".turn")
var game_Over = false

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

box.forEach(function(box){
    box.addEventListener("click", function(){
        if(player1){
          box.innerText = "o"
          turn.innerText = "player x's turn"
          player1 = false
        }else{
            box.innerText = "x"
          turn.innerText = "player o's turn";

            player1 = true
        }
        box.disabled = true
        checkWinner()
        checkDraw()
    })
})
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
const showWinner = (winner) => {
  msg.innerText = `winner is ${winner} `;
  turn.innerText = ""
  disabledBox();
};
const checkDraw = ()=>{
    if(!game_Over ){
        let isDraw = true
        box.forEach(e => {
            if(e.innerHTML === "" ) isDraw = false;  // if any box is not disabled then game_over becomes true.
        })
        if(isDraw ){
            game_Over = true
            msg.innerText = "It's a draw!";
        }
    }
}
const disabledBox =() =>{
    for (const boxes of box) {
        boxes.disabled = true
    }
}
const enableBox = () => {
  for (let boxes of box) {
    boxes.disabled = false;
boxes.innerText = ""
msg.innerText = ""
turn.innerText = ""

  }
};
const reset = () =>{
player1 = true
enableBox();

}
// msg.style.display = "none"; 
new_Game.addEventListener("click" , reset)
resetBtn.addEventListener("click" , reset)