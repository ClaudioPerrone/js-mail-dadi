/*
MAIL

1- Chiedi all’utente la sua email,
2- controlla che sia nella lista di chi può accedere,
3- stampa un messaggio appropriato sull’esito del controllo.
*/

//INPUT DATI
const mails = ["a@mail.it" , "s@mail.it" , "d@mail.it" , "f@mail.it"];
//Chiedi la mail all'utente
const userMail = prompt("Dimmi il tuo indirizzo mail");

//ELABORAZIONE DATI
let mailFound = false;
for(let i = 0; i < mails.length; i++){
    const mail = mails[i];
    //Se la mail inserita è presente nell'array
    if(mail === userMail){
        mailFound = true;
        console.log("trovata");
    }
}
//OUTPUT DATI
let userMessage;
if(mailFound === true){
    userMessage = "Accedi pure";
} else {
    userMessage = "Non puoi accedere"
}

console.log(userMessage);