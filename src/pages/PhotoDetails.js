import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function PhotoDetails() {

  const [detailsPhoto, setDetails] = useState(null);

  const { photoId } = useParams();

  const getDetails = () => {
    axios.get(`${API_URL}/photo/${photoId}`,)
    .then((response) => {
      setDetails(response.data.photo)
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetails();
  }, [] );

  return (
    <div>
      {detailsPhoto && (
        <div>

        <div>
        <img className='img' src={detailsPhoto.photo} />
          <p><span>Location:</span> {detailsPhoto.location}</p>
          <br></br>
          <p><span>Time:</span> {detailsPhoto.time}</p>

          <div>
        
            <Link to={`/photo/edit/${photoId}`} ><button>Edit</button></Link>
      
      </div>

      </div>
        </div>
      )}

    

    </div>
  )
}