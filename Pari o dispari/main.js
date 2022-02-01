// chiedo all'utente di scegliere tra pari e dispari
let scelta = prompt('Scegli tra pari e dispari');
let rispostaScelta = scelta;


// Chiedo all'utente un numero tra 1 e 5
let pari_Dispari = parseInt(prompt('Inserisci un numero tra 1 e 5'));
if (isNaN(pari_Dispari) || (pari_Dispari < 1 || pari_Dispari > 5)){
    alert('Questo non è un numero valido');
}

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
alert("Il numero dell'utente è " + risposta);


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
if (pari_Dispari == "pari" && pariDispari(somma) == "pari"){
    alert('Ha vinto il giocatore');
} else {
    alert('Ha vinto il computer');
}

if (pari_Dispari == "dispari" && pariDispari(somma) == "dispari"){
    alert('Ha vinto il giocatore');
} else{
    alert('Ha vinto il computer');
}