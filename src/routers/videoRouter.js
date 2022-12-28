import express from "express";
import {watch, getEdit, deleteVideo, upload, postEdit} from "../controllers/videoController";
const videoRouter = express.Router();


//upload를 아래에 두면 /:id/를 먼저 인식하기 때문에 /:id/upload같이 upload를 아이디 중 하나로 인식해버림
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit)

videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;