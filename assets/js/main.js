//età passeggero
var age = parseInt(prompt("Qual è la tua età?"));
if (isNaN(age)) {
    alert("Hai inserito caratteri non numerici per indicare l'età! Riprova!");
}
console.log(age);
document.getElementById("età").innerHTML = age + " anni";

//chilometri da percorrere
var km = parseInt(prompt("Quanti chilometri percorrerai?"));
if (isNaN(km)) {
    alert("Hai inserito caratteri non numerici per indicare i chilometri! Riprova!");
}
console.log(km);
document.getElementById("chilometri").innerHTML = km + " km";

//prezzo biglietto
var prezzo = 0.21 * km;
console.log(prezzo);
document.getElementById("prezzo").innerHTML = prezzo.toFixed(2) + " €";

//se minorenni sconto 20%, se over 65 sconto 40%
var prezzoFinale;
if (age < 18) {
    prezzoFinale = (prezzo * 80) / 100;
    document.getElementById("tipo_sconto").innerHTML = "Hai ricevuto uno sconto del 20% perchè sei minorenne! Il nuovo prezzo è:"
    document.getElementById("prezzo_scontato").innerHTML = prezzoFinale.toFixed(2) + " €";
} else if (age >= 65) {
    prezzoFinale = (prezzo * 60) / 100;
    document.getElementById("tipo_sconto").innerHTML = "Hai ricevuto uno sconto del 40% perchè sei over-60! Il nuovo prezzo è:"
    document.getElementById("prezzo_scontato").innerHTML = prezzoFinale.toFixed(2) + " €";
} else {
    prezzoFinale = prezzo;
    document.getElementById("tipo_sconto").innerHTML = "Non hai ricevuto uno sconto! Devi pagare il prezzo pieno, cioè:"
    document.getElementById("prezzo_scontato").innerHTML = prezzoFinale.toFixed(2) + " €";
}
console.log(prezzoFinale);