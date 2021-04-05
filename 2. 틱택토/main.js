'use strict';

const mainTable = document.querySelector('.main_table');
let playerX = true;
let countX;
let countO;


// 이 배열에 이미 만들어진 테이블 객체를 가져와야 함
let mainArray = [];
makeArray();
setCount();


console.log(mainArray);



mainTable.addEventListener('click', (e) => {
    const target = e.target;
    let isEmpty = (target.innerText !== '❌') && (target.innerText !== '⭕');

    if (target.tagName != 'TD') {
        console.log('잘못 누름');
        return;
    }
    // target === TD
    // 칸 클릭 시 비었으면 클릭한 칸에 X를 넣는다
    if (!isEmpty) {
        alert('Already occupied!');
        return;
    } else {
        putStone(target);
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
