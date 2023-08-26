import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { TextAlignment } from '@cloudinary/url-gen/qualifiers';
import { center } from '@cloudinary/url-gen/qualifiers/textAlignment';
const API_URL= process.env.REACT_APP_API_URL || "http://localhost:5005";


export default function Photos() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/photo`)
        .then(response => {
            console.log("Server Response:", response.data)
            setPhotos(response.data.photos);
        })
        .catch(error => {
            console.log("error getting photos:", error);
        });
    }, []);

    if (!photos || photos.length === 0) {
      return <div></div>;
  }

  return (
    <div>
      {photos.map((photo, i) => (
        <div key={photo._id}>
          <Link to={`/photo/${photo._id}`}>
          <img className='img' src={photo.photo} alt={`Photo ${i}`} />
          </Link>
        </div>
      ))}
    </div>
  );
}