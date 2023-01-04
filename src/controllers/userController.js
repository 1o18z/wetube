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
    // 계젖ㅇ 존재하는지 체크
    // 패스워드 옳은지 체크
    res.end();
};
export const logout = (req, res) => res.send("Log out");
export const see = (req, res) => res.send("See User");