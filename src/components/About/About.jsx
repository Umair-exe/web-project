import React from 'react';

const About = () => {
    return (
        <div>
            <div className=' flex justify-center p-20 text-4xl font-extrabold bg-no-repeat bg-cover bg-center bg-fixed bg-gradient-to-r from-cyan-500 to-blue-500 sm:text-5xl sm:p-40'>
                <h1 >About Us</h1>
            </div>

            <div className=' flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-center sm:justify-between text-center sm:text-left px-0 py-20 sm:px-96 sm:py-20 items-center '>
                <div className='h-56 w-56 sm:h-auto sm:w-auto flex-1'>
                    <img src="https://www.stormfiber.com/wp-content/uploads/2016/12/gadgets.png" alt="pic" />
                </div>
                <div className='flex-1 justify-center  items-center'>
                    <h1 className='text-xl sm:text-3xl font-bold transition transition-150 ease-in-out'>WELCOME TO A WHOLE NEW</h1>
                    <p >Internet Experience</p>
                    <p className='text-gray-900 '>
                        Consumers across the globe are switching to fiber backed connectivity; a medium that offers you
                        faster speeds when compared to conventional wired/wireless service
                        providers. StormFiber lets you tap into the true power of the Internet.
                    </p>
                </div>

            </div>

            <div className='bg-black text-white flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-center sm:justify-between text-center sm:text-left px-0 py-20 sm:px-96 sm:py-20 items-center '>
                <div className='h-56 w-56 sm:h-auto sm:w-auto flex-1'>
                    <img className='transition transition-0 hover:transition-duration-700 hover:-translate-y-1 hover:scale-110 ease-in-out'
                     src="https://www.stormfiber.com/wp-content/themes/stormfiber/images/icontv/tele.png" alt="pic" />
                </div>
                <div className='flex-1 justify-start items-center'>
                    <h1 className='text-xl sm:text-3xl font-bold transition transition-150 ease-in-out'>WHY YOU SHOULD CHOOSE US</h1>
                    <p className='text-gray-100 mt-3'>
                       1. What differentiates StormFiber from other internet and television service providers is its quality of service.
                    </p>
                    <p className='text-gray-100 mt-3'>
                        2. At StormFiber, we know that consumers expect entertainment to be available on demand.
                    </p>
                    <p className='text-gray-100 mt-3 '>
                        3. Other internet and television service providers bank on unreliable copper based technology.
                    </p>
                    <p className='text-gray-100 mt-3 '>
                        4. We have invested in building a fiber based network that brings reliable, fast, affordable and convenient services to your doorstep
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;
