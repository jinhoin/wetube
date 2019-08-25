import express from 'express';
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    getEditVeido,
    deleteVideo,
    postEditVideo,

} from "../controllers/videoController.js";
import { uploadVideo } from "../middlewares"


const videoRouter = express.Router();

// console.log(routes.editVideo(1122));

// 함수를 실행시켜줘야된다


// upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVeido);
videoRouter.post(routes.editVideo(), postEditVideo);


// Delete Vide
videoRouter.get(routes.deleteVideo(), deleteVideo);




export default videoRouter;