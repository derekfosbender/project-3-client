import axios from "axios";
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const API_URL= process.env.REACT_APP_API_URL || "http://localhost:5005/";

export default function AddPhoto(){

    const [photo, setPhoto] = useState([]);
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
    
        const uploadData = new FormData();
    
        for (let i = 0; i < photo.length; i++) {
            uploadData.append(`photo`, photo[i]);
          }
        uploadData.append('location', location)
        uploadData.append('time', time)
        console.log(uploadData);
    
    axios
    .post(`${API_URL}/photo`,uploadData, {
        headers: {"Content-Type": "multipart/form-data"},
        withCredentials: true,
    })
    .then((response) => {
      setPhoto([]);
      setLocation('');
      setTime('');

      navigate('/photos');
        
    })
    .catch((error) => console.log({error}));
    };

    const handlePhotos = (e) => {
        const files = e.target.files;
        console.log(files);
        setPhoto(e.target.files)
      }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <label htmlFor="Add Photo">Add Photo</label>
           <input 
           type="file"
           name="photo"
           onChange={handlePhotos}
           />

           <label>Add Location</label>
           <input
           type="text"
           name="location"
           onChange={(event) => setLocation(event.target.value)}
           />

           <label>Add Time</label>
           <input
           type="text"
           name="time"
           onChange={(event) => setTime(event.target.value)}
           />

           <button type="submit">Create Post</button>
       
       </form>
        </div>

    )

}