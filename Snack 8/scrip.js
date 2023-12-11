/*Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.*/

const numberUser = (prompt('inserisci un numero di 4 cifre'));

console.log(numberUser);
// considero il numero inserito come una stringa e uso la proprietà split per estrapolare singolarmente i 4 numeri
numberUser.split("");

console.log(numberUser.split(""));
// con charAt proprietà della stringa definisco delle variabili prendendo i singoli numeri
const a = numberUser.charAt(0);
const b = numberUser.charAt(1);
const c = numberUser.charAt(2);
const d = numberUser.charAt(3);

console.log(a, b, c, d);

//con la variabile somma trasformo le stringhe di numeri in numeri grazie a number e ne faccio la somma
let somma = Number (a) + Number (b) + Number (c) + Number (d);

console.log(somma);

