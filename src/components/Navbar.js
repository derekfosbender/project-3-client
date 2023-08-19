import {Link} from "react-router-dom";
import {useContext} from "react";
import { AuthContext} from "../context/auth.context";


function Navbar() {
    const {isLoggedIn,user,logOutUser} = useContext(AuthContext);

    return (
        
            <nav className="navbar">
                <a href="/photos" className="navbar-brand">Photos</a>
                <ul className="navbar-nav">
            <a href="/signup" className="nav-link">Signup</a>
            <></>
            <a href="/login" className="nav-link">Login</a>

            <>
            
            </>
            {isLoggedIn && (
            <>
            
            {/* <span>{user && user.name}</span> */}
            <a href="/photos/new" className="nav-link">Add Photo</a>
            <a href="/meets" className="nav-link">Meetups</a>
            <a href="/meets/new" className="nav-link">Add Meetup</a>
            <button onClick={logOutUser}>Logout</button>
            </>
            )}
            </ul>
            </nav>

        
    )
}

export default Navbar;