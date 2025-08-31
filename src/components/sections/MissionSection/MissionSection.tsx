import React from 'react'
import MissionSectionTopWave from '@/components/ui/Waves/MissionSectionTopWave'
import MissionBottomWaves from '@/components/ui/Waves/MissionBottomWaves'
import Pebble from '../../../../public/images/pebble.svg'
import Image from 'next/image'
const MissionSection = () => {
  return (
    <div className="relative  bg-primary-accent lg:bg-egyptian-violet" id="mission">
    <div className="w-full absolute -top-8 lg:-top-15 z-2">
        <MissionSectionTopWave className=" text-primary-accent lg:text-egyptian-violet"></MissionSectionTopWave>
    </div>
   
    <div className="flex flex-col justify-between text-center h-fit ">
      
      <div className='flex flex-col  gap-y-20 lg:gap-y-30 text-white mt-20 lg:mt-50 xl:mt-20'>
        <div className='flex flex-col gap-y-6'>
            <h3 className='font-family-display text-secondary-accent text-2xl lg:text-4xl'>The Mission</h3>
            <p className='z-1 font-family-sans font-medium text-2xl lg:text-4xl'>Become an Industry Leader </p>
            <p className='font-family-sans font-light italic text-2xl lg:text-3xl'>The Best Launchpad to your Dream Career</p>
            <p className='font-family-sans w-1/2 self-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <div className='flex flex-row justify-between '>
          <div className='relative w-1/2'>
            <Image src={Pebble} alt="left-pebble-1" className='absolute -top-80'/>
            <Image src={Pebble} alt="left-pebble-2" className='absolute -top-60 left-10 xl:left-25 lg:w-20 lg:h-auto rotate-120'/>
            <Image src={Pebble} alt="left-pebble-3" className='absolute -top-40 left-15 lg:left-25 xl:left-50 lg:w-25 lg:h-auto rotate-90'/>
            <Image src={Pebble} alt="left-pebble-4" className='absolute -top-20 left-25 lg:left-40 xl:left-80  lg:w-31 lg:h-auto rotate-45'/>
            <Image src={Pebble} alt="left-pebble-5" className='absolute -top-5 left-40 lg:-top-20 lg:left-80 xl:left-130 lg:w-35 lg:h-auto rotate-90'/>
          </div>
          
          <div className='relative w-1/2'>
            <Image src={Pebble} alt="right-pebble-1" className='absolute top-55 right-0'/>
            <Image src={Pebble} alt="right-pebble-2" className='absolute top-37 right-4 lg:top-30 lg:right-5 lg:w-20 lg:h-auto rotate-320'/>
            <Image src={Pebble} alt="right-pebble-3" className='absolute top-18 right-8 lg:top-10 lg:right-25 lg:w-25 lg:h-auto rotate-260'/>
            <Image src={Pebble} alt="right-pebble-4" className='absolute top-2 right-25 lg:-top-10 lg:right-55 lg:w-31 lg:h-auto rotate-220'/>
            <Image src={Pebble} alt="right-pebble-5" className='absolute -top-5 right-45 lg:-top-20 lg:right-100 lg:w-35 lg:h-auto rotate-180'/>
          </div>
        </div>
        <div className='flex flex-col gap-y-6'>
          <p className='font-family-sans w-1/2 self-center'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className='font-family-sans font-bold text-2xl'>Harness your knowledge to work for you </p>
        </div>
      </div>
      
      <MissionBottomWaves/>
    </div>
     
    </div>
  )
}

export default MissionSection
