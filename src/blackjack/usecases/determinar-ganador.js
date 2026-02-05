

/**
 * Funcion que nos permite analizar quien gano
 * @param {number} puntosJugador 
 * @param {number} puntosComputadora devuelve un alert con el ganador
 */

export const determinarGanador = (puntosJugador, puntosComputadora) => {
        setTimeout( () => { // Nos permite que el alert no se ejecute enseguida, sino q se tome 10ms de respuesta
            if(puntosComputadora === puntosJugador) {
                alert('Nadie gana');
            }
            else if(puntosJugador > 21) {
                alert('Computadora gana');
            }
            else if (puntosComputadora > 21) {
                alert('Jugador gana')
            }
            else {
                alert('Computadora gana');
            }
            
    }, 100)
}