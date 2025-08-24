'use client';
import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button/Button'
//import {useState, useEffect } from 'react';
import heroImgMobile from '../../../../public/images/mobile2.png'
import heroImagedDesktop from "../../../../public/images/desktop-hero-image.png"
import HeroLeftBottomWaves from '@/components/ui/Waves/HeroLeftBottomWaves';
import HeroRightTopWaves from '@/components/ui/Waves/HeroRightTopWaves';

const Hero = () => {
  /*const [heroImage, setHeroImage] = useState<typeof heroImgMobile | null>(null);
  useEffect(() =>{
     const updateHeroImg = () => {
      if (window.innerWidth < 1024) {
        setHeroImage(heroImgMobile)
      } else {
        setHeroImage(heroImagedDesktop)
      }
  }

  updateHeroImg();
  window.addEventListener('resize', updateHeroImg);

  return () => window.removeEventListener('resize', updateHeroImg)

  }, [])
  */
 
  return (
    <div className='relative flex flex-col-reverse lg:flex-row h-170 lg:h-180 items-center  bg-egyptian-violet lg:bg-transparent'>
      
      <div className="lg:absolute my-11 lg:left-15 flex flex-col items-center justify-center gap-4 text-white lg:text-black text-center lg:z-3 ">
        <h2 className="font-family-sans text-4xl lg:text-5xl font-medium">Accelerate Your Career</h2>
        <h3 className="font-family-sans font-light text-3xl w-110">be the insider within the field of your choice</h3>
        <Button
        textContent="Get Started"/>
      </div>
      
      <Image src={heroImgMobile}  alt="hero image" className="lg:hidden w-100 h-100" />
      <div className="hidden lg:block lg:absolute  lg:top-0 lg:right-0 ">
        <HeroRightTopWaves />
      </div>
      <div className="hidden lg:block lg:absolute lg:-bottom-50 lg:right-5 lg:z-3 ">
      <Image src={heroImagedDesktop }  alt="hero image" className="lg:visible lg:w-165 lg:h-145 xl:w-205 xl:h-185" />
      </div>
      
      <Image src="/images/hero-person.png" width={390} height={448} alt="hero person" className="w-40 h-44 absolute top-50 lg:z-4 lg:top-90 lg:right-55 xl:top-50 xl:right-70 lg:w-60 lg:h-66 xl:w-80 xl:h-88"/>
      <div className="hidden lg:block lg:absolute lg:top-110">
        <HeroLeftBottomWaves />
      </div>
    </div>
  )
}

export default Hero
//border-2 border-amber-300 border-solid
//
// width={920} height={685}  width={390} height={448}
//  /*<Image src={heroImageSrc} width={300} height={448} className="lg:w-130 lg:h-150 xl:w-200 xl:h-110  " alt="hero image"/>*/
// lg:w-130 lg:h-150 xl:w-290 xl:h-265
//width={2312} height={1968}
//border-2 border-amber-300 border-solid
///*{heroImage && 