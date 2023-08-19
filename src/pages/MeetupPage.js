import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";



const API_URL = "http://localhost:5005";

function MeetupPage() {
  const [meets, setMeets] = useState([]);

  const getMeets = () => {

    axios
      .get(`${API_URL}/meet`)
      .then((res) => {
        setMeets(res.data.meets);
        })
      .catch((err) => console.log(err));
  };

 const deleteItem = (meetId) => {
    axios
        .delete(`${API_URL}/meet/${meetId}`)
        .then((response) => {
            getMeets();
        })
        .catch((err) => console.log({ err }));
};

 const viewMeets = () => {
    return meets.length > 0 ? (
        meets.map((meet, index) => {
            return (
                <div
                    key={index}
                    style={{
                        borderBottom: "1px solid black",
                    }}
                >
                    <img
                        src={meet.photo}
                        style={{ width: "500px", height: "300px" }}
                        alt={`Meet ${index}`}
                    />
                    <Link
                        to={{
                            pathname: "details",
                            state: {
                                data: meet,
                            },
                        }}
                    >
                        <h3>Location: {meet.location}</h3>
                    </Link>
                    <h4>Time: {meet.time}</h4>
                    <button
                        onClick={() => deleteItem(meet._id)}
                        style={{ marginBottom: "15px" }}
                    >
                        X
                    </button>
                </div>
            );
        })
    ) : (
        <h2>No Meets</h2>
    );
};

  useEffect(() => {
    getMeets();
  }, []);

  return <div>{viewMeets()}</div>;
}

export default MeetupPage;