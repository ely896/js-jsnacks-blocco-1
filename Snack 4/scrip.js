/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

/*-array con lista invitati
-prompt richiesta nome utente e definizione variabile
-comparazione variabile nome utente con lista array*/


const nameUser = prompt('inserisci il tuo nome');
let partyList = ["Fabio", "Luigi", "Luca", "Davide", "Marco", "Lucia", "Giovanni", "Francesca",]

for (let i = 0; i < partyList.length; i++) {
    

    if (nameUser === partyList[i]) {
        console.log('puoi entrare');
    } else {
        console.log('non puoi entrare');
    }
    
}