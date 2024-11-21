import React from 'react'



const testmonials = [
  {   
    name: 'John Doe',
    image: '/Images/smith.jpg',
    text: 'This travel agency provided service and helped us plan the perfect vacation',
    location: 'Newyork, USA'
  },

  {   
    name: 'John Doe',
    image: '/Images/smith.jpg',
    text: 'This travel agency provided service and helped us plan the perfect vacation',
    location: 'Newyork, USA'
  },
  {   
    name: 'John Doe',
    image: '/Images/smith.jpg',
    text: 'This travel agency provided service and helped us plan the perfect vacation',
    location: 'Newyork, USA'
  },
  
 
  // As more destinations as needed
];



function Clients() {

  return (
   <>
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'> 
        <h3 className='text-3xl font-bold text-center mb-8'>What Our Clients Say</h3>
         <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {testmonials.map((testimonial, index)=>(
           <div key={index} className='bg-white rounded-lg shadow-md p-6 text-center  cursor-pointer 
           transform transition duration-300 hover:scale-110'>
              <img src={testimonial.image} alt="" className='w-24 h-24 rounded-full  mx-auto mb-4' />
              <h4 className='text-xl font-bold mb-2'>{testimonial.name}</h4>
              <p className='text-gray-600'>{testimonial.location}</p>
              <p className='text-gray-600 italic'>{testimonial.text}</p> 
              </div>  
           
            
          
          ))}
         </div>
      </div>
    </div>
   </>
  )
}

export default Clients
