import { Mongoose } from "mongoose";

const CommentSchema = new Mongoose.Schema({
    text : {
        type : String,
        required : "Test is required"
    },
    createdAt :{
        type : Date,
        default : Date.now,
    },
    // video :{
    //     type : Mongoose.Schema.Types.ObjectId,
    //     ref : "Video"
    //     // object id 위치 
    // }  외래키 
})

const model = Mongoose.model('comment', CommentSchema);
export default model