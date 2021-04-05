'use strict';

const GMAE_CHANCE = 10;
const inputNumber = document.querySelector('.number_input');
const submitBtn = document.querySelector('.submit');
const answerBox = document.querySelector('.answer>p');
const gameChance = document.querySelector('.chance');
const gameImg = document.querySelector('.main_img');

let clientAnswerArray;
let answerArray;
let chance;

// Setting answer number and game initialization
initGame();

// onClick main game img
gameImg.addEventListener('click', initGame);

// onClick button
submitBtn.addEventListener('click', () => {
    let inputNumberValue = inputNumber.value.split('');
    clientAnswerArray = inputNumberValue.map((element) => parseInt(element, 10));
    if (clientAnswerArray.length !== 4) {
        alert('올바른 숫자를 입력하세요.');
        return;
    }

    // 맞추면
    if (isEqual(clientAnswerArray, answerArray)) {
        alertWin();
        initGame();
        return;
    }

    // answerArray와 clientArray의 숫자를 비교
    showAnswer(answerArray, clientAnswerArray);
    countChance();
});

// function

function initGame() {
    setAnswerArray();
    chance = GMAE_CHANCE;
    gameChance.innerHTML = chance;
    inputNumber.value = '';
    answerBox.innerHTML = `<p>각 자릿수가 중복되지 않는 <br> 네 자리 숫자를 입력하세요</p>`;
}

function setAnswerArray() {
    let candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    answerArray = [];
    for (let i = 0; i < 4 ; i++) {
        let index = Math.floor(Math.random() * 9);
        let selected = candidates.splice((index - i), 1)[0];
        answerArray.push(selected);
    }
    console.log(answerArray);
}

function isEqual(arr1, arr2) {
    if (arr1.join('') == arr2.join('')) return true;
}

function showAnswer(arr1, arr2) {
    let strikeNum = 0;
    let ballNum = 0;

    for (let i = 0; i < arr1.length ; i++) {
        if (arr1[i] == arr2[i]) {
            strikeNum++;
        }
        if(arr2.includes(arr1[i])) {
            ballNum++;
        }
    }
    answerBox.innerHTML = `<strong>${strikeNum}</strong> strike! <br> <strong>${ballNum}</strong> ball!`;
}

function alertWin() {
    alert(`HOMERUN! The answer is ${answerArray.join('')}!`);
}

function countChance() {
    chance--;

    // 기회 다 쓰면
    if (chance === 0) {
        alert('GAME OVER!');
        initGame();
        return;
    }
    gameChance.innerHTML = chance;
}