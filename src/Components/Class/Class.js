import React, { useEffect, useState } from 'react';
import Cls from '../Cls/Cls'


const Class = () => {

    const [classes, setClasses] = useState([]);



    useEffect(() => {
        fetch('./class.json')
            .then(res => res.json())
            .then(data => setClasses(data))



    }, []);
    return (

        <div>
            <h1 className='fw-bold text-primary'> Our Best Classes</h1>

            <div className='spaceing'>
                <div className="row m-5">
                    <div className="col-lg-12">


                        <div className="row g-4">
                            {
                                classes.map(clss => <Cls
                                    key={clss._id}
                                    clss={clss}

                                > </Cls>)

                            }


                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Class;