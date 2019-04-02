import {
  loadState,
  storeState,
  stateExists,
  
  loadDataset,
  storeDataset,
  datasetExists,

  testExists,
  storeTest,

  testCaseExists,
  storeTestCase
} from "./state";

class App {

  constructor() {
    this.cmd = undefined;
    this.currentTester = undefined;
    
    if (!stateExists()) storeState({
      datasets: [],
      currentTestCase: undefined,
      timeStart: undefined,
      timeEnd: undefined
    });

    if (!datasetExists()) storeDataset({
      datasets: []
    });

    if(!testExists()) storeTest({
      tests: []
    });

    if(!testCaseExists()) storeTestCase({
      tests: []
    });
  }

  databases(list = []) {
    this.listOfDatabases = [
      ...list
    ];
    return this;
  }

  test(tester) {
    this.currentTester = tester;
    return this;
  }

  tester() {
    if (!this.currentTester) throw new Error("You need define a tester!");
    return this.currentTester;
  }

  async database(databaseType, name) {
    const db = this.listOfDatabases
      .filter(a => a.name === databaseType)[0];
    
    if (!db) {
      console
      .log("database not found.");
      throw new Error("Database not found!");
    }
    
    const {database} = db;
    return await database.connect(name);
  }

  interpreter(cmd) {
    if (cmd !== undefined) {
      this.cmd = cmd;
    } 
    return this;
  }

  play() {
    if (this.cmd) 
      this.cmd.render();
  }
}

const app = new App();
export default app;