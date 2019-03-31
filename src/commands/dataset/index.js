import { loadDataset } from "../dataset/load";
import { listDataset } from "../dataset/list";
import { deleteDataset } from "../dataset/delete";


const datasetCommands = {
  "load-dataset": (type, name, from) => {
    loadDataset({type, name, from});
  },
  "list-dataset": () => {
    listDataset();
  },
  "delete-dataset": (name) => {
    deleteDataset(name);
  },
}

export default datasetCommands;