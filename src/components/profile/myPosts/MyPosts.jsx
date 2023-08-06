import React from "react";
import Post from "./post/Post";
import c from "./MyPosts.module.css"


const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Delete</button>
            </div>
            <div className={c.myposts}>
                <Post message="Yo!" likesCount="25"/>
                <Post message="It's my first message!" likesCount="5"/>
            </div>
        </div>
    )
}

export default MyPosts;