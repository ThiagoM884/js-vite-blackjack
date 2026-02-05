import { shuffle } from 'underscore';



/**
 * Esta funcion crea una nueva baraja
 * @param {Array<string>} tipos 
 * @param {Array<string>} restoCartas 
 * @returns {Array<string>} Regresa una nueva baraja mezclada
 */


// Crear baraja
export const crearDeck = (tipos, restoCartas) => {
    let deck = [];
    for(let i = 2; i<=10; i++) {
        for(let tipo of tipos){
            deck.push(`${i}${tipo}`)
        }
    }
    
    for(let resto of restoCartas) {
        for(let tipo of tipos) {
            deck.push(`${resto}${tipo}`);
        }
    }
    
    
    
    return shuffle(deck); // Permite mezclar el deck
}

