export default class Hand{
    constructor() {
        this.handValue = undefined;
        this.handsImgArray = ['./img/rock.png', './img/scissors.png', './img/paper.png'];
        this.scoreBoard = document.querySelector('.score');
        this.score = 12;
        this.state = undefined;
    }

    setHandValue(value) {
        this.handValue = value;
    }

    setHandValueRandom() {
        this.handValue = randomIndex();
    }

    fightVs(Hand) {
        // change score, set vitcory animation
        if (this.handValue == Hand.handValue) {
            console.log('draw');
            this.state = 'draw';
        } else if ((this.handValue + 1) % 3 === Hand.handValue) {
            console.log(`you win`);
            this.score += 3;
            this.state = 'win';
        } else {
            this.score -= 3;
            this.state = 'lose';
            console.log(`you lose`);
        }
    }
    
    displayHandImgTo(targetDiv) {
        let img = document.createElement('img');
        img.setAttribute('src', this.handsImgArray[this.handValue]);
        img.style.margin = '0 10px';
        targetDiv.appendChild(img); // targetDiv == mine || house
        this.changeBackgroundColor(targetDiv);
    }

    changeBackgroundColor(targetDiv) {
        switch(this.handValue) {
            case 0: 
                targetDiv.style.backgroundColor = 'crimson';
                break;
            case 1:
                targetDiv.style.backgroundColor = 'goldenrod';
                break;
            case 2:
                targetDiv.style.backgroundColor = 'darkturquoise';
                break;
        }
    }

    updateScoreBoard() {
        this.scoreBoard.innerText = this.score;
    }
}

function randomIndex() {
    return Math.floor(Math.random() * 3);
}