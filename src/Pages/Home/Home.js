import React from 'react';
import Services from './Services/Services';
import "./Home.css"
import Experts from './Experts/Experts';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className='home'>
                <Services></Services>
            </div>
            <Experts></Experts>
        </>

    );
};

export default Home;