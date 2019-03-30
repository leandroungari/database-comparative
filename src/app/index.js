export default class App {

  constructor() {
    this.cmd = undefined;
    this.listOfDatabases = [];
    this.listOfDatasets = [];
  }

  databases(list = []) {
    this.listOfDatabases = [
      ...this.listOfDatabases,
      ...list
    ];
    return this;
  }

  interpreter(cmd) {
    if (cmd !== undefined) {
      this.cmd = cmd;
      this.cmd.app = () => this;
    } 
    return this;
  }

  play() {
    if (this.cmd) 
      this.cmd.render();
  }
}