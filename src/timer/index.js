class Timer {
  constructor() {
    this.start = undefined;
    this.end = undefined;
  }

  start() {
    this.start = process.hrtime();
  }

  end() {
    this.end = process.hrtime(this.start);
  }

  timeInMs() {
    return this.end[1]/1000000;
  }
}


const timer = new Timer();
export default timer;