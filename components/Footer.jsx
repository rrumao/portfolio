import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaPhone } from 'react-icons/fa'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            rumao@wisc.edu / ryanrumao4@gmail.com
        </div>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <FaPhone className='w-6'/>
            +1 (920)-441-2135
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>Ryan Robert Rumao</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://www.github.com/rrumao/">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/ryan-rumao-9aa7b021b/">LinkedIn</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
