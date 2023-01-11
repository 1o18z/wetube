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
import { protectorMiddleware, publicOnlyMiddleware, avatarUpload } from "../middlewares";

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/change-password").all(protectorMiddleware).get(getChangePassword).post(postChangePassword);
userRouter.route("/edit")
.all(protectorMiddleware)
.get(getEdit)
.post(avatarUpload.single("avatar"), postEdit);
  
userRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
userRouter.get(":id", see);
export default userRouter;

// 두 가지 routes를 만드세요: /와 /read OK
// /는 파일을 업로드하기 위한 form을 렌더 해야 합니다.
// form은 /read로 POST되어야 합니다.
// .txt 파일이/read로 POST되는 것을 허용하도록 multer를 설정하세요.
// /read POST 핸들러에서 fs를 사용하여 파일을 열고 사용자에게 내용을 표시하세요.
