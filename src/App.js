import React, { useState, useEffect } from 'react';
import {Routes,Route} from "react-router-dom"
import './App.css';
import HomePage from './components/HomePage';
import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";
import PhotoPage from "./pages/PhotoPage";
import AddPhoto from "./pages/AddPhoto";
import AddMeetup from "./pages/AddMeetup";
import MeetupPage from "./pages/MeetupPage";
import axios from "axios";

function App() {

    const [allPhotos, setAllPhotos] = useState(null);

    useEffect(() => {
        getData();
    }, [])

   const getData = () => {
        axios
            .get("http://localhost:3001/api/photos")
            .then((photosFromAPI) => {
                    setAllPhotos(photosFromAPI.data);
                })
            .catch((err) => console.log({ err }));
    };


    return (
        <div className='App'>
            <Navbar/>
            <Routes>
                <Route exact path="/photos" render={(props) =>(
                    <PhotoPage
                    {...props}
                    getData={this.getData}
                    allPhotos={this.state.allPhotos}
                    />
                )} 
                />
                <Route path="/photos/new" element={<IsPrivate><AddPhoto /></IsPrivate>} />
                <Route path="/meetups" element={<IsPrivate><MeetupPage /></IsPrivate>} />
                <Route path="/meetups/new" element={<IsPrivate><AddMeetup /></IsPrivate> } />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<LoginPage/>} />
            </Routes>
        </div>
    );
}

export default App;
