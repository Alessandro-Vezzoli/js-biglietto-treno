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

const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));

// chiedere all'utente l'età

const age = parseInt(prompt("Quanti anni hai? ", "0"));

// Controllare che siano numeri quelli inseriti

if (isNaN(km) || isNaN(age)) {
  document.getElementById("error").innerHTML = `INSERIRE I DATI CORRETTI! 😡`;
} else {
  // Calcolare il prezzo del biglietto in base hai km (0,21 euro al km)

  let price = km * 0.21;

  let priceTot;

  //stamparlo in console
  console.log("il prezzo senza sconto è:", price);

  if (age < 18) {
    //se l'età è minore di 18 anni scontare il 20%

    const coupon20 = 20;

    priceTot = price * ((100 - coupon20) / 100);

    // stampare in console

    console.log(priceTot);
  } else if (age > 65) {
    // se l'età e maggiore di 65 anni scontare del 40%

    const coupon40 = 40;

    priceTot = price * ((100 - coupon40) / 100);

    // stampare in console

    console.log(priceTot);
  } else {
    console.log(price);
  }

  document.getElementById(priceTot)= `Il prezzo del biglietto è: ${priceTot} €`;
}
