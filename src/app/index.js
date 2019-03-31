import {
  loadState,
  storeState,
  loadDataset,
  storeDataset,
  stateExists,
  datasetExists
} from "./state";

class App {

  constructor() {
    this.cmd = undefined;
    
    if (!stateExists()) storeState({
      datasets: []
    });

    if (!datasetExists()) storeDataset({
      datasets: []
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

  play() {
    if (this.cmd) 
      this.cmd.render();
  }
}

const app = new App();
export default app;