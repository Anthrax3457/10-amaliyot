import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

const Card = () => {
    return (
        <div className='md:grid md:grid-cols-2 lg:grid-cols-4 lg:pr-[1.7em] xl:pl-[5.9em] xl:pr-[6.4em] lg:pl-[2em] md:mt-[70px]'>
            <div className='flex justify-center'>
                <div className='grid justify-center items-center md:mt-0 md:h-[380px] xl:pt-[30px] xl:w-[250px] md:pt-[20px] md:pb-[59px] md:w-[90%] w-[80%] pt-[28px] pb-[33px] mt-[40px] bg-white '>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-[50%] border-[#D4D4D4] border-[6px]' src="img/about-4.jpg" alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center text-center lg:mt-[32px] xl:mt-[27px]  mt-[28px]'>
                        <p><em className='text-[0.9em] tracking-wide uppercase'>THOMAS</em><span className='pl-[0.1em] text-[0.8em]'>( Founder )</span></p>
                        <p className='text-[0.8em] w-[77%] lg:w-[80%] lg:leading-[1.6] mt-[13px] text-[#DADADA]'>Proin gravida nibhvell aliquet. Aenean sollicitudin bibum auctor nisi elit.</p>
                    </div>
                    <div className='flex items-center justify-center mt-[17px] md:mt-[10px] lg:ml-[0em] md:ml-[2rem] gap-[1.28em]'>
                        <p className='text-[#DADADA]'><FaTwitter /></p>
                        <p className='text-[#DADADA]'><FaFacebookF /></p>
                        <p className='text-[#DADADA]'><FaPinterest /></p>
                        <p className='text-[#DADADA] text-[1.6em]'><TiSocialGooglePlus /></p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='grid justify-center items-center md:mt-0 md:h-[380px] xl:pt-[30px] xl:w-[250px]  md:pt-[20px] md:pb-[59px] md:w-[90%] w-[80%] pt-[28px] pb-[33px] mt-[30px] bg-white'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-[50%] border-[#D4D4D4] border-[6px]' src="img/about-5.jpg" alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center text-center lg:mt-[32px] xl:mt-[27px]  mt-[28px]'>
                        <p><em className='text-[0.9em] tracking-wide uppercase'>KEITH </em><span className='pl-[0.1em] text-[0.8em]'>( Co-Founder )</span></p>
                        <p className='text-[0.8em] w-[77%] lg:w-[80%] lg:leading-[1.6] mt-[13px] text-[#DADADA]'>Proin gravida nibhvell aliquet. Aenean sollicitudin bibum auctor nisi elit.</p>
                    </div>
                    <div className='flex items-center justify-center mt-[17px] md:mt-[10px] md:ml-[0rem] gap-[1.28em]'>
                        <p className='text-[#DADADA]'><FaTwitter /></p>
                        <p className='text-[#DADADA]'><FaFacebookF /></p>
                        <p className='text-[#DADADA]'><FaPinterest /></p>
                        <p className='text-[#DADADA] text-[1.6em]'><TiSocialGooglePlus /></p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='grid justify-center items-center md:h-[380px] xl:pt-[30px] xl:w-[250px] xl:mt-0  md:mt-[30px] md:pb-[59px] md:w-[90%] w-[80%] pt-[28px] pb-[33px] lg:mt-0 mt-[33px] bg-white'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-[50%] border-[#D4D4D4] border-[6px]' src="img/about-6.jpg" alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center text-center lg:mt-[32px] xl:mt-[27px]  md:mt-[20px] mt-[28px]'>
                        <p><em className='text-[0.9em] tracking-wide uppercase'>JOHN </em><span className='pl-[0.1em] text-[0.8em]'>( General Manager )</span></p>
                        <p className='text-[0.8em] w-[77%] lg:w-[80%] lg:leading-[1.6] mt-[13px] text-[#DADADA]'>Proin gravida nibhvell aliquet. Aenean sollicitudin bibum auctor nisi elit.</p>
                    </div>
                    <div className='flex items-center justify-center mt-[17px] md:mt-[10px] md:ml-[1rem] gap-[1.28em]'>
                        <p className='text-[#DADADA]'><FaTwitter /></p>
                        <p className='text-[#DADADA]'><FaFacebookF /></p>
                        <p className='text-[#DADADA]'><FaPinterest /></p>
                        <p className='text-[#DADADA] text-[1.6em]'><TiSocialGooglePlus /></p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='grid justify-center items-center  md:h-[380px] xl:pt-[30px] xl:w-[250px]  md:pt-[20px] md:pb-[59px] md:w-[90%] lg:mt-0 w-[80%] pt-[28px] pb-[33px] mt-[36px] bg-white '>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-[50%] border-[#D4D4D4] border-[6px]' src="img/about-7.jpg" alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center text-center lg:mt-[32px] xl:mt-[27px] md:mt-[10px] mt-[28px]'>
                        <p><em className='text-[0.9em] tracking-wide uppercase'>SMITH</em><span className='pl-[0.1em] text-[0.8em]'>( Manager  )</span></p>
                        <p className='text-[0.8em] w-[77%] lg:w-[80%] lg:leading-[1.6] mt-[13px] text-[#DADADA]'>Proin gravida nibhvell aliquet. Aenean sollicitudin bibum auctor nisi elit.</p>
                    </div>
                    <div className='flex items-center justify-center mt-[17px] md:mt-[10px] md:ml-[0em]  gap-[1.28em]'>
                        <p className='text-[#DADADA]'><FaTwitter /></p>
                        <p className='text-[#DADADA]'><FaFacebookF /></p>
                        <p className='text-[#DADADA]'><FaPinterest /></p>
                        <p className='text-[#DADADA] text-[1.6em]'><TiSocialGooglePlus /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card