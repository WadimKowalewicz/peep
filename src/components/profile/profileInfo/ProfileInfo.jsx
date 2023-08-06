import React from "react";
import c from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <img src='https://wallpapercave.com/wp/wp2461898.jpg'/>
            <div className={c.descriptionBlock}>ava + description</div>
        </div>
    )
}

export default ProfileInfo;