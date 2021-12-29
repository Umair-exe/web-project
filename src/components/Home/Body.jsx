import React from 'react'

const Body = () => {
    const packages = [
        { id: 1, name: "20MBPS", charges: 4999 },
        { id: 2, name: "100MBPS", charges: 14999, },
        { id: 3, name: "30MBPS", charges: 7999, },
        { id: 4, name: "10MBPS", charges: 2999, },
    ]
    return (
        <>
            <div className='flex flex-col justify-evenly sm:flex-row bg-sky-500 p-16 transition transition-duration-500 ease-in-out cursor-pointer  px-9 space-y-5 sm:space-y-0 sm:p-20 '>
                {packages.map((p) => (
                    <div key={p.id} className='flex flex-col shadow-md shadow-black hover:shadow-indigo-500/40 justify-center items-center bg-white px-10 sm:px-14 py-3 sm:py-9  space-y-10 rounded-lg'>
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
            <div className=' flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-center sm:justify-between text-center sm:text-left px-0 py-20 sm:px-96 sm:py-20 items-center '>
                <div className='h-56 w-56 sm:h-auto sm:w-auto flex-1'>
                    <img src="https://www.stormfiber.com/wp-content/uploads/2016/12/gadgets.png" alt="pic" />
                </div>
                <div className='flex-1 justify-center  items-center'>
                    <h1 className='text-3xl font-bold transition transition-150 ease-in-out'>A WHOLE NEW</h1>
                    <p >Internet Experience</p>
                    <p className='text-gray-900 break-all'>
                        Consumers across the globe are switching to fiber backed connectivity; a medium that offers you
                        faster speeds when compared to conventional wired/wireless service
                        providers. StormFiber lets you tap into the true power of the Internet.
                    </p>
                    <button className='p-2 mt-4 shadow shadow-sky-600 hover:border-sky-500 hover:opacity-75 px-8 bg-sky-500 text-white font-bold'>MORE INFO</button>
                </div>

            </div>

            <div className='bg-black text-white flex flex-col items-center space-y-3  sm:space-y-0 sm:flex-row justify-center sm:justify-around px-0 py-20 sm:px-96 sm:py-20 '>
                <div className='flex flex-col justify-center items-center flex-[0.5] '>
                    <img className='transition transition-0 hover:transition-duration-700 hover:-translate-y-1 hover:scale-110 ease-in-out ' src="https://www.stormfiber.com/wp-content/uploads/2016/12/phone.png" alt="pic" />
                    <h1 className='text-3xl text-sky-500 font-bold transition transition-150 ease-in-out mt-3 text-center'>A WHOLE NEW</h1>
                    <h1 className='text-3xl font-light  text-sky-500 transition transition-150 ease-in-out text-center'>HERE THE DIFFERENCE</h1>
                    <p className='text-sm text-center '>
                        Communication is the key to human interaction. Now talk to your loved ones via the power of optic fiber. StormFiber brings you an affordable residential landline service. Storm Phone is an advanced voice service on StormFiber’s 100% optic fiber network hence maintaining HD voice clarity and uninterrupted communication backed by our automated systems.
                    </p>
                    <button className='p-2 mt-4 shadow shadow-sky-600 hover:border-sky-500 hover:opacity-75 px-8 bg-sky-500 text-white font-bold'>MORE INFO</button>
                </div>
                <div className='flex flex-col justify-center text-center items-center flex-[0.5] '>
                    <img className='transition transition-0 hover:transition-duration-700 hover:-translate-y-1 hover:scale-110 ease-in-out' src="https://www.stormfiber.com/wp-content/uploads/2016/12/pc.png" alt="pic" />
                    <h1 className='text-3xl  text-sky-500  font-bold transition transition-150 ease-in-out mt-3 text-center'>High Quality Television Service</h1>
                    <h1 className='text-3xl font-light  text-sky-500 transition transition-150 ease-in-out text-center'>HERE THE DIFFERENCE</h1>
                    <p className='text-sm text-center'>
                        StormFiber introduces you to its high definition television service through its fiber optic network. Catch the news, get updated on today’s fashion trends, or watch your favorite sports team in action. Enhance your lifestyle with 200+ local and international television channels.
                    </p>
                    <button className='p-2 mt-4 shadow shadow-sky-600 hover:border-sky-500 hover:opacity-75 px-8 bg-sky-500 text-white font-bold'>MORE INFO</button>
                </div>

            </div>
        </>
    )
}

export default Body
