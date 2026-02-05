


/**
 * Funcion que nos permite insertar una carta tomada en el div
 * @param {HTMLElement} divCarta 
 * @param {string} cartaTomada sin return 
 * 
 */


export const crearCarta = (divCarta, cartaTomada ) => {
        const carta = document.createElement('img');
        carta.src = `assets/cartas/${cartaTomada}.png`;
        carta.classList.add('carta');

        divCarta.append(carta);
    }