export default class Hand{
    constructor() {
        this.handValue = undefined;
        this.rock = 0;
        this.scissors = 1;
        this.paper = 2;
        this.hands = [this.rock, this.scissors, this.paper];
    }

    setHandValueRandom() {
        this.handValue = this.hands[this.randomIndex()];
    }

    randomIndex() {
        return Math.floor(Math.random() * 3);
    }

    isStrongerthan(Hand) {
        this.fight(Hand);
    }

    fight(Hand) {
        if (this.handValue == Hand.handValue) {
            console.log('draw');
        } else if ((this.handValue + 1) % 3 === Hand.handValue) {
            console.log(`you win`);
        } else {
            console.log(`you lose`);
        }
    }

}