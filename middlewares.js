import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos" });

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = 'Wetube';
    res.locals.routes = routes;
    res.locals.user = req.user || {};
    next();
    //미들웨어가 커넥션과 라우터 사이있으니
}


// 한개의 파일만 된다 name 을써준다
export const uploadVideo = multerVideo.single('videdoFile');
