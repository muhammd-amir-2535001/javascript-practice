// JavaScript code (script.js)

function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; // Rewind audio to the start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

function handleKeyPress(event) {
    const keyCode = event.keyCode;
    playSound(keyCode);
}

function handleTransitionEnd(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', handleKeyPress);
