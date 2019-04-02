import {MongoClient} from "mongodb";

const url = 'mongodb://localhost:27017';

export default class MongoDB {
  constructor() {
    this.database = undefined;
  }

  close() {
    this.database.close();
  }

  connect(databaseName) {
    
    return new Promise((resolve, reject) => {
      MongoClient.connect(
        `${url}/${databaseName}`,
        { useNewUrlParser: true },
        (error, db) => {
          if(error) reject(error);
          this.database = db;
          resolve(this);
        }
      );
    });
  }

  async insert(collectionName) {
    
    return 1;
  }

  read() {
    
  }

  update() {
    
  }

  delete() {
    
  }


}