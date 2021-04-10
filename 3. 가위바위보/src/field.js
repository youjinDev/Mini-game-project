import Hand from './hand.js';

const mainField = document.querySelector('.main__container');
const resultFiled = document.querySelector('.result__container');

const resultBoard = document.querySelector('.board__result');
const mineContainer = document.querySelector('.mine__container');
const houseContainer = document.querySelector('.house__container');
const mine = document.querySelector('.img__result--mine');
const house = document.querySelector('.img__result--house');

const scoreBoard = document.querySelector('.score');
const resultText = document.querySelector('.message__result');

let isWin;

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
        
        // 여기서 승패(state) 결정
        this.handOfPlayer.fightVs(this.handOfHouse);

        this.updateResultBoard();
        this.renderGameField();
    }
    
    renderGameField() {
        // main filed 지우고 result field 보이기
        mainField.style.display = 'none';
        resultFiled.style.visibility = 'visible';

        mine.style.visibility = 'visible';
        mineContainer.style.visibility = 'visible';
        
        house.style.visibility = 'visible';
        houseContainer.style.visibility = 'visible';
        
        this.handOfPlayer.displayHandImgTo(mine);
        
        setTimeout(() => {
            house.style.animationPlayState = 'paused';
            house.style.borderColor = 'whitesmoke';
            this.handOfHouse.displayHandImgTo(house);

            setTimeout(() => {
                this.updateScoreBoard();
                resultBoard.style.visibility = 'visible';

                if (this.handOfPlayer.state === 'win') {
                    this.blinkAnimation(mine);
                } else if (this.handOfPlayer.state === 'lose') {
                    this.blinkAnimation(house); 
                } else {
                    this.blinkAnimation(house);
                    this.blinkAnimation(mine); 
                }
            }, 1000);

        }, 3000);
    }

    updateResultBoard() {
        switch(this.handOfPlayer.state) {
            case 'win' :
                resultText.innerText = 'YOU WIN!';
                break;
            case 'lose' :
                resultText.innerText = 'YOU LOSE!';
                break;
            case 'draw' :
                resultText.innerText = 'DRAW';
                break;
        }
    }

    updateScoreBoard() {
        scoreBoard.innerText = this.handOfPlayer.score;
    }

    blinkAnimation(winner) {
        winner.style.setProperty('animation', 'blink 300ms ease-in-out 4 alternate');
    }
}