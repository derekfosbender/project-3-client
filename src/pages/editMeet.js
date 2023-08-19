import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function EditMeet() {

  const [photo, setPhoto] = useState([]);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');

  
  

  const { meetId } = useParams();
  const navigate = useNavigate(); 

useEffect(() => {
  axios.get(`${API_URL}/meet/${meetId}`)
  .then((response) => {

    const meet = response.data.meet;

     setPhoto(meet.photo);
     setDescription(meet.description);
     setLocation(meet.location);
     setTime(meet.time);
  })
  .catch((err) => console.log(err));
}, []);


const handleFormSubmit = (e) => {
  e.preventDefault();

  const requestBody = { photo,description,location,time};
console.log(requestBody);
 
  axios.put(`${API_URL}/meet/${meetId}`, requestBody, { withCredentials: true })
  .then((response) => {
    console.log(response);

    navigate(`/meet/${meetId}`)
  });
};


const handleImage = (event) => {
  console.log({ files: event.target.files });
  const files = event.target.files;

  const uploadData = new FormData();

  for (let i = 0; i < files.length; i++) {
    uploadData.append('meet', files[i]);
  }

  axios.patch(`${API_URL}/meet/${meetId}`, uploadData, 
  {
     headers: {"Content-Type": "multipart/form-data"  } ,
      withCredentials: true 
  })
  .then((response) => {
    setPhoto(response.data.photos)
  })
  .catch((err) => console.log(err))
}

const deleteInfo = () => {
axios.delete(`${API_URL}/meet/${meetId}`,)
.then(() => {
  navigate('/meets');
})
.catch((err) => console.log(err));
};

  return (
    <div>

      <form onSubmit={handleFormSubmit}>
      <div>
        <label>Photo</label>
        <input type='file' name='photos' onChange={(e) => handleImage(e)} />
</div>
<div>
        <label>Description</label>
        <input type='text' onChange={(e) => setDescription(e.target.value)} />
        </div>

<div>
        <label>Location</label>
        <input type='text' onChange={(e) => setLocation(e.target.value)} />
        </div>

<div>
        <label>Time</label>
        <input type='text' onChange={(e) => setTime(e.target.value)} />
        </div>

        <button type='submit' >Save Post Changes</button>

        </form>
        <button onClick={deleteInfo}>Delete</button>
</div>


)
}