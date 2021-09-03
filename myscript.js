// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
// da indovinare sono stati individuati.


let numeriCasuali = [];

while ( numeriCasuali.length < 5) {

    let numero = getRandomInt(100);

    if ( numeriCasuali.includes(numero) !== true ){

        numeriCasuali.push(numero);

    }

}

alert("Cerca di ricordare i seguenti numeri: " + numeriCasuali);

setTimeout(function(){

    let numeriScelti = [];

    for (let y = 0; y < 5; y++) {
        
        let numeroSingolo = parseInt(prompt("Ora prova ad ricordare, inserisci il primo numero che ricordi"));

        if ( isNaN(numeroSingolo) ) {
            numeroUtente = parseInt(prompt("Hai inserito un valore non numerico ! Inserisci nuovamente un numero"));
        }else if (numeriScelti.includes(numeroSingolo) == true) {
            numeroSingolo = parseInt(prompt("Hai gia inserito questo numero prova ad inserirne un altro"));
        } else if (numeriCasuali.includes(numeroSingolo) == true) {
            numeriScelti.push(numeroSingolo);
        }
        
    }
    // console.log(numeriScelti)

    console.log("Hai indovinato " + numeriScelti.length + " numeri su 5");
    console.log("I numeri sono i seguenti: " + numeriScelti) 

} ,30000)


// Funzione che genera numero casuale
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }