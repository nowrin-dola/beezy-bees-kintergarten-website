import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Manubar from '../Manubar/Manubar';
import './Teachers.css'


const Teachers = () => {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('./Teacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data))

    }, []);
    return (
        <div>
            <Manubar></Manubar>



            <div className="container all-classes">
                <div className="all-class">
                    <h1 className='fw-bolder text-success'>Our Honerable Teachers</h1>

                </div>

                <div className="classes">
                    <div className="row">
                        {teachers?.map((teacher) => (
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-details">
                                        <img className="w-75 img-style" src={teacher.picture} alt="" />
                                    </div>
                                    <div className="text-area mt-3">
                                        <h4 className='text-primary fw-bold' >{teacher.name}</h4>
                                        <div className='fw-bold'>
                                            <p><span className='text-danger'>Age:</span>  {teacher.age}</p>
                                            <p> <span className='text-danger'>Gander: </span> {teacher.gender}</p>
                                            <p><span className='text-danger'>Phone: </span> {teacher.phone}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>














            {/* <div className='spaceing'>
                <div className="row">
                    <div className="col-lg-12">


                        <div className="row g-4">
                            {
                                teachers.map(teacher => <Teacher
                                    key={teacher._id}
                                    teacher={teacher}

                                > </Teacher>)

                            }


                        </div>
                    </div>

                </div>
            </div> */}
            <Footer></Footer>


        </div>
    );
};

export default Teachers;