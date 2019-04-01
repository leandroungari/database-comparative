import app from "../../app";

const databaseCommands = {
  "insert-database": (
    databaseType, 
    databaseName, 
    datasetName
  ) => {
    
    const db = app
    .database(databaseType, databaseName);
    if (db) {
      const insertedItems = db.insert(datasetName);
      console.log(
        `this commands inserts ${insertedItems} item(s).`
      );
    }
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
      const result = db.read(tableName, condition);

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
      const updatedItems = db
      .update(tableName, condition, values);
      
      console.log(
        `this commands updates ${updatedItems} item(s).`
      );
    }
  },
  "delete-database": (databaseType, databaseName, tableName, condition = {}) => {
    const db = app
    .database(databaseType, databaseName);
    if (db) {
      const deletedItems = db
        .delete(tableName, condition);
      
      console.log(
        `this commands deletes ${deletedItems} item(s).`
      );
    }
  }
}


export default databaseCommands;