// creo una funzione di controllo per i palindromi

function controlloPalindromo (parola1, parola2){
    let ritorno;
    if (parola1 < parola2 || parola1 > parola2){
        ritorno = "non sono palindrome";
    } else {

        //ciclo gli indici delle parole
        for (let i = 0; i < parola1.length; i++){
            
        if(parola1[i] === parola2[i]){
            ritorno = "Sono palindrome"
        } else {
            ritorno = "Non sono palindrome"
        }

        }

    } 


    return ritorno;
    
}

let primaParola = prompt('Inserisci una parola');
let secondaParola = prompt('Inserisci una parola');


let controllo = controlloPalindromo(primaParola, secondaParola)
console.log(controllo);