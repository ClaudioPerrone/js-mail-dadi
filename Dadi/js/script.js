/*
GIOCO DEI DADI

1- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
2- Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//INPUT DATI
//Creo i numeri random per il giocatore
const humanNumber = Math.floor(Math.random() * 6) + 1;
console.log("Human number", humanNumber);
//Creo i numeri random per il computer
const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log("computer number", pcNumber);

//ELABORAZIONE DATI
let userMessage;
if(pcNumber < humanNumber){
    //Se il giocatore hai il numero più alto vince
    userMessage = "L'umano vince!";

    //Se il computer hai il numero più alto vince
} else if (pcNumber > humanNumber){
    userMessage = "Il pc vince!";
} else{
    userMessage = "Pareggio";
}

//OUTPUT DATI
alert(userMessage);