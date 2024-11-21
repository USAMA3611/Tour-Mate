import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'
import { Link } from "react-router-dom"



function Footer() {
    return (
        <>
           <div className='bg-gray-800 p-4 text-white'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Tour Mate</h2>
                    <p className='mb-4'>Your trusted partner for unforgetable <br /> travel experiences. Explore the world with us.</p>
                </div>
                <div className='flex flex-col md:items-center'>
                    <h2 className='text-lg font-semibold '>Quick Links</h2>
                    <div className='flex flex-col mt-4 space-y-2'>
                        <Link to="/">Home</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/about">About Us</Link>

                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-bold mb-4'>Follow Us</h2>
                    <div className='flex space-x-4 mb-4'> 
                        <FaFacebookF size={24} className='text-blue-500 hover:text-blue-600'/> 
                        <FaInstagram size={24} className='text-pink-500 hover:text-pink-600'/>
                        <FaTwitter size={24} className='text-blue-400 hover:text-blue-500'/>
                        <FaYoutube size={24} className='text-red-500 hover:text-red-600'/>
                    </div>
                    <form className='flex items-center justify-center mt-8' >
                        <input type="email" placeholder='Enter Your Email' 
                        className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600' />
                        <button className='bg-blue-600 text-white px-4
                        py-2 rounded-r-lg border border-blue-600'>Subscribe</button>
                    </form> 
                </div>
            </div>
            <div className='flex justify-between mt-8 border-t border-gray-700 pt-4'>
                <p> @ 2024 Tour Mate. All rights reserved.</p>
                <div className='flex space-x-4 mt-4 md:mt-0'> 
                    <Link to="/">Privacy Policy</Link> 
                    <Link to="/">Terms of services</Link>
                </div>
            </div>
           </div>
        </>
    )
}

export default Footer
