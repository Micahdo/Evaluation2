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
let popup = document.getElementById("popup");
let message1 = document.getElementById("message1");
let message2 = document.getElementById("message2");
let activePlayer = 0;

/*Joueur actif*/
function playerTurn() {
    if (activePlayer == 1) {
        /*Initialisation du joueur 1 comme joueur actif*/
        activePlayer1.style.opacity = "1";
        activePlayer2.style.opacity = "0";
        player1.style.fontWeight = "600";
        player2.style.fontWeight = "300";
    } else {
        /*Initialisation du joueur 2 comme joueur actif*/
        activePlayer1.style.opacity = "0";
        activePlayer2.style.opacity = "1";
        player1.style.fontWeight = "300";
        player2.style.fontWeight = "600";
    }
}

/*Animation du dé*/
function animationDice() {
    diceImage.classList.add("animateDice");
    setTimeout(function(){
        diceImage.classList.remove("animateDice")
    }, 1000)
}

/*Ouverture de la popup*/
function openPopup() {
    let winnerResult;
    if (activePlayer == 1) {
        winnerResult = Number(global1.innerText);
    } else {
        winnerResult = Number(global2.innerText);
    }
    popup.classList.add("open-popup");
    message1.textContent = "Bravo Player" + activePlayer + " !";
    message2.textContent = "Vous avez gagné avec " + winnerResult + " points !";
}

/*Fermeture de la popup*/
function closePopup() {
    popup.classList.remove("open-popup");
    initialize();
}

/*Choix aléatoire du premier joueur*/
function randomPlayer() {
    activePlayer = Math.floor(Math.random()*2)+1;
    playerTurn();
}

/*Initialisation*/
function initialize() {
    global1.innerHTML = 0;
    global2.innerHTML = 0;
    round1.innerHTML = 0;
    round2.innerHTML = 0;
    diceImage.setAttribute("src", "Images/0.png");
}

/*Nouveau jeu*/
newButton.addEventListener("click", function() {
    initialize();
    randomPlayer();
})

/*Jet du dé à 6 faces*/
let result = 0;
rollButton.addEventListener("click", function() {
    /*Lancement de l'animation du dé*/
    animationDice();
    /*Résultat aléatoire*/
    result = Math.floor(Math.random()*6)+1;
    /*Chargement de l'image du dé en fonction de sa valeur*/
    diceImage.setAttribute("src", "Images/" + result + ".png");
    /*Résultat si joueur 1 ou joueur 2 est actif*/
    if (result > 1 && activePlayer == 1) {
        round1.innerHTML = result + Number(round1.innerText);
    } else if (result == 1 && activePlayer == 1) {
        round1.innerHTML = 0;
        /*Changement de joueur*/
        activePlayer = 2;        
        playerTurn();
    } else if (result > 1 && activePlayer == 2) {
        round2.innerHTML = result + Number(round2.innerText);
    } else if (result == 1 && activePlayer == 2) {
        round2.innerHTML = 0;
        /*Changement de joueur*/
        activePlayer = 1;        
        playerTurn();
    }

})

/*Conservation du résultat*/
holdButton.addEventListener("click", function() {
    if (activePlayer == 1) {
        /*Le résultat de round1 passe dans global1*/
        global1.innerHTML = Number(global1.innerText) + Number(round1.innerText);
        if (Number(global1.innerText) >= 5 ) {
            /*Remise à 0 de round1*/
            round1.innerHTML = 0;
            openPopup();
        } else {
            /*Remise à 0 de round1*/
            round1.innerHTML = 0;
            /*Changement de joueur*/
            activePlayer = 2;
            playerTurn();
        }
    } else {
        /*Le résultat de round2 passe dans global2*/
        global2.innerHTML = Number(global2.innerText) + Number(round2.innerText);
        if (Number(global2.innerText) >= 5 ) {
            /*Remise à 0 de round2*/
            round2.innerHTML = 0;
            openPopup();
        } else {
        /*Remise à 0 de round2*/
        round2.innerHTML = 0;
        /*Changement de joueur*/
        activePlayer = 1;
        playerTurn();
        }
    }
})