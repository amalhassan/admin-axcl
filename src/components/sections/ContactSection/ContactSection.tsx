import React from 'react'
import Button from '@/components/ui/Button/Button'
const ContactSection = () => {
  return (
    <div className='flex flex-col items-center justify-center h-100 bg-egyptian-violet'>
    <div className='flex flex-col items-center justify-center gap-y-6 w-1/2 text-center'>
      <p className='font-family-sans font-bold text-lg lg:text-3xl text-white'>We&apos;ve gathered the material for you to gain the skills you need to accelerate your productivity </p>
      <p className='font-family-sans font-light text-lg lg:text-2xl text-white'>Have questions? Want to share your thoughts? We&apos;d love to talk!</p>
      <Button textContent='Contact Us' bgColor='bg-lavender-blue' textColor='text-dark-purple'/>
    </div>
    </div>
  )
}

export default ContactSection
