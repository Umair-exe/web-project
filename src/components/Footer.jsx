import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='mt-48 bg-stone-900 text-white flex flex-col items-center space-y-3 space-x-6 sm:space-y-0 sm:flex-row justify-center sm:justify-evenly px-0 py-20 sm:px-96 sm:py-20 '>
                <div className='flex flex-col justify-center items-center'>
                    <img className='transition transition-0 hover:transition-duration-700 hover:-translate-y-1 hover:scale-110 ease-in-out ' src="https://www.stormfiber.com/wp-content/uploads/2016/12/phone.png" alt="image" />
                    <h1 className='text-3xl text-sky-500 font-bold transition transition-150 ease-in-out mt-3 text-center'>A WHOLE NEW</h1>
                    <h1 className='text-3xl font-light  text-sky-500 transition transition-150 ease-in-out text-center'>HERE THE DIFFERENCE</h1>
                    <p className='text-sm text-center '>
                        Communication is the key to human interaction. Now talk to your loved ones via the power of optic fiber. StormFiber brings you an affordable residential landline service. Storm Phone is an advanced voice service on StormFiber’s 100% optic fiber network hence maintaining HD voice clarity and uninterrupted communication backed by our automated systems.
                    </p>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img className='transition transition-0 hover:transition-duration-700 hover:-translate-y-1 hover:scale-110 ease-in-out' src="https://www.stormfiber.com/wp-content/uploads/2016/12/pc.png" alt="image" />
                    <h1 className='text-3xl  text-sky-500  font-bold transition transition-150 ease-in-out mt-3 text-center'>High Quality Television Service</h1>
                    <h1 className='text-3xl font-light  text-sky-500 transition transition-150 ease-in-out text-center'>HERE THE DIFFERENCE</h1>
                    <p className='text-sm text-center'>
                        StormFiber introduces you to its high definition television service through its fiber optic network. Catch the news, get updated on today’s fashion trends, or watch your favorite sports team in action. Enhance your lifestyle with 200+ local and international television channels.
                    </p>
                </div>

            </div>
            <div className='p-3 text-center border-white border-t-2 bg-black text-white'>
                <p>© 2021 All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
