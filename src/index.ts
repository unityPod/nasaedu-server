import Express from "express";
import connectMongoDB from "./connect";
import {Seed} from './Seed/seed';
import {SeedSpirit} from './Seed/seedSpirit';
import {SeedOpportunity} from './Seed/seedOpportunity';
import router from "./Routes/routes";

require('dotenv').config();


const app = Express();
connectMongoDB();
app.use(router)
// Seed();
// SeedSpirit();
// SeedOpportunity();


app.listen(process.env.PORT || 4000, () => {
  console.log("server running")
})