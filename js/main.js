import { Sentences } from './sentences.js'


const btn = document.querySelector('.sendLetter');
const resetBtn = document.querySelector('.btn');

const game = new Sentences();
game.runGame();


btn.addEventListener('click', (e) => {
    e.preventDefault();
    game.checkGame();
})

resetBtn.addEventListener('click', () => {
    window.location.reload(true);
})
