/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

//variabile let per definire un array vuoto
//prompt per chiedere un numero all'utente
//for per reiterare la richiesta per 6 volte
//if condizione accettazione dato solo se disparo
//array push per inserirlo nell'array 

let arrX = [];

for (let i = 0; i < 6; i++) {
    const y = Number(prompt('inserisci un numero'));
        console.log(y);

if (y % 2 == 1) {
    
    arrX.push(y);
    console.log(arrX);


} else if (y % 2 == 0) {
    console.log(y,'tu non puoi entrare'); 
    
} 
}



