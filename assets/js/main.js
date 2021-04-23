//età passeggero
var age = parseInt(prompt("Qual è la tua età?"));
if (isNaN(age)) {
    alert("Hai inserito caratteri non numerici per indicare l'età! Riprova!");
}
console.log(age);

//chilometri da percorrere
var km = parseInt(prompt("Quanti chilometri percorrerai?"));
if (isNaN(km)) {
    alert("Hai inserito caratteri non numerici per indicare i chilometri! Riprova!");
}
console.log(km);

//prezzo biglietto
var prezzo = 0.21 * km;
console.log(prezzo);

//se minorenni sconto 20%, se over 65 sconto 40%
var prezzoFinale;
if (age < 18) {
    prezzoFinale = (prezzo * 80) / 100;
} else if (age >= 65) {
    prezzoFinale = (prezzo * 60) / 100;
} else {
    prezzoFinale = prezzo;
}

//prezzo finale con massimo 2 decimali
console.log(prezzoFinale.toFixed(2));