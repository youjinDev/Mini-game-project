
export default class Hand{
    constructor() {
        this.handValue = undefined;
        this.handsImgArray = ['./img/rock.png', './img/scissors.png', './img/paper.png'];
    }

    setHandValue(value) {
        this.handValue = value;
    }

    setHandValueRandom() {
        this.handValue = randomIndex();
    }

    fightVs(Hand) {
        if (this.handValue == Hand.handValue) {
            console.log('draw');
        } else if ((this.handValue + 1) % 3 === Hand.handValue) {
            console.log(`you win`);
        } else {
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
}

function randomIndex() {
    return Math.floor(Math.random() * 3);
}