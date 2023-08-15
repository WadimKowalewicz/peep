import React from "react";
import c from './Post.module.css'



const Post = (props) => {
    return (
        <div className={c.post}>
                 <img src={props.ava}/>
                {props.message}
            <div>
                {props.likesCount} likes
            </div>
        </div>
    )
}

export default Post;