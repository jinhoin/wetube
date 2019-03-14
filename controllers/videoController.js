// import { videos } from "../db";
// db와 연결되잇다 젠작 init.js에서 연결
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {

        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });

    }
};

export const getUpload = (req, res) => {
    res.render('upload', { pageTitle: 'Upload' });
}

export const postUpload = (req, res) => {
    console.log('middlecheck');
    const { body} = req;
    

    console.log(req);
    res.render('upload' , {pageTitle : "dfdfdsf"});
}


export const search = (req, res) => {
    const { query: { turm: searchingBy } } = req;
    res.render('search', {
        pageTitle: "Search",
        searchingBy, videos
    });
};
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const videose = (req, res) => res.send('vidoes');
export const editVideo = (req, res) => res.send('editVideo');
export const deleteVideo = (req, res) => res.send('deleteVideo');
