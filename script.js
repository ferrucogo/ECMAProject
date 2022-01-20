/* alert("Ciao a tutti!"); // Si può utilizzare l'apice ('), il doppio apice (""), o il backtick (``)
console.log("Il risultato ottenuto dalla funzione è: " + Math.sqrt(16)); // Esecuzione della radice quadrata
console.log(-Infinity); // Variabile Infinity/-Infinity
console.log(NaN); // Not a number
console.log(`Metà di 100 equivale a ${100/2}`); // Funzione matematica inline (solo con i backtick)
console.log("Pippo" * 6); //L'operazione non è consentita
console.log("3" == 3) //L'operazione restituisce esito positivo
console.log("Ciao a tutti"[2]); //Seleziona il carattere presente all'indice numero 2, ovvero il terzo carattere, e lo mostra a console
console.log(typeof("4")); // Anche se è un numero intero, il risultato di questa funzione è string, dati i doppi apici
console.log(typeof(4)); // Il risutlato della funzione è number in quanto rappresenta un valore numerico
console.log(typeof false); // Il valore restituito corrisponde al valore booleano di 'false'
console.log("3" === 3) // L'operazione restituisce esito negativo
console.log(5 === 4); // L'operazione restituisce esito negativo
console.log(5 != 4) // Forza la conversione, il risultato è 'true'
console.log(5 !== 4) // Non forza la conversione, il risultato è 'true'
console.log(NaN == Nan) //Confronto tra due oggetti appartenenti a un'infinita famiglia di oggetti non numerici

// Operatori logici: 
// ! (Not, operatore unario, si usa su un elemento singolarmente) 
// && (And, operatore binario, si usa su almeno due elementi) - T && T = T, T && F = F, F && T = F. F && F = F
// || (or, operatore binario, si usa su almeno due elementi) - T && T = T, T && F = T, F && T = T. F && F = F 

let numero = 5;
console.log(numero); // Il valore restituito è 5
numero = 7;
console.log(numero); // Il valore restituito è 7 */

/* =============== IF CONDITIONS ===============

let operazione = 5 + 6;

console.log("log operazione", operazione);

if ((operazione < 10) && (operazione === 11)) {
    console.log("sono passato dall'if");
} else {
    console.log("Non sono passato dall'if");
}

let numero3 = 5;

if (numero3 > 0) {
    console.log("Il numero è positivo")
} else if (numero3 === 0) {
    console.log("Il numero equivale a 0");
} else {
    console.log("Il numero è negativo")
}

let numero4 = 16;

if (numero4 > 0) {
    console.log("maggiore di 0");
} else if (numero4 > 10) {
    console.log("maggiore di 10");
} else if (numero4 >= 0) {
    console.log("maggiore o uguale a 0");
} else {
    console.log("Minore di 0");
}

let numero5 = 4;

if (numero5 % 2 === 0){
    console.log("divisibile per 2");
}

if (numero5 % 3 === 0){
    console.log("divisibile per 3");
} =============== END IF CONDITIONS =============== */

/* =============== WHILE / DO LOOPS ===============
let i = 0;

while (i < 10){ //Tentare di rivolgersi a un ciclo infinito causa un outOfMemory
    console.log("Numero I:", i);
    i = i + 1;
}

let j = 0;

do{
    console.log("Numero J:", j);
    j = j + 1;
}while (j > 10);

let y=10;

while (true){
    if(y % 7 === 0){
        console.log(y);
        break;
    }
    y++;
}
=============== END WHILE /DO LOOPS =============== */

/* =============== FOR LOOPS ===============
for (let k = 0; k < 10 ; k++){
    console.log(k);
}

for (let i=0; i <=100; i++){
    if (i === 0) {
        continue;
    }
    if (i % 7 === 0){
        console.log(i);
    }
}
=============== END FOR LOOPS =============== */



// k+=1;
// k=k+2;
// k+=2;
// k=k+3,
// k-=3;


