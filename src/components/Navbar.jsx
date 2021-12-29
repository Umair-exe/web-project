import React, { useState } from 'react'
import CallIcon from '@material-ui/icons/Call';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import { FlashOffRounded } from '@material-ui/icons';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
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
            {toggleMenu ? (
                <div onClick={() => setToggleMenu(false)}>
                    <CloseIcon className='cursor-pointer' />
                </div>
            ) : (
                <div className='sm:hidden' onClick={() => setToggleMenu(true)}>
                    <DehazeIcon className='cursor-pointer' />
                </div>
            )}

            {toggleMenu && (
                <div className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none transition ease-in-out duration-900
                flex flex-col justify-start items-center space-y-5 rounded-md bg-indigo-900 text-white ">
                    <h1 className="text-xl w-full my-2"><CloseIcon className='cursor-pointer' onClick={() => setToggleMenu(false)} /></h1>
                    <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black  '>HOME</h1>
                    <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black   ' >ABOUT US</h1>
                    <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black   '>PLANS</h1>
                    <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black   '>PRODUCTS</h1>
                    <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black   '>CONTACT US</h1>
                </div>
            )

            }


        </div>
    )
}

export default Navbar
