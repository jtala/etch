# etch

30 Day Vanilla JS Challenge

Drumkit -> Days spent: 2
    Day began - 10/26
    Notes:
        I am comfortable setting up the event click to play the sounds, but not with adding and removing classes.

window.addEventListener('keydown', (e) =>{

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;;    
    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();
  });

  function removeTransition (e) {
    if (e.propertyName !== 'transform') return;

    this.classList.remove('playing');

  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend',removeTransition));