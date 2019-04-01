import readLineSync from "readline-sync";
import app from "../app";

class Interpreter {
  constructor() {
    this.isRunning = false;
    this.listOfCommands = {};
    this.currentTimer = undefined;
  }

  start() {
    this.isRunning = true;
    return this;
  }

  stop() {
    this.isRunning = false;
    return this;
  }

  timer(timer) {
    this.currentTimer = timer;
    return this;
  }

  commands(commands = {}) {
    this.listOfCommands = commands;
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

        this.currentTimer.start();
        ///////////////////////////
        commands[
          currentCommand.type
        ](...currentCommand.options);
        ///////////////////////////
        this.currentTimer.end();
        if(
          app.thereIsTest() && 
          currentCommand.type !== "start-test"
        ) {
          
          app.updateTest({
            command: message.trim(),
            stats: {
              time: this.currentTimer.timeInMs()
            }
          })
        }
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
    
    this.prompt(this.listOfCommands);
  }
}

const interpreter = new Interpreter();

export default interpreter;