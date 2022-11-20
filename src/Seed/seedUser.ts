import Users from "../API/modelUser";

const UserPayLoad = {
    email: { type: String },
    user: { type: String },
    password: { type: String }
}

export function SeedUser(){
        let seedObj = new Users(UserPayLoad)
        seedObj.save()
}
