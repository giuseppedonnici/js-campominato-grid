/*
**Consegna**
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di 
azzurro ed emetto un messaggio in console con il numero della cella 
cliccata.

**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

// Prendo dal documento il bottone
const play = document.getElementById("play-btn");

// Prendo dal documento la select
let difficulty = document.getElementById("difficulty");

// Prendo dal documento la griglia
let grid = document.querySelector(".grid");



let activeGrid = 0;
// Aggiungo al bottone un event listener
play.addEventListener('click', function () {
    // Al click creo la griglia solamente se non è già stata crea
    if (activeGrid === 0) {
        if (difficulty.value === '1') {
            // Tramite il ciclo for gli faccio creare 100 elementi
            for (let i = 1; i <= 100; i++) {
                let gridElement = createElementWithAClass('div', 'box-hard');
                // let currentElem = document.createElement("div");
                // currentElem.classList.add("box"); // Aggiungo ad ogni elemento la classe box
                gridElement.innerText = `${i}`; //Aggiungo ad ogni elemento il numero di iterazione
                gridElement.addEventListener('click', function () { //Aggiungo ad ogni elemento un event listener
                    this.style.backgroundColor = "skyblue"; // Al click di ogni elemento lo coloro di azzurro
                    console.log(`Hai cliccato la cella numero: ${this.innerText}`); // Al click di ogni elemento mostro in console il suo valore innerText
                });
                grid.append(gridElement); //Inserisco ogni elemento dentro la griglia
            }
            activeGrid++; // Incremento la variabile così evito di aggiungere ulteriori griglie

        } else if (difficulty.value === '2') {
            for (let i = 1; i <= 81; i++) {
                let gridElement = createElementWithAClass('div', 'box-medium');
                gridElement.innerText = `${i}`; //Aggiungo ad ogni elemento il numero di iterazione
                gridElement.addEventListener('click', function () { //Aggiungo ad ogni elemento un event listener
                    this.style.backgroundColor = "skyblue"; // Al click di ogni elemento lo coloro di azzurro
                    console.log(`Hai cliccato la cella numero: ${this.innerText}`); // Al click di ogni elemento mostro in console il suo valore innerText
                });
                grid.append(gridElement); //Inserisco ogni elemento dentro la griglia
            }
            activeGrid++; // Incremento la variabile così evito di aggiungere ulteriori griglie
        } else {
            for (let i = 1; i <= 49; i++) {
                let gridElement = createElementWithAClass('div', 'box-easy');
                gridElement.innerText = `${i}`; //Aggiungo ad ogni elemento il numero di iterazione
                gridElement.addEventListener('click', function () { //Aggiungo ad ogni elemento un event listener
                    this.style.backgroundColor = "skyblue"; // Al click di ogni elemento lo coloro di azzurro
                    console.log(`Hai cliccato la cella numero: ${this.innerText}`); // Al click di ogni elemento mostro in console il suo valore innerText
                });
                grid.append(gridElement); //Inserisco ogni elemento dentro la griglia
            }
            activeGrid++; // Incremento la variabile così evito di aggiungere ulteriori griglie
        }
    } else {
        alert ("La griglia è già attiva!");
    }
});


// FUNCTIONS
/**
 * Descrizione: la funzione crea un elemento html con una classe
 * @param {string} elemento 
 * @param {string} classe 
 * @returns un elemento html con una classe
 */
function createElementWithAClass(elemento, classe) {
    let newItem = document.createElement(`${elemento}`);
    newItem.classList.add(`${classe}`);
    return newItem;
}




