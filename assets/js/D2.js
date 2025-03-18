/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 10;
const num2 = 20;
if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
  0;
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
const num3 = 6;
if (num3 === 5) {
  console.log("equal");
} else {
  console.log("not equal");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num4 = 20;
if (num4 % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num5 = 10;
const num6 = 8;
if (num5 === 8 || num6 === 8) {
  console.log("Almeno uno dei numeri forniti è uguale ad 8.");
} else if (num5 + num6 || num5 - num6) {
  console.log("La somma o la sottrazione dei numeri forniti è uguale a 8.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60;
if (totalShoppingCart > 50) {
  console.log("Il tuo totale è: $", totalShoppingCart);
} else {
  console.log("Il tuo totale è: $", totalShoppingCart);
  totalShoppingCart += 10;
  console.log("Costi di spedizione: 10$. Il tuo totale ora è: $", totalShoppingCart);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = 100;
totalShoppingCart = totalShoppingCart - totalShoppingCart * 0.2;

if (totalShoppingCart > 50) {
  console.log("Il tuo totale è: $", totalShoppingCart);
} else {
  console.log("Il tuo totale è: $", totalShoppingCart);
  totalShoppingCart += 10;
  console.log("Costi di spedizione: 10$. Il tuo totale ora è: $", totalShoppingCart);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
num7 = 20;
num8 = 5;
num9 = 10;

if (num7 >= num8 && num7 > num9 && num8 > num9) {
  console.log(num7, num8, num9);
} else if (num7 >= num8 && num7 > num9 && num9 > num8) {
  console.log(num7, num9, num8);
}
if (num8 >= num7 && num8 > num9 && num7 > num9) {
  console.log(num8, num7, num9);
} else if (num8 >= num7 && num8 > num9 && num9 > num7) {
  console.log(num8, num9, num7);
}
if (num9 >= num8 && num9 > num7 && num8 > num7) {
  console.log(num9, num8, num7);
} else if (num9 >= num8 && num9 > num7 && num7 > num8) {
  console.log(num9, num7, num8);
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const valore = "ciao";

if (typeof valore === "number") {
  console.log("Il valore fornito è un numero.");
} else {
  console.log("Il valore fornito non è un numero.");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num10 = 10;

if (num10 % 2 === 0) {
  console.log("Il numero è pari.");
} else {
  console.log("Il numero è dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
let val = 10;
if (val < 10 && val > 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const lista = [];
lista.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(lista);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
lista.splice(9, 1, 100);
console.log(lista);
