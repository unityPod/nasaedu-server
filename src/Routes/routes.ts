import Express from "express";
import RoverCuriosity from "../API/model";
import RoverSpirit from "../API/modelSpirit";
import RoverOpportunity from "../API/modelOpportunity";
const app = Express();
const router = Express.Router();

require("dotenv").config();

router.get( "/curiosity", (req, res) => {
    RoverCuriosity.find({}, (err:any, docs:any) => {
      if(err){
        res.sendStatus(400)
      }
      res.send(docs)
    })
  });

router.get( "/spirit", (req, res) => {
    RoverSpirit.find({}, (err:any, docs:any) => {
      if(err){
        res.sendStatus(400)
      }
      res.send(docs)
    })
  });

router.get( "/opportunity", (req, res) => {
    RoverOpportunity.find({}, (err:any, docs:any) => {
      if(err){
        res.sendStatus(400)
      }
      res.send(docs)
    })
  });

export default router;