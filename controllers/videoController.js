export const home = (req, res) => res.render('home', { pageTitle : "Home"});
export const search = (req, res) => {
    
    // step 1 console.log(req.query.turm);
    // step 2 
    // const searchingBy = req.query.turm

    //step 3
    const {             // req.query.turm과 같다
        query : {turm : searchingBy}
    } = req;

    res.render(
    'search', {
    searchingBy
    });
}
export const videoDetail = (req, res) => res.send('videoDetail');
export const videos = (req, res) => res.send('vidoes');
export const upload = (req, res) => res.send('vidoes');
export const editVideo = (req, res) => res.send('editVideo');
export const deleteVideo = (req, res) => res.send('deleteVideo');



function lalala(){
    return true;
}

lalala = () => {
    return true
}