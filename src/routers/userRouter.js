import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
  postChangePassword,
  getChangePassword,
  
} from "../controllers/userController";
const userRouter = express.Router();
import { protectorMiddleware, publicOnlyMiddleware, uploadFiles } from "../middlewares";

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/change-password").all(protectorMiddleware).get(getChangePassword).post(postChangePassword);
userRouter.route("/edit")
.all(protectorMiddleware)
.get(getEdit)
.post(uploadFiles.single("avatar"), postEdit);
  
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get(":id", see);
export default userRouter;