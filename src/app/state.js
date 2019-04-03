import fs from "fs";

const stateFilePath = "./app.json";
const datasetFilePath = "./dataset.json";
const testCaseFilePath = "./test-case.json";
const testFilePath = "./test.json";
const modelFilePath = "./models.json";

const load = (filePath) => {
  const fileBuffer = fs.readFileSync(
    filePath, "utf8"
  );
  return JSON.parse(fileBuffer);
}

const store = (filePath, data) => {
 
  const contentString = JSON.stringify(data);
  fs.writeFileSync(filePath, contentString);
}

const exists = path => fs.existsSync(path);

const loadState = () => 
  load(stateFilePath);
const storeState = state => 
  store(stateFilePath, state);
const stateExists = () => 
  exists(stateFilePath);


const loadDataset = () =>
  load(datasetFilePath);
const storeDataset = dataset => 
  store(datasetFilePath, dataset);
const datasetExists = () => 
  exists(datasetFilePath);

const loadTestCase = () => 
  load(testCaseFilePath);
const storeTestCase = test => 
  store(testCaseFilePath, test);
const testCaseExists = () => 
  exists(testCaseFilePath);

const loadTest = () => 
  load(testFilePath);
const storeTest = test => 
  store(testFilePath, test);
const testExists = () => 
  exists(testFilePath);

const loadModel = () => 
  load(modelFilePath);
const storeModel = model => 
  store(modelFilePath, model);
const modelExists = () => 
  exists();
  
export {
  loadTestCase,
  storeTestCase,
  testCaseExists,

  loadState,
  storeState,
  stateExists,
  
  loadDataset,
  storeDataset,
  datasetExists,

  loadTest,
  storeTest,
  testExists,

  loadModel,
  storeModel,
  modelExists
}