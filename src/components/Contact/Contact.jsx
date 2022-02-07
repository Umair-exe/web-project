import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const Contact = () => {
    return <div>
        <div className=' flex justify-center p-20 text-4xl font-extrabold bg-no-repeat bg-cover bg-center bg-fixed bg-gradient-to-r from-cyan-500 to-blue-500 sm:text-5xl sm:p-40'>
            <h1>Contact Us</h1>
        </div>

        <div className='mt-12 flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-center sm:justify-between text-center sm:text-left px-0 py-5 sm:px-96 sm:py-10 '>
            <div className='flex justify-center flex-1 '>
                <form action="">
                    <input type="text"
                        className=" mt-3 block w-[22rem] sm:w-[32rem] rounded-md border-sky-500 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        placeholder='Enter Name...' />
                    <input type="text"
                        className=" mt-3 block w-[22rem] sm:w-[32rem]  rounded-md border-sky-500 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        placeholder='Enter Email...' />
                    <input type="text"
                        className=" mt-3 block w-[22rem] sm:w-[32rem]  rounded-md border-sky-500 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        placeholder='Enter Contact Number...' />
                    <input type="text"
                        className=" mt-3 block w-[22rem] sm:w-[32rem]  rounded-md border-sky-500 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                        placeholder='Enter Address...' />
                    <textarea className="mt-3 block w-[22rem] sm:w-[32rem]  rounded-md border-sky-500 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 "
                        rows="4" placeholder='Message...'
                    ></textarea>
                    <button className='p-2 mt-4 shadow shadow-sky-600 hover:border-sky-500 hover:opacity-75 px-8 bg-sky-500 text-white font-bold'>Submit</button>
                </form>
            </div>
            <div className='flex-[0.5] justify-center  items-center'>

                <div className='text-sky-500'>
                    <h1 className='text-xl sm:text-3xl font-bold transition transition-150 ease-in-out'> <LocationOnIcon /> Our Address</h1>
                    <p className='text-xl'>50-L, Block-6, P.E.C.H.S, Karachi</p>

                </div>
                <div className='mt-7 text-sky-500 '>
                    <h1 className='text-xl sm:text-3xl font-bold transition transition-150 ease-in-out '> <CallIcon style={{ fontSize: '2rem' }} /> Call Us</h1>
                    <p className='text-xl'>414151515151</p>

                </div>
                <div className='mt-7 text-sky-500'>
                    <h1 className='text-xl sm:text-3xl font-bold transition transition-150 ease-in-out'> <EmailIcon /> Email Us</h1>
                    <p className='text-xl'>abc@abc.com</p>
                </div>
            </div>
        </div>
    </div>;
};

export default Contact;
