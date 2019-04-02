import {
  loadState,
  storeState,
  loadDataset,
  storeDataset,
} from "./state";


const createDataset = (name, data) => {
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

const deleteDataset = (name) => {
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

const listDataset = () => {
  const state = loadState();
  return state.datasets;
}

const thereIsDataset = name => {

  return listDataset()
  .map(dataset => dataset.name)
  .includes(name);
}

const getDataset = (name) => {
  const file = loadDataset();
  
  return file.datasets.filter(dataset => {
    return dataset.name = name;
  })[0];
}


export {
  getDataset,
  thereIsDataset,
  listDataset,
  deleteDataset,
  createDataset
}