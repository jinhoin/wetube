// import { videos } from "../db";
// db와 연결되잇다 젠작 init.js에서 연결
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try{

        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    }catch(error){
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });

    }
};
export const search = (req, res) => {
    // -> look for videos 


    // step 1 console.log(req.query.turm);
    // step 2  const searchingBy = req.query.turm
    //step 3
    const {             // req.query.turm과 같다
        query: { turm: searchingBy }
    } = req;

    res.render(
        'search', {
            pageTitle: "Search",
            searchingBy, videos
        });
};
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const videose = (req, res) => res.send('vidoes');
export const getUpload = (req, res) => {
    res.render('upload', { pageTitle: 'uplo213132ad' });
}
// export const postUpload = (req, res) => {
//     console.log(req.body);

//     const {
//         body: {
//             file, title, description
//         }
//     } = req;
//     // To Do : upload and ave video
//     //  fake id
//     res.redirect(routes.videoDetail(324393));

// };

export const editVideo = (req, res) => res.send('editVideo');
export const deleteVideo = (req, res) => res.send('deleteVideo');
