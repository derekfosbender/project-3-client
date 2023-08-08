import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function AddPhoto() {
    const [photo, setPhoto] = useState("");
    const [location, setLocation] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {title: photo};
    
    axios
    .post("http://localhost:5005/photo",body)
    .then((response) => {
        setPhoto("");
        navigate('/');
    })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Add Photo</label>
           <input 
           type="file"
           name="photo"
           onChange={(e) => setPhoto(e.target.value)}
           value={photo}
           />

           <label>Add Location</label>
           <input
           type="text"
           name="location"
           onChange={(e) => setLocation(e.target.value)}
           value={location}
           />

           <button type="submit">Create Post</button>
       
       </form>
        </div>

    )

}

export default AddPhoto;