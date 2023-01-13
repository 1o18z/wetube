import Video from "../models/Video";
import User from "../models/User";

export const home = async (req, res) => {
  const videos = await Video.find({})
  .sort({ createdAt: "desc" })
  .populate("owner");
return res.render("home", { pageTitle: "Home", videos });
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id).populate("owner");
 
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const {user: {_id}} = req.session;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found." });
  }
  console.log(typeof video.owner, typeof _id);  
  if(String(video.owner) !== String(_id)){  // video 올린 user의 id(owner)와 로그인한 user의 id가 같지 않으면
    return res.status(403).redirect("/");
  }
  return res.render("edit", { pageTitle: `Edit: ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const {user: {_id}} = req.session;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found." });
  }
  if(String(video.owner) !== String(_id)){  // video 올린 user의 id(owner)와 로그인한 user의 id가 같지 않으면
    return res.status(403).redirect("/");
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {

  const {
    user: {_id},
} = req.session; // session에서 user 가져오고 그 user에서 _id 가져옴
  const file = req.file;  // multer은 req.file을 제공해주고, file 안에는 path가 있음
  const { title, description, hashtags } = req.body;
  try {
    const newVideo = await Video.create({
      title,
      description,
      fileUrl:file.path,
      owner: _id,
      hashtags: Video.formatHashtags(hashtags),
    });
    const user = await User.findById(_id);
    user.videos.push(newVideo._id);
    user.save();
    return res.redirect("/");
  } catch (error) {
    return res.status(400).render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  const {user: {_id}} = req.session;
  const video = await Video.findById(id);
  if(!video){
    return res.status(404).render("404", {pageTitle: "Video not found"});
  }
  if(String(video.owner) !== String(_id)){  // video 올린 user의 id(owner)와 로그인한 user의 id가 같지 않으면
    return res.status(403).redirect("/");
  }
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(`${keyword}$`, "i"),
      },
    }).populate("owner");
  }
  return res.render("search", { pageTitle: "Search", videos });
};