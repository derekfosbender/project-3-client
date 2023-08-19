// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const API_URL = "http://localhost:5005";

// export default function PhotoPage() {
//   const [photos, setPhotos] = useState([]);

//   const getPhotos = () => {
//     axios
//       .get(`${API_URL}/photo`)
//       .then((res) => {
//         setPhotos(res.data.photos);
//       })
//       .catch((err) => console.log(err));
//   };

//   const deleteItem = (photoId) => {
//     axios
//       .delete(`${API_URL}/photo/${photoId}`)
//       .then((response) => {
//         getPhotos();
//       })
//       .catch((err) => console.log({ err }));
//   };

//   const displayPhotos = () => {
//      return photos.map((photo,i) => (
//       <div key={i}>
//         <header>{photo.photo}</header>
//      </div>
//      ))

//   }
//   return (
//     <div>
//       {displayPhotos()}
//     </div>
//   )
// }