let coins =0;
let energy = 100;

let coinPlus = document.getElementById("coin")
let energyMinus = document.getElementById("energy")
let countButton = document.getElementById("btn")

function count() {
    coinPlus.textContent = coins;
    energyMinus.textContent = energy; 
}
function click () {
    if (energy > 1){
        coins += 5;
        energy -= 5;
    }else {}
    count(); 
}

 countButton.onclick = click;
