import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='mt-48 bg-stone-900 text-white flex flex-col sm:flex-row sm:justify-evenly items-center space-y-3 sm:space-y-0  px-0 py-20 sm:px-96 sm:py-20 '>
                <div className='flex sm:flex-col flex-row text-sm sm:text-lg space-y-0 sm:space-y-2 space-x-3 sm:space-x-0 '>
                    <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black '>HOME</h1>
                    <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black ' >ABOUT US</h1>
                    <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black '>PLANS</h1>
                    <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black '>PRODUCTS</h1>
                    <h1 className='hover:transition hover:duration-300  cursor-pointer hover:bg-white hover:text-black '>CONTACT US</h1>
                </div>
                <div className='flex-[0.5] text-center sm:text-left'>
                    <h1 className='text-3xl text-sky-500 font-bold transition transition-150 ease-in-out mt-3'>A WHOLE NEW</h1>
                    <h1 className='text-3xl font-light  text-sky-500 transition transition-150 ease-in-out'>HERE THE DIFFERENCE</h1>
                    <p className='text-sm '>
                        Communication is the key to human interaction. Now talk to your loved ones via the power of optic fiber. StormFiber brings you an affordable residential landline service. Storm Phone is an advanced voice service on StormFiber’s 100% optic fiber network hence maintaining HD voice clarity and uninterrupted communication backed by our automated systems.
                    </p>
                    <button className='p-2 mt-4 shadow shadow-sky-600 hover:border-sky-500 hover:opacity-75 px-8 bg-sky-500 text-white font-bold'>MORE INFO</button>
                </div>
            </div>
            <div className='p-3 text-center border-white border-t-2 bg-sky-500 text-white'>
                <p>© 2021 All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
