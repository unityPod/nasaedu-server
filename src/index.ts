import Express from "express";
import connectMongoDB from "./connect";
import {Seed} from './Seed/seed';
require('dotenv').config();


const app = Express();
connectMongoDB();
Seed();


app.listen(process.env.PORT || 4000, () => {
  console.log("server running")
})