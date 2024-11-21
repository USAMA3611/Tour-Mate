import React from 'react'
import background from './background.png';

function About() {
  return (
    <>
        <div className='reltive '>
                <img src={background} alt="" className=' w-screen bg-cover bg-center h-screen' />
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center' >
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>About</h1>

                </div>
            </div>

          <div className='container mx-auto px-4 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='flex items-center justify-center'>
                    <img src={background} alt="" className='rounded-lg shadow-md w-full h-auto' />
                </div>
                <div>
                    <h3 className='text-2xl font-bold mt-4'>Who We Are</h3>
                    <p className='text-gray-700 mt-4'>We are a passionate travel agency committed to provideing the best travel experience dedicated professionals works to ensure your trips are seamless
                        and unforgetable.
                    </p>
                    <h3 className='text-2xl font-bold mt-4'>Our Mission</h3>
                    <p className='text-gray-700 mt-4'>Our mission is to creat amazing travel experience that inspire and enrich the live of our clients. We believe in personalIzed service, attention to detail, and
                        providing exceptional value. </p>
                </div>
            </div>
          </div>
    </>
  )
}

export default About
