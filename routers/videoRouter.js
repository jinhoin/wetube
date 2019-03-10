import express from 'express';
import routes from "../routes";
import {
    videose,
    getUpload,
    postUpload,
    videoDetail,
    editVideo,
    deleteVideo
} from "../controllers/videoController.js";
const videoRouter = express.Router();

videoRouter.get(routes.videos, videose);
// 함수를 실행시켜줘야된다

videoRouter.get(routes.upload, getUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
// videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);




export default videoRouter;