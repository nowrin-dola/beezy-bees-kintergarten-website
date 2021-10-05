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
                                <h1><span className='fw-bold text-danger'>Bizzy</span> <span className='fw-bold text-primary'>Bees</span> <span className='fw-bold text-success'>Kin</span ><span className='fw-bold text-danger'>der</span><span className='fw-bold text-primary'>gar</span><span className='fw-bold text-warning'>ten</span></h1>

                                <h4>Follow Us on:</h4>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <i class="fab fa-facebook-square"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fab fa-instagram"></i>
                                    </div>
                                    <div className="icon">
                                        <i class="fab fa-youtube"></i>
                                    </div>

                                </div>
                                <p className="mt-4 ">
                                    <small>
                                        This is a one of the best school in the dhaka city.
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
                                    <li className="footer-menu">Teachers</li>
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

                                    <div>
                                        <h5>+1 7 986 45 677 345</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">

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