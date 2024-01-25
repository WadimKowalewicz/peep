import React from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/userPhoto.png';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={c.descriptionBlock}>
                <img src='https://wallpapercave.com/wp/wp2461898.jpg' />
                <img src={profile.photos.large || userPhoto} className={c.userPhoto} />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
               
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