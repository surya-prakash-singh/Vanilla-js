(function(){

  const keysUnderTransition = {
    "65": 0,
    "83": 0,
    "68": 0,
    "70": 0,
    "71": 0,
    "72": 0,
    "74": 0,
    "75": 0,
    "76": 0
  };

  function playSound(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    
    if (keysUnderTransition[e.keyCode]) {
      return;
    }
    keysUnderTransition[e.keyCode] = 2;

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
  }


window.addEventListener('keydown',playSound)

const keys = document.querySelectorAll(`.key`);

function removeTransition(e){

  var dataKey = this.getAttribute('data-key');


  var underTransitionVal = keysUnderTransition[dataKey];
  
  if (underTransitionVal === 2) {
    setTimeout(function() {
      keysUnderTransition[dataKey] = 1;
    }, 50);
  } else if (underTransitionVal === 1) {
    keysUnderTransition[dataKey] = 0;
  }

  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}


keys.forEach(key => key.addEventListener('transitionend', removeTransition));




})();