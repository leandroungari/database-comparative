import fs from "fs";
import csv from "fast-csv";
import app from "../app";

export const loadDataset = async (options) => {
    
  switch(options.type) {
    case "csv":
      await readCSVFile(options.from)      
      .then(data => {
        app.createDataset(options.name, data);
      });
      break;
    case "json":
      const data = readJSONFile(options.from);
      app.createDataset(options.name, data);
      break;
  }
}

const readCSVFile = filePath => {

  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filePath);
    const result = [];
    csv
      .fromStream(stream, {headers: true})
      .on("data", data => {
        result.push(data);
      })
      .on("end", () => {
        resolve(result);
      });
  });
}

const readJSONFile = filepath => {
  const fileBuffer = fs
    .readFileSync(filepath, "utf8");
  return JSON.parse(new String(fileBuffer));
}