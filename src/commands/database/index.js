import app from "../../app";
import interpreter from "../interpreter";

const databaseCommands = {
  "insert-database": (
    databaseType, 
    databaseName, 
    datasetName
  ) => {
    
    app
    .database(databaseType, databaseName, () => {
      interpreter.time().start();
      const insertedItems = db.insert(datasetName);
      interpreter.time().end();
      console.log(
        `this commands inserts ${insertedItems} item(s).`
      );
    });
    
  },
  "read-database": (
    databaseType, 
    databaseName, 
    tableName,
    condition = {}
  ) => {
    const db = app
    .database(databaseType, databaseName);
    
    if(db) {
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
    }
  },
  "update-database": (
    databaseType, 
    databaseName, 
    tableName,
    condition = {}, 
    values = {}
  ) => {
    const db = app
    .database(databaseType, databaseName);
    if (db) {
      interpreter.time().start();
      const updatedItems = db
      .update(tableName, condition, values);
      interpreter.time().end();
      console.log(
        `this commands updates ${updatedItems} item(s).`
      );
    }
  },
  "delete-database": (databaseType, databaseName, tableName, condition = {}) => {
    const db = app
    .database(databaseType, databaseName);
    if (db) {
      interpreter.time().start();
      const deletedItems = db
      .delete(tableName, condition);
      interpreter.time().end();
      
      console.log(
        `this commands deletes ${deletedItems} item(s).`
      );
    }
  }
}


export default databaseCommands;