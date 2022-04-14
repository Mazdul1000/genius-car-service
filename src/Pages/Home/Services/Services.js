import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';
const Services = () => {
    const[services, setServices] = useState([]);

    useEffect(() => {
    async function fetchServices(){
        const response = await fetch('service.json');
        return response.json();
    } 

    fetchServices()
    .then(data => setServices(data));

    
    },[])
    return (
        <div className='services'>
            <h1 className='service-title text-primary fw-bold'> Our Services</h1>
            <div className="services-container">
              {services.map(service => <Service key={service.id} service ={service}></Service>)}  
            </div>
            
        </div>
    );
};

export default Services;