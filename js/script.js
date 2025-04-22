// PALINDROMA
/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
NON USARE SPLIT E REVERSE!!! TUTTO CON CICLO FOR */

/* 
 - prompt che chiede all'utente di inserire una parola
 - funzione che dato il prompt verifica se la parola inserita dall'utente e palindroma
 PARAMETRI
 - parolaPalindroma
 RETURN
 - boolean
*/
const userWord = prompt("Inserisci la tua parola", "anna");
const wordPalindroma = isWordPalindroma(userWord);
console.log(wordPalindroma);

//FUNZIONE
function isWordPalindroma(userWord) {
    let isWordPalindroma = false;
    for( let i = 0; i < (userWord.length -1 ) / 2; i++) {
        let curLetter = userWord[i];
        console.log(curLetter, userWord[userWord.length -1 -i])
        if (curLetter === userWord[userWord.length -1 -i]){
            isWordPalindroma = true;
        }
    }
    return isWordPalindroma;
}




// PARI E DISPARI
/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


