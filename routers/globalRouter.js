import express from 'express';
import routes from "../routes";
import { home, search } from '../controllers/videoController';
import { getJoin, postJoin,getLogin, postLogin, logout } from '../controllers/userController';

const globalRouter = express.Router();

// const handleHome = (req,res) => res.send("Hello from home");
            // 유저와 응답사이에는 중간에 있다 그게 middle ware 이다
// function handleProfile(req, res){    
//   res.send('you are on my Profie');
// }

// const handleProfile = (req, res) => res.send("you are on my profile");
// const betweenhome = (req, res, next) =>{ 
//  res.send('not happening');
// }

// //app.get("/", betweenhome ,handleHome);

// 기본생성
// globalRouter.get(routes.home, (req,res) => res.send("Home"));


// 컨트롤러연결ㅇ
globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);


export default globalRouter;


