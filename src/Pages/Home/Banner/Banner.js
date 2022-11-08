import React from 'react';
import banner from '../../../assets/banner.jpg'
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";


const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 gap-5 my-16'>
            <div>
                <img src={banner} alt="" />
            </div>
            <div className='flex justify-center items-center'>
                <div className='text-center'>
                    <h2 className='text-3xl font-semibold text-sky-600'><span className='text-4xl font-bold text-orange-400'>Hey,</span> <br />
                        I am Miskatur Rahman</h2>
                    <h2 className='text-xl font-semibold lg:my-3'>A Professional Travel Blogger <br /> & Full Stack MERN Developer</h2>
                    <div>
                        <h3>Find Me on</h3>
                        <div className='flex justify-center items-center my-4'>
                            <FaFacebook className=' text-2xl mr-4 text-blue-600' />
                            <FaYoutube className=' text-2xl mr-4 text-rose-600' />
                            <FaLinkedin className=' text-2xl mr-4 text-cyan-600' />
                            <FaTwitter className=' text-2xl text-sky-600' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;