import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL= "http://localhost:5005";


export default function Meets() {
    const [meets, setMeets] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}/meet`)
        .then(response => {
            console.log("Server Response:", response.data)
            setMeets(response.data.meet);
        })
        .catch(error => {
            console.log("error getting meets:", error);
        });
    }, []);


  return (
    <div>
        {meets.map((meet, i) => (
        <Link key={meet._id} to={`/meet/${meet._id}`}><li>{meet.descrpition}-{meet.location}-{meet.time}</li></Link>
        ))}
        
    </div>
  )
}