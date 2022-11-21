import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Backend = () => {


    return(
                <div className="col">
                    <div className="card frontend__card">
                        <div className="card-body">
                            <div className="card-title">Backend Developer</div>
                              
                                <div className="row">
                                    <div className="col">left
                                    <div className="exp-text">
                                        <BsFillPatchCheckFill />
                                        PHP
                                    </div>
                                    <div className="exp-text">
                                        <BsFillPatchCheckFill />
                                        Node JS
                                    </div>
                                </div>
                            <div className="col">
                                    col right
                                    <div className="exp-text">
                                        <BsFillPatchCheckFill />
                                        Firebase Cloud
                                    </div>
                                    <div className="exp-text">
                                        <BsFillPatchCheckFill />
                                        MongoDB
                                    </div>
                                    <div className="exp-text">
                                        <BsFillPatchCheckFill />
                                        MySQL
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
    )
}

export default Backend;