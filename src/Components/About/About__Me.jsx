import React from "react";

import { FaHubspot } from 'react-icons/fa';
import { BsPeopleFill, BsFolderFill } from "react-icons/bs";
import  exampleapp  from './exampleapp.png';
import './about.css'

const About__Me = () => {


    return(
        <div>
        <section>
        <div className="container">
            <div className="row">
                <div className="col">
                    <img className="example-app-pic" src={exampleapp} alt="app" />
                </div>
                <div className="col box-02">
                    <div className="card">
                        <div className="card-body">
                        <FaHubspot />
                        <div className="card-title">Experience</div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                        <BsPeopleFill />
                        <div className="card-title">Clients</div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                        <BsFolderFill />
                        <div className="card-title">Projects</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        </section>
        </div>
    )
}

export default About__Me;