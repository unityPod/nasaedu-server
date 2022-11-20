import Express from "express";
import connectMongoDB from "./connect";
import {Seed} from './Seed/seed';
import {SeedSpirit} from './Seed/seedSpirit';
import {SeedOpportunity} from './Seed/seedOpportunity';

require('dotenv').config();


const app = Express();
connectMongoDB();
// Seed();
// SeedSpirit();
// SeedOpportunity();


app.listen(process.env.PORT || 4000, () => {
  console.log("server running")
})