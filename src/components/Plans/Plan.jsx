import React from 'react';

const Plan = () => {
    const packages = [
        { id: 1, name: "20MBPS", charges: 4999 },
        { id: 2, name: "100MBPS", charges: 14999, },
        { id: 3, name: "30MBPS", charges: 7999, },
        { id: 4, name: "10MBPS", charges: 2999, },
    ]
    return <div>
        <div className=' flex justify-center p-20 text-4xl font-extrabold bg-no-repeat bg-cover bg-center bg-fixed bg-gradient-to-r from-cyan-500 to-blue-500 sm:text-5xl sm:p-40'>
            <h1 >Packages</h1>
        </div>
        <div>
            <div className='flex flex-col justify-evenly sm:flex-row md:flex-row p-10 transition transition-duration-500 ease-in-out cursor-pointer  px-9 space-y-4 sm:space-y-0 sm:p-20 '>
                {packages.map((p) => (
                    <div key={p.id} className='flex flex-col shadow-lg shadow-black hover:shadow-sky-900 justify-center items-center bg-white px-0 sm:px-14 py-7 sm:py-9  space-y-5 sm:space-y-10 rounded-lg'>
                        <h1 className='text-3xl font-bold text-sky-500' >{p.name}</h1>
                        <p className='text-md font-bold'>{p.charges} (w/o tax)</p>
                        <p className='text-md' >One time installation cost</p>

                        <p className='text-md'>Pay for installation and enjoy</p>
                        <p className='text-md font-bold text-sky-500'>1 month of Free</p>
                        <p className='text-md font-bold'><b>Internet + TV + Phone</b></p>
                        <button className='bg-sky-500 p-3 px-8 text-white  hover:border-sky-500 hover:opacity-75'>Sign Up</button>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-gray-100 flex flex-col justify-evenly sm:flex-row md:flex-row p-10 transition transition-duration-500 ease-in-out cursor-pointer  px-9 space-y-4 sm:space-y-0 sm:p-20 '>
            {packages.map((p) => (
                <div key={p.id} className='flex flex-col shadow-lg shadow-black hover:shadow-sky-900 justify-center items-center bg-white px-0 sm:px-14 py-7 sm:py-9  space-y-5 sm:space-y-10 rounded-lg'>
                    <h1 className='text-3xl font-bold text-sky-500' >{p.name}</h1>
                    <p className='text-md font-bold'>{p.charges} (w/o tax)</p>
                    <p className='text-md' >One time installation cost</p>

                    <p className='text-md'>Pay for installation and enjoy</p>
                    <p className='text-md font-bold text-sky-500'>1 month of Free</p>
                    <p className='text-md font-bold'><b>Internet + TV + Phone</b></p>
                    <button className='bg-sky-500 p-3 px-8 text-white  hover:border-sky-500 hover:opacity-75'>Sign Up</button>
                </div>
            ))}
        </div>
    </div>;
};

export default Plan;
