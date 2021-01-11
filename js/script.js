// Il computer deve generare 16 numeri casuali tra 1 e 100. V
// I numeri non possono essere duplicati. V
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. V
// L’utente non può inserire più volte lo stesso numero. V
// L’utente deve inserire solo numeri interi. V
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. V
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti. V
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. V


// definisco le funzioni che mi saranno utili successivamente

// FUNCTIONS

// funzione dedicata al calcolo dei numeri randomici
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result
}

// funzione dedicata alla validazione del valore inserito dall'utente
function isNumberValid(input){
  if(input<=0 || input>100) {
    return false
  }
  if(isNaN(input)) {
    return false
  }
  return true
}
// END FUNCTIONS

// definisco adesso le variabili --> lista numeri utente, lista numeri pc
// e dichiaro la variabile del prompt per l'utente
var results=document.getElementById('result');
var pcNumberList = [];
var userNumberList = [];
var userNumber;
var min=1;
var max=100;
var totalBombs=16;
var maxUserNumbers=84;

// ciclo numeri randomici da 1 a 100 fino ad averne 16 nella lista; se non si ripetono, li aggiungo alla lista
while(pcNumberList.length<16){
  var pcRandomNumbers = Math.floor(Math.random() * max) + min;
  if(pcNumberList.indexOf(pcRandomNumbers) === -1){
    pcNumberList.push(pcRandomNumbers);
  }
}
console.log('I numeri randomici del computer sono: ' + pcNumberList);

// costruisco un ciclo while (mettendo come condizioni che non sia inserito dall'utente un numero presente nella lista dei numeri 'bomba'
// e che la lista dei numeri inseriti dall'utente non superi 84 elementi, decretando la vincita)
while(!pcNumberList.includes(userNumber) && userNumberList.length<maxUserNumbers){
  userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 100 per favore:'));
  if(isNumberValid(userNumber)) {
    if(userNumberList.includes(userNumber) === true){
      alert('Attenzione! Hai già inserito questo numero, riprova.')
    } else {
      if(pcNumberList.includes(userNumber)){
        alert('Aia! Hai beccato la bomba, hai perso :(')
      }
      userNumberList.push(userNumber);
      if(userNumberList.length===maxUserNumbers){
        alert('Complimenti! Sei riuscito ad evitare tutte e ' + totalBombs + ' le bombe presenti sul campo! Hai vinto!')
      }
    }
  } else {
    alert('Per favore, inserisci solo un numero compreso tra ' + min + ' e ' + max + '!')
  }
}

// restituisco all'utente la quantità di tentativi utilizzati, cioè la quantità dei numeri da lui inseriti
results.innerText='Bravo comunque! Sei riuscito a totalizzare: ' + userNumberList.length + ' punti!';
console.log('I numeri inseriti dall\'utente sono: ' + userNumberList);
console.log('L\'utente ha perso poiché ha inserito il numero: ' + userNumberList[userNumberList.length-1]);
