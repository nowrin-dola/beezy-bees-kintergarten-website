import React from 'react';
import './Cls.css'

const Cls = (props) => {

    const { picture, className, classes, ageGroup, price } = props.clss
    return (



        <div className="card-margin col-lg-3">
            <div className="card card-style h-100">
                <img src={picture} className=" mt-3 img img-fluid mx-auto d-block " alt="..." />
                <div class="card-body">
                    <h5 className="card-title fw-bold">{className}</h5>
                    <p class="card-text"><span className='fw-bold'>Classes: </span>  {classes}</p>
                    <p class="card-text"><span className='fw-bold'>Age Group: </span> {ageGroup}</p>

                    <h5 class="card-text"> <span className='fw-bold'>Price:</span> {price} </h5>


                </div>

            </div>
        </div>




    );
};

export default Cls;