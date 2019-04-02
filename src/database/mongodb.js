import {MongoClient} from "mongodb";

const url = 'mongodb://localhost:27017';

export default class MongoDB {
  constructor() {
    this.database = undefined;
    this.client = undefined;
  }

  close() {
    this.database = undefined;
    this.client.close();
    this.client = undefined;
  }

  connect(databaseName) {
    
    this.client = new MongoClient(url);
    await this.client.connect();
    this.database = this.client.db(databaseName);
    return this;
  }

  async insert(collectionName, data) {
    
    try {
      const result = await this.database
      .collection(collectionName)
      .insertMany(data);
      return result.insertedCount;
    }
    catch(error) {
      console.log(error);
    }
    
    throw new Error("mongo-db insert error");
  }

  read(collection, condition) {
    try {
      const result = await this.database
      .collection(collection)
      .find(condition)
      .toArray();

      return result;
    }
    catch(error) {
      console.log(error);
    }
    throw new Error("mongo-db read error");
  }

  update(collection, condition, values) {
    try {
      const result = await this.database
      .collection(collection)
      .updateMany(condition, {$set: values});

      return result.upsertedCount;
    } 
    catch(error) {
      console.log(error);
    }

    throw new Error("mongo-db update error");
  }

  delete(collection, condition) {
    try {
      const result = this.database
      .collection(collection)
      .deleteMany(condition);

      return result.deleteCount;
    }
    catch(error) {
      console.log(error);
    }

    throw new Error("mongo-db delete error");
  }


}