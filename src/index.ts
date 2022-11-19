import Express from "express";
import connectMongoDB from "../connect";

const app = Express();
connectMongoDB();


app.listen(process.env.PORT || 4000, () => {
  console.log("server running")
})