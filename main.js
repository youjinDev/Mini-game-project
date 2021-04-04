'use strict';

let numArray = [0,0,0,0];

// 0~9 출력
function getRandomNumber() {
    
    for (let i = 0; i < numArray.length; i++) {
        let number = Math.floor(Math.random() * 10);
        numArray[i] = number;
    }
    if (numArray[0] == 0) {
        let number = Math.floor(Math.random() * 10);
        numArray[0] = number;
    }
}

numArray.forEach(() => {
    getRandomNumber();
});

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', () => {
    
});

