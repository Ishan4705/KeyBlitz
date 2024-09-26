const words='The curious cat danced gracefully under the shimmering moonlight while the old clock chimed melodiously'.split(' ');
const wordsCount=words.length;

function addClass(ele,name) {
    ele.className += ' ' + name;
}
function removeClass(ele,name) {
    ele.className= el.className.replace(name,'');
}

function randomword(){
    const randomIndex=Math.floor(Math.random()*wordsCount);
    return words[randomIndex];
}

function formatword(word){
    return `<div class="word">
        <span class="letter">${word.split('').join('</span><span class="letter">')}</span>
        </div>`;
}

function newGame(){
    document.getElementById('words').innerHTML='';
    for(let i=0;i<200;i++){
        document.getElementById('words').innerHTML+=formatword(randomword());
    }
  addClass(document.querySelector('.word'),'current');
  addClass(document.querySelector('.letter'),'current');
}

document.getElementById('game').addEventListener('keyup',event=>{
    const key=event.key;
    const currentLetter=document.querySelector('.letter.current');
    const expected=currentLetter.innerHTML;
    console.log({key,expected});
})

newGame();