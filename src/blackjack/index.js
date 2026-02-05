
import { crearDeck, valorCarta, pedirCarta, turnoComputadora, crearCarta } from "./usecases/index";


    let     deck = [];
    const   tipos = ['C','D','H','S'],
            restoCartas = ['A','J','K','Q'];
    const   btnPedir = document.querySelector('#btnPedir'), 
            btnDetener = document.querySelector('#btnDetener'),
            btnNuevo = document.querySelector('#btnNuevo');
    const   scores = document.querySelectorAll('span');
    let     divCartas = document.querySelectorAll('.divCartas');
    
    
    let puntosJugador = 0;
    

    
    
    const inicializarJuego = (cantJugadores = 2) => {
        deck = crearDeck(tipos, restoCartas);
        puntosJugador = 0;
        for(let i =0; i<cantJugadores; i++) {
            scores[i].innerText = 0;
            divCartas[i].innerText = '';
        }


        btnPedir.disabled = false;
        btnDetener.disabled = false;
        btnNuevo.disabled = true;



    }
    
    

    
    // Turno de jugador
    btnPedir.addEventListener('click', () => {
        // Se inserta la carta en el contenedor div de jugador
        const cartaTomada = pedirCarta(deck);
        crearCarta(divCartas[0], cartaTomada);
    
    
        // Se actualizan los puntos y se insertan en el HTML
        puntosJugador += valorCarta(cartaTomada);
        scores[0].innerText = puntosJugador;
        if (puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            btnNuevo.disabled = false;
            turnoComputadora(puntosJugador, deck, scores[scores.length - 1], divCartas[divCartas.length - 1]);
            
    
        } else if (puntosJugador === 21 ) {
            btnPedir.disabled = true; 
            btnDetener.disabled = true;
            btnNuevo.disabled = false;
            turnoComputadora(puntosJugador, deck, scores[scores.length - 1], divCartas[divCartas.length - 1]);
        }
    
    
    });
    
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        btnNuevo.disabled = false;
        turnoComputadora(puntosJugador, deck, scores[scores.length - 1], divCartas[divCartas.length - 1]);
    })
    
    
    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    })

    // Si yo quiero retornar alguna funcion para que otro modulo la trabaje, debo de retornarla en un objeto




