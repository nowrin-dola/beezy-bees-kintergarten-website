import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Manubar from '../Manubar/Manubar';
import './Classes.css'

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('./classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))

    }, []);

    return (
        <div>
            <Manubar></Manubar>
            <div className="container all-classes">
                <div className="all-class">
                    <h1 className='fw-bold text-danger m-3'>Our Classes</h1>
                </div>

                <div className="classes">
                    <div className="row">
                        {classes?.map((cls) => (
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-details">
                                        <img className="classes-img w-100" src={cls.picture} alt="" />
                                    </div>
                                    <div className="text-area mt-3">
                                        <h4 className='text-primary fw-bold' >{cls.className}</h4>
                                        <div className='fw-bold'>
                                            <p><span className='text-danger'>Classes:</span>  {cls.classes}</p>
                                            <p> <span className=' text-danger'>Age Group: </span> {cls.ageGroup}</p>
                                            <p><span className='text-danger'>Price: </span> {cls.price}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer></Footer>


        </div>
    );
};

export default Classes;