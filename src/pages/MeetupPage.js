import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function MeetupPage() {
  const [photos, setPhotos] = useState([]);

  const getPhotos = () => {
    axios
      .get(`${API_URL}/meet/meets`)
      .then((res) => {
        const formattedPhotos = res.data.map((photo) => ({
          id: photo._id,
          imageSrc: photo.photo,
          location: photo.location,
        }));
        setPhotos(formattedPhotos);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="PhotoPage">
      {photos.map((photo) => (
        <div key={photo.id} className="post">
          <img src={photo.imageSrc} className="ph" alt="Photo" />
          <h4>{photo.location}</h4>
        </div>
      ))}
    </div>
  );
}

export default MeetupPage;