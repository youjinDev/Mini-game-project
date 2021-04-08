import Hand from './hand.js';

const containers = document.querySelectorAll('.container');
const mine = document.querySelector('.mine');
const house = document.querySelector('.house');

export default class Field {
    constructor() {
        this.field = document.querySelector('.playground');
        this.field.addEventListener('click', this.onClick);
        this.handOfPlayer = new Hand();
        this.handOfHouse = new Hand();
    }

    onClick = (event) => {
        const target = event.target;
        const isRock = target.matches('.img__rock');
        const isScissors = target.matches('.img__scissors');
        const isPaper = target.matches('.img__paper');

        if (!isRock && !isScissors && !isPaper) {
            return;
        }

        // setting the house's hand value by random
        this.handOfHouse.setHandValueRandom();
        
        // when target onClicked then determine your hand value and houses
        if (isRock) {
            this.handOfPlayer.setHandValue(0);
            this.changeGameField();
        } else if (isScissors) {
            this.handOfPlayer.setHandValue(1);
            this.changeGameField();
        } else if (isPaper) {
            this.handOfPlayer.setHandValue(2);
            this.changeGameField();
        }

        this.handOfPlayer.fightVs(this.handOfHouse);
    }
    
    changeGameField() {
        containers.forEach(element => {
            element.style.visibility = 'hidden';
        });
        mine.style.visibility = 'visible';
        house.style.visibility = 'visible';

        this.handOfPlayer.displayHandImgTo(mine);
        
        setTimeout(() => {
            console.log('start');
            house.style.animationPlayState = 'paused';
            house.style.borderColor = 'whitesmoke';
            this.handOfHouse.displayHandImgTo(house);
        }, 3000);
    }

}