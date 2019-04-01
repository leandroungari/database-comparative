import {MongoClient} from "mongodb";
import interpreter from "../interpreter";

export default class MongoDB {
  constructor() {
    this.database = undefined;
  }

  connect(databaseName, callback) {
    
  }

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