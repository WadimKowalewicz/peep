import React from "react";
import preloader from '../../../assets/images/my-loader.svg';
import c from './Preloader.module.css'


let Preloader = (props) => {
    return <div>
        <img className={c.preloader} src={preloader}/>
    </div>
}

export default Preloader;