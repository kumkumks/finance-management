import React from 'react'

const Button = ({text}) => {
  return (
    <div className='bg-gray-800 px-5 flex justify-center  m-1 py-1 border-[1px] border-slate-600 text-white rounded-2xl hover:bg-gray-600'>
        <span className='font-medium text-center'>{text}</span>
    </div>
  )
}

export default Button