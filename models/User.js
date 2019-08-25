import mongoose from "mongoose";
import passprotLocalMongoose from "passport-local-mongoose";


const UserShcma = new mongoose.Schema({
    name: String,
    email: String,
    avataUrl: String,
    faceBookId: Number,
    githubId: Number
});


UserShcma.plugin(passprotLocalMongoose, {
    usernmameField: 'email',

});

const model = mongoose.model("User", UserShcma);


export default model;