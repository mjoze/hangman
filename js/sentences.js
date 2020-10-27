import { categories } from './quotes.js';

export class Sentences {
    categories = categories

    gameEmptyArr = []
    helpArrToCheckRepeat = []
    sentenceToAsk = []
    placeToGenerate = document.querySelector('.game')
    failures = 0

    constructor(sentences) {
        this.sentences = sentences
        this.endGame = false
        this.category = ''
    }

    makeGameArr() {
        const h2 = document.querySelector('h2');
        h2.textContent = this.category;
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
        const message = document.querySelector('p');


        if (this.helpArrToCheckRepeat.includes(letter)) {
            let number = 1
            message.textContent = 'już było';
            this.failures += number;

            return
        }
        if (!this.sentenceToAsk.includes(letter)) {
            message.textContent = 'pudło';
            this.failures += 1;
        }
        else {
            this.sentenceToAsk.forEach((el, index) => {
                if (el === letter) {
                    this.gameEmptyArr[index] = letter;
                    blankAreas[index].textContent = letter;
                    message.textContent = 'trafiony';
                    this.helpArrToCheckRepeat.push(letter);
                }
            });
        }
        if ((this.gameEmptyArr.join('') === this.sentenceToAsk.join(''))) {
            this.endGame = true;
            message.textContent = 'koniec, wygrana';
        }
        if (this.failures === 6) {
            this.endGame = true;
            message.textContent = `porażka wisisz ! hasło to :
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
        const btnLetter = document.querySelector('.inputLetter');
        const h4 = document.querySelector('h4');
        this.checkSentence(btnLetter.value.toLowerCase());
        btnLetter.value = '';
        if (this.endGame === true) {
            const form = document.querySelector('form');
            form.innerHTML = '';
        }
        h4.textContent = this.failures;

    }
    reset() {
        this.runGame();
    }
    drawCategories() {
        const cat = [];
        const a = this.categories;
        for (const key in a) {
            cat.push(key);
        }
        const numb = Math.floor(Math.random() * cat.length);
        const sentences = this.categories[cat[numb]];
        const category = cat[numb];
        this.category = category;
        this.sentences = sentences;
    }
    drawPiceture() {

    }

}


