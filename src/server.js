import express from "express";
// const express = require("express");의 최신 버전이 윗줄 코드
import morgan from "morgan";

const PORT = 4000;

const app = express();

const logger = morgan("dev"); //여기서 dev는 문자열이 아니라 옵션

const home = (req, res) => {
    return res.send( "hello" );
};

const login = (req, res) => {
    return res.send("Login")
}

app.use(logger);
app.get("/", home);
// 누군가 home에 접속하려 하면 위 함수 실행 (무조건 함수 보내야 함!)
// app.get("/", logger, handleHome) 이렇게 써도 무방
app.get("/login", login);


const handleListening = () => 
console.log(`Server listening on port http://localhost:${PORT}🍓`);

app.listen(PORT, handleListening);