import React, { useState } from 'react'
import Button from './button'

const Form = ({getuserdata}) => {
  const [input, setInput] = useState({ name: '', email: '' })
  const [submissions, setSubmissions] = useState([])

  const handleinput = (e) => {
    e.preventDefault()
    if(input.name.trim() === '' || input.email.trim() === '') {
        alert('Please fill in all fields')
        return
    }
    if(!/\S+@\S+\.\S+/.test(input.email)) {
        alert('Please enter a valid email address')
        return
    }
    if (input.name && input.email) {
      getuserdata(input)
      setSubmissions([...submissions, input])
      setInput({ name: '', email: '' })
    }
  }

  return (
    <div className='bg-green-100 mt-3 p-4'>
       <div className='card bg-red-300 w-72 p-4 m-4 flex justify-center items-center'>
           <form className='mt-5' onSubmit={handleinput}>
                <input type="text" placeholder='Enter your name' className='border-2 border-gray-300 rounded-md p-2 mb-4' 
                value={input.name} 
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                />        
                <input type="email" placeholder='Enter your email' className='border-2 border-gray-300 rounded-md p-2 mb-4'
                value={input.email}
                onChange={(e) => setInput({ ...input, email: e.target.value })}
                 />
                <button type='submit' className='bg-blue-500 text-white hover:bg-blue-400 cursor-pointer px-4 py-2 rounded'>Submit</button>
           </form>
       </div>
       <div className='m-1'>
           {
            submissions.map((item, index) => (
                <div key={index} className='bg-white p-3 m-2 rounded border border-gray-300'>
                    <p><strong>Name:</strong> {item.name}</p>
                    <p><strong>Email:</strong> {item.email}</p>
                </div>
            ))

           }
       </div>
    </div>
  )
}

export default Form