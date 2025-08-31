'use client';
import React from 'react'
import { useState } from 'react';
import TopWave from '../../../../public/images/get-started-top-wave.svg'
import Image from 'next/image'
import Button from '@/components/ui/Button/Button'
import { Icon } from "@iconify/react";

const GetStartedSection = () => {
  // course data
const [courses, setCourses] = useState([
  { id: 1, color: 'bg-amber-600', name: 'A' },
  { id: 2, color: 'bg-amber-100', name: 'B' },
  { id: 3, color: 'bg-amber-600', name: 'C' },
  { id: 4, color: 'bg-amber-100', name: 'D' },
]);
const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

const handleRightArrowClick = () => {
  // Make a copy of the current courses array
  const newCourses = [...courses];
  
  // Remove the first element from the array (which is the current visible card)
  const firstCourse = newCourses.shift();

  // Check if the course actually exists before trying to push it
  if (firstCourse) {
    // Add that element to the end of the array
    newCourses.push(firstCourse);
  }
  
  // Update the state
  setCourses(newCourses);
};

const handleLeftArrowClick = () => {
  // Make a copy of the current courses array
  const newCourses = [...courses];

  // Remove the last element from the array
  const lastCourse = newCourses.pop();

  // Check if the course actually exists before trying to push it
  if (lastCourse) {
     // Add that element to the beginning of the array
    newCourses.unshift(lastCourse);
  }
  
  // Update the state
  setCourses(newCourses);
};
  return (
    <div className='w-fit'>
      <div className='relative'>
        <Image src={TopWave} alt='top wave' className='absolute -top-5 lg:-top-6 z-3 w-screen' /> 
      </div>
      <div className='flex flex-col mt-5 lg:mt-3 items-center '>
      <div className='bg-light-blue h-fit flex flex-col-reverse lg:flex-row gap-y-5 items-center justify-around  w-screen z-4 mt-3 lg:mt-10 py-25' id='get-started'>
        <div className='flex flex-col gap-y-6 w-[90%] lg:w-[30%] xl:w-[25%] items-center'>
          <div className={`${courses[currentCourseIndex].color} w-80 h-80 rounded`}>
            image
          </div>
          <div className='bg-white w-80 py-3 px-2'>
            <p className="text-xl font-bold text-black text-center">{courses[currentCourseIndex].name}</p>
            <p className="h-20">description</p>
          </div>
          <Button textContent='start course' className='self-center'/>
        </div>
        <div className='flex flex-col w-[90%] lg:w-[60%] gap-y-3 lg:self-start'>
          <p className='font-family-display text-4xl text-primary-accent lg:self-center'>Courses</p>
          <p className='font-family-sans text-3xl font-bold text-center w-2/3 self-center'>Where Careers Take Flight</p>
          <p className='font-family-sans text-2xl font-light text-center'>Chart your course boldy! Each decision you take is a stepping stone towards the future you are destined to create.</p>
          <div className='flex gap-x-2 relative'>
            <div onClick={handleLeftArrowClick} className='rounded-full bg-bright-orange w-10 h-10 absolute -left-4 top-17 flex items-center justify-center'>
              <Icon icon="material-symbols-light:keyboard-arrow-left" width="40" height="40" className='text-white'/>
            </div>
           {/* Dynamic Course Cards with onClick handler */}
            {courses.map((course) => (
              <div 
                key={course.id} 
                className={`${course.color} w-[25%] h-45 rounded flex items-center justify-center cursor-pointer`}
              >
                <p className="text-sm font-bold text-black">{course.name}</p>
              </div>
            ))}
            <div onClick={handleRightArrowClick} className='rounded-full bg-bright-orange w-10 h-10 absolute -right-4 top-17 flex items-center justify-center'>
              <Icon icon="material-symbols-light:keyboard-arrow-right" width="40" height="40" className='text-white'/>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default GetStartedSection
