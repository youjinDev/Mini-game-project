import Hand from './hand.js';

const containers = document.querySelectorAll('.container');
const mineContainer = document.querySelector('.mine__container');
const houseContainer = document.querySelector('.house__container');
const mineText = document.querySelector('.mine__container > p');
const houseText = document.querySelector('.house__container > p');
const mine = document.querySelector('.mine');
const house = document.querySelector('.house');

const footer = document.querySelector('.footer');
const resultBoard = document.querySelector('.board__result');

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
        } else if (isScissors) {
            this.handOfPlayer.setHandValue(1);
        } else if (isPaper) {
            this.handOfPlayer.setHandValue(2);
        }
        
        // 여기서 승패 결정
        this.handOfPlayer.fightVs(this.handOfHouse);
        this.switchGameField();

    }
    
    switchGameField() {
        containers.forEach(element => {
            element.style.visibility = 'hidden';
        });

        footer.style.display = 'none';
        
        mine.style.visibility = 'visible';
        mineContainer.style.visibility = 'visible';
        mineText.innerHTML = 'YOU PICKED';
        
        house.style.visibility = 'visible';
        houseContainer.style.visibility = 'visible';
        houseText.innerHTML = 'HOUSE PICKED';
        
        this.handOfPlayer.displayHandImgTo(mine);
        
        setTimeout(() => {
            console.log('start setTimeOut 3');
            house.style.animationPlayState = 'paused';
            house.style.borderColor = 'whitesmoke';
            this.handOfHouse.displayHandImgTo(house);
            console.log(this.handOfPlayer.state);
        }, 3000);
        
        setTimeout(() => {
            console.log('start setTimeOut 5');
            this.handOfPlayer.updateScoreBoard();
            resultBoard.style.visibility = 'visible';
        }, 4000);
    }
}