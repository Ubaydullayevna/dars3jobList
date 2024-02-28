import { getData } from "./request.js";
import { updateUI } from "./updateUi.js";

getData("http://localhost:3000/jobs")
.then((data)=>{
    updateUI(data);
})
.catch((error)=>{
    updateUI(error);
    
})
