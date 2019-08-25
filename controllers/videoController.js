// import { videos } from "../db";
// db와 연결되잇다 젠작 init.js에서 연결
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort(
            { _id: -1 }
        );
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};



// search
export const search = async (req, res) => {
    console.log('req', req.turm)
    const query = {
        turm: { searchingBy }
    } = req;
    let videos = [];
    try {
        // regular expression
        videos = await Video.find({
            title: { $regex: searchingBy, $options: "i" }
        });
    } catch (error) {
        console.log(error, 'error')
    }
    res.render('search', { pageTitle: "search", searchingBy, videos });
}


export const getUpload = (req, res) => {
    res.render('upload', { pageTitle: 'Upload' });
}

export const postUpload = async (req, res) => {

    const {
        body: { title, description },
        file: { path }
    } = req;
    console.log(title, description, 'req');
    console.log(req, 'post');

    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    res.redirect(routes.videoDetail(newVideo.id));

    res.render('upload', { pageTitle: 'hello' });
}



export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;

    try {
        const video = await Video.findById(id);
        res.render("videoDetail", { pageTitle: "videoDetail", video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);

    }

    // name이 아이디일때만 성립하다네?

};

export const getEditVeido = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render('editVideo', { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        console.log('eror', error);
    }


}

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;

    try {
        await Video.findByIdAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        console.log('error', error);
        res.redirect(routes.home)
    }
}

export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;

    try {
        await Video.findByIdAndRemove(id);
        res.redirect(routes.home)
    } catch (error) {
        console.log('error 삭제가 불가능합니다', error);
        res.redirect(routes.videoDetail(id));
    }

}
