import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

export default function MeetDetails() {

  const [detailsMeet, setDetails] = useState(null);

  const { meetId } = useParams();

  const getDetails = () => {
    axios.get(`${API_URL}/meet/${meetId}`,)
    .then((response) => {
      setDetails(response.data.meet)
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetails();
  }, [] );

  return (
    <div>
      {detailsMeet && (
        <div>

        <div>

          <p><span>Description:</span> {detailsMeet.description}</p>
          <br></br>
          <p><span>Location:</span> {detailsMeet.location}</p>
          <br></br>
          <p><span>Time:</span> {detailsMeet.time}</p>

          <div>
        
            <Link to={`/meet/edit/${meetId}`} ><button>Edit</button></Link>
      
      </div>

      </div>
        </div>
      )}

    

    </div>
  )
}