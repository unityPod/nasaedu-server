import axios from "axios";
import RoverCuriosity from "../API/model";

const PayLoad = {
    id: null,
    cameraName: null,
    roverId: null,
    img_src: null,
    landing_date: null,
    launch_date: null
}

export function Seed(){

    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NASA_API_KEY}`)
    .then(resp => {
        const nasa_data = resp.data
        nasa_data.photos.map((rover: any) => {
            PayLoad.id = rover.id;
            PayLoad.cameraName = rover.camera.name;
            PayLoad.roverId = rover.rover.id;
            PayLoad.img_src = rover.img_src; 
            PayLoad.landing_date = rover.landing_date; 
            PayLoad.launch_date = rover.launch_date;
        let seedObj = new RoverCuriosity(PayLoad)
        seedObj.save()
        })
    })
    .catch(err => {
        // Handle Error Here
        console.error(err);
    });
}

