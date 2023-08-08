import {Link} from "react-router-dom";
import {useContext} from "react";
import { AuthContext} from "../context/auth.context";

function Navbar() {
    const {isLoggedIn,user,logOutUser} = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/login"><button>Login</button></Link>

            <>
            
            </>
            {isLoggedIn && (
            <>
            
            <button onClick={logOutUser}>Logout</button>
            <span>{user && user.name}</span>
            <Link to="/photos"><button>Posts</button></Link>
            <Link to="/photos/new"><button>Add Post</button></Link>
            <Link to="/meetups"><button>Meetups</button></Link>
            <Link to="/meetups/new"><button>Add Meetup</button></Link>

            </>
            )}
        </nav>
    )
}

export default Navbar;