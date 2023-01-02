import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxLength: 80 },
    description: { type: String, required: true, trim: true, minLength: 20 },
    createAt: { type: Date, required: true, default: Date.now },
    // 매번 Date.now(), required 이거 적기 싫어서 걍 default값을 줌 
    // Date.now에서 괄호를 뺀 이유는 바로 실행시키고 싶지 않아서
    hashtags: [{ type: String, trim: true }],
    meta: {
        views: { type: Number, default: 0, required: true },
        rating: { type: Number, default: 0, required: true },
    },
});

videoSchema.static('formatHashtags', function(hashtags){
    return  hashtags.split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`))
});

const Video = mongoose.model("Video", videoSchema);
export default Video;


// const video = {
//     title:"Heki",
//     description:"lalalala",
//     createAt:121212,
//     hashtags: [
//         "#hi",
//         "#mongo"
//     ]
// }