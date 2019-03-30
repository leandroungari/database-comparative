import readLineSync from "readline-sync";

import { loadDataset } from "../commands/loadDataset";

export default class Interpreter {
  constructor() {
    
  }


  render() {

    readLineSync.promptCLLoop({
      "load-dataset": (type, name, from) => {
        loadDataset(this.app(), {type, name, from});
      },
      "exit": () => true
    }, {
      limit: null,
    });
  }
}