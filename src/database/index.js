import MongoDB from "./mongodb.js"
import MySQL from "./mysql.js"

const mongoDB = {
  name: "mongo-db",
  database: new MongoDB()
}

const mysql = {
  name: "mysql",
  database: new MySQL("root","root")
}

export {
  mongoDB,
  mysql
}