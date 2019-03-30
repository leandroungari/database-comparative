import readLineSync from "readline-sync";

import { loadDataset } from "../commands/loadDataset";
import { listDataset } from "../commands/listDataset";

export default class Interpreter {
  constructor() {
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    return this;
  }

  stop() {
    this.isRunning = false;
    return this;
  }

  render() {

    while(this.isRunning) {
      
      readLineSync.promptCL({
        "load-dataset": async (type, name, from) => {
          await loadDataset({type, name, from});
        },
        "list-dataset": () => {
          listDataset();
        },
        "exit": () => {
          this.stop();
        }
      }, {
        limit: null,
      });
    }
  }
}