import app from "../../app";

const testCommands = {
  "start-test": (name) => {
    app.createTest(name);
  },
  "end-test": () => {
    app.saveTest();
  }
}

export default testCommands;