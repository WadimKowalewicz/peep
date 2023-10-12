import React from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <img src='https://wallpapercave.com/wp/wp2461898.jpg'/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className={c.descriptionBlock}>
                <img className={c.userPhoto} src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <a href={props.profile.contacts.twitter} target={"_blank"}>X</a>
                {props.profile.lookingForAJob}
                <div>I'm open for a job</div>
                <div>{props.profile.lookingForAJobDescription}</div>

            </div>
        </div>
    )
}

export default ProfileInfo;