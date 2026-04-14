import React from 'react'

const Form = () => {
    return (
        <div>
            <div className='bg-black text-white shadow-2xl'>
                <form className='bg-black text-white shadow-2xl flex row p-6 rounded-lg'>
                    <label className=''>
                        <span>Email address</span>
                        <input type='email' placeholder='you@example.com' />
                    </label>
                    <label className='auth-field'>
                        <span>Password</span>
                        <input type='password' placeholder='Enter your password' />
                    </label>
                    <button type='submit' className='auth-button'>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form