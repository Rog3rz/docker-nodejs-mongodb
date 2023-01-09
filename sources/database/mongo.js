const { MongoClient } = require("mongodb");

const uri = "mongodb://mongo:27017";
const client = new MongoClient(uri);
const dbName = "docker";
const dbCollection = "docker-collection";

const connection = async () => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(dbCollection);

  console.log("MongoDB Connected by Docker");

  return { db, collection };
};

module.exports = { connection };
