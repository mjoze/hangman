const btnLetter = document.querySelector('.sendLetter')


class Sentences {
    constructor(sentences) {
        this.sentences = sentences
        this.helpArrToCheckRepeat = []
        this.gameEmptyArr = []
        this.sentenceToAsk = []
        this.placeToGenerate = document.querySelector('.game')
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

class Game {
    hasła = new Sentences(this.passwords)
    constructor(passwords) {
        this.passwords = new Sentences(passwords)
    }
    newGame(passwords) {
        const randomNumber = Math.floor(Math.random() * (hasła.sentences.length));
        passwords.makeArrSentence(randomNumber);
        passwords.makeGameArr();
    }
    startGame(passwords) {
        const letter = document.querySelector('.inputLetter');
        if (!passwords.endGame) {
            passwords.checkSentence(letter.value)
        }
        letter.value = ''
    }
}
const hasła = new Sentences(['obcy', 'koszykowka', 'kareta'])
const game = new Game()
game.newGame(hasła)
game.startGame(hasła)

btnLetter.addEventListener('click', (e) => game.startGame(hasła))


