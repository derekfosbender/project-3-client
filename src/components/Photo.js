import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL= "http://localhost:5005";


export default function Photos() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/photo`)
        .then(response => {
            console.log("Server Response:", response.data)
            setPhotos(response.data.photo);
        })
        .catch(error => {
            console.log("An error has occured getting photos:", error);
        });
    }, []);


  return (
    <div>
        {photos.map((photo, i) => (
        <Link key={photo._id} to={`/photo/${photo._id}`}><li>{photo.location}-{photo.time}</li></Link>
        ))}
        
    </div>
  )
}