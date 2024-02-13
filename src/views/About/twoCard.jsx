import React from 'react'

const TwoCard = () => {
    return (
        <div className=' xl:pr-[4.3em] lg:bg-transparent min-[1400px]:pr-[10%]'>
            <div className='grid px-[2.3rem] md:flex md:px-0 lg:pr-[2.55em] md:pl-[1.4em] md:pt-[12px]  items-center justify-center'>
                <div className='flex items-center lg:mt-[-40px] md:mt-[40px]  xl:mt-[15px] mt-[44px]  justify-center'>
                    <img className='lg:w-[280px] xl:w-[340px]' src="img/about-2.jpg" alt="" />
                </div>
                <div className='md:grid '>
                    <div className='flex flex-col pl-[0.3rem] md:pl-[2.4em] md:mt-[60px] xl:mt-[10px] items-center justify-center mt-[29px] lg:mt-[16px]  lg:w-[405px] xl:w-[485px] md:w-[400px]'>
                        <p className='text-[1.5em] leading-[1.1] tracking-wide'>GRAVIDA NIBH VEL VELIT AUCTOR ALIQUET ETIAM </p>
                        <p className='text-[0.8em] leading-[1.6] tracking-[0.018em] pl-[0.1em] mt-[30px] text-[#999]'>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis.</p>
                    </div>
                    <div className='mt-[18px] md:pl-[2.2em]'>
                        <p className='w-[350px] md:w-[340px] lg:w-[370px] xl:w-[450px] h-[1px] bg-[#dcdcdc]'></p>
                        <p className='text-right tracking-[-0.10px] text-[0.9em] xl:leading-[2.8] leading-[2.8] md:leading-[2.6] md:pr-[1.6em] lg:pr-0 pr-[0.45em]'>MAURIS IN ERAT JUSTO</p>
                        <p className='w-[350px] md:w-[340px] lg:w-[370px] xl:w-[450px] h-[1px] bg-[#dcdcdc]'></p>
                    </div>
                </div>
            </div>
            <div className='grid px-[2.3rem] md:flex md:px-0 lg:pr-[2.55em] md:pl-[1.4em] md:mt-[12px]  items-center justify-center'>
                <div className='flex items-center lg:mt-[-40px] xl:mt-[15px] mt-[60px] md:mt-0 justify-center'>
                    <img className='lg:w-[280px] xl:w-[340px]' src="img/about-3.jpg" alt="" />
                </div>
                <div className='md:grid  '>
                    <div className='flex flex-col pl-[0.3rem] md:pl-[2.4em] md:mt-[19px] xl:mt-[13px] items-center justify-center mt-[29px]  lg:w-[405px] xl:w-[485px] md:w-[400px]'>
                        <p className='text-[1.5em] leading-[1.1] tracking-wide'>SED NON MAURIS VITAE ERAT CON RUAT NOSTRA</p>
                        <p className='text-[0.8em] leading-[1.6] tracking-[0.018em] pl-[0.1em] mt-[30px] text-[#999]'>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis.</p>
                    </div>
                    <div className='mt-[18px] md:pl-[2.2em]'>
                        <p className='w-[350px] md:w-[340px] lg:w-[370px] xl:w-[450px] h-[1px] bg-[#dcdcdc]'></p>
                        <p className='text-right tracking-[-0.10px] text-[0.9em] leading-[2.8] md:leading-[2.6] md:pr-[1.6em] lg:pr-0  pr-[0.45em]'>SEDNON MAURIS VITAE</p>
                        <p className='w-[350px] md:w-[340px] lg:w-[370px] xl:w-[450px] h-[1px] bg-[#dcdcdc]'></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoCard