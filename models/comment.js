import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Test is required"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // video :{
    //     type : Mongoose.Schema.Types.ObjectId,
    //     ref : "Video"
    //     // object id 위치 
    // }  외래키 
})

const model = mongoose.model('comment', CommentSchema);

export default model;