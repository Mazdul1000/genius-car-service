import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='service-price'>Price: ${price}</p>
            <p className='service-info'>{description}</p>
            <button className='service-btn bg-primary text-light'>Purchase</button>
        </div>
    );
};

export default Service;