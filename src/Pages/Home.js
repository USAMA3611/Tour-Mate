import React from 'react'
import background from '../Pages/background.png'; 
import Populardestination from '../components/populardestination';
import Services from '../components/Services'
import Clients from '../components/Clients';


function Home() {
  return (
    <>
    <div className='reltive'> 
       <img className='h-screen w-screen bg-cover bg-center '  src={background} alt="" />
      <div className='absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center' >
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Explore the world with us</h1>
        <p className='text-lg md:text-2xl text-white mb-8'>Discover Amazing places at executives deals</p>
        <button className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transform transition duration-300
        hover: scale-105'>Get Started</button>
      </div>
    </div>
    <Populardestination/>
    <Services/>
    <Clients/> 
    
    </>
  )
} 

export default Home
