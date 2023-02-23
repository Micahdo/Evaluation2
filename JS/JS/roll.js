/*Création des variables*/
let newButton = document.getElementById("new-button");
let rollButton = document.getElementById("roll-button");
let holdButton = document.getElementById("hold-button");
let diceImage = document.getElementById("dice-face");
let current1 = document.getElementById("current1");
let current2 = document.getElementById("current2");
let activePlayer1 = document.getElementById("active-player1");
let activePlayer2 = document.getElementById("active-player2");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let global1 = document.getElementById("global1");
let global2 = document.getElementById("global2");
let activePlayer = 0;

/*Nouveau jeu*/
newButton.addEventListener("click", function() {
    global1.innerHTML = 0;
    global2.innerHTML = 0;
    current1.innerHTML = 0;
    current2.innerHTML = 0;
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
    result = Math.floor(Math.random()*6)+1;
    diceImage.setAttribute("src", "Images/" + result + ".png");
    if (result > 1 && activePlayer == 1) {
        current1.innerHTML = result + Number(current1.innerText);
    } else if (result == 1 && activePlayer == 1) {
        current1.innerHTML = 0;
        activePlayer = 2;
        playerTurn();
    } else if (result > 1 && activePlayer == 2) {
        current2.innerHTML = result + Number(current2.innerText);
    } else if (result == 1 && activePlayer == 2) {
        current2.innerHTML = 0;
        activePlayer = 1;
        playerTurn();
    }
})




