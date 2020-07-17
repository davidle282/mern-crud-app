const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect("mongodb://127.0.0.1:27017/mern-crud");

const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use("/posts", require("./routes/post"));

app.get("/", (req, res) => {
  res.send({ Project: "Crud app" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
