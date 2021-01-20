class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(callback){
        callback()
      };
    }, 1000);
    // ... your code goes here
  }
  getMinutes() {
    // ... your code goes here
    let secondsToMinutes = Math.floor(this.currentTime / 60)
    return secondsToMinutes
  }
  getSeconds() {
    // ... your code goes here
    let remainingSeconds = this.currentTime % 60;
    return remainingSeconds
  }
  
  twoDigitsNumber(secMin) {
    
    if(secMin < 10){
      return `0` + `${secMin}`
    } else {
      return `${secMin}`
    }
    // ... your code goes here
  }

  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {

    let minutes = this.twoDigitsNumber(this.getMinutes());
    let seconds = this.twoDigitsNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
    // ... your code goes here
  }
}
