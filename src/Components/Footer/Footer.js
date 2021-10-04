import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Bizzy Bees Kindergarten</h1>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        {/* <FontAwesomeIcon icon={faInstagramSquare} /> */}
                                    </div>
                                    <div className="icon">
                                        {/* <FontAwesomeIcon icon={faTwitterSquare} /> */}
                                    </div>
                                    <div className="icon">
                                        {/* <FontAwesomeIcon icon={faYoutube} /> */}
                                    </div>
                                    <div className="icon">
                                        {/* <FontAwesomeIcon icon={faFacebookSquare} /> */}
                                    </div>
                                </div>
                                <p className="mt-4 ">
                                    <small>
                                        This is a one of the renowned school in the dhaka city.
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>Nowrin © . All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">About us</li>
                                    <li className="footer-menu">Classes</li>
                                    <li className="footer-menu">Contact us</li>
                                    <li className="footer-menu">Career</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3>Sign up for the newsletter</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        {/* <FontAwesomeIcon icon={faPhoneVolume} /> */}
                                    </div>
                                    <div>
                                        <h5>+1 7 986 45 677 345</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">
                                        {/* <FontAwesomeIcon icon={faMapMarkedAlt} /> */}
                                    </div>
                                    <div>
                                        <p>
                                            Rd. No.4,Dhanmondi
                                            <br /> Dhaka, Bangladesh
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;