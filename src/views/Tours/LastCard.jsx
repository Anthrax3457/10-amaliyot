import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const LastCard = () => {
    const number = 1
    const [value, setValue] = useState(2);
    return (
        <div className='flex flex-col md:pl-[7.6%] md:mt-[35px] lg:mt-[49px] md:gap-x-[5%] xl:gap-[0em] xl:pl-[7.5%] xl:pr-[7%] md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-[7em] lg:pr-[12%] lg:pl-[4%] justify-center items-center'>
            <div className='mt-[40px] md:w-[280px] lg:mt-[20px] lg:w-[213px] xl:w-[280px]'>
                <div className='flex items-center justify-center'>
                    <img src="img/index-03.jpg" alt="" />
                </div>
                <div className=' flex flex-col justify-center items-center lg:mt-[27px] mt-[20px]'>
                    <p className='text-[0.9em] w-[73%] md:w-[75%] lg:w-[80%] xl:w-[75%] leading-[1] text-[#333]'>PROIN GRAVIDA NIBHVEL LOREM QUIS BIND</p>
                    <p className='w-[210px] mt-[20px] h-[1px] lg:w-[170px] lg:mt-[18px] xl:w-[210px] bg-[#999]'></p>
                    <Box
                        sx={{
                            '@media (max-width: 1366px)': {
                                width: '80%', // Masalan, ekranga 600px dan kichik bo'lsa, width ni o'zgartiramiz
                            }, 
                            '@media(max-with:1500px)':{
                                width:'74%'
                            },
                            width: '73%',
                            fontSize: '1.8em',
                            '& > legend': { mt: 2 },
                        }}>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                    <p className='w-[75%] xl:w-[75%] xl:mt-[-4px] leading-[1] mt-[-2px] tracking-wide text-[0.78em] lg:w-[80%] text-[#999]'>28 March 2084</p>
                    <div className='bg-[#898989] flex items-center xl:w-[90%] justify-center text-center lg:w-[100%]  mt-[22px] h-[60px] w-[90%]'>
                        <p className='w-[90%] text-white'>BOOK NOW</p>
                    </div>
                </div>
            </div>
        
            <div className='mt-[30px] md:w-[280px] lg:mt-[20px] lg:w-[213px] xl:w-[280px] '>
                <div className='flex items-center justify-center'>
                    <img src="img/index-03.jpg" alt="" />
                </div>
                <div className=' flex flex-col justify-center items-center lg:mt-[27px] mt-[23px]'>
                    <p className='text-[0.9em] w-[73%] md:w-[75%] lg:w-[80%] xl:w-[75%] leading-[1] text-[#333]'>PROIN GRAVIDA NIBHVEL LOREM QUIS BIND</p>
                    <p className='w-[210px] mt-[20px] h-[1px] lg:w-[170px] lg:mt-[18px] xl:w-[210px] bg-[#999]'></p>
                    <Box
                        sx={{
                            '@media (max-width: 1366px)': {
                                width: '80%', // Masalan, ekranga 600px dan kichik bo'lsa, width ni o'zgartiramiz
                            }, 
                            '@media(max-with:1500px)':{
                                width:'74%'
                            },
                            width: '73%',
                            fontSize: '1.8em',
                            '& > legend': { mt: 2 },
                        }}>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                    <p className='w-[75%] xl:w-[75%] xl:mt-[-4px] leading-[1] mt-[-2px] tracking-wide text-[0.78em] lg:w-[80%] text-[#999]'>28 March 2084</p>
                    <div className='bg-[#898989] flex items-center xl:w-[90%] justify-center text-center lg:w-[100%]  mt-[22px] h-[60px] w-[90%]'>
                        <p className='w-[90%] text-white'>BOOK NOW</p>
                    </div>
                </div>
            </div>
        
            <div className='mt-[30px] md:w-[280px] lg:mt-[20px] lg:w-[213px] xl:w-[280px]'>
                <div className='flex items-center justify-center'>
                    <img src="img/index-03.jpg" alt="" />
                </div>
                <div className=' flex flex-col justify-center items-center lg:mt-[27px] mt-[22px]'>
                    <p className='text-[0.9em] w-[73%] md:w-[75%] lg:w-[80%] xl:w-[75%] leading-[1] text-[#333]'>PROIN GRAVIDA NIBHVEL LOREM QUIS BIND</p>
                    <p className='w-[210px] mt-[20px] h-[1px] lg:w-[170px] lg:mt-[18px] xl:w-[210px] bg-[#999]'></p>
                    <Box
                        sx={{
                            '@media (max-width: 1366px)': {
                                width: '80%', // Masalan, ekranga 600px dan kichik bo'lsa, width ni o'zgartiramiz
                            }, 
                            '@media(max-with:1500px)':{
                                width:'74%'
                            },
                            width: '73%',
                            fontSize: '1.8em',
                            '& > legend': { mt: 2 },
                        }}>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                    <p className='w-[75%] xl:w-[75%] xl:mt-[-4px] leading-[1] mt-[-2px] tracking-wide text-[0.78em] lg:w-[80%] text-[#999]'>28 March 2084</p>
                    <div className='bg-[#898989] flex items-center xl:w-[90%] justify-center text-center lg:w-[100%]  mt-[22px] h-[60px] w-[90%]'>
                        <p className='w-[90%] text-white'>BOOK NOW</p>
                    </div>
                </div>
            </div>
        
            <div className='mt-[30px] md:w-[280px] lg:mt-[20px] lg:w-[213px] xl:w-[280px]'>
                <div className='flex items-center justify-center'>
                    <img src="img/index-03.jpg" alt="" />
                </div>
                <div className=' flex flex-col justify-center items-center lg:mt-[27px] mt-[22px]'>
                    <p className='text-[0.9em] w-[73%] md:w-[75%] lg:w-[80%] xl:w-[75%] leading-[1] text-[#333]'>PROIN GRAVIDA NIBHVEL LOREM QUIS BIND</p>
                    <p className='w-[210px] mt-[20px] h-[1px] lg:w-[170px] lg:mt-[18px] xl:w-[210px] bg-[#999]'></p>
                    <Box
                        sx={{
                            '@media (max-width: 1366px)': {
                                width: '80%', // Masalan, ekranga 600px dan kichik bo'lsa, width ni o'zgartiramiz
                            }, 
                            '@media(max-with:1500px)':{
                                width:'74%'
                            },
                            width: '73%',
                            fontSize: '1.8em',
                            '& > legend': { mt: 2 },
                        }}>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                    <p className='w-[75%] xl:w-[75%] xl:mt-[-4px] leading-[1] mt-[-2px] tracking-wide text-[0.78em] lg:w-[80%] text-[#999]'>28 March 2084</p>
                    <div className='bg-[#898989] flex items-center xl:w-[90%] justify-center text-center lg:w-[100%]  mt-[22px] h-[60px] w-[90%]'>
                        <p className='w-[90%] text-white'>BOOK NOW</p>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default LastCard