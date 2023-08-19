import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL= process.env.REACT_APP_API_URL || "http://localhost:5005";


export default function Meets() {
    const [meets, setMeets] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/meet`)
        .then(response => {
            console.log("Server Response:", response.data)
            setMeets(response.data.meets);
        })
        .catch(error => {
            console.log("error getting meets:", error);
        });
    }, []);

    console.log("meets:", meets);

    if (!meets || meets.length === 0) {
        return <div></div>;
    }

    return (
      <div>
      {meets.map((meet, i) => (
        <div className='row' key={meet._id}>
          <img className='img' src={meet.photo} alt={`Meet ${i}`} />
          <Link to={`/meet/${meet._id}`}>Meet Details</Link>
        </div>
      ))}
    </div>
      );
    }