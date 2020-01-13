class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }
  getMinutes() {
   return Math.floor(this.currentTime/60);
  }
  
  getSeconds() {
  return Math.floor(this.currentTime % 60);
  }
  
  twoDigitsNumber(input) {
    if(input<10){
      return "0" + input;
    }
    else if(input>9){
      return String(input);
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }

  // splitClick() {}
}