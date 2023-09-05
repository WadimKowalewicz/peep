import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import store from "../../redux/reduxStore";



const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store}
                              dispatch={store.dispatch.bind(store)}/>
        </div>
    )
}

export default Profile;