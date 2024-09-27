const words = 'The curious cat danced gracefully under the shimmering moonlight while the old clock chimed melodiously'.split(' ');
const wordsCount = words.length;

function addClass(ele, name) {
    ele.className += ' ' + name;
}

function removeClass(ele, name) {
    ele.className = ele.className.replace(name, '');
}

function randomword() {
    const randomIndex = Math.ceil(Math.random() * wordsCount);
    return words[randomIndex-1];
}

function formatword(word) {
    return `<div class="word">
        <span class="letter">${word.split('').join('</span><span class="letter">')}</span>
        </div>`;
}

function newGame() {
    document.getElementById('words').innerHTML = '';
    for (let i = 0; i < 200; i++) {
        document.getElementById('words').innerHTML += formatword(randomword());
    }
        addClass(document.querySelector('.word'), 'current');
        addClass(document.querySelector('.letter'), 'current');
}

document.getElementById('game').addEventListener('keyup', event => {
    const key = event.key;
    const currentWord = document.querySelector('.word.current');
    const currentLetter = document.querySelector('.letter.current');
    const expected = currentLetter?.innerHTML || ' ';
    const isLetter = key.length === 1 && key !== ' ';
    const isSpace = key === ' ';
    // console.log({key, expected});

    if(isLetter){
        if(currentLetter){
            addClass(currentLetter,key===expected ? 'correct':'incorrect');
            removeClass(currentLetter,'current');
            if(currentLetter.nextSibling){
                addClass(currentLetter.nextSibling,'current');
            }
        }
    }
    if(isSpace){
        if(expected !==' '){
            const lettersToInvalidate=[...document.querySelectorAll('.word.current .letter:not(.correct)')];
            lettersToInvalidate.forEach(letter=>{
                addClass(letter,'incorrect');
            });
        }
        removeClass(currentWord,'current');
        addClass(currentWord.nextSibling,'current');
        if(currentLetter){
            removeClass(currentLetter,'current');
        }
        addClass(currentLetter.nextSibling.firstChild,'current');
    }
});

newGame();