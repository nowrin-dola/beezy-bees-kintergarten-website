import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Manubar from '../Manubar/Manubar';
import Teacher from '../Teacher/Teacher';

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

            <h1 className='fw-bolder text-success'>Our Honerable Teachers</h1>

            <div className='spaceing'>
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
            </div>
            <Footer></Footer>


        </div>
    );
};

export default Teachers;