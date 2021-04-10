import Popup from './popup.js';
import Field from './field.js';

const replayBtn = document.querySelector('.btn__replay');
const newGame = new Field();
const rulesPopup = new Popup();

replayBtn.addEventListener('click', () => {
    document.location.href="";
})
