'use strict';

const GMAE_CHANCE = 10;
const inputNumber = document.querySelector('.number_input');
const submitBtn = document.querySelector('.submit');
const answerBox = document.querySelector('.answer>p');
const gameChance = document.querySelector('.chance');

let parsedClientAnswerArray;
let chance = GMAE_CHANCE;
let answerArray;

setAnswerArray();

submitBtn.addEventListener('click', () => {    
    if (inputNumber.value > 9999 || inputNumber.value < 1000 || inputNumber.value == '') {
        alert('올바른 숫자를 입력하세요.');
        return;
    }
    let clientAnswerArray = inputNumber.value.split('', 4);
    parsedClientAnswerArray = clientAnswerArray.map((element) => parseInt(element, 10));
    console.log(answerArray);

    // answerArray와 clientArray의 숫자를 비교
    showAnswer();
    countChance();

    // 맞추면
    if (isEqual(parsedClientAnswerArray, answerArray)) {
        alertWin();
        initGame();
        setAnswerArray();
    }

    function showAnswer() {
        let strikeNum = 0;
        let ballNum = 0;

        for (let i = 0; i < answerArray.length ; i++) {
            if (answerArray[i] == parsedClientAnswerArray[i]) {
                strikeNum++;
            }
            if(parsedClientAnswerArray.includes(answerArray[i])) {
                ballNum++;
            }
        }
        answerBox.innerHTML = `<strong>${strikeNum}</strong> strike! <br> <strong>${ballNum}</strong> ball!`;
    }
});

function isEqual(parsedClientAnswerArray, answerArray) {
    if (parsedClientAnswerArray.join('') == answerArray.join('')) {
        return true;
    }
}

function alertWin() {
    alert(`HOERUN! The answer is ${answerArray.join('')}!`);
}

function initGame() {
    chance = GMAE_CHANCE;
    gameChance.innerHTML = chance;
    inputNumber.value = '';
    answerBox.innerHTML = `<p>각 자릿수가 중복되지 않는 <br> 네 자리 숫자를 입력하세요</p>`;
}

function countChance() {
    // 기회 다 쓰면
    if (chance === 0) {
        alert('GAME OVER!');
        initGame();
        setAnswerArray();
        return;
    }
    --chance;
    gameChance.innerHTML = chance;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
}

function setAnswerArray() {
    answerArray = [];
    answerArray.push(getRandomNumber());
    answerArray.push(getRandomNumber());
    answerArray.push(getRandomNumber());
    answerArray.push(getRandomNumber());
}