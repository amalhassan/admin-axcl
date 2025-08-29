import React from 'react'
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className='h-30 bg-primary-accent flex flex-col justify-between gap-y-10'>
      <div className='flex self-end text-secondary-accent text-4xl gap-x-3 mt-2 mr-10'>
        <Icon icon="ri:twitter-x-fill"/>
        <Icon icon="mdi:instagram" />
      </div>
       <div className='flex self-start font-bold text-secondary-accent ml-2 text-lg'>
        <p>Privacy Policy | Terms | © 2025 Admin Accelerator</p> 
      </div>
    </div>
  )
}

export default Footer
