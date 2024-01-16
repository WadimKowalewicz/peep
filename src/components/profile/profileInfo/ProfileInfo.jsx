import React from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile) {
        return <Preloader />
    }
    return (
        <div>
            <img src='https://wallpapercave.com/wp/wp2461898.jpg'/>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div className={c.descriptionBlock}>
                <img className={c.userPhoto} src={profile.photos.large} />
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <a href={profile.contacts.twitter} target={"_blank"}>X</a>
                {profile.lookingForAJob}
                <div>I'm open for a job</div>
                <div>{profile.lookingForAJobDescription}</div>

            </div>
        </div>
    )
}

export default ProfileInfo;