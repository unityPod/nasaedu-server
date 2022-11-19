import Express from "express";

const app = Express();

app.listen(process.env.PORT || 4000, () => {
  console.log("server running")
})