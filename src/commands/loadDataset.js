import fs from "fs";
import app from "../app";

export const loadDataset = (options) => {
  
  switch(options.type) {
    case "csv":
      const data = readCSVFile(options.from);      
      app.createDataset(options.name, data);
      
      break;
    case "json":
      const result = readJSONFile(options.from);
      app.createDataset(options.name, result);
      break;
    default:
      return;
  }
}

const readCSVFile = filePath => {
    const data = fs
      .readFileSync(filePath, "utf8");
    const [header, ...items] = new String(data).split("\n");
  
    const headerItems = header.split(",");
    if (items[items.length - 1] === '') items.pop(); 
    const result = items.map(item => {

      const element = {};
      const itemValues = item.split(",");
      headerItems.forEach((headerItem, index) => {
        element[headerItem] = itemValues[index];
      })
      return element;
    });

  return result;
}

const readJSONFile = filepath => {
  const fileBuffer = fs
    .readFileSync(filepath, "utf8");
  return JSON.parse(new String(fileBuffer));
}