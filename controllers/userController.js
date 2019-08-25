import passport from "passport";
import routes from "../routes";
import User from "../models/User"

export const getJoin = (req, res) => {
    res.render('Join', { pageTitle: "join", })
};
export const postJoin = async (req, res) => {
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
        try {
            // const user = await User.create({
            const user = await User({
                name,
                email
            });
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
        }
        res.redirect(routes.home)
    }
};

export const getLogin = (req, res) => res.render('login', { pageTitle: "login" });
// 설치해준 stragey 이름
export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home,
});



export const logout = (req, res) => {
    //  To Do : Process Log out
    res.redirect(routes.home)
}
export const users = (req, res) => res.render('Users');

export const userDetail = (req, res) => res.render('userDetail');

export const editProfile = (req, res) => res.render('editProfile');
export const changePassword = (req, res) => res.render('changePassword');
