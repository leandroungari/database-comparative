import Relational from "./relational";
import Sequelize from "sequelize";

export default class MySQL extends Relational {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.database = undefined;
    this.model = undefined;
  }

  async connect(databaseName) {
    this.database = new Sequelize(
      databaseName,
      this.username,
      this.password,
      {
        host: "localhost",
        dialect: "mysql"
      }
    );

    return this;
  }
}
