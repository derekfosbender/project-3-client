import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL= process.env.REACT_APP_API_URL || "http://localhost:5005";


export default function Meets() {
    const [getMeets, setMeets] = useState([])

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

    if (!getMeets || getMeets.length === 0) {
        return <div></div>;
    }

    return (
      <div>
        {console.log({getMeets})}
      {getMeets.map((meet,i) => (
        <div key={meet._id}>
          <Link to={`/meet/${meet._id}`}>
          <img className='img' src={meet.photo} alt={` ${i}`} />
          </Link>
        </div>
      ))}
    </div>
      );
    }