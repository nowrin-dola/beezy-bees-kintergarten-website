import React from 'react';
import Footer from '../Footer/Footer';
import Manubar from '../Manubar/Manubar';
import logo from '../../logo.jpg'
import professor from '../../professor.jpg'

const About = () => {
    return (
        <div>
            <Manubar></Manubar>
            <div>
                <img src={logo} alt="" srcset="" />
                <p>Bizzy Bees Kindergarten is an all-girls educational institute in Dhanmondi, Dhaka, Bangladesh. It has 4 campuses and around 25,000 students. Bizzy Bees Kindergarten is one of the renowned educational institutes in Bangladesh. We consider every child as unique and so we maintain inclusive learning-teaching environment at every step in our great set-up. It is a fact now that our results are getting better in the public examinations every time. It has been made possible through our extensive and effective care stretched out to every individual student. Our students conglomerate here from multifarious backgrounds; various strata of the society. They enter the threshold of our strong and fortified home of learning and come out bearing an all-round personality.</p>
            </div>
            <div>
                <div className=" m-3 ">
                    <div className="row">

                        <div className="col-md-4 mx-auto">
                            <div className="card ">
                                <div className="card-details">
                                    <img className="w-100" src={professor} alt="" />
                                </div>
                                <div className="text-area mt-3">
                                    <p className='fw-bolder '>Name:Steffy William</p>
                                    <p className='fw-bolder '>Designation:Chairman</p>
                                    <p className='fw-bolder '>From 2012-present</p>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default About;