import {MongoClient} from "mongodb";
import interpreter from "../interpreter";

export default class MongoDB {
  constructor() {
    this.database = undefined;
  }

  /*connect(databaseName) {
    this.database = await new Promise(
      (resolve, reject) => {
        MongoClient.connect(
          `mongodb://localhost:27017/${databaseName}`,
          (error, db) => {
            if(error) reject(error);
            resolve(db);
          }
        );
      }
    )
    .then(result => result)
    .catch(error => {
      throw new Error(error);
    });
  }*/

  insert() {
    interpreter.time().start();

    interpreter.time().end();
  }

  read() {
    interpreter.time().start();

    interpreter.time().end();
  }

  update() {
    interpreter.time().start();

    interpreter.time().end();
  }

  delete() {
    interpreter.time().start();

    interpreter.time().end();
  }


}