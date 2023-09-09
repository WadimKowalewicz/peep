import React from "react";
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "../dialogs/dialog/Dialog";

const Navbar = (props) => {
/*
    let sideBarElement = props.store.sidebar.friends.map(n => <Dialog ava={n.ava} name={n.name} id={n.id}/>);
*/
    return (
        <div className={c.navbar}>
            <div className={c.item}><NavLink to="/profile" activeStyle={{ color: 'gold' }}>Profile</NavLink></div>
            <div className={c.item}><NavLink to="/dialogs" activeStyle={{ color: 'gold' }}>Messages</NavLink></div>
            <div className={c.item}><NavLink to="/newsfeed" activeStyle={{ color: 'gold' }}>Newsfeed</NavLink></div>
            <div className={c.item}><NavLink to="/music" activeStyle={{ color: 'gold' }}>Music</NavLink></div>
            <div className={c.item}><NavLink to="/settings" activeStyle={{ color: 'gold' }}>Settings</NavLink></div>
            <div className={c.sidebar}>
                Friends



            </div>
        </div>
    )
}

/*
{sideBarElement}
*/
export default Navbar;
