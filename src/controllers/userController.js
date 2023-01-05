import User from "../models/User"
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
    console.log(req.body);
    const { name, username, email, password, password2, location } = req.body;
    if (password !== password2) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            errorMessage: "Password confirmation does not match.",
        });
    }
    const exists = await User.exists({ $or: [{ username }, { email }] });
    if (exists) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            errorMessage: "This username/email is already taken.",
        });
    }
    try {
        await User.create({
            name,
            username,
            password,
            password2,
            email,
            location
        });
        res.redirect("/login");
    } catch (error) {
        return res.status(400).render("join", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
        });
    }
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const getLogin = (req, res) => {
    res.render("login", {pageTitle: "Login"});
}
export const postLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.exists({username});
    if(!user){
        return res.status(400).render("login", {
            pageTitle: "Login",
            errorMessage: "An account with this username does not exists.",
    });
}
    const ok = await bcrypt.compare(password, user.password);
    if(!ok){
        return res.status(400).render("login", {
            pageTitle: "Login",
            errorMessage: "Wrong password",
        });
    }
    req.session.loggedIn = true;
    req.session.user = user;    // user를 세션에 저장 (로그인하고 세션DB 확인해보면 쿠키 id인 세션 id가 있는 걸 볼 수 있음)
    return res.rendirect("/");
};
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");