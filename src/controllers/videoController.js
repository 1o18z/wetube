import Video from "../models/Video";

export const home = async (req, res) => {
    const videos = await Video.find({});
    console.log(videos); // 저장된 database들 출력
    return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    // video id 1을 찾으려면 video[0]을 찾게 되는 거

    return res.render("watch", { pageTitle: `Watching` });
    // video와 video: video랑 같음 (ES6사용)
}
export const getEdit = (req, res) => { // form을 화면에 보여줌
    const { id } = req.params;

    return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => { // 변경사항 저장
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`); // redirect 자동으로 이동
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
            hashtags: hashtags.split(",").map((word) => `#${word}`),
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


