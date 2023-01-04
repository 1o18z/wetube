import mongoose  from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({ 
    email: { type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    name: { type: String, required: true},
    location: String ,
});

userSchema.pre('save', async function(){
    console.log("Users password:", this.password);
    this.password = await bcrypt.hash(this.password, 5);
    // 여기서 this는 create되는 User를 가리킴
    console.log("Hashed password", this.password);
})

const User = mongoose.model("User", userSchema);

export default User;