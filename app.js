const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const MONGODB_KEY = process.env.MONGODB_KEY;

const app = express();

mongoose.connect(MONGODB_KEY, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Echec de connexion à MongoDB..."));

app.use(express.json());

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

app.get("/api/", (req, res) => {
  res.status(201).json({ message: "Tout a bien fonctionné !" })
});

module.exports = app;