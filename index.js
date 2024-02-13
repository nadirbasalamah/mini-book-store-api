import express from "express";
import { PORT, MONGO_URI } from "./config.js";
import mongoose from "mongoose";
import router from "./routes/routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1", router);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("database is connected");
    app.listen(PORT, () => {
      console.log(`app is running at: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
