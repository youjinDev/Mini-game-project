import Hand from './hand.js';

const handPlayer = new Hand();
handPlayer.handValue = 0;
console.log(handPlayer.handValue);
console.log(handPlayer);

const handHouse = new Hand();
handHouse.setHandValueRandom();

console.log(handHouse.handValue);



let result = handPlayer.isStrongerthan(handHouse);
console.log(result);
