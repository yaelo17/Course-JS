// Baraja de 12 cartas (cada palo se repite 3 veces)
const deck = ['♠', '♣', '♥', '♦', '♠', '♣', '♥', '♦', '♠', '♣', '♥', '♦'];

// Algoritmo de Fisher-Yates para barajar
function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function dealCards(numCards) {
  // Reparte 'numCards' cartas de la parte superior de la baraja
  return deck.splice(0, numCards);
}

// Barajamos la baraja
shuffleDeck();

// Repartimos 3 cartas a cada jugador
const player1Hand = dealCards(3);
const player2Hand = dealCards(3);
const player3Hand = dealCards(3);

console.log('Mano del Jugador 1:', player1Hand);
console.log('Mano del Jugador 2:', player2Hand);
console.log('Mano del Jugador 3:', player3Hand);
