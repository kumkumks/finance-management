import React from 'react'
import { data } from '../data'

const Navbar = () => {
  return (
    <ul className='flex mt-2 flex-col md:flex-row'>
      {
        data.nav.map((item) => (
          <li 
          className='bg-gray-900 text-gray-400 text-sm rounded-2xl px-5 py-2 m-1 font-medium hover:bg-gray-800 hover:cursor-pointer hover:text-gray-200'
          key={item.id}>{item.title}</li>
        ))
      }
    </ul>
  )
}

export default Navbar