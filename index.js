require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./postRoutes");
const productRoutes = require("./productRoutes");
const app = express();
const cors = require("cors");
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://12345:${process.env.PASSWORD}@cluster0.uvjuu4s.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", cors(), postRoutes);
    app.use("/api", cors(), productRoutes);
    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
