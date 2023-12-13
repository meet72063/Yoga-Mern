import React from 'react';
import { sadhguruImg } from '../assets';


const HeroSection = () => {
    return (
        <div className="relative bg-gray-800 text-white pt-32 lg:pt-10 lg:min-h-screen flex items-center">
            <div className="container mx-auto  items-center justify-between w-full ">
                <div className=' flex flex-col mt-10 space-y-6 text-lg items-center justify-center lg:w-1/2  '>
                    <div className='flex flex-col space-y-2  items-center'>
                        <p className='text-3xl font-Nunito'>Transform your Life </p>
                        <span className='relative  before:p-[1px] before:w-10 before:bg-yellow-300 before:absolute before:-left-[140%] before:top-[14px]  
                        after:w-10 after:h-[2px] after:absolute after:top-[50%] font-serif after:bg-yellow-300  after:ml-2'>with</span>

                        <h2 className='text-6xl mb-10 font-serif text-yellow-400'>OMGVA</h2>
                    </div>
                    <p className='flex flex-col space-y-1 mt-20'>
                        <q className='text-center leading-6 '>Yoga is the journey of the self, to the self, through the self. </q>
                        <caption >- The Bhagavad Gita</caption>
                    </p>

                    <button className="bg-yellow-400 font-Nunito text-gray-800 py-2 px-6 rounded-full hover:bg-opacity-80 focus:outline-none">
                        Explore Classes
                    </button>
                </div>


                <div className=" lg:absolute bottom-0 right-0 ">
                    <img
                        src={sadhguruImg}
                        alt="Sadhguru"
                        className="rounded-lg mt-20 lg:mt-10 lg:w-full lg:h-[70vh] object-cover mb-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
