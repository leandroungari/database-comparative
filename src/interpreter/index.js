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

  prompt() {
    while(this.isRunning) {
      setTimeout(() => {
        
      }, 5000);

      const message = readLineSync.question("$ ", {
        limit: null
      });

      this.run(message);
    }
  }

  run(message, noTest = false) {

    const currentCommand = this.processMessage(message);

    if(
      Object.keys(this.listOfCommands)
      .includes(currentCommand.type)
    ) {

      this.currentTimer.start();
      ///////////////////////////
      this.listOfCommands[
        currentCommand.type
      ](...currentCommand.options);
      ///////////////////////////
      this.currentTimer.end();
        
      if (!noTest) this
        .processingTest(currentCommand, message);
    }
    else {
      console.log("command not found, try again.");
    }
  }

  processingTest(currentCommand, message) {
    if(
      app.tester().thereIsTestCase() && 
      currentCommand.type !== "start-test-case"
    ) {
      
      app.tester().updateTestCase({
        command: message.trim(),
      })
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
    
    this.prompt();
  }
}

const interpreter = new Interpreter();

export default interpreter;