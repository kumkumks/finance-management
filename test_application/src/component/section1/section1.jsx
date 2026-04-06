import React from 'react'

const Section1 = () => {
  return (
    <div className='bg-black h-dvh flex justify-center mt-36'>
        <div>
            <div className='flex justify-center'>
              <h1 className='text-center text-4xl md:text-7xl'>About Closeify</h1>
            </div>    
            <div className='px-2 mt-7 md:px-80'>
               <p className='text-lg text-center'>Discover the story behind our journey,the principles that guide us,and how we're dedicated to empowering your business to grow and thrive</p>
            </div>
            <div className='object-contain rounded-2xl  flex justify-center mt-8'>
                <img src='https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwwfHwwfHx8MA%3D%3D'  
            />
            </div>
           
        </div>
    </div>
  )
}

export default Section1