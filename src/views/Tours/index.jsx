import React, { useState } from 'react'
import CarouselComponent from './Carousel'
import TourCard from './Card'
import LastCard from './LastCard'

const Home = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <CarouselComponent />
      <div className='bg-[#E5E5E5] h-full'>
        <div className='flex flex-col items-center justify-center'>
          <div className='md:flex flex-wrap  flex justify-center items-center md:items-start md:justify-start md:pl-[2.3rem] xl:w-full md:gap-[3rem] lg:gap-[2.5rem] md:mt-[-20px] md:z-[60] lg:px-0 lg:pl-[1rem] xl:justify-center xl:gap-[5.5rem] xl:mt-[-45px]'>
            <div className='bg-white h-[437px] w-[92%] md:w-[350px] lg:h-[390px] lg:w-[300px] xl:w-[24.9%]'>
              <div className='flex items-center'>
                <p className='w-[179px] xl:w-[190px] h-[50px] flex items-center text-[#5d4905] justify-center bg-white'>HOTEL</p>
                <p className='w-[179px] xl:w-[190px] h-[50px] flex items-center text-[#5d4905] justify-center bg-[#EAC008]'>CAR RENTAL</p>
              </div>
              <div className='grid items-center mt-[39px] text-[1.3rem] md:mt-[35px] justify-center lg:flex lg:flex-col '>
                <select className='w-[286px] lg:w-[80%] xl:w-[85%]  outline-[#f3d10e] text-[#999] border py-[6px] px-[10px]'>
                  <option value="">-- Select Hotel -- </option>
                  <option value="shangrila">Shangri-La</option>
                  <option value="chatrium">Chatrium</option>
                  <option value="fourseasons">Four Seasons</option>
                  <option value="hilton">Hilton</option>
                </select>
                <input placeholder='check-in-date' className='mt-[31px]  lg:mt-[14px] xl:mt-[30px] xl:w-[85%] xl:py-[5px] lg:w-[80%] lg:py-[10px] outline-[#f3d10e] border  py-[4.5px] px-[10px]' type="date" name="" id="" />
                <input placeholder='check-out-date' className='mt-[31px] lg:mt-[9px] xl:mt-[30px] xl:w-[85%] xl:py-[5px] lg:w-[80%] lg:py-[10px] outline-[#f3d10e]  border py-[4.5px] px-[10px]' type="date" name="" id="" />
                <select className='w-[286px] lg:w-[80%] text-[1.3rem] md:mt-[33px] lg:mt-[13px] xl:mt-[33px] xl:w-[85%] mt-[30px] border py-[6px] outline-[#f3d10e] px-[10px]'>
                  <option value="">-- Guets -- </option>
                  <option value="shangrila">Shangri-La</option>
                  <opt
                    ion value="chatrium">Chatrium</opt>
                  <option value="fourseasons">Four Seasons</option>
                  <option value="hilton">Hilton</option>
                </select>
              </div>
              <div className='flex items-center justify-center h-[88px] mt-[36px] lg:mt-[26px] xl:mt-[34px] bg-[#F1C50D]'>
                <p className='w-[130px] bg-opacity-[0.9] bg-[#F4D238] text-[0.7em] tracking-wider mt-[0px] flex items-center justify-center text-[#5d4905] py-[10px]'>Check Now</p>
              </div>
            </div>
            <div className='mt-[50px] md:mt-0 lg:w-[298px] xl:w-[25.5%]'>
              <img className='xl:w-[100%]' src="img/index-01.jpg" alt="" />
              <div className='bg-[#2dc970] flex pt-[28px] justify-center gap-[10.5rem] h-[85px]'>
                <p className='text-[white]'>New Yourk</p>
                <p className='text-[white]'>$6,600</p>
              </div>
            </div>
            <div className='mt-[50px] md:mt-[18px] lg:w-[300px] xl:w-[25.5%] lg:mt-0 '>
              <img className='xl:w-[100%]' src="img/index-02.jpg" alt="" />
              <div className='bg-[#ef6865] flex pt-[29px] justify-center gap-[13rem] h-[85px]'>
                <p className='text-[white]'>Paris</p>
                <p className='text-[white]'>$4,200</p>
              </div>
            </div>
          </div>
          <div className='grid md:flex md:gap-[6.4em] lg:gap-[10em] xl:gap-[13em] xl:mt-[105px] md:mt-[156px] lg:mt-[97px] justify-center mt-[125px] items-center text-center'>
            <p className='w-[350px] md:w-[160px] lg:w-[210px] xl:w-[260px] h-[1px] bg-[#999]'></p>
            <p className='text-[1.8em] md:text-[2.3em] leading-[1] font-extralight text-[#333]'>OUR TOURS</p>
            <p className='w-[350px] md:w-[165px] lg:w-[210px] xl:w-[260px] md:mt-0 mt-[23px] h-[1px] bg-[#999]'></p>
          </div>
          <TourCard />
          <div className='bg-white h-full  xl:mt-[100px]'>
            <div className='grid md:flex md:gap-[3em] lg:gap-[6.9em]  xl:mt-[103px] xl:gap-[3.5em] md:mt-[170px] lg:mt-[172px] justify-center mt-[118px] items-center text-center'>
              <p className='w-[350px] md:w-[160px] lg:w-[210px] xl:w-[350px] h-[1px] bg-[#999]'></p>
              <p className='text-[1.8em] md:text-[2.3em] leading-[1] tracking-tighter font-extralight text-[#333]'>SPECIAL PACKAGES</p>
              <p className='w-[350px] md:w-[165px] lg:w-[210px] xl:w-[350px] md:mt-0 mt-[23px] h-[1px] bg-[#999]'></p>
            </div>
            <LastCard />
            <p className='text-[0.8em] pt-[70px] md:px-[4em] md:tracking-wide lg:pt-[50px] xl:px-[10em] lg:px-[5.5em] lg:tracking-[0.020em] leading-[1.58] px-[3.7em] text-center'>Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsaipsu m velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat.</p>
          </div>
          <p className='h-[20px] mt-[-30px] lg:mt-[-20px]'></p>
        </div>
      </div>
    </>
  )
}

export default Home