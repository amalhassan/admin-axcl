import React from 'react'
import Image from 'next/image'
import TopWave from '../../../../public/images/journey-center-top-wave.svg'
import Line from '../../../../public/images/Line 1.svg'
import NumberOne from '../../../../public/images/journey-number-1.svg'
import NumberTwo from '../../../../public/images/journey-number-2.svg'
import NumberThree from '../../../../public/images/journey-number-3.svg'
const JourneySection = () => {

  return (
    <div className='flex flex-col relative items-center justify-start bg-gradient-to-t from-white from-95% to-lavender-blue h-fit' id="journey">
      <Image src={TopWave} alt='journey-top-wave' className='absolute -top-12 sm:-top-16 md:-top-19 lg:-top-24 xl:-top-30 2xl:-top-37 w-5/6 h-auto'/>
      <div className='w-5/6 flex-grow bg-white mt-3'>
        <div className='w-full flex flex-col gap-y-4 justify-center items-center mt-20'>
            <h4 className='font-family-display text-2xl lg:text-4xl text-amber-400'>The Journey</h4>
            <h5 className='font-family-sans text-xl md:text-2xl text-primary-accent'>Accelerate Your Career</h5>
        </div>
        <div className='lg:relative flex flex-col my-10 gap-y-5'>
            <Image src={Line} alt='line' className='hidden lg:block self-center h-3/4'/>
            <div className='flex flex-col md:gap-y-4 lg:flex-row bg-transparent items-center justify-start h-60 w-full lg:absolute lg:top-20 '>
                <p className='lg:w-[47.7%] xl:w-[48%] 2xl:w-[48.7%] font-family-sans font-light text-center text-2xl lg:text-3xl italic'>We’re building a solid admin networking space</p>
                <Image src={NumberOne} alt='number one' className='hidden lg:block w-16 md:w-20 h-auto'/>
                <div className='flex items-center justify-center bg-dark-purple w-1/3 h-40 rounded shadow-lg shadow-lavender-blue'>
                    <p className='font-family-sans text-xl md:text-2xl text-center p-2 text-white'>Join Admin Cafe and  Grow with the Community!</p>
                </div>
            </div>
            <div className='flex flex-col-reverse md:gap-y-4 lg:flex-row bg-transparent items-center justify-end h-60 w-full lg:absolute lg:top-110'>
                 <div className='flex items-center justify-center bg-dark-purple w-1/3 h-40 rounded shadow-lg shadow-lavender-blue'>
                    <p className='font-family-sans text-xl md:text-2xl text-center p-2 text-white'>Take Career Economics 101</p>
                </div>
                <Image src={NumberTwo} alt='number one' className='hidden lg:block w-16 md:w-20 h-auto'/>
                <p className='lg:w-[48%] xl:w-[48%] 2xl:w-[48.7%] font-family-sans font-light text-center text-2xl lg:text-3xl italic'>We aim to give you the foundations to create a successful career</p>
               
            </div>
            <div className='flex flex-col md:gap-y-4 lg:flex-row bg-transparent items-center justify-start h-60 w-full lg:absolute lg:top-220'>
                <p className='lg:w-[47.7%] xl:w-[48%] 2xl:w-[48.7%] font-family-sans font-light text-center text-2xl lg:text-3xl italic'>We’re offering an exceptional path to your career aspirations</p>
                <Image src={NumberThree} alt='number one' className='hidden lg:block w-16 md:w-20 h-auto'/>
                <div className='flex items-center justify-center bg-dark-purple w-1/3 h-40 rounded shadow-lg shadow-lavender-blue'>
                    <p className='font-family-sans text-xl md:text-2xl text-center p-2 text-white'>Enroll in the Office Administration Certificate</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default JourneySection
