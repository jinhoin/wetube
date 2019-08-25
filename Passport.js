import passport from "passport";
import User from "./models/User";


// strategy login방식을 말하는것임
passport.use(User.createStrategy());


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.serializeUser());