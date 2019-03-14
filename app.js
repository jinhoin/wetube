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


app.use(morgan("dev"));
app.use(helmet());
app.use(cookeyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(localMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);




export default app;