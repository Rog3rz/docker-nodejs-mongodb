import mongoose from "mongoose";

export default mongoose
  .connect("mongodb://db/dockerDatabase")
  .then((db) => console.log("Connected to", db.connection.host))
  .catch((err) => console.error(err));
