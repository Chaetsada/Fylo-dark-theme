import React from 'react'
import logo from '../assets/logo.svg'

import location from '../assets/icon-location.svg'
import phone from '../assets/icon-phone.svg'
import email from '../assets/icon-email.svg'

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-darkblue-300 h-auto pb-[100px]'>
      <div className='container'>
      <div className='h-[30vh] flex items-end justify-start p-5'>
        <img className='w-[150px] h-[50px]' src={logo} alt="logo-icon" />
      </div>
      <div className='flex flex-col p-5 md:flex-row'>

          <div className='flex gap-5 md:w-[30%]'>
            <img className='w-[20px] h-[20px]' src={location} alt="" />
            <address>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae explicabo ut rerum ex cum! Dolore reiciendis repellendus quae illum similique. Facilis, veritatis? Repellendus, quo?</address>
          </div>

          <section className='mt-5 md:mt-0 flex flex-col md:ms-8 gap-5 md:w-[25%]'>
            <div className='flex gap-5'>
              <img className='w-[20px] h-[20px]' src={phone} alt="" />
              <p>+1-543-123-4567</p>
            </div>
            <div className='flex gap-5'>
              <img className='w-[20px] h-[20px]' src={email} alt="" />
              <p>example@fylo.com</p>
            </div>
          </section>

        <section className='mt-10 md:mt-0 flex flex-col md:w-[20%] gap-3'>
          <a href="#">About Us</a>
          <a href="#">Jobs</a>
          <a href="#">Press</a>
          <a href="#">Blog</a>
        </section>

        <section className='mt-10 md:mt-0 flex flex-col md:w-[20%] gap-3'>
          <a href="#">Contact Us</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </section>

        <section className='mt-20 md:mt-0 flex justify-center space-x-5 md:w-[15%]'>
          <a href="#">
            <FaFacebookSquare className='w-[35px] h-[35px] hover:text-cyan-gradient' />
          </a>
          <a href="#">
            <FaSquareXTwitter className='w-[35px] h-[35px] hover:text-cyan-gradient' />
          </a>
          <a href="#">
            <FaInstagramSquare className='w-[35px] h-[35px] hover:text-cyan-gradient' />
          </a>
        </section>
      </div>
      </div>
    </div>
  )
}

export default Footer