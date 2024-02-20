/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function crazySum(n1, n2) {
//   if (n1 != n2) {
//     return n1 + n2;
//   } else {
//     return (n1 + n2) * 3;
//   }
// }

// console.log(crazySum(2, 2));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function boundary(n) {
//   if (20 < n && n <= 100 || n === 400) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(boundary(400));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString("I TOPI NON AVEVANO NIPOTI"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function upperFirst(str) {
//   let frase = str.split(' ');

//   for (var i = 0; i < frase.length; i++) {
//     frase[i] = frase[i].charAt(0).toUpperCase() + frase[i].slice(1).toLowerCase();
//   }
//   return frase.join(' '); 
// }

// console.log(upperFirst("le DOmENiCHe DI agOsTo"));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function giveMeRandom(n) {
//   let numeriRandom = [];

//   for (let i = 0; i < n; i++) {
//     let numeroRandom = Math.floor(Math.random() * 11);
//     numeriRandom.push(numeroRandom);
//   }

//   return numeriRandom;
// }

// console.log(giveMeRandom(1))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function area(l1, l2) {
//   return l1 * l2;
// }

// console.log(area(5, 5));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function crazyDiff(n) {
//   if(n > 19) {
//     return Math.abs(n - 19) * 3;
//   } else {
//     return Math.abs(n - 19);
//   }
// }

// console.log(crazyDiff(3));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function codify(str) {
//   if(str.startsWith("code")) {
//     return str;
//   } else {
//     return "code" + str;
//   }
// }

// console.log(codify("cademy"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function check3and7(n) {
//   if(n > 0 && (n % 3 === 0 || n % 7 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(check3and7(0))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function cutString(str) {
//   return str.slice(1, -1);
// }

// console.log(cutString("REVOLVER"));
