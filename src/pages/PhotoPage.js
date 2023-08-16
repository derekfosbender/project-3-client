import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";



const API_URL = "http://localhost:5005";

function PhotoPage() {
  const [photos, setPhotos] = useState([]);

  const getPhotos = () => {

    axios
      .get(`${API_URL}/photo`)
      .then((res) => {
        setPhotos(res.data.photos);
        })
      .catch((err) => console.log(err));
  };

 const deleteItem = (photoId) => {
    axios
        .delete(`${API_URL}/photo/${photoId}`)
        .then((response) => {
            getPhotos();
        })
        .catch((err) => console.log({ err }));
};

 const viewPhotos = () => {
    return photos.length > 0 ? (
        photos.map((photo, index) => {
            return (
                <div
                    key={index}
                    style={{
                        borderBottom: "1px solid black",
                    }}
                >
                    <img
                        src={photo.photo}
                        style={{ width: "500px", height: "300px" }}
                        alt={`Photo ${index}`}
                    />
                    <Link
                        to={{
                            pathname: "details",
                            state: {
                                data: photo,
                            },
                        }}
                    >
                        <h3>Location: {photo.location}</h3>
                    </Link>
                    <h4>Time: {photo.time}</h4>
                    <button
                        onClick={() => deleteItem(photo._id)}
                        style={{ marginBottom: "15px" }}
                    >
                        X
                    </button>
                </div>
            );
        })
    ) : (
        <h2>No Photos to Display</h2>
    );
};

  useEffect(() => {
    getPhotos();
  }, []);

  return <div>{viewPhotos()}</div>;
}

export default PhotoPage;
