// GIOCO DI DADI
const playerNumber= [];
const computerNumber= [];

// generatore per il giocatore //
for (let i = 0; i < 1; i++) {

    const randomNumber = Math.floor(Math.random() * 6) + 1;

    playerNumber.push(randomNumber);

    console.log(playerNumber);
}

// generatore per il computer //
for (let i = 0; i < 1; i++) {

    const randomNumber = Math.floor(Math.random() * 6) + 1;

    computerNumber.push(randomNumber);

    console.log(computerNumber);

}

// dichiarare il vincitore //
 if (playerNumber == computerNumber){
    result = 'PAREGGIO!';
} else if (playerNumber > computerNumber){
    result = 'HAI VINTO!';
} else if (playerNumber < computerNumber){
    result = 'HAI PERSO!';
}
console.log(result);

// stampare in pagina //
const player = document.getElementById('resultPlayer');
const computer = document.getElementById('resultComputer');
const vincitore = document.getElementById('vincitore');
player.innerText = playerNumber;
computer.innerText = computerNumber ;
vincitore.innerText = result;


