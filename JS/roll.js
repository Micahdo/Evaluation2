/*Jet du dé à 6 faces*/
/*Création des variables*/
let rollDice = document.getElementById("roll-button");
let diceImage = document.getElementById("dice-face");
let current1 = document.getElementById("current1");

let result = 0;

rollDice.addEventListener("click", function() {
    result = Math.floor(Math.random()*6)+1;

    diceImage.setAttribute("src", "Images/" + result + ".png");
    if (result > 1) {
        current1.innerHTML = result + Number(current1.innerText);
    } else {
        current1.innerHTML = 0;
    }    
})




