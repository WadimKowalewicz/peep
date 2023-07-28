import React from "react";
import c from "./NewPost.module.css";


const NewPost = () => {
    return (
        <div>
            <div className={c.item}>New post</div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Delete</button>
        </div>
    )
}

export default NewPost;