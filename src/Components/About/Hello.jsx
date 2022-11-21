import React from "react";
import './about.css';
import {Myself} from '../Image/Pic__me';



const Hello = () => {


    return(
        <div>
        <section>
        <div className="container">
            <div className="hello-text">Hello, I'm</div>
            <div className="name-text">Kennedy Lee</div>
            <div className="title-text">Front-end Developer</div>
            <Myself />
        </div>
        </section>
        </div>
    )
}
export default Hello;