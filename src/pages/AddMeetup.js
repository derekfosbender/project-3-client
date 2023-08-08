import axios from "axios";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function AddMeetup() {
    const [photo, setPhoto] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {title: photo};
    
    axios
    .post("http://localhost:5005/meet",body)
    .then((response) => {
        setPhoto("");
        navigate('/');
    })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Add Meetup</label>
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

           <label>Add Description</label>
           <input
           type="text"
           name="description"
           onChange={(e) => setDescription(e.target.value)}
           value={description}
           />

           <label>Add Time/Date</label>
           <input
           type="text"
           name="time"
           onChange={(e) => setTime(e.target.value)}
           value={time}
           />

           <button type="submit">Create Post</button>
       
       </form>
        </div>

    )

}

export default AddMeetup;