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
const resultText = document.querySelector('.message__result');

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

        // 여기서 승패 결정
        this.handOfPlayer.fightVs(this.handOfHouse);
    }
    
    changeGameField() {
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
            console.log('start setTimeOut');
            house.style.animationPlayState = 'paused';
            house.style.borderColor = 'whitesmoke';
            this.handOfHouse.displayHandImgTo(house);
            this.updateResultBoard();
        }, 3000);
        
        setTimeout(() => {
            this.handOfPlayer.updateScoreBoard();
            resultBoard.style.visibility = 'visible';
        }, 4000);
    }

    updateResultBoard() {
        if (this.handOfPlayer.state = 'win') {
            resultText.innerText = 'YOU WIN';
        } else if (this.handOfPlayer.state = 'LOSE') {
            resultText.innerText = 'YOU LOSE';
        } else if (this.handOfPlayer.state = 'draw') {
            resultText.innerText = 'DRAW';
        }        
    }
}