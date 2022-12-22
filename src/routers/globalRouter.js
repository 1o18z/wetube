import express from "express";
import {join} from "../controllers/userController";
import  {trending}  from '../controllers/videoController';

const globalRouter = express.Router();


globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;