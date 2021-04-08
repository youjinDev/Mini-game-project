export default class Popup {
    constructor() {
        this.btnRules = document.querySelector('.btn__rules');
        this.popup = document.querySelector('.popup__rules');
        this.btnRules.addEventListener('click', this.onClick);
    }

    onClick = () => {
        this.popup.classList.toggle('invisible');
    }
}