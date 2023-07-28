import React from "react";
import c from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={c.navbar}>
            <div><a href="/profile">Profile</a></div>
            <div><a href="/dialogs">Messages</a></div>
            <div><a href="/newsfeed">Newsfeed</a></div>
            <div><a href="/music">Music</a></div>
            <div><a href="/settings">Settings</a></div>
        </div>
    )
}

export default Navbar;