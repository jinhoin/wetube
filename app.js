import dotenv from "dotenv"
import express from "express";

import morgan from "morgan";
import helmet from "helmet";
import path from "path";
import cookeyParser from "cookie-parser";
import session from 'express-session';
import bodyParser from "body-parser";
import passport from "passport";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localMiddleware } from "./middlewares";
import "./Passport";

const app = express();
//express 서버 설정

app.use(helmet());
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));


app.use(cookeyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;