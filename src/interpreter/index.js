import readLineSync from "readline-sync";

import { loadDataset } from "../commands/loadDataset";
import { listDataset } from "../commands/listDataset";
import { deleteDataset } from "../commands/deleteDataset";

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

  prompt(commands = {}) {
    while(this.isRunning) {
      setTimeout(() => {
        
      }, 5000);

      const message = readLineSync.question("$ ", {
        limit: null
      });

      const currentCommand = this.processMessage(message);

      if(
        Object.keys(commands)
        .includes(currentCommand.type)
      ) {
        commands[
          currentCommand.type
        ](...currentCommand.options);
      }
      else {
        console.log("command not found, try again.");
      }
    }
  }

  processMessage(message) {
    const list = message
      .trim().split(" ");

    const [name, ...options]  = list.filter(a => a !== " ");
    return {
      type: name.toLowerCase(),
      options
    }
  }

  render() {
    
    this.prompt({
      "load-dataset": (type, name, from) => {
        loadDataset({type, name, from});
      },
      "list-dataset": () => {
        listDataset();
      },
      "delete-dataset": (name) => {
        deleteDataset(name);
      },
      "exit": () => {
        this.stop();
      }
    });
      
    
  }
}