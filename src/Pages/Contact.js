import React from 'react'
import background from './background.png';
import { FaEnvelope, FaPhone,  FaMapMarkedAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className='bg-gray-100'>
       <div className='reltive '>
                <img src={background} alt="" className=' w-screen bg-cover bg-center h-screen' />
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center' >
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Contact</h1>

                </div>
            </div>
            <div className='container mx-auto px-4 py-12'>
                <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
                        <div className='flex items-center mb-4'>
                            <FaEnvelope className='text-blue-500 mr-2'/>
                            <p>Info@tourmate.com</p>
                        </div>
                        <div className='flex items-center mb-4'>
                            <FaPhone className='text-blue-500 mr-2'  />
                            <p>+927 342 6789</p>
                        </div>
                        <div className='flex items-center mb-4'>
                            <FaMapMarkedAlt className='text-blue-500 mr-2'/>
                            <p>345 Travel st, city, country</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <h3 className='text-xl font-bold mb-4'>Get in touch</h3>
                        <form>
                            <div className='mb-4'>
                                <label className='block text-gray-700 mb-2' htmlFor="name">Name</label>
                                <input type="text" className='w-full p-2 border border-gray-300 rounded'  placeholder='Enter Name'/> 
                            </div>
                            <div>
                                <label className='bloc text-gray-700 mb-2' htmlFor="name">Email</label>
                                <input type="email" className='w-full p-2 border border-gray-300 rounded' placeholder='Enter Your E-mail'/> 
                            </div>
                            <div>
                                <label className='bloc text-gray-700 mb-2' htmlFor="name">Message</label>
                                <textarea   className='w-full p-2 border border-gray-300 rounded'  placeholder='Write message here' id=""></textarea>
                            </div>
                            <button type='submit' className='py-2 px-4 bg-blue-500 text-white rounded'>Send Meassage</button>
                        </form>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Contact
