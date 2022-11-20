import mongoose from "mongoose";

const RoverOpportunitySchema = new mongoose.Schema({
    id: { type: Number , unique: true },
    cameraName: { type: String },
    roverId: { type: Number },
    img_src: { type: String },
    landing_date: { type: String },
    launch_date: {type: String}
})


const RoverOpportunity = mongoose.model("roverOpportunity", RoverOpportunitySchema);


export default RoverOpportunity; 