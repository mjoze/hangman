class Sentences {

    gameEmptyArr = []
    helpArrToCheckRepeat = []
    sentenceToAsk = []
    placeToGenerate = document.querySelector('.game')

    constructor(sentences) {
        this.sentences = sentences
        this.endGame = false
    }

    makeGameArr() {
        for (let _ of this.sentenceToAsk) {
            const element = document.createElement('div')
            this.gameEmptyArr.push('-')
            element.textContent = '-'
            element.classList = 'passwordDiv'
            this.placeToGenerate.appendChild(element)
        }
    }
    makeArrSentence(number) {
        this.sentenceToAsk = this.sentences[number].split('')
    }
    checkSentence(letter) {
        const blankAreas = document.querySelectorAll('.passwordDiv');
        const message = document.querySelector('p');

        if (this.helpArrToCheckRepeat.includes(letter)) {
            message.textContent = 'już było'
            return
        }
        if (!this.sentenceToAsk.includes(letter)) {
            message.textContent = 'pudło';
        }
        else {
            this.sentenceToAsk.forEach((el, index) => {
                if (el === letter) {
                    this.gameEmptyArr[index] = letter
                    blankAreas[index].textContent = letter;
                    message.textContent = 'trafiony';
                    this.helpArrToCheckRepeat.push(letter)
                }
            });
        }
        if (this.gameEmptyArr.join('') === this.sentenceToAsk.join('')) {
            message.textContent += 'i koniec'
            this.endGame = true
        }
    }
    runGame() {
        const number = Math.floor(Math.random() * this.sentences.length) + 1;
        this.makeArrSentence(number - 1);
        this.makeGameArr();
        console.log(this.sentenceToAsk);
    }
    checkGame() {
        const btnLetter = document.querySelector('.inputLetter');
        this.checkSentence(btnLetter.value)
        btnLetter.value = ''
    }
}
const game = new Sentences(["pudło", "pop", "kotek"])
game.runGame();

const btn = document.querySelector('.sendLetter')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    game.checkGame()
})