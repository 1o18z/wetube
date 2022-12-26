import express from "express";
import {edit, remove, see, logout} from "../controllers/userController";
const userRouter = express.Router();


userRouter.get("/logout", logout);
userRouter.get(":id", see);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;