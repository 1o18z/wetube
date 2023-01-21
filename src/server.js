console.log(process.env.COOKIE_SECRET, process.env.DB_URL);
require("dotenv").config();
console.log(process.env.COOKIE_SECRET, process.env.DB_URL);

import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import apiRouter from "./routers/apiRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false, // resave와 saveUninitialized를 false로 해줘서 새로고침해도 session 더이상 저장 안됨
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }), // session들을 MongoDB database에 저장
  })// 이 미들웨어가 사이트로 들어오는 모두를 기억
);

app.use(localsMiddleware);  // session 전에 오면 session 나타나지 X
app.use("/uploads", express.static("uploads")); 
app.use("/static", express.static("assets")); // 유저들에게 assets 폴더를 /static 주소 통해 공개하겠다는 것
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/api", apiRouter);
app.use("/convert", express.static("node_modules/@ffmpeg/core/dist"));

export default app;