var choose_sign = document.getElementById("choose-sign");
var form_div = document.getElementById("form-div");
var submit = document.getElementById("submit");
var player_1 = document.getElementById("player-1")
var player_2 = document.getElementById("player-2")
var animation_game  = document.querySelector(".animation-game")
var animation_game_2 = document.querySelector(".animation-game-2");
var running_man = document.getElementById("running-man");
var star_game_btn = document.getElementById("start-game")
// for choosing sign  
choose_sign.addEventListener("click", function() {
form_div.style.display = "block"
form_div.style.display = "flex";
submit.style.display = "block"
choose_sign.style.display = "none"
player_1.innerText = ""

player_2.innerText = ""

})

// for submit value 
submit.addEventListener("click",function(){
    var sign = {
        player1: player_1.value,
        player2: player_2.value
    }
    var local = localStorage.setItem("game_sign", JSON.stringify(sign));

    if(player_1.value === player_2.value){
        alert("Both players cannot have same sign")
        return
    }
    if(player_1.value !== "" && player_2.value !== ""){
        form_div.style.display = "none"
        animation_game.style.display = "none"
        animation_game_2.style.display = "none"
        running_man.style.display = "block"
    star_game_btn.style.display = "block"
    submit.style.display = "none"
        return
    }else{
        alert("Please enter game sign for both players")
        return
    }
    // var local = localStorage.setItem("game_sign",JSON.stringify(sign))
})


