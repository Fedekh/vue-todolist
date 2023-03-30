//*   Descrizione:

//* Rifare l'esercizio della to do list.
//* Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
//* - text, una stringa che indica il testo del todo
//* - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

//* MILESTONE 1
//* Stampare all'interno di una lista, un item per ogni todo.
//* Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

//* MILESTONE 2
//* Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante,
//*  il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


const { createApp } = Vue;

  createApp({
    data() {
      return {
        tasks: [
          {
            text: 'Pulire casa',
            done: false
          },
          {
            text: '"Uscire" il cane',
            done: true
          },
          {
            text: 'Cambiare gomme auto',
            done: true
          },
          {
            text: 'Ritinteggiare camera',
            done: true
          },
          {
            text: 'Fare palestra',
            done: false
          },

        ],

        newText: "",        //variabile d'appoggio per poi riscriverla e pusharlo all'interno dell array
        newDone: false,
        alertError: false
      };
    },
    methods:{
      addTask(){  //aggiungo una nuova voce task una volta cliccato il buttone verde
        if(this.newText.length > 0){
          this.alertError = false ;       //resetto cmq il flag
          this.newText = this.newText[0].toUpperCase() + this.newText.substring(1);
          this.tasks.unshift({text:this.newText , done:false});
          this.newText = "";
        }else{
          this.alertError = true;
        }
      },

    }
  }).mount('#app');