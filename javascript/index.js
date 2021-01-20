const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerText = minutes[0];
  minUni.innerText = minutes[1];

}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  //console.log(seconds)
  secUni.innerText = seconds[1];
  secDec.innerText = seconds[0];
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  //let olList = document.querySelector('ol');
  let listSplit = document.createElement('li');
  listSplit.innerText = chronometer.splitClick();
  console.log(listSplit.innerText)
  splits.appendChild(listSplit)

}

function clearSplits() {
  // ... your code goes here
  splits.innerText = '';
  secUni.innerText = '0';
  secDec.innerText = '0';
  minDec.innerText = '0';
  minUni.innerText = '0';


}

function setStopBtn() {
  // ... your code goes here
  btnLeft.className = 'btn stop';
  btnLeft.innerText = 'STOP'
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.className = 'btn split';
  btnRight.innerText = 'SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.className = 'btn start'
  btnLeft.innerText = 'START'
}

function setResetBtn() {
  // ... your code goes here
  btnRight.className = 'btn reset'
  btnRight.innerText = 'RESET'
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.classList.contains('start')){
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn()
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(btnRight.classList.contains('reset')){
    clearSplits()
    chronometer.resetClick()
  } else {
    printSplit()
  }
});