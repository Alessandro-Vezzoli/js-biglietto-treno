/* DESCRIZIONE ESERCIZIO
Il programma dovrà chiedere all'utente:

  //il numero di chilometri che vuole percorrere
  // l'età del passeggero.

 Sulla base di queste informazioni dovrà 
 calcolare il prezzo totale del viaggio.

 Queste sono le regole:

  //il prezzo del biglietto è definito in base ai km (0.21 € al km)
  //va applicato uno sconto del 20% per i minorenni
  //va applicato uno sconto del 40% per gli over 65 (fortunelli).

 L'output del prezzo finale va stampata in pagina assicurandoci
 sia leggibile da un essere umano 
(massimo due cifre decimali, per indicare centesimi sul prezzo).

   // guida usata :(https://stackoverflow.com/questions/37593889/calculate-percentage-in-javascript)
*/

// COSA CI SERVE:
// const / let,
//prompt
// if / else

// chiedere all'utente il numero dei km da percorrere

const km = prompt("Quanti chilometri vuoi percorrere?");

// chiedere all'utente l'età

const age = prompt("Quanti anni hai? ");

// Calcolare il prezzo del biglietto in base hai km (0,21 euro al km)

let price = km * 0.21;

//stamparlo in console

if (age < 18) {
  //se l'età è minore di 18 anni scontare il 20%

  const coupon20 = 20;

  let discount20 = price * ((100 - coupon20) / 100);

  // stampare in console

  console.log(discount20);

  // scriverlo in pagina
  priceTot.innerHTML = `Il prezzo del biglietto è: ${discount20} €`;
} else if (age > 65) {
  // se l'età e maggiore di 65 anni scontare del 40%

  const coupon40 = 40;

  let discount40 = price * ((100 - coupon40) / 100);

  // stampare in console

  console.log(discount40);

  // scriverlo in pagina
  priceTot.innerHTML = `Il prezzo del biglietto è: ${discount40} €`;
} else {
  // altrimenti stampare il prezzo senza sconto

  // stampare in console

  console.log(price);

  // scriverlo in pagina
  priceTot.innerHTML = `Il prezzo del biglietto è: ${price} €`;
}
