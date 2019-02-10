import routes from "./routes";
export const localMiddleware = (req, res, next) =>{
 res.locals.siteName = 'Wetube';
 res.locals.routes = routes;
 next();
    //미들웨어가 커넥션과 라우터 사이있으니
}