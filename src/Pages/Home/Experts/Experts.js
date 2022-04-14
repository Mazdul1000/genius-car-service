import React from 'react';
import { Row } from 'react-bootstrap';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {

    const experts = [
        {id:1,name:"Jack Nielsen", img:expert1},
        {id:2,name:"Cold Stone", img:expert2},
        {id:3,name:"Jimmy Walter", img:expert3},
        {id:4,name:"Mohammad Ali", img:expert4},
        {id:5,name:"Ron Atkinson", img:expert5},
        {id:6,name:"Jacquelin Diaz", img:expert6}

    ]

    return (

        
        <div className='container my-5'>
           
            <h1 className='text-primary text-center fw-bold'>Our Experts</h1>
            <Row>
               {experts.map(expert => <Expert  key={expert.id} expert ={expert}></Expert>)} 
            </Row>
                
            
        </div>
    );
};

export default Experts;