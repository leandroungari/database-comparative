import {
  loadState,
  storeState,
  loadDataset,
  storeDataset,
  stateExists,
  datasetExists,
  testExists,
  storeTest,
  loadTest
} from "./state";

class App {

  constructor() {
    this.cmd = undefined;
    
    if (!stateExists()) storeState({
      datasets: [],
      currentTest: undefined
    });

    if (!datasetExists()) storeDataset({
      datasets: []
    });

    if(!testExists()) storeTest({
      tests: []
    })
  }

  databases(list = []) {
    this.listOfDatabases = [
      ...list
    ];
    return this;
  }

  database(name) {
    const database = this.listOfDatabases
      .filter(a => a.name === name)[0];
    
    if (!database) console
      .log("database not found.");
    return database;
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

  createTest(name) {
    let file = loadTest();
    if(
      file.tests.map(a => a.name)
      .includes(name)
    ) {
      console.log("you cannot have two tests with same name.");
      return;
    }

    let state = loadState();
    state = {
      ...state,
      currentTest: name
    }
    storeState(state);

    file.tests = [
      ...file.tests,
      {
        name,
        commands: []
      }
    ];
    storeTest(file);
  }

  updateTest(command) {
    const file = loadTest();
    let test = this.getTest(); 
    if (test){
      test = {
        ...test,
        commands: [
          ...test.commands,
          command
        ]
      };

      file.tests = [...file.tests
        .filter(a => a.name !== test.name),
        test
      ];
      storeTest(file);
    }
  }

  getTest() {
    const state = loadState();
    
    const file = loadTest();
    const test = file.tests.filter(
      a => a.name === state.currentTest
    )[0]; 

    return test;
  }

  thereIsTest() {
    const state = loadState();
    return state.currentTest ? true : false;
  }

  saveTest() {
    let state = loadState();
    state = {
      ...state,
      currentTest: undefined
    }
    storeState(state);
  }

  play() {
    if (this.cmd) 
      this.cmd.render();
  }
}

const app = new App();
export default app;