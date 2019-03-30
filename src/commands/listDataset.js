import app from "../app";

export const listDataset = () => {

  console.log("List of datasets: ");
  app.listDataset().forEach((item, index) => {
    console.log(`  #${index} ${item.name} (${item.size})`);
  });
}