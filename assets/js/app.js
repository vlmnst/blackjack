const miModulo = (() => {
    'use strict'

    let deck = [];
    let puntosJugadores = [];

    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];
//se inicializa el juego
    const iniciarJuego = ( numJugadores = 2 ) => {
        crearDeck()
        puntosJugadores= [];
        for( let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0)
        }        
        small.forEach(elem => elem.innerText = 0);
        divCartasJugador.forEach( elem => elem.innerHTML = '')
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }
//se crea el mazo
    const crearDeck = () => {
        deck = []
        for(let i = 2; i <= 10; i++) {
            for(let tipo of tipos) {
            deck.push( i + tipo)
            }
        }

        for(let tipo of tipos) {
            for(let esp of especiales) {
                deck.push(esp + tipo)
            }
        }
        return deck = _.shuffle(deck);
    }

    const pedirCarta = () => deck.pop()
    
    const valorCarta = ( carta ) => {
        let valor = carta.substring(0, carta.length - 1)
        return isNaN(valor) ? 
            ( valor === 'A') ? 11 : 10
            : valor * 1
    }

    //Selectores
    let btnNuevoJuego = document.querySelector('#btnNuevoJuego'),
        btnDetener = document.querySelector('#btnDetener'),
        btnPedir = document.querySelector('#btnPedir');

    let small = document.querySelectorAll('small'),
        divCartasJugador = document.querySelectorAll('.divCartas');

    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] += valorCarta(carta)
        small[turno].innerText = puntosJugadores[turno]
        return puntosJugadores[turno]
        }
    const crearCarta = ( carta, turno ) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta')
        divCartasJugador[turno].append(imgCarta)
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora ] = puntosJugadores
        setTimeout(() => {
            if (puntosComputadora === puntosMinimos)return alert('Nadie gana')
            else if ( puntosMinimos > 21 ) return alert('Ha ganado el computador')
            else if ( puntosComputadora > 21 ) return alert('Has ganado!')
            else { alert('Computadora gana')}
            }, 100 )
    }

    const turnoComputadora = ( puntosMinimos ) => {
        let puntosComputadora = 0
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length -1 )
            crearCarta( carta, puntosJugadores.length -1 )

        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) )

        determinarGanador()
    }



    //Eventos
    btnPedir.addEventListener('click', () =>{
        const carta = pedirCarta()
        const puntosJugador = acumularPuntos( carta, 0 )
        crearCarta( carta, 0 )


        if(puntosJugador > 21) {
            btnPedir.disabled = true
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador)
        } else if ( puntosJugador === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    })

    btnDetener.addEventListener('click', () => {
        turnoComputadora(puntosJugadores[0])
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    })

    btnNuevoJuego.addEventListener('click', () => {
        iniciarJuego()
    })
    return {
        nuevoJuego: iniciarJuego
    }
}) ()

