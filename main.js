const btnLetter = document.querySelector('.sendLetter')


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
            console.log('koniec');
            message.textContent += 'i koniec'
            this.endGame = true
        }
    }
}
const game = new Sentences(["pudło", "pop"])
game.makeArrSentence(1)
game.makeGameArr();
game.checkSentence('p')
console.log(game);