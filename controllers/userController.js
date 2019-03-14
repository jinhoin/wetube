import routes from "../routes";

export const getJoin = (req, res) => {
    res.render('Join', { pageTitle: "join", })
};
export const postJoin = (req, res) => {
    // console.log(req.body);
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "join" })
    } else {
        // To Do: Register user
        // To Do : Log user in
        res.redirect(routes.home)
    }
}

export const getLogin = (req, res) => res.render('login', { pageTitle: "login" });

export const postLogin = function (req, res) {
    const {
        body: { email, password, password2 }
    } = req;
    res.redirect(routes.home);

};



export const logout = (req, res) => {
    //  To Do : Process Log out
    res.redirect(routes.home)
}
export const users = (req, res) => res.render('Users');

export const userDetail = (req, res) => res.render('userDetail');

export const editProfile = (req, res) => res.render('editProfile');
export const changePassword = (req, res) => res.render('changePassword');
