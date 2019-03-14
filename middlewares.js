import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "videos/" });

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = 'Wetube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1,
    }
    next();
    //미들웨어가 커넥션과 라우터 사이있으니
}


// 한개의 파일만 된다 name 을써준다
export const uploadVideo =  multerVideo.single('videdoFile');
