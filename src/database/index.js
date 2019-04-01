import MongoDB from "./mongodb.js"

const mongoDB = {
  name: "mongo-db",
  database: new MongoDB()
}

export {
  mongoDB
}