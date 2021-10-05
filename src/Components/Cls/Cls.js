import React from 'react';
import './Cls.css'

const Cls = (props) => {

    const { picture, className, classes, ageGroup, price } = props.clss
    return (



        <div className="card-margin col-lg-3">
            <div className="card card-style h-100">
                <img src={picture} className="  cls-img img-fluid mx-auto d-block " alt="..." />
                <div class="card-body">
                    <h5 className="card-title fw-bold text-primary">{className}</h5>
                    <p className="card-text fw-bold"><span className='text-danger'>Classes: </span>  {classes}</p>
                    <p className="card-text fw-bold"><span className='text-danger'>Age Group: </span> {ageGroup}</p>

                    <h5 className="card-text fw-bold"> <span className='text-danger'>Price: </span> {price} </h5>


                </div>

            </div>
        </div>




    );
};

export default Cls;