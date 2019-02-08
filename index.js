const express = require("express");
const mongoose = require("mongoose");
const { resolve } = require("path");
const cors = require("cors");
const { dbConfig } = require("./config")

const PORT = process.env.PORT || 9000;

mongoose.connect(
  dbConfig.connect,
  {
    useNewUrlParser: true
  }
);

const db = mongoose.connection;

const app = express();

db.once("open", function() {
  console.log('connected to db')

  const itemSchema = new mongoose.Schema({
    Name: String,
    Description: String,
    Price: Number,
    Rating: Number,
    Quantity: Number,
    Date: Date
  })

  userItems = mongoose.model("items", itemSchema);
  
})


app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(resolve( __dirname, 'client', 'dist' )));

app.get('/', (req, resp) => {
  console.log('hitting endpoint')
    resp.send('<h1>Server is running.<h1>');
})

app.get("/api", (req, res) => {
    res.send("<h1>API WORKING!</h1>");
  });

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
  })
  .on("error", e => {
    console.log("Listen Error:", e);
    console.log(
      `Server listen error, Do you already have a server running on PORT: ${PORT}`
    );
  });