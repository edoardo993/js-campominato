// BONUS
// all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// definisco le funzioni che mi saranno utili successivamente

// FUNCTIONS

// funzione dedicata alla validazione del valore inserito dall'utente
function isNumberValid(input){
  if(input<=0 || input>100){
    return false
  }
  if(isNaN(input)){
    return false
  }
  return true
}
// END FUNCTIONS

// definisco adesso le variabili che mi occoreranno
var results=document.getElementById('result');
var pcNumberList = [];
var userNumberList = [];
var userNumber;
var min=1;
var max;
var totalBombs=16;
var maxUserNumbers;
var difficulty=prompt('Inserisci la difficoltà: 0 per facile, 1 per media, 2 per difficile:');

// costruisco uno switch per selezionare quale difficoltà è stata scelta
// dall'utente e far procedere il programma con i giusti numeri massimi
// per poter vincere ed il range dei numeri stessi
switch (difficulty) {
  case '2':
    max=50;
    maxUserNumbers=34
    break;
  case '1':
    max=80;
    maxUserNumbers=64
    break;
  case '0':
    max=100;
    maxUserNumbers=64;
    break;
  default:

}

// ciclo numeri randomici da 1 a 100 fino ad averne 16 nella lista;
// se non si ripetono, li aggiungo alla lista
while(pcNumberList.length<16){
  var pcRandomNumbers=Math.floor(Math.random() * max) + min;
  if(pcNumberList.indexOf(pcRandomNumbers)===-1){
    pcNumberList.push(pcRandomNumbers);
  }
}
console.log('I numeri randomici del computer sono: ' + pcNumberList);

// costruisco un ciclo while (mettendo come condizioni
// che non sia inserito dall'utente
// un numero presente nella lista dei numeri 'bomba'
// e che la lista dei numeri inseriti dall'utente
// non superi 84 elementi, decretando la vincita)
while(!pcNumberList.includes(userNumber) && userNumberList.length<maxUserNumbers){
  userNumber=parseInt(prompt('Inserisci un numero compreso tra ' + min + ' e ' + max + ' per favore:'));
  if(isNumberValid(userNumber)){
    if(userNumberList.includes(userNumber)===true){
      alert('Attenzione! Hai già inserito questo numero, riprova.')
    } else{
      if(pcNumberList.includes(userNumber)){
        alert('Aia! Hai beccato la bomba, hai perso :(')
      }
      userNumberList.push(userNumber);
      if(userNumberList.length===maxUserNumbers){
        alert('Complimenti! Sei riuscito ad evitare tutte e ' + totalBombs + ' le bombe presenti sul campo! Hai vinto!')
      }
    }
  }else{
    alert('Per favore, inserisci solo un numero compreso tra ' + min + ' e ' + max + '!')
  }
}

// restituisco all'utente la quantità di tentativi utilizzati,
// cioè la quantità dei numeri da lui inseriti
results.innerText='Bravo comunque! Sei riuscito a totalizzare: ' + userNumberList.length + ' punti!';
console.log('I numeri inseriti dall\'utente sono: ' + userNumberList);
console.log('L\'utente ha perso poiché ha inserito il numero: ' + userNumberList[userNumberList.length-1]);
