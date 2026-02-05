import { crearCarta, valorCarta, pedirCarta } from "./";
import { determinarGanador } from "./determinar-ganador";


/**
 * Funcion que desarrolla el juego de la computadora y luego invoca al ganador
 * @param {number} puntosMinimos 
 * @param {Array<string>} deck 
 * @param {HTMLElement} puntosHTML 
 * @param {HTMLElement} divCarta 
 */


export const turnoComputadora = ( puntosMinimos, deck, puntosHTML, divCarta ) => {
        
    let puntosComputadora = 0;
    
    do {
        const cartaTomada = pedirCarta(deck);
        crearCarta(divCarta, cartaTomada);
        puntosComputadora += valorCarta(cartaTomada);
        puntosHTML.innerText = puntosComputadora;
    
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    
        
    determinarGanador(puntosMinimos, puntosComputadora);
}