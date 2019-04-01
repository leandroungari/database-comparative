import app from "../../app";

const databaseCommands = {
  "insert-database": (
    databaseType, 
    databaseName, 
    datasetName
  ) => {
    
    if (app.database(databaseType)) {
      const insertedItems = app
      .database(databaseType)
      .insert(databaseName, datasetName);
    
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
    if (app.database(databaseType)) {
      const result = app.database(databaseType)
      .read(databaseName, tableName, condition);

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
    if (app.database(databaseType)) {
      const updatedItems = app
        .database(databaseType)
        .update(databaseName, tableName, condition, values);
      
      console.log(
        `this commands updates ${updatedItems} item(s).`
      );
    }
  },
  "delete-database": (databaseType, databaseName, tableName, condition = {}) => {
    if (app.database(databaseType)) {
      const deletedItems = app
        .database(databaseType)
        .delete(databaseName, tableName, condition);
      
      console.log(
        `this commands deletes ${deletedItems} item(s).`
      );
    }
  }
}


export default databaseCommands;