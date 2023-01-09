export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    // loggedIn이 false나 undefined가 될 수도 있으니까 boolean으로 확인
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user;
    next();
  };