import { reset } from "nodemon";
import { formatHashtags } from "../models/Video";
import Video from "../models/Video";
import { format } from 'path';

export const home = async (req, res) => {
    const videos = await Video.find({});
    console.log(videos); // 저장된 database들 출력
    return res.render("home", { pageTitle: "Home", videos });
};
export const watch = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const video = await Video.findById(id);
    if (!video) {
        return reset.render("404", { pageTitle: "Video not found." });
    }
    return res.render("watch", { pageTitle: video.title, video });
};
export const getEdit = async (req, res) => { // form을 화면에 보여줌
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {
        return res.render("404", { pageTitle: "Video not found." });
    }
    return res.render("edit", { pageTitle: `Edit: ${video.title}`, video });
};
export const postEdit = async (req, res) => { // 변경사항 저장
    const { id } = req.params;
    const { title, description, hashtags } = req.body;
    const video = await Video.exists({_id:id});
                            
    if (!video) {
        return res.render("404", {pageTitle: "Video not found."});
    }
    await Video.findByIdAndUpdate(id, {
        title,
        description,
        hashtags: Video.formatHashtags(hashtags),
    });
    // findByIdAndUpdate의 두 argument. 업데이트 하고자 하는 영상의 id, 업데이트 할 정보/내용

    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title,
            description,
            hashtags: Video.formatHashtags(hashtags),
        });
        // save는 promise를 return 해줌
        //그냥 save는 데이터를 database에 전송하는데 시간이 걸리기 때문에 await해서 기다려줘야 함
        return res.redirect("/");
    } catch (error) {
        return res.render("upload", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
        });
    }
};


export const deleteVideo = async (req, res) => {
    const {id} = req.params;
    await Video.findByIdAndDelete(id);
    console.log(id);
    return res.redirect("/");

}