
/**
 * Funcion para pedir carta
 * @param {Array<string>} deck 
 * @returns {string} devuelve una carta
 */


export const pedirCarta = (deck) => {
        
        if(deck.length === 0) {
            throw 'No hay cartas en el deck'; // Medida de seguridad, lo que sigue no se ejecutara
        }
        return deck.pop();
}