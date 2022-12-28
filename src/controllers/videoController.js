
let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 159,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2,
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 1,
        id: 3,
    },
];
export const trending = (req, res) => {
    return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
    // const id = req.params.id;
    const {id} = req.params;
    const video = videos[id - 1];
    // video id 1을 찾으려면 video[0]을 찾게 되는 거

    return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
                                                                    // video와 video: video랑 같음 (ES6사용)
}
export const getEdit = (req, res) => { // form을 화면에 보여줌
    const { id } = req.params;
    const video = videos[id - 1];

    return res.render("edit",{pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) =>{ // 변경사항 저장
    const { id } = req.params;
    const { title } = req.body;
    videos[id-1].title = title;
    return res.redirect(`/videos/${id}`); // redirect 자동으로 이동
};

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle: "Upload Video"});
};
export const postUpload = (req, res) => {
    const {title} = req.body;
    const newVideo = {
        title: title,
        rating: 0,
        comments: 0,
        createdAt: "just now",
        views: 0,
        id: videos.length + 1,
    };
    videos.push(newVideo);
    return res.redirect("/");
}





export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("deleteVideo");
}
