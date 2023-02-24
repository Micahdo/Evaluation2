/*Joueur actif*/
playerTurn = () => {
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
animationDice = () => {
    diceImage.classList.add("animateDice");
    setTimeout(() => {
        diceImage.classList.remove("animateDice")
    }, 1000)
}

/*Ouverture de la popup*/
openPopup = () => {
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
closePopup = () => {
    popup.classList.remove("open-popup");
    initialize();
}

/*Choix aléatoire du premier joueur*/
randomPlayer = () => {
    activePlayer = Math.floor(Math.random()*2)+1;
    playerTurn();
}

/*Initialisation*/
initialize = () => {
    global1.innerHTML = 0;
    global2.innerHTML = 0;
    round1.innerHTML = 0;
    round2.innerHTML = 0;
    diceImage.setAttribute("src", "Images/0.png");
}
