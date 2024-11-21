import React from 'react';
import background from './background.png';



const images = [
    '/Images/chins.jpg',
    '/Images/tyko.jpg',
    '/Images/japan.png',
    '/Images/world.jpg',
];




function Gallery() {
    return (
    <>

            <div className='reltive '>
                <img src={background} alt="" className=' w-screen bg-cover bg-center h-screen' />
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center' >
                    <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Gallery</h1>

                </div>
            </div>
           
           <div className='container mx-auto px-4 py-12'> 
            <div className='grid gap-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {images.map(image=> (
                    <div className='rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105'>
                        <img src={image}  alt=""  className='w-full h-full object-cover'/> 
                    </div>
                ))}
            </div>
           </div>



            </>
            )
}

            export default Gallery
