import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  // loggedIn이 false나 undefined가 될 수도 있으니까 boolean으로 확인
  // loggedIn은 user가 로그인 할 때 session에 저장되는 정보
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user || {};
  // middleware는 현재 로그인 된 사용자를 알려줌
  // locals는 자동으로 views로 import됨
  // 그래서 pug 파일에 req.session.user 따로 쓸 필요 없이 loggedInUser 가져다 쓰면 됨 = edit-profile에 value 추가할 수 있다는 말 
  next();
};

export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) { // 로그인 되어있으면 요청을 계속하게 하고
    return next();
  } else {  // 아니면 로그인 페이지로
    req.flash("error", "Log in first.");
    return res.redirect("/login");
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    req.flash("error", "Not authorized");
    return res.redirect("/");
  }
};


export const avatarUpload = multer({
  dest: "uploads/avatars/",
  limits: {
    fileSize: 3000000,
  }
}); // 사용자가 보낸 파일을 uploads 폴더에 저장하도록 설정
export const videoUpload = multer({ 
  dest: "uploads/videos/",
  limits: {
    fileSize: 10000000,
  }
}); // 사용자가 보낸 파일을 uploads 폴더에 저장하도록 설정
