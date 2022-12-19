import express from "express";
// const express = require("express");의 최신 버전이 윗줄 코드

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send({ message: "HI" });
};

const handleLogin = (req, res) => {
    return res.send("Login here");
};

app.get("/", handleHome);
// 누군가 home에 접속하려 하면 위 함수 실행 (무조건 함수 보내야 함!)
app.get("/login", handleLogin);

const handleListening = () => 
console.log(`Server listening on port http://localhost:${PORT}🍓`);

app.listen(PORT, handleListening)