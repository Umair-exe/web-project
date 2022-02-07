import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Slider.css';


const Slider = () => {
    const fadeImages = [
        'https://www.stormfiber.com/wp-content/uploads/2019/12/text-100-50-30-mbps-slider.png',
        'https://www.stormfiber.com/wp-content/uploads/2019/12/text-100-50-30-mbps-slider.png'
    ];

    return (
        <div  className=' flex justify-center p-20 text-4xl font-extrabold bg-no-repeat bg-cover bg-center bg-fixed bg-gradient-to-r from-cyan-500 to-blue-500 sm:text-5xl sm:p-40'>
            <h1>Home</h1>
        </div>
    );
};

export default Slider;


