import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Backend from './Backend';
import './Frontend.css';

const Frontend = () => {


    return(
        <div>
        <section>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card frontend__card">
                        <div className="card-body">
                            <div className="card-title">Frontend Developer</div>
                              
                                <div className="row">
                                    <div className="col">left
                                    <div className="exp-text">
                                        <BsFillPatchCheckFill />
                                        HTML
                                    </div>
                                    <div className="exp-text">
                                        <BsFillPatchCheckFill />
                                        CSS
                                    </div>
                                    <div className="exp-text">
                                        <BsFillPatchCheckFill />
                                        Javascript
                                    </div>

                                    </div>
                                    <div className="col">Right
                                    <div className="exp-text">
                                        <BsFillPatchCheckFill />
                                        Tailwind
                                    </div>
                                    <div className="exp-text">
                                        <BsFillPatchCheckFill />
                                        Bootstrap
                                    </div>
                                    <div className="exp-text">
                                        <BsFillPatchCheckFill />
                                        React
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <Backend />
                </div>
            </div>

        </div>
        </section>
        </div>
    )
}

export default Frontend;