// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


// Salviamo in una variabile locale la funzione createApp, presa dalla variabile globale Vue.
const { createApp } = Vue


// Inizializziamo un'instanza dell'applicazione Vue, invocando la funzione createApp
createApp ({
    data() {

        return{
            
            message: "Ciao sono un messaggio",
            src: "img/spotify-lg.png",
            alt: "spotify"
        }
    }
//     Invochiamo il metodo .mount() per connettere l'istanza al tag HTML con id #app e renderizzare l'app
}).mount('#app')