import Express from "express";
require("dotenv").config();
const router = Express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

  router.get('/', async (req, res) => {
    await client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: '(289) 233-4515',
      body: "hello there"
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err: any) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
  })

export default router;