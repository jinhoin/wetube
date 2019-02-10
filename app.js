// const express = require('express');
            // express 라는 파일을 찾아온다
import express from "express";
// 바벨 문법을 활용
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookeyParser from "cookie-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localMiddleware } from "./middlewares";

const app = express();
//express 서버 설정

app.set('view engine', 'pug');


//거부할 ip를 찾는다면 거부도 가능
//  app.use(betweenhome);
 //순서가 중요하다 js 및 node.js 는
//중간사이로 끼면 미들웨어가되엇네
app.use(morgan("dev"));
app.use(helmet());
//보안에 초점
app.use(cookeyParser());
// 쿠키를 전달 받아서 사용할수 있드록 해주는 미들웨어 사용자 인증 에서 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//request form 값을 체크하는것 


// app.use("/", globalRouter);
// app.use("/users", userRouter);
// app.use("/videos", videoRouter);

app.use(localMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


//get으로 만 보내면
//계속 로딩중


export default app;