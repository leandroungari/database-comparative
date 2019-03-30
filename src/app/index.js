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

  interpreter(cmd) {
    if (cmd !== undefined) {
      this.cmd = cmd;
    } 
    return this;
  }

  createDataset(name, data) {
    const state = loadState();
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