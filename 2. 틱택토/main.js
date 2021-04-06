'use strict';

const mainTable = document.querySelector('.main_table');
const buttonX = document.querySelector('.btn__x');
const buttonO = document.querySelector('.btn__o');

let mainArray = [];
// 스타트 기본값 - x 선공
let playerX = true;
let startPlayer = 'x';
let countX = 5;
let countO = 4;
let isGameOver = false;

// mainArray에 이미 만들어진 테이블 객체를 가져와야 함
makeMainArray();

buttonX.addEventListener('click', () => {
    // X가 선공, 기본값
    buttonDisabled(true);
});

buttonO.addEventListener('click', () => {
    // O가 선공
    playerX = false;
    startPlayer = 'o';
    setCount();
    buttonDisabled(true);
})

mainTable.addEventListener('click', (e) => {
    buttonDisabled(true);
    const target = e.target;
    // target === TD 일 때 한정
    if (target.tagName != 'TD') {
        console.log('It is not a right event target');
        return;
    }

    let isEmpty = ((target.innerText) === '🐇');
    if (!isEmpty) {
        alert('Already occupied!');
        return;
    } else {
        putMark(target);
        isWin(target);
    }
});

function makeMainArray() {
    for (let i = 1; i <= 3 ; i++) {
        let row = [];
        for (let j = 1 ; j <= 3; j++) {
            let td = document.querySelector(`.main_table tr:nth-child(${i}) td:nth-child(${j})`);
            row.push(td);
        }
        mainArray.push(row);
    }
}

function putMark(target) {
    if(playerX) {
        target.innerText = '❌'
        target.style.backgroundColor = '#ffff00';
        countX--;
    } else {
        target.innerText = '⭕'
        target.style.backgroundColor = '#40c4ff';
        countO--;
    }
    swapTurn();
}

function swapTurn() {
    playerX = !playerX;
}

function setCount() {
    // 선공이 쪽이 총 5개, 후공이 총 4개
    if (playerX) {
        countX = 5;
    } else {
        countO = 5;
    }
}

function isWin(target) {
    // o or x가 세 개 이상 놓일 때부터 함수 실행
    if (countO > 2 || countX > 2) {
        return;
    } else {
        // 가로 빙고
        rowCheck(target);
        // 세로 빙고
        columnCheck(target);
        // 대각선 빙고
        diagonalCheck(target);
    }
    if (!isGameOver) {
        drawCheck();
    }
}

function rowCheck(target) {
    for (let i = 0; i < 3 ; i++) {
        let tempArr = [];
        for (let j = 0 ; j < 3 ; j++) {
            tempArr.push(mainArray[i][j].innerText);
        }
        if (tempArr.every(element => element === '❌')) {
            gameOver('win', target.innerText);
            return;
        } else if (tempArr.every(element => element === '⭕')) {
            gameOver('win', target.innerText);
            return;
        }
    }
}

function columnCheck(target) {
    for (let i = 0 ; i < 3 ; i++) {
        let tempArr = [];
        for (let j = 0; j < 3 ; j++) {
            tempArr.push(mainArray[j][i].innerText);
        }
        if (tempArr.every(element => element === '❌')) {
            gameOver('win', target.innerText);
            return;
        } else if (tempArr.every(element => element === '⭕')) {
            gameOver('win', target.innerText);
            return;
        }
    }
}

function diagonalCheck(target) {
    let tempArray = [];
    tempArray.push(mainArray[0][2].innerText);
    tempArray.push(mainArray[1][1].innerText);
    tempArray.push(mainArray[2][0].innerText);
    let isRightToLeftDiagonal = tempArray.every(element => element == tempArray[0]);

    tempArray.length = 0;
    tempArray.push(mainArray[0][0].innerText);
    tempArray.push(mainArray[1][1].innerText);
    tempArray.push(mainArray[2][2].innerText);
    let isLeftTorightDiagonal = tempArray.every(element => element == tempArray[0]);

    if (isRightToLeftDiagonal || isLeftTorightDiagonal) {
        gameOver('win', target.innerText);
    }
}

function drawCheck() {
    if (startPlayer == 'x' && countX == 0) {
        gameOver('draw');
        return;
    } else if(startPlayer == 'o' && countO == 0) {
        gameOver('draw');
        return;
    }
}

function gameOver(reason, player) {
    switch (reason) {
        case 'win':
            alert(`Player ${player}가 이겼습니다!`);
            break;
        case 'draw':
            alert('비겼습니다!');
            break;
    }
    isGameOver = true;
    console.log(mainArray);
}

function buttonDisabled(boolean) {
    buttonO.disabled = boolean;
    buttonX.disabled = boolean;
}