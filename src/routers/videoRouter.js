import express from "express";
import {
  watch,
  getUpload,
  getEdit,
  postEdit,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();
import { protectorMiddleware, videoUpload } from "../middlewares";


videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").all(protectorMiddleware).get(deleteVideo);
videoRouter.route("/upload")
.all(protectorMiddleware)
.get(getUpload)
.post(videoUpload.single("video"), postUpload);
                                                                                        // upload.pug의 file을 받는 input의 이름        
export default videoRouter;