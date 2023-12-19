import React from 'react'

import access from '../assets/icon-access-anywhere.svg'
import file from '../assets/icon-any-file.svg'
import collaboration from '../assets/icon-collaboration.svg'
import security from '../assets/icon-security.svg'

const Feature = () => {
    return (
        <section className='container mt-[100px] flex flex-col flex-wrap md:flex-row'>
            <div className=' flex flex-col items-center justify-center p-8 md:w-[50%]'>
                <img src={access} alt="access-icon" />
                <h4>Acess your files, anywhere</h4>
                <p className='mt-3 text-center max-w-[400px]'>The ability to use a smartphone, tablet, or computer to acess your account means your files follow you everywhere.</p>
            </div>
            <div className=' flex flex-col items-center justify-center p-8 md:w-[50%]'>
                <img src={security} alt="security-icon" />
                <h4>Acess your files, anywhere</h4>
                <p className='mt-3 text-center max-w-[400px]'>The ability to use a smartphone, tablet, or computer to acess your account means your files follow you everywhere.</p>
            </div>
            <div className=' flex flex-col items-center justify-center p-8 md:w-[50%]'>
                <img src={collaboration} alt="collaborative-icon" />
                <h4>Acess your files, anywhere</h4>
                <p className='mt-3 text-center max-w-[400px]'>The ability to use a smartphone, tablet, or computer to acess your account means your files follow you everywhere.</p>
            </div>
            <div className=' flex flex-col items-center justify-center p-8 md:w-[50%]'>
                <img src={file} alt="file-icon" />
                <h4>Acess your files, anywhere</h4>
                <p className='mt-3 text-center max-w-[400px]'>The ability to use a smartphone, tablet, or computer to acess your account means your files follow you everywhere.</p>
            </div>
        </section>
    )
}

export default Feature