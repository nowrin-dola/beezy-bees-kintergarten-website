import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const { name, picture, age, gender, phone, salary } = props.teacher;
    return (
        <div>
            <div className="mx-auto col-lg-4">
                <div className="card card-style h-100">
                    <img src={picture} className=" mt-3 rounded-circle mx-auto d-block " alt="..." />
                    <div class="card-body">
                        <h5 className="card-title fw-bold">{name}</h5>
                        <p class="card-text"><span className='fw-bold'>Age: </span>  {age}</p>
                        <p class="card-text"><span className='fw-bold'>Gender: </span> {gender}</p>
                        <p class="card-text"> <span className='fw-bold'>Phone: </span>{phone}</p>
                        <h5 class="card-text"> <span className='fw-bold'>Salary: $ </span> {salary} </h5>

                    </div>

                </div>
            </div>
        </div>


    );
};

export default Teacher;