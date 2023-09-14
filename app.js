// packages
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const logger = require("morgan");
const mongoose = require('mongoose');
const adrRouter = require("./routes/account");

const app = express();
const corsOptions = { credentials: true, origin: process.env.URL || "*" };
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const port = 3000
mongoose.connect(
  "mongodb+srv://adambenhadjaissa:Dyno123000@cluster-dyno.pk79ufb.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Database connected!");
    // Starting a server
    app.listen(port, process.env.ALWAYSDATA_HTTP_ID, () => {
      console.log(`App is running at ${port}`);
    });
  })
  .catch((err) => console.log(err));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/", adrRouter);

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});
