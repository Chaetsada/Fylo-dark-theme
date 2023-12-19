import React from 'react'
import product from '../assets/illustration-stay-productive.png'
import arrow from '../assets/icon-arrow.svg'
const Productive = () => {
  return (
    <main className='mt-[150px] container'>
      <div className='px-3 flex flex-col md:flex-row '>
        <div className='p-5'>
          <img src={product} alt="product-image" />
        </div>
        <div className=' mt-10 flex flex-1 flex-col px-5 md:justify-center'>
          <h3 className=' md:max-w-[300px]'>Stay prodcutive wherever your are</h3>
          <p className='mt-5'>Never let location be an issue when accessingyour files. Fylo has you covered for all of your file storage needs.</p>
          <p className='my-5'>Securely share files and folders with friends, family and colleagues for live collaboration, No email attachments required</p>
          <a className='text-cyan-gradient w-fit border-b group hover:text-white' href="#">
            See how fylo worker
            <img className='inline ' src={arrow} alt="" />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Productive