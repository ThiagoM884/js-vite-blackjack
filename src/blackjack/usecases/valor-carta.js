
/**
 * Funcion calcular el valor de la carta
 * @param {string} carta 
 * @returns {number} retorna el valor de la carta
 */

export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1); // Extraer el primer o los primeros digitos, salvo letras
    
    return ( isNaN(valor) ? ( ( valor === 'A' ) ? 11 : 10 ) : valor * 1); // Version reducida
    
        // valor * 1 pasa el (valor) a number porque esta previamente como string
}