class Timer {
  constructor() {
    this.timeOne = undefined;
    this.timeTwo = undefined;
  }

  start() {
    this.timeOne = process.hrtime();
  }

  end() {
    this.timeTwo = process.hrtime(this.timeOne);
  }

  timeInMs() {
    return this.timeTwo[1]/1000000;
  }
}


const timer = new Timer();
export default timer;