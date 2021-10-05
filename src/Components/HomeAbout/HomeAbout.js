import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../children-playing-grass (1).jpg';
import './HomeAbout.css';

const HomeAbout = () => {
    return (
        <div className='d-flex m-5'>
            <div className='col-md-6'>
                <img className='home-img' src={picture} alt="" srcset="" />

            </div>
            <div className='col-md-6'>
                <h4 className='text-primary fw-bold m-5'>Bring Fun Life To Your Kids</h4>
                <p>Bizzy Bees Kindergarten was established in 1977 by Mr william staaffy. It was founded with a mission to provide a balanced and well-rounded education for all of our students, using English as the primary medium of instruction but placing equal emphasis on Bangla. Bizzy Bees's mission is to build curious, knowledgeable and caring young individuals, </p>
                <Link to='./about'>
                    <button className="btn btn-danger p-2 fw-bold">More About</button>
                </Link>

            </div>


        </div>
    );
};

export default HomeAbout;