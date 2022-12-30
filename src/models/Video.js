import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
    // titld: {type: String},
    description: String,
    createAt: Date,
    hashtag: [{type: String}],
    meta:{
        views:Number,
        rating:Number,
    },
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