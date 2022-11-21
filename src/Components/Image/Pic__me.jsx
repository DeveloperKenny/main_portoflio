import React from "react";
import  myself from '../Image/myself.jpg';
import '../Image/Pic__me.css';

export const Myself = () => {


    return(
        
    <div className="container">
            <img className="myself_pic"src={myself} alt="me" />
    </div>
    )
}
