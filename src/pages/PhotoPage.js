import { useState, useEffect } from "react";
import axios from "axios";



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

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="PhotoPage">
      {photos.map((photo) => (
        <div key={photo._id} className="post">
          <img src={photo.photo} className="ph" alt={`Photo ${photo._id}`} />
          <h4>{photo.location}</h4>
        </div>
      ))}
    </div>
  );
}

export default PhotoPage;
