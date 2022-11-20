import mongoose from "mongoose";

const RoverCuriositySchema = new mongoose.Schema({
    id: { type: Number , unique: true },
    cameraName: { type: String },
    roverId: { type: Number },
    img_src: { type: String },
    landing_date: { type: String },
    launch_date: {type: String}
})


const RoverCuriosity = mongoose.model("roverCuriosity", RoverCuriositySchema);


export default RoverCuriosity; 