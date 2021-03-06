import React from 'react';
import { Link } from 'react-router-dom';
import Manubar from '../Manubar/Manubar';
import './Header.css'



const Header = () => {
    return (
        <div>
            <div className="banner-container ">
                <div className="">
                    <Manubar></Manubar>
                    <div className="row d-flex banner align-items-center justify-content-center">

                        <div className="col-md-6">
                            <h1 className="title fw- bold">
                                Quality Learning <br /> For Every Child
                            </h1>



                            <Link to='./about'>
                                <button className="mt-3 about-btn">About Us</button>
                            </Link>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;