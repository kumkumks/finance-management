import React from 'react'

const Button = ({className, text}) => {
  return (
    <div className={`px-2 py-3 mx-2 my-3 rounded-2xl flex justify-center ${className}`}>
        <div className='font-medium'>
            {text}
        </div>
       
    </div>
  )
}

export default Button