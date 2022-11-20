import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String },
    user: { type: String },
    password: { type: String }
})


const Users = mongoose.model("User", UserSchema);


export default Users; 