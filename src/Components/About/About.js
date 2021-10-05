import React from 'react';
import Footer from '../Footer/Footer';
import Manubar from '../Manubar/Manubar';
import logo from '../../logo.jpg';
import pic from '../../look-how-interesting-it-is.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <Manubar></Manubar>
            <div className='m-5'>
                <img src={logo} alt="" srcset="" />
                <h2 className='m-3'> <span className='fw-bold text-danger'>Bizzy</span> <span className='fw-bold text-primary'>Bees</span> <span className='fw-bold text-success'>Kin</span ><span className='fw-bold text-danger'>der</span><span className='fw-bold text-primary'>gar</span><span className='fw-bold text-warning'>ten</span></h2>
                <p>Bizzy Bees Kindergarten is an all-girls educational institute in Dhanmondi, Dhaka, Bangladesh. It has 4 campuses and around 25,000 students. Bizzy Bees Kindergarten is one of the renowned educational institutes in Bangladesh. We consider every child as unique and so we maintain inclusive learning-teaching environment at every step in our great set-up. It is a fact now that our results are getting better in the public examinations every time. It has been made possible through our extensive and effective care stretched out to every individual student. Our students conglomerate here from multifarious backgrounds; various strata of the society. They enter the threshold of our strong and fortified home of learning and come out bearing an all-round personality.</p>
            </div>
            <div className='d-flex m-3'>
                <div className='col-md-6'>
                    <h2 className='fw-bold text-success mb-3'>Why Choose Us</h2>
                    <p> We consider every child as unique and so we maintain inclusive learning-teaching environment at every step in our great set-up. It is a fact now that our results are getting better in the public examinations every time. It has been made possible through our extensive and effective care stretched out to every individual student.</p>
                    <p className='mt-3'><i class="fas fa-check"></i> Beautifull big Campus </p>
                    <p> <i class="fas fa-check"></i> Mostly Trainde Teacher</p>
                    <p> <i class="fas fa-check"></i> Mautimedia Classroom</p>
                </div>
                <div className='col-md-6'>
                    <img className='about-img' src={pic} alt="" srcset="" />
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default About;