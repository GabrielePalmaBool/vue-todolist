/*

Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

    (*)MILESTONE 1
    Stampare all’interno di una lista HTML un item per ogni todo.
    Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

    (*)MILESTONE 2
    Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

    (*)MILESTONE 3
    Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1) oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

2) cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/

//SVOLGIMENTO


const { createApp } = Vue;

createApp({

    data() {

        return {

            error: false,

            message : "",

            tasks: [
                {
                    text: 'Fare i compiti',
                    done: false, 
                }, 
                {
                    text: 'Fare la spesa',
                    done: true,
                },
                {
                    text: 'Fare il bucato',
                    done: false,
                },
                {
                    text: 'Portare fuori il cane',
                    done: true
                },
                {
                    text: 'Pulire casa',
                    done: true
                },
                {
                    text: 'Andare a ritirare abito',
                    done: false
                },
                {
                    text: 'Andare a prendere i bambini da scuola',
                    done: false
                },
            ]
                
        }
    },
    methods: {
        
        addTask(){
                //controllo se la lunghezza minima del task è rispettata, se non è così
                if(this.message.length < 5){

                    //richiamo messaggio di errore
                    return this.error = true;
                  
                }

                //creo un'altra variabile : oggetto, con il testo scelto dall'utente
                taskN = {text:this.message,done:false};

                //inserisco tale variabile nel mio array
                this.tasks.unshift(taskN);

                //imposto la variabile messaggio vuota
                this.message = "";

                console.log( this.tasks);
            
        },

        delTask(indice){
            //elimino quello specifico compito
            this.tasks.splice(indice,1);
        },

        
    },

}).mount('#app');