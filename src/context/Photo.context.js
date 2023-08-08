import { createContext, useState } from "react";
import axios from "axios";

const PhotoContext = createContext;

export const PhotoProvider = ({children}) => {
    const [photoList, setPhotos] = useState([]);
    const handlePhotoSubmit = (formData) => {
    axios
    .post("https://localhost:5005/photo", formData)
    .then((res) => {
        setPhotos([...photoList, res.data.photoList]);
    })
    .catch((err) => console.log({err}))
};

return (
<PhotoContext.Provider value={{photoList,setPhotos,handlePhotoSubmit}}>
    {children}
</PhotoContext.Provider>
)
};

export default PhotoContext;