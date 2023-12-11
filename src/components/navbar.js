import React, { useContext } from "react";
import Logo from "../image/logo.webp";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {

    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="links">
                    <Link className='link' to="/?cat=Game">
                        <h6>Game</h6>
                    </Link>
                    <Link className='link' to="/?cat=Game">
                        <h6>Tech</h6>
                    </Link>
                    <Link className='link' to="/?cat=Game">
                        <h6>Art</h6>
                    </Link>
                    <Link className='link' to="/?cat=Game">
                        <h6>News</h6>
                    </Link>
                    <Link className='link' to="/?cat=Game">
                        <h6>Food</h6>
                    </Link>
                    <Link className='link' to="/?cat=Game">
                        <h6>Movie</h6>
                    </Link>
                    <span>{currentUser?.username}</span>
                    {currentUser ? (
                        <span onClick={logout}>Logout</span>
                    ) : (
                        <Link className="link" to="/login">
                            Login
                        </Link>
                    )}
                    <span className="Write">
                        <Link className="link" to="/write">Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;