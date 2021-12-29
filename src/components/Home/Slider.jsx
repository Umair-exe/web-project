import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Slider.css';


const Slider = () => {
    const fadeImages = [
        'https://www.stormfiber.com/wp-content/uploads/2019/12/text-100-50-30-mbps-slider.png',
        'https://www.stormfiber.com/wp-content/uploads/2019/12/text-100-50-30-mbps-slider.png',
        'https://www.stormfiber.com/wp-content/uploads/2019/12/text-100-50-30-mbps-slider.png'
    ];

    return (
        <div className='bg-stone-900'>
            <div className="slide-container">
                <Fade>
                    <div className="each-fade">
                        <div>
                            <img src={fadeImages[0]} alt='banner'/>
                        </div>
                       
                    </div>
                    <div className="each-fade">
                        <div>
                            <img src={fadeImages[1]} alt='banner'/>
                        </div>
                    </div>
                    <div className="each-fade">
                        <div>
                            <img src={fadeImages[2]} alt='banner'/>
                        </div>
                
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Slider;
