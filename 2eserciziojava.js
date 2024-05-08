 /* Traccia 1  */

let quantitaStock = 30;
let operazione = parseInt(prompt("Ciao! Quante magliette vuoi acquistare?"));

if (operazione <= 30) {
    alert("Eccoti le tue magliette.");
}
else {
    alert("Mi spiace! Unità non disponibili.");
}


 /* Traccia 2  */

let voto = 31;
voto = 18;
voto = 25;

if (voto < 18) {
    console.log("Insufficiente.");
}
else if (voto >= 18 && voto < 21) {
    console.log("Sufficiente.");
}
else if (voto >= 21 && voto < 24) {
    console.log("Buono.");
}
else if (voto >= 24 && voto < 27) {
    console.log("Distinto.");
}
else if (voto >= 27 && voto < 29) {
    console.log("Ottimo.");
}
else if (voto >= 30) {
    console.log("Eccellente.");
}


 /* Traccia 3  */

let array1 = [
    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark'],
];

let array2 = [
    [['trovarli,']],
    ['tu', 'sciocchi'],
    ['tu', 'sciocchi', ['padron', 'Sauron']],
    ['nel', ['fuggite', 'gandalf']],
    [['domarli,', 'passare'], 'buio']
];

/*  Stampa a schermo la frase: "Un anello per domarli, un anello per trovarli, 
un anello per ghermirli e nel buio incatenarli."  */

let frase = (array1[0][0] + " " + array1[1][0] + " " + array1[0][1] +
    " " + array2[4][0][0] + " " + array1[0][0] + " " + array1[1][0] +
    " " + array1[0][1] + " " + array2[0][0][0] + " " + array1[0][0] + " " + array1[1][0] +
    " " + array1[0][1] + " " + array1[2][0] + " " + array1[2][1] + " " + array2[3][0] +
    " " + array2[4][1] + " " + array1[0][2]);

document.write(frase);  /* Stampa a schermo */
console.log(frase);   /* Stampa in console */


/* Traccia extra */

let inserisciValoreProdotti = parseInt(prompt("Inserisci il numero del prodotto desiderato:"));

switch (inserisciValoreProdotti) {
    case 1:
        alert("Eccoti la tua Coca-Cola.")
        break;

    case 2:
        alert("Eccoti la tua fanta.")
        break;

    case 3:
        alert("Eccoti il tuo thé.")
        break;

    case 4:
        alert("Eccoti la tua acqua.")
        break;

    default:
        alert("Prodotto non disponibile.")
        break;
}