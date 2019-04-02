import * as dataset from "../../app/dataset";


export const listDataset = () => {
  
  console.log("=> list of datasets:");
  if (dataset.listDataset().length === 0) 
    console.log("there's no datasets.");
  else 
    dataset.listDataset().forEach((item, index) => {
      console.log(`#${index} ${item.name} (${item.size})`);
    });
}