import React from 'react'
import CallIcon from '@material-ui/icons/Call';

const Navbar = () => {
    return (
        <div className='flex justify-evenly items-center p-0 sm:p-5 bg-stone-900 text-white top-0 sticky z-20 transition transition-duration-500'>
            <div className='text-3xl font-bold cursor-pointer'>
                <h1 >Logo</h1>
            </div>
            <div className='flex flex-col justify-around space-x-5 sm:flex-row invisible sm:visible '>
                <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black  '>HOME</h1>
                <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black   ' >ABOUT US</h1>
                <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black   '>PLANS</h1>
                <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black   '>PRODUCTS</h1>
                <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black   '>CONTACT US</h1> 
            </div>
            <div>
                <button className='flex items-center border-2 border-white px-0 sm:px-6 py-2 hover:bg-white hover:text-black '><CallIcon /> 041414141414</button>
            </div>
        </div>
    )
}

export default Navbar
