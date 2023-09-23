import React from "react";
import c from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    console.log(props)
    return (
        <div className={c.header}>
            <img src='https://images-platform.99static.com//1F5oU4YdF2vM0pj8PXqFkKLGMtM=/151x0:1023x872/fit-in/500x500/99designs-contests-attachments/93/93534/attachment_93534809'/>

            <div className={c.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    )
}

export default Header;