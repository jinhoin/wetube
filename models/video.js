import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: 'File Url is required'
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: {
        type: Number,
        default: 0
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
    // 코멘트 키를 참조할수있게 코멘트 아이디를 배열로가져오는 방법 1과 comment에서 직접 video데이타를 가져올수잇는 방법

});

const model = mongoose.model("Video", VideoSchema);
export default model