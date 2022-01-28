// Chiedo all'utente un numero tra 1 e 5
let pari_Dispari = parseInt(prompt('Inserisci un numero pari o dispari tra 1 e 5'));

// creo una funzione per verificare se il numero è pari o dispari
function pariDispari(numero) {

    let ritorno;

    if (numero % 2 == 0) {
        ritorno = "pari";
    } else {
        ritorno = "dispari";
    }
    return ritorno;
}

//verifico se la funzione del pari e dispari viene rispettata
let risposta = pari_Dispari;
alert('il numero è ' + pariDispari(risposta));


// creo una funzione per generare un numero casuale tra 1 e 5
function numeroRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// verifico se il numero casuale viene effettivamente creato
let numeroCasuale = numeroRandom(1, 5);
alert("Il numero casuale generato dal computer è " + numeroCasuale);

// Procedo con la somma tra il numero casuale generato dal computer e il numero inserito dall'utente
let somma = risposta + numeroCasuale;
alert("La somma tra il numero casuale del computer e il numero dell'utente è " + somma);
console.log(somma)

//Verifico chi è il vincitore con delle condizioni
if (numeroCasuale > risposta){
    alert('Ha vinto il computer');

} else if ( risposta > numeroCasuale){
    alert("Ha vinto l'utente");

} else if (risposta = numeroCasuale) {
    alert('Questo è un pareggio');
}