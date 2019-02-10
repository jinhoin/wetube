import express from 'express';
import routes from "../routes";
import { home, search } from '../controllers/videoController';
import { join, login, logout } from '../controllers/userController';

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
// globalRouter.get(routes.join, (req,res) => res.send("Join"));
// globalRouter.get(routes.login, (req,res) => res.send("Login"));
// globalRouter.get(routes.logout, (req,res) => res.send("Logout"));
// globalRouter.get(routes.serach, (req,res) => res.send("Search"));

// 컨트롤러연결ㅇ
globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);


export default globalRouter;


