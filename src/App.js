import React, { useState, useEffect } from 'react';
import {Routes,Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import IsPrivate from "./components/IsPrivate";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";
import AddPhoto from "./pages/AddPhoto";
import AddMeetup from "./pages/AddMeetup";
import Photo from "./components/Photo";
import axios from "axios";
import Meetup from "./components/Meetup";
import EditMeet from './pages/editMeet';
import EditPhoto from './pages/editPhoto';
import MeetDetails from './pages/MeetDetails';
import PhotoDetails from './pages/PhotoDetails';

function App() {

    return (
        <div className='App'>
            <Navbar/>
            <Routes>
                <Route path="/photos" element={<Photo />}/>
                <Route path="/photos/new" element={<IsPrivate><AddPhoto /></IsPrivate>} />
                <Route path='/photo/:photoId' element={<IsPrivate><PhotoDetails/></IsPrivate>} />
                <Route path='/photo/edit/:photoId' element={<IsPrivate><EditPhoto/></IsPrivate>} />
                <Route path="/meets" element={<IsPrivate><Meetup /></IsPrivate>} />
                <Route path="/meets/new" element={<IsPrivate><AddMeetup /></IsPrivate> } />
                <Route path='/meet/:meetId' element={<IsPrivate><MeetDetails/></IsPrivate>} />
                <Route path='/meet/edit/:meetId' element={<IsPrivate><EditMeet/></IsPrivate>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<LoginPage/>} />
            </Routes>
        </div>
    );
}

export default App;
