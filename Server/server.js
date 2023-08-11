const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });  //environmental settings accessed from config.env
const port = process.env.PORT || 3005;
app.use(cors());
app.use(express.json());  //Exchange of messages
app.use(require("./routes/record"));   //Logic is implemented here
// get driver connection
const dbo = require("./db/conn");   //Required to make connection to mongodb
const { default: mongoose } = require("mongoose");
 
app.listen(port, () => {                 //Listen to incoming requests
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {          //Connection to database
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);  
});
