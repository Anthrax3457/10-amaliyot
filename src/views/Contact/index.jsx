import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import Carousel from './Carousel'
import { FaDribbble } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Contact = () => {
  return (
    <div>
      <Carousel />
      <div className=''>
        <div className='grid lg:flex md:w-[98%] lg:w-[94%] xl:w-[85.5%] lg:ml-[2.7%] md:h-[400px]  xl:h-[100%] xl:ml-[7.3%] lg:h-[420px] md:ml-[1%] md:absolute mt-[0px] md:mt-[-22px] xl:mt-[-46px] z-[999] bg-white'>
          <div className='px-[1.6em] xl:pl-[2em] mt-[30px]'>
            <img className='w-full md:w-[450px] lg:w-[1790px] lg:h-[230px] xl:h-[250px] xl:w-[1490px]' src="img/world-map.png" alt="" />
          </div>
          <div>
            <div className='flex flex-col px-[2.6rem] md:pt-[0px] md:mt-[47px] lg:mt-[31px] lg:px-0 lg:pl-[0em] xl:pl-[-0.2em] xl:mt-[40px] lg:pr-[2.2em]  pt-[48px]'>
              <em className='text-[3rem] tracking-tight md:tracking-normal leading-[1.2] lg:leading-[1.2] font-extralight text-[#333]'>LOREM ISUM DOLOR  </em>
              <p className='mt-[10px] pl-[0.5rem] tracking-wide md:mt-[16px] leading-[1.3] xl:mt-[23px] md:leading-[1.1] text-[#444]'>Gravida nibh vel velit auctor aliquet enean sollicitudin lorem quis auctor, nisi elit consequat ipsum
              </p>
              <p className='mt-[19px] pl-[0.6rem] text-[1.2rem] md:mt-[24px] lg:mt-[26px] xl:pt-[35px] xl:pl-[0.4em] xl:leading-[1.8] tracking-[0.05em] leading-[1.53] text-justify  text-[#999] '>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              <p className='mt-[18px] text-[#999] pl-[0.6rem] text-[1.2rem] tracking-[0.07em] xl:mt-[27px]  xl:pl-[0.4em] xl:leading-[1.8] lg:tracking-[0.055em]  leading-[1.53] text-justify'>Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris gestas quam, ut aliquam massa nisi.</p>
            </div>
            <div className='flex gap-[2rem] mt-[16px] md:mt-[18px] xl:mt-[35px] xl:pr-[2.9em] lg:mt-[14px] lg:pr-[3.2em] items-center justify-end pr-[2em]'>
              <p className='text-[#999]'><FaTwitter /></p>
              <p className='text-[#999]'><FaFacebookF /></p>
              <p className='text-[#999]'><FaPinterest /></p>
              <p className='text-[1.6em] text-[#999]'><TiSocialGooglePlus /></p>
            </div>
          </div>
          <p className='mt-[-30px] h-[20px]'></p>
          <img className='mt-[4px] md:hidden md:mt-0' src="img/Shadow.png" alt="" />
          <img className='mt-[49px] hidden md:block w-[900px] md:m-0 lg:hidden ' src="img/768.png" alt="" />
        </div>
      </div>
      <div className='grid md:flex md:gap-[5.6em]  lg:gap-[9.2em] xl:gap-[6.5em] md:mt-[710px] xl:mt-[558px] lg:mt-[515px] justify-center mt-[51px] items-center text-center'>
        <p className='w-[350px] md:w-[160px] lg:w-[210px] xl:w-[360px] h-[1px] bg-red-700'></p>
        <p className='text-[1.8em] md:text-[2.3em] tracking-tight leading-[1] font-extralight'> CONTACT US</p>
        <p className='w-[350px] md:w-[165px] lg:w-[210px] xl:w-[360px] md:mt-0 mt-[23px] h-[1px] bg-red-700'></p>
      </div>
      <div className='lg:flex  xl:justify-between xl:pl-[4.5%] xl:pr-[6.6%]  xl:items-center'>
        <div className='lg:grid lg:justify-center lg:items-center'>
          <div className='px-[1em] mt-[40px] md:mt-[70px] lg:pl-[3.4em] xl:pl-[3.4em] xl:p-0 md:px-[1.3em]'>
            <iframe className='h-[335px] w-[100%] lg:w-[450px] xl:w-[555px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.1314234018455!2d69.2636708755273!3d41.26247430373482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6005c5142bf3%3A0xe04bf246835d2d7f!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdGL0Lkg0JDRjdGA0L7Qv9C-0YDRgiDQotCw0YjQutC10L3RgiDQuNC80LXQvdC4INCY0YHQu9Cw0LzQsCDQmtCw0YDQuNC80L7QstCw!5e0!3m2!1sru!2s!4v1707805128843!5m2!1sru!2s"></iframe>
          </div>
          <div className='flex gap-[1.4rem] lg:pl-[2.7em] xl:pl-[3.3em] lg:mt-[22px] mt-[20px] items-center justify-start md:pl-[1.5em] pl-[1em]'>
            <p className='h-[35px] text-white w-[35px] flex items-center justify-center text-center bg-[#4A7DBB]'><FaFacebookF /></p>
            <p className='h-[35px] text-white w-[35px] flex items-center justify-center text-center bg-[#E4588E]'><FaDribbble /></p>
            <p className='h-[35px] text-white w-[35px] flex items-center justify-center text-center bg-[#77D1EE]'><FaTwitter /></p>
            <p className='h-[35px] text-white w-[35px] flex items-center justify-center text-center bg-[#527AA1]'><ImInstagram /></p>
            <p className='h-[35px] text-white w-[35px] text-[1.6em]  flex items-center justify-center text-center bg-[#CE5754]'><TiSocialGooglePlus /></p>
          </div>
        </div>
        <div className='mt-[50px] grid lg:h-[335px] lg:mt-[73px] xl:gap-0 xl:pl-[0em] lg:pl-[0.3em] xl:mt-[20px] lg:gap-[0.3em] gap-[1.1em] px-[1em] md:px-[1.5em]'>
          <input className='px-[12px] lg:h-[33px] xl:w-[555px] lg:w-[450px] py-[3px] border border-[#999]' placeholder='NAME' type="text" name="" id="" />
          <input className='px-[12px] lg:h-[33px] xl:w-[555px] lg:w-[450px] py-[3px] border border-[#999]' placeholder='EMAIL' type="text" name="" id="" />
          <input className='px-[12px] lg:h-[33px] xl:w-[555px] lg:w-[450px] py-[2.8px] border border-[#999]' placeholder='SUBJECT' type="text" name="" id="" />
          <textarea className='px-[12px] py-[2.8px] border border-[#999] h-[130px]' placeholder='MESSAGE' name="" id="" cols="30" rows="10"></textarea>
          <button className='grid justify-center lg:py-[3px] py-[9px] bg-[#F0C40E] text-[0.8em] leading-[1.6] items-center text-center italic font-bold] '>SUBMIT NOW</button>
        </div>
      </div>
      <p className='mt-[-35px] md:mt-[-30px] lg:mt-[-46px] xl:mt-[-47px]'></p>
    </div>
  )
}

export default Contact