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
        const rock = target.matches('.img__rock');
        const scissors = target.matches('.img__scissors');
        const paper = target.matches('.img__paper');

        // 주먹 가위 보가 아니면 return
        if (!rock && !scissors && !paper) {
            return;
        }

        // 하우스 측 랜덤 셋팅하기
        this.handOfHouse.setHandValueRandom();
        console.log(this.handOfHouse);
        
        if (rock) {
            this.handOfPlayer.setHandValue(0);
            this.changeGameField('rock');
        } else if (scissors) {
            this.handOfPlayer.setHandValue(1);
        } else if (paper) {
            this.handOfPlayer.setHandValue(2);
        }
        console.log(this.handOfPlayer);

        this.handOfPlayer.isStrongerthan(this.handOfHouse); // 이걸 setTimeout으로 나중에 부르기
    }
    
    changeGameField(hand) {
        containers.forEach(element => {
            element.style.visibility = 'hidden';
            console.log(element);
        });

        mine.style.visibility = 'visible';
        house.style.visibility = 'visible';

        if (hand == 'rock') {
            const img = document.createElement('img');
            img.setAttribute('src', './img/rock.png');
            mine.appendChild(img);
        } else if (hand == 'scissors') {

        } else if (hand == 'paper') {

        }
    }

}