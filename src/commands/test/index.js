import app from "../../app";

const testCommands = {
  "start-test": (name) => {
    app.createTest(name);
  },
  "list-test": () => {
    console.log("=> list of tests:");
    if (app.listTest().length === 0) 
      console.log("there's no tests.");
    else 
      app.listTest().forEach((item, index) => {
        console.log(`#${index} ${item.name}`);
      });
  },
  "end-test": () => {
    app.saveTest();
  }
}

export default testCommands;