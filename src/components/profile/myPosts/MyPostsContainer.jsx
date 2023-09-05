import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (newText) => {
        let action = updateNewPostTextActionCreator(newText);
        props.dispatch(action);

    }
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={props.store.profilePage.posts} newPostText={props.store.profilePage.newPostText}/>)
}

export default MyPostsContainer;