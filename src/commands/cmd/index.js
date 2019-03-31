import interpreter from "../../interpreter";

const cmdCommands = {
  "exit": () => {
    console.log("see you later.");
    interpreter.stop();
  }
};

export default cmdCommands;