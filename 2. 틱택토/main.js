'use strict';

const mainTable = document.querySelector('.main_table');
const buttonX = document.querySelector('.btn__x');
const buttonO = document.querySelector('.btn__o');

let mainArray = [];
let playerX = true;
let isStarted;
let countX = 4;
let countO = 4;

// mainArray에 이미 만들어진 테이블 객체를 가져와야 함
makeArray();
initGame();

mainTable.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName != 'TD') {
        console.log('잘못 누름');
        return;
    }

    let isEmpty = (target.innerText !== '❌') && (target.innerText !== '⭕');
    // target === TD 일 때 한정
    // 칸 클릭 시 비었으면 클릭한 칸에 X를 넣는다
    if (!isEmpty) {
        alert('Already occupied!');
        return;
    } else {
        putStone(target);
        console.log(countX, countO);
    }
});

function makeArray() {
    for (let i = 1; i <= 3 ; i++) {
        let row = [];
        for (let j = 1 ; j <= 3; j++) {
            let td = document.querySelector(`.main_table tr:nth-child(${i}) td:nth-child(${j})`);
            row.push(td);
        }
        mainArray.push(row);
    }
    console.log(mainArray);
}

function putStone(target) {
    if(playerX) {
        target.innerText = '❌'
        target.style.backgroundColor = '#ffff00';
        countX--;
    } else {
        target.innerText = '⭕'
        target.style.backgroundColor = '#40c4ff';
        countO--;
    }
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

function setPlayer() {

}

function initGame() {
    setCount();
    // td의 innerText 토끼로 바꾸기
    // OX버튼 disabled true로 바꾸기
    // counter 초기화하기
}

function isWin() {
    // o or x가 세 개 이상일 때부터
    // 가로로 이기기
    // innerText=x가 mainArray[i][j]에서 i가 0, 1, 2
    // 세로로 이기기
    // innerText=x가 mainArray[i][j]에서 j가 0, 1, 2
    // 대각선으로 이기기
    // innerText=x가 mainArray[i][j]에서 j가 같은지 확인
    // mainArray[0][0], mainArray[1][1], mainArray[2][2]
    // mainArray[0][2], mainArray[1][1], mainArray[0][1]
    // 무승부 : countX, countO이 둘 다 0일 때
}

function gameOver(reason, player) {
    switch (reason) {
        case 'win':
            alert(`${player}가 이겼습니다!`);
            break;
        case 'draw':
            alert('비겼습니다!');
            break;
    }
    initGame();
}