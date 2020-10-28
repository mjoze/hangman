import { categories } from './quotes.js';

export class Sentences {
    categories = categories

    gameEmptyArr = []
    helpArrToCheckRepeat = []
    sentenceToAsk = []
    placeToGenerate = document.querySelector('.game')
    failures = 0
    sentences = []

    constructor(categoryTxt, messageField, inputField, errorsCounterField) {

        this.endGame = false
        this.category = ''
        this.categoryTxt = document.querySelector(categoryTxt);
        this.messageField = document.querySelector(messageField);
        this.inputLetter = document.querySelector(inputField);
        this.errorsCounterField = document.querySelector(errorsCounterField);
    }

    makeGameArr() {
        this.categoryTxt.textContent = this.category;
        for (let _ of this.sentenceToAsk) {
            const element = document.createElement('div');
            this.gameEmptyArr.push('-');
            element.textContent = '-';
            element.classList = 'passwordDiv';
            this.placeToGenerate.appendChild(element);
        }
    }
    makeArrSentence(number) {
        this.sentenceToAsk = this.sentences[number].split('');
    }
    checkSentence(letter) {

        const blankAreas = document.querySelectorAll('.passwordDiv');

        if (this.helpArrToCheckRepeat.includes(letter)) {
            let number = 1
            this.messageField.textContent = 'już było';
            this.failures += number;

            return
        }
        if (!this.sentenceToAsk.includes(letter)) {
            this.messageField.textContent = 'pudło';
            this.failures += 1;
        }
        else {
            this.sentenceToAsk.forEach((el, index) => {
                if (el === letter) {
                    this.gameEmptyArr[index] = letter;
                    blankAreas[index].textContent = letter;
                    this.messageField.textContent = 'trafiony';
                    this.helpArrToCheckRepeat.push(letter);
                }
            });
        }
        if ((this.gameEmptyArr.join('') === this.sentenceToAsk.join(''))) {
            this.endGame = true;
            this.messageField.textContent = 'koniec, wygrana';
        }
        if (this.failures === 6) {
            this.endGame = true;
            this.messageField.textContent = `porażka wisisz ! hasło to :
            ${this.sentenceToAsk.join('')}`;
        }

    }
    runGame() {
        this.drawCategories()
        const number = Math.floor(Math.random() * this.sentences.length) + 1;
        this.makeArrSentence(number - 1);
        this.makeGameArr();
    }
    checkGame() {

        this.checkSentence(this.inputLetter.value.toLowerCase());
        this.inputLetter.value = '';
        if (this.endGame === true) {
            const form = document.querySelector('form');
            form.innerHTML = '';
        }
        this.errorsCounterField.textContent = this.failures;

    }
    reset() {
        this.runGame();
    }
    drawCategories() {
        const categoryToDraw = [];
        const categoryArr = this.categories;
        for (const key in categoryArr) {
            categoryToDraw.push(key);
        }
        const numb = Math.floor(Math.random() * categoryToDraw.length);
        const sentences = this.categories[categoryToDraw[numb]];
        const category = categoryToDraw[numb];
        this.category = category;
        this.sentences = sentences;
    }

}


