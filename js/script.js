const player = document.getElementById('resultPlayer');
const computer = document.getElementById('resultComputer');




// 
const playerNumber= [];
const cumputerNumber= [];



// generatore per il giocatore //
for (let i = 0; i < 1; i++) {

    const randomNumber = Math.floor(Math.random() * 6) + 1;

    playerNumber.push(randomNumber);

    console.log(playerNumber);

}

// generatore per il computer //
for (let i = 0; i < 1; i++) {

    const randomNumber = Math.floor(Math.random() * 6) + 2;

    cumputerNumber.push(randomNumber);

    console.log(cumputerNumber);

}