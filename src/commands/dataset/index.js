import { loadDataset } from "../dataset/load";
import { listDataset } from "../dataset/list";
import { deleteDataset } from "../dataset/delete";
import interpreter from "../../interpreter";

const datasetCommands = {
  "load-dataset": (type, name, from) => {
    interpreter.time().start();
    loadDataset({type, name, from});
    interpreter.time().end();
  },
  "list-dataset": () => {
    interpreter.time().start();
    listDataset();
    interpreter.time().end();
  },
  "delete-dataset": (name) => {
    interpreter.time().start();
    deleteDataset(name);
    interpreter.time().end();
  },
}

export default datasetCommands;