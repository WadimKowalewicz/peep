import React from "react";
import preloader from '../../../assets/images/userPhoto.png';
import c from './Preloader.module.css'

// src={preloader} must have .svg


let Preloader = (props) => {
    return <div>
        <img className={c.preloader} src={preloader}/>
    </div>
}

export default Preloader;