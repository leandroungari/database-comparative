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

  createDataset(name, data) {
    const state = loadState();
  
    if(
      state.datasets
      .map(a => a.name)
      .includes(name)
    ) return;

    state.datasets = [
      ...state.datasets,
      {name, size: data.length}
    ];
    storeState(state);

    const file = loadDataset();
    file.datasets = [
      ...file.datasets,
      {name, data}
    ];
    storeDataset(file);
  }

  deleteDataset(name) {
    const state = loadState();

    if (
      !state.datasets
      .map(a => a.name)
      .includes(name)
    ) return;

    state.datasets = 
      state.datasets
      .filter(a => a.name !== name);
    storeState(state);

    const file = loadDataset();
    file.datasets = 
      file.datasets
      .filter(a => a.name !== name);
    storeDataset(file);
  }

  listDataset() {
    const state = loadState();
    return state.datasets;
  }

  play() {
    if (this.cmd) 
      this.cmd.render();
  }
}

const app = new App();
export default app;