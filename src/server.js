import express from "express";
// const express = require("express");의 최신 버전이 윗줄 코드
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from './routers/videoRouter';
import userRouter from './routers/userRouter';

const PORT = 4000;

const app = express();

const logger = morgan("dev"); //여기서 dev는 문자열이 아니라 옵션

app.set("view engine", "pug");  //@
app.set("views", process.cwd() + "/src/views"); //@
//pug 불러오는 경로 변경
app.use(logger);
app.use(express.urlencoded({ extended: true}));
// express가 form의 value들을 이해할 수 있도록 하고, 우리가 쓸 수 있는 자바스크립트 형식으로 변형
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);


const handleListening = () => 
console.log(`Server listening on port http://localhost:${PORT}🍓`);

app.listen(PORT, handleListening);