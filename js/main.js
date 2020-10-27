import { Sentences } from './sentences.js'
import { drawGallows } from './draw.js'


const btn = document.querySelector('.sendLetter');
const resetBtn = document.querySelector('.btn');

const game = new Sentences();
game.runGame();


btn.addEventListener('click', (e) => {
    e.preventDefault();
    game.checkGame();
    drawGallows('#canvas', game)
})

resetBtn.addEventListener('click', () => {
    window.location.reload(true);
})
