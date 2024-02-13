import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination, } from 'swiper/modules';
import Card from './Card';
import TwoCard from './twoCard';
import Carousel from './Carousel';

export default function About() {
  return (
    <div className='bg-[#E4E4E4] md:h-[100%] lg:h-[2200px] xl:h-[100%] h-[4624px] mb-[-110px] '>
      <Carousel />
      <div className=''>
        <Swiper
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          style={{
            '--swiper-pagination-color': '#131313',
          }} pagination={true} modules={[Pagination]} className="mySwiper h-[820px] md:h-[838px] xl:h-[515px] lg:h-[414px] xl:mt-[-49px] md:mt-[-22px]">
          <SwiperSlide className='md:flex md:items-start lg:pl-[1.8em] xl:pl-[8.3em] min-[1400px]:pl-[13%]  lg:justify-start md:justify-center'>
            <div className='grid lg:flex lg:w-[970px] md:w-[530px] h-[95%] md:h-[800px] xl:h-[470px] xl:w-[1100px] lg:h-[370px] bg-white'>
              <img className='w-full lg:h-[370px] xl:h-[437px]' src="img/about-1.jpg" alt="" />
              <div>
                <div className='flex flex-col px-[2rem] md:pt-[23px] lg:px-0 lg:pl-[1.2em] xl:pl-[2.2em] xl:mt-[20px] lg:pr-[2.2em] md:mt-[-30px] lg:mt-[1.5px] mt-[-50px]'>
                  <em className='text-[3rem] tracking-tight leading-[1.2] font-extrabold'>WELCOME TO HOLIDAY</em>
                  <p className='mt-[8px] pl-[0.5rem] tracking-wide md:mt-[15px] xl:mt-[23px] md:leading-[1.1]'>Gravida nibh vel velit auctor aliquet enean sollicitudin lorem quis auctor</p>
                  <p className='mt-[15px] pl-[0.6rem] text-[1.2rem] xl:mt-[35px] xl:pl-[0.4em] xl:leading-[1.8] tracking-[0.05em] leading-[1.53] text-justify md:mt-[24px]'>Holiday is free Bootstrap v3.3.5 responsive template for tour and travel websites. You can download and use this layout for any purpose. You do not need to provide a credit link to us. If you have any question, feel free to <span>contact us</span>.</p>
                  <p className='mt-[18px] pl-[0.6rem] text-[1.2rem] tracking-[0.07em] xl:mt-[27px]  xl:pl-[0.4em] xl:leading-[1.8] lg:tracking-[0.055em]  leading-[1.53] text-justify'>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum.</p>
                </div>
                <div className='flex gap-[2rem] mt-[13px] md:mt-[10px] xl:mt-[35px] xl:pr-[2.9em] lg:mt-[14px] lg:pr-[3.2em] items-center justify-end pr-[2em]'>
                  <p><FaTwitter /></p>
                  <p><FaFacebookF /></p>
                  <p><FaPinterest /></p>
                  <p className='text-[1.6em]'><TiSocialGooglePlus /></p>
                </div>
              </div>
              <img className='mt-[49px] hidden md:mt-0' src="img/Shadow.png" alt="" />
              <img className='mt-[49px] hidden w-[900px] md:m-0 lg:hidden ' src="img/768.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='grid'>
              <img className='w-full' src="img/about-1.jpg" alt="" />
              <div className='flex flex-col px-[2rem]  mt-[27px] '>
                <em className='text-[3rem] tracking-tight leading-[1.2] font-extrabold'>WELCOME TO HOLIDAY</em>
                <p className='mt-[8px] pl-[0.5rem] tracking-wide'>Gravida nibh vel velit auctor aliquet enean sollicitudin lorem quis auctor</p>
                <p className='mt-[15px] pl-[0.6rem] text-[1.2rem] tracking-[0.05em] leading-[1.53] text-justify'>Holiday is free Bootstrap v3.3.5 responsive template for tour and travel websites. You can download and use this layout for any purpose. You do not need to provide a credit link to us. If you have any question, feel free to <span>contact us</span>.</p>
                <p className='mt-[18px] pl-[0.6rem] text-[1.2rem] tracking-[0.07em] leading-[1.53] text-justify'>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum.</p>
              </div>
              <div className='flex gap-[2rem] mt-[13px] items-center justify-end pr-[2em]'>
                <p><FaTwitter /></p>
                <p><FaFacebookF /></p>
                <p><FaPinterest /></p>
                <p className='text-[1.6em]'><TiSocialGooglePlus /></p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
        <div>
          <div className='grid md:flex md:gap-[5.6em] lg:gap-[9.2em]  xl:gap-[12.5em] md:mt-[110px] lg:mt-[109px] justify-center mt-[100px] items-center text-center'>
            <p className='w-[350px] md:w-[160px] lg:w-[210px] xl:w-[260px] h-[1px] bg-[#999]'></p>
            <p className='text-[1.8em] md:text-[2.3em] leading-[1] font-extralight'>Who WE ARE</p>
            <p className='w-[350px] md:w-[165px] lg:w-[210px] xl:w-[260px] md:mt-0 mt-[23px] h-[1px] bg-[#999]'></p>
          </div>
          <Card />
          <div className='bg-white '>
            <div className='grid justify-center mt-[30px] xl:mt-[50px] xl:gap-[6em] md:mt-[45px] lg:gap-[9.2em] md:pt-[105px] lg:mt-[20px] md:flex md:gap-[5.6em] pt-[70px]  items-center text-center'>
              <p className='w-[350px] md:w-[160px] lg:w-[210px] xl:w-[360px] h-[1px] bg-[#999]'></p>
              <p className='text-[1.8em] leading-[1] font-extralight md:text-[2.2em] text-gray-800'>WHAT WE DO</p>
              <p className='w-[350px] md:w-[160px] lg:w-[210px] xl:w-[360px] h-[1px] mt-[20px] md:mt-0 bg-[#999]'></p>
            </div>
            <div className='bg__color lg:flex lg:gap-[0.9em]  xl:gap-[1.6em]  lg:bg-white lg:flex-row-reverse lg:pt-[45px]'>
              <TwoCard />
              <div className='grid bg-white lg:bg-transparent md:pb-[63px] md:pl-[13.5em] lg:pl-0 md:px-0 px-[1.85rem] md:pt-[29px] pt-[59px] '>
                <div className='md:w-[340px] lg:w-[220px] xl:w-[270px]'>
                  <div className='bg-[gray] flex items-center justify-center'>
                    <p className='text-[white] text-[1.5em] leading-[2.8]'>TESTIMONIALS</p>
                  </div>
                  <div className='bg-[#E8BA0F] pb-[35px] xl:pb-[65px]'>
                    <div className='px-[2.1em] '>
                      <p className='text-[0.8em] italic text-[#333] pt-[40px] xl:pt-[50px] text-center'>"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum."</p>
                      <p className='text-[0.87em] text-center text-[#333] italic font-bold'>JOHN SMITH</p>
                    </div>
                    <div className='px-[1em]'>
                      <p className='text-[0.8em] italic text-[#333] mt-[37px] text-center'>"Nisi elit consequat ipsum, nec sagittis sem nibh id elit duis sed odio sit amet nibh."</p>
                      <p className='text-[0.87em] text-center text-[#333] italic font-bold leading-[1.1]'>LORENS</p>
                    </div>
                    <div className='px-[2.1em]'>
                      <p className='text-[0.8em] italic text-[#333] mt-[40px] text-center'>"Rulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio."</p>
                      <p className='text-[0.87em] text-[#333] text-center italic font-bold'>ROBERT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
