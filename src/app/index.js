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
    this.cmd = cmd;
    this.cmd.app = () => this;
    return this;
  }

  start() {
    if (this.cmd) 
      this.cmd.render();
  }
}