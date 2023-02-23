/*Création des variables*/
let newButton = document.getElementById("new-button");
let rollButton = document.getElementById("roll-button");
let holdButton = document.getElementById("hold-button");
let diceImage = document.getElementById("dice-face");
let round1 = document.getElementById("round1");
let round2 = document.getElementById("round2");
let activePlayer1 = document.getElementById("active-player1");
let activePlayer2 = document.getElementById("active-player2");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let global1 = document.getElementById("global1");
let global2 = document.getElementById("global2");
let diceImg = document.getElementById("dice-img");
let activePlayer = 0;

/*Nouveau jeu*/
newButton.addEventListener("click", function() {
    global1.innerHTML = 0;
    global2.innerHTML = 0;
    round1.innerHTML = 0;
    round2.innerHTML = 0;
    diceImage.setAttribute("src", "Images/0.png");
    activePlayer = Math.floor(Math.random()*2)+1;
    playerTurn();
})

/*Joueur actif*/
function playerTurn() {
    if (activePlayer == 1) {
        activePlayer1.style.opacity = "1";
        activePlayer2.style.opacity = "0";
        player1.style.fontWeight = "600";
        player2.style.fontWeight = "300";
    } else {
        activePlayer1.style.opacity = "0";
        activePlayer2.style.opacity = "1";
        player1.style.fontWeight = "300";
        player2.style.fontWeight = "600";
    }
}

/*Jet du dé à 6 faces*/
let result = 0;
rollButton.addEventListener("click", function() {
    animationDice();
    result = Math.floor(Math.random()*6)+1;
    diceImage.setAttribute("src", "Images/" + result + ".png");
    if (result > 1 && activePlayer == 1) {
        round1.innerHTML = result + Number(round1.innerText);
    } else if (result == 1 && activePlayer == 1) {
        round1.innerHTML = 0;
        activePlayer = 2;
        playerTurn();
    } else if (result > 1 && activePlayer == 2) {
        round2.innerHTML = result + Number(round2.innerText);
    } else if (result == 1 && activePlayer == 2) {
        round2.innerHTML = 0;
        activePlayer = 1;
        playerTurn();
    }
})

/*Conservation du résultat*/
holdButton.addEventListener("click", function() {
    if (activePlayer == 1) {
        global1.innerHTML = Number(global1.innerText) + Number(round1.innerText);
        round1.innerHTML = 0;
        activePlayer = 2;
        playerTurn();
    } else {
        global2.innerHTML = Number(global2.innerText) + Number(round2.innerText);
        round2.innerHTML = 0;
        activePlayer = 1;
        playerTurn();
    }
})

/*Animation du dé*/
function animationDice() {
    diceImage.classList.add("animateDice");
    setTimeout(function(){
        diceImage.classList.remove("animateDice")
    }, 1000)
}