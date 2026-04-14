import React from 'react'
import Form from './component/form'



const App = () => {
 const userdata=({name, email})=>{
  const user={name, email}
  console.log(user);
 }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <Form getuserdata={userdata} />
    </div>
  )
}

export default App