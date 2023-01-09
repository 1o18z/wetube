import "./db";
import "./models/Video";
import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl:"mongodb://127.0.0.1:27017/wetube"}) // session들을 MongoDB database에 저장
})); // 이 미들웨어가 사이트로 들어오는 모두를 기억


app.use(localsMiddleware);  // session 전에 오면 session 나타나지 X
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;