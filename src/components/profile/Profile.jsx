import React from "react";
import c from'./Profile.module.css'
import Post from "./post/Post";
import NewPost from "./newPost/NewPost";


const Profile = () => {
    return (
        <div>
            <img src='https://wallpapercave.com/wp/wp2461898.jpg'/>
            <div className={c.item}>Buzz</div>
            <NewPost />
            <div className={c.item}>My posts</div>
            <Post someText='Hey! Nice to see you!' likesCount='5'/>
            <Post someText='Buon Giornatto!' likesCount='55'/>
            <Post someText='Yo!' likesCount='25'/>
        </div>
    )
}

export default Profile;