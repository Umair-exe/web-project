import React, { useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styles from './Slider.module.css';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const images = [
        'https://www.stormfiber.com/wp-content/uploads/2019/12/text-100-50-30-mbps-slider.png',
    ]

    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
    return (
        <div className={styles.container}>
            <div className='cursor-pointer' >
                <ArrowBackIosIcon style={{fontSize:'50px',color:'white'}} />
            </div>
            <div className='flex justify-center transition duration-1000 ease-in-out' style={{transform:`translateX(${-100*index}vw)`}}>
                {images.map((img, i) => (
                    <div className='h-full w-full sm:h-5/6 sm:w-5/6  ' key={i}>
                        <img src={img} alt='banner' />
                    </div>
                ))}
            </div>
            <div className='cursor-pointer' >
                <ArrowForwardIosIcon  style={{fontSize:'50px',color:'white'}} />
            </div>
        </div>
    )
}

export default Slider
