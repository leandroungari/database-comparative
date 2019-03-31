import app from "../../app";

export const listDataset = () => {

  console.log("=> list of datasets:");
  if (app.listDataset().length === 0) 
    console.log("there's no datasets.");
  else 
    app.listDataset().forEach((item, index) => {
      console.log(`#${index} ${item.name} (${item.size})`);
    });
}