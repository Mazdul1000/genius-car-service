import React from 'react';
import { Col } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (

            <Col sm={12} md={6} lg={4}>
               <div className="card p-3" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>    

        </Col>
    );
};

export default Expert;