import React, {useState} from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/userPhoto.png';
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
    
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData);
        setEditMode(false);
    }



    return (
        <div>
            <div className={c.descriptionBlock}>
                <img src='https://wallpapercave.com/wp/wp2461898.jpg' />
                <img src={profile.photos.large || userPhoto} className={c.userPhoto} />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
            {editMode 
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
            : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
        </div>
    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div>
        { isOwner && <div><button  onClick={goToEditMode}>edit</button></div> }
        <div>
            <b>Full Name:</b>{profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        <div>
            <b>My professional skills:</b>{profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About me:</b>{profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}


const Contact = ({ contactTitle, contactValue }) => {
    return <div className={c.contact}>
        <b>{contactTitle}:</b>{contactValue}
    </div>

}



export default ProfileInfo;