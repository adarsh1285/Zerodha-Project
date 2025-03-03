require('dotenv').config();//.env file ke variables ko process.env mein inject karta hai, taaki aap unhe code mein securely use kar sako.
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.get("/", (req, res) => {
  res.send("adding new file");
})

app.listen(PORT, () => {
  console.log("Server strat now");
  mongoose.connect(uri)
    .then(() => console.log('MongoDB connected locally! ✅'))
    .catch(err => console.error(err));
})

