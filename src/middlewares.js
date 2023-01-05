export const localsMiddleware = (req, res, next) => {
    console.log(req.session);
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    // loggedIn이 false나 undefined일 수도 있으니까 Boolean으로 확인
    res.locals.siteName = "Wetube";
    res.locals.loggedInUser = req.session.user;
    next();
}