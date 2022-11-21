import Express from "express";
// import connectMongoDB from "./connect";
// import {Seed} from './Seed/seed';
// import {SeedSpirit} from './Seed/seedSpirit';
// import {SeedOpportunity} from './Seed/seedOpportunity';
import router from "./Routes/routes";
import routerTwilio from './Routes/twilio';
const bodyParser = require('body-parser');
const app = Express();
require('dotenv').config();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// connectMongoDB();
app.use(router);
app.use(routerTwilio);
// Seed();
// SeedSpirit();
// SeedOpportunity();


app.listen(process.env.PORT || 4001, () => {
  console.log("server running")
})