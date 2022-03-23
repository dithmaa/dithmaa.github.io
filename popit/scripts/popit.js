const popit = () => {
  //audio trigger
const bubbleSound = new Audio('sounds/bubble-sound2.mp3');
bubbleSound.volume = 0.5;

const bubbleSoundTrigger = () => {
  
  bubbleSound.play();
}


// score counter
let sum = 0;
const scoreCounter = () => {

  sum++;

  let res = document.querySelector('.res');
  res.innerHTML = sum; 

  if (res.innerHTML >= 100) {
    res.classList.add('is-purple');
  }

}

// initialization cliker
const popitCreate = () => {
  const popit = document.querySelector('.grid');
  for (i = 1; i <= 36; i++) {

    const cell = document.createElement('span');
    cell.classList.add('cell');
    popit.appendChild(cell);
    
  }
}

// click watch
const popitClicker = () => {
  let cellElem = document.querySelectorAll('.grid>span');
  for (i = 0; i < 36; i++) {
    cellElem[i].addEventListener('click', function () {
      this.classList.toggle('active'); 
      bubbleSoundTrigger();
      scoreCounter();
    });
  }
  
}


popitCreate();
popitClicker();





}
popit();