import React from "react";
import Post from "./post/Post";
import c from "./MyPosts.module.css";


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post ava={p.ava} message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText);
    }

    return (
        <div className={c.myposts}>
            <h3>My Posts</h3>
            <div><div>
                <textarea onChange={ onPostChange } value={props.newPostText} ref={newPostElement}></textarea>
            </div>
                <button onClick={ onAddPost }>Add post</button>
                <button>Delete</button>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;