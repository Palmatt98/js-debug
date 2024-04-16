/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//1- dovrebbe stampare in console 5 volte (i)
//2- no
//3- si perché non verrà mai eseguita alcuna istruzione all'interno del for perché la condizione risulta sempre falsa, sin dall'inizio.

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// 1- se il numero é pari dovrebbe addizionare 5 e ritornare il risultato del numero altrimenti ritorna lo stesso numero passato come parametro 
//2- si: = ---> ===. confusione tra assegnazione(=) e uguaglianza(===)
//3-no

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
//1- dovrebbe stampare i numeri da 0 a 4
//2- si: le istruzioni all'interno delle tonde del for devono essere suddivise con ";" e non da ","
//3- no

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
//1- dovrebbe stampare un array di numeri pari da 2 a 8 
//2- si: non si deve mettere ";" dopo l'incremento "i++".
//   non deve esserci l'assegnazione "=" ma deve esserci l'uguaglianza "==="
//  non deve esserci (i) all'interno di push perché andrebbe a prendere solamenten il numero anzichè l'indice di numbers quindi dovrebbe essere numbers[i]
//3-no

displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]