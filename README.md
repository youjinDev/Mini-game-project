# Mini-game-projects
vaniila JS로 미니 게임 만들기

## 1. [숫자야구⚾](https://github.com/youjinDev/Mini-game-project/tree/main/1.%20%EC%88%AB%EC%9E%90%EC%95%BC%EA%B5%AC)

![그림01](https://user-images.githubusercontent.com/67622600/117761213-f2340780-b261-11eb-896f-ffe30c576800.jpg)

### ✔ 게임 기능 :
- Host(컴퓨터)가 임의로 정한 숫자를 맞추는 게임입니다.
- Player는 각 자릿수가 중복되지 않는 네자리 숫자를 입력합니다.
- 정답와 같은 숫자를 맞히면 strike, 자릿수까지 모두 맞히면 home run을 띄워 알려줍니다.
- 정해진 횟수 내에 정답을 맞히면 승리입니다.

### ✔ 주요 코드 :
- 각 자릿수가 중복되지 않는 네자리 숫자 생성하기
```javaScript
function setAnswerArray() {
    let candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    answerArray = [];
    for (let i = 0; i < 4 ; i++) {
        let index = Math.floor(Math.random() * 9);
        let selected = candidates.splice((index - i), 1)[0];
        answerArray.push(selected);
    }
}
```
- 사용자가 입력한 숫자와 컴퓨터가 생성한 숫자가 일치하는지 검사하기
```javaScript
function isEqual(arr1, arr2) {
    if (arr1.join('') === arr2.join('')) return true;
}
```

___
## 2. [틱택토❌⭕](https://github.com/youjinDev/Mini-game-project/tree/main/2.%20%ED%8B%B1%ED%83%9D%ED%86%A0)
![그림02](https://user-images.githubusercontent.com/67622600/117762734-a6cf2880-b264-11eb-894d-2c565ce35f77.jpg)

### ✔ 게임 기능 :
- Player는 게임 시작 전, ❌와 ⭕ 둘 중 선공을 선택할 수 있습니다. 단, 게임 도중에는 바꿀 수 없습니다.
- 가로, 세로, 대각선에 먼저 같은 돌을 세 개 놓으면 승리합니다.

### ✔ 주요 코드 :
- 가로 검사
```javaScript
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
```
- 세로 검사
```javaScript
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
```
- 대각선 검사
```javaScript
function diagonalCheck(target) {
    let tempArray = [];
    tempArray.push(mainArray[0][2].innerText);
    tempArray.push(mainArray[1][1].innerText);
    tempArray.push(mainArray[2][0].innerText);
    let isRightToLeftDiagonal = tempArray.every(element => element === tempArray[0]);

    tempArray.length = 0;
    tempArray.push(mainArray[0][0].innerText);
    tempArray.push(mainArray[1][1].innerText);
    tempArray.push(mainArray[2][2].innerText);
    let isLeftTorightDiagonal = tempArray.every(element => element === tempArray[0]);

    if (isRightToLeftDiagonal || isLeftTorightDiagonal) gameOver('win', target.innerText);
}
```
- 승패 판정시 테이블 칸 클릭 전에 alert창이 뜨는 버그 수정⛏
```javaScript
function gameOver(reason, player) {
    switch (reason) {
        case 'win':
            setTimeout(() => { // setTimeOut 추가
                alert(`Player ${player}가 이겼습니다!`);
            }, 100);
            break;
        case 'draw':
            setTimeout(() => { // setTimeOut 추가
                alert(`비겼습니다!`);
            }, 100);
            break;
    }
    isGameOver = true;
}
```
___

## 3. [가위바위보✊✌✋](https://github.com/youjinDev/Mini-game-project/tree/main/3.%20%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4)
![game](https://user-images.githubusercontent.com/67622600/117764931-31655700-b268-11eb-9c7b-b8be83ececba.gif)


### ✔ 게임 기능 :
- 가위, 바위, 보 중 사용자가 고른 패와 컴퓨터가 랜덤 생성한 패로 승패를 겨룹니다.

### ✔ 주요코드 :
- 기능 모듈화


![ListOfRSP](https://user-images.githubusercontent.com/67622600/117778028-2ca89f00-b278-11eb-8490-651a2cc67e4d.png)


`hand.js` : 주먹, 가위, 보 손에 관한 클래스. 각각의 hand value와 이미지를 지정한다.


`field.js` : 게임의 전반적인 필드를 구성하는 클래스. player의 Hand 클래스 인스턴스와 host의 Hand 클래스 인스턴스를 생성하며, 승패에 관련된 화면 및 애니메이션을 렌더링한다.


`popup.js` : 게임의 규칙을 설명하는 팝업 클래스


`score.js` : 게임의 점수를 표시하는 클래스



- Hand 클래스의 인스턴스인 handOfPlayer, handOfHouse 승패 결정하기
```javaScript
fightVs(Hand) {
    if (this.handValue === Hand.handValue) {
        this.state = 'draw';
    } else if ((this.handValue + 1) % 3 === Hand.handValue) {
        this.score += 3;
        this.state = 'win';
    } else {
        this.score -= 3;
        this.state = 'lose';
     }
}
```
