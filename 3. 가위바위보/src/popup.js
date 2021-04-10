export default class Popup {
    constructor() {
        this.popup = document.querySelector('.popup__rules');
        this.btnRules = document.querySelector('.btn__rules');
        this.btnRules.addEventListener('click', this.onClick);
        this.btnRulesClose = document.querySelector('.popup__btn--close');
        this.btnRulesClose.addEventListener('click', () => {
            this.popup.classList.toggle('invisible');
        })
    }

    onClick = () => {
        this.popup.classList.toggle('invisible');
    }
}