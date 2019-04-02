import app from "../../app";
import interpreter from "../../interpreter";
import { getDataset } from "../../app/dataset";

const databaseCommands = {
  "insert-database": async (
    databaseType, 
    databaseName, 
    datasetName
  ) => {
    
    const db = await app
    .database(databaseType, databaseName);
    const {data} = getDataset(datasetName);
    interpreter.time().start();
    const items = await db.insert(datasetName, data);
    interpreter.time().end();
    
    db.close();
    console.log(
      `this commands inserts ${items} item(s).`
    );  

    return interpreter.time().timeInMs();
  },
  "read-database": (
    databaseType, 
    databaseName, 
    tableName,
    condition = {}
  ) => {
    
    const db = await app
    .database(databaseType, databaseName);
    interpreter.time().start();
    const result = db.read(tableName, condition);
    interpreter.time().end();

    if (result.length <= 30) {
      result.forEach((item, index) => 
        console.log(
          `${index} => ${JSON.stringify(item)}`
        )
      );
    }
  },
  "update-database": (
    databaseType, 
    databaseName, 
    tableName,
    condition = {}, 
    values = {}
  ) => {
    const db = await app
    .database(databaseType, databaseName);
    interpreter.time().start();
    const updatedItems = db
    .update(tableName, condition, values);
    interpreter.time().end();
    console.log(
      `this commands updates ${updatedItems} item(s).`
    );
  },
  "delete-database": (
    databaseType, 
    databaseName, 
    tableName, 
    condition = {}
  ) => {
    
    const db = await app
    .database(databaseType, databaseName);

    interpreter.time().start();
    const deletedItems = db
    .delete(tableName, condition);
    interpreter.time().end();
      
    console.log(
      `this commands deletes ${deletedItems} item(s).`
    );
  }
}


export default databaseCommands;