import mongoose from "mongoose";

const RoverSpiritSchema = new mongoose.Schema({
    id: { type: Number , unique: true },
    cameraName: { type: String },
    roverId: { type: Number },
    img_src: { type: String },
    landing_date: { type: String },
    launch_date: {type: String}
})


const RoverSpirit = mongoose.model("roverSpirit", RoverSpiritSchema);


export default RoverSpirit; 