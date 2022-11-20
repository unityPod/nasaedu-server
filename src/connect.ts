require('dotenv').config();

let uri = process.env.MONGO_URL;
console.log(process.env.MONGO_URL)
const mongoose = require("mongoose");
function connectMongoDB(){
    mongoose.connect(uri, () => {
      console.log("connected to db")
    })
  }

export default connectMongoDB;