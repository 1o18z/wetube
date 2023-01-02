import express from "express";
import {watch, getEdit, postEdit, getUpload, postUpload, deleteVideo} from "../controllers/videoController";
const videoRouter = express.Router();


//upload를 아래에 두면 /:id/를 먼저 인식하기 때문에 /:id/upload같이 upload를 아이디 중 하나로 인식해버림
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit)
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload)

export default videoRouter;