// generatore per il giocatore //

const playerNumber = Math.floor(Math.random() * 6) + 1;
const cpuNumber = Math.floor(Math.random() * 6) + 1;


// dichiarare il vincitore //
 if (playerNumber == cpuNumber){
    result = 'PAREGGIO!';
} else if (playerNumber > cpuNumber){
    result = 'HAI VINTO!';
} else if (playerNumber < cpuNumber){
    result = 'HAI PERSO!';
}
console.log(result);

// stampare in pagina //
const player = document.getElementById('resultPlayer');
const computer = document.getElementById('resultComputer');
const vincitore = document.getElementById('vincitore');
player.innerText = playerNumber;
computer.innerText = cpuNumber ;
vincitore.innerText = result;


