
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    
    const submitHandler=(e) => {
        e.preventDefault()
    }


   return (
        <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
            <img className='w-16 mb-10' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"></img>

            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>

             <h3 className='text-lg w-1/2 font-medium mb-2'>What's your email</h3>
               <div className='flex gap-4 mb-6'>
                <input
                    required
                    className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base'
                    type="text"
                    placeholder='First name'
                     value= {firstName}
                     onChange = {(e)=>{
                       setFirstName(e.target.value)
                     }}

                />
                  <input
                    required
                    className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border  text-lg placeholder:text-base'
                    type="text"
                    placeholder='Last name'
                    value= {lastName}
                    onChange = {(e)=>{
                      setLastName(e.target.value)
                    }}
                />
                </div>
                <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                <input
                    required
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    type="email"
                    placeholder='email@example.com'
                />

                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                <input
                    required
                  
                    className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    type="password"
                    placeholder='password' />

                <button
                    className='bg-[#111] text-white front-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>
                    Login
                </button>
             <p className='text-center'>Already have a account?<Link to='/login' className='text-blue-600'>Login here</Link></p>
            </form>
        </div>
        <div>
        <p className='text-[10px]'> By proceeding, you consent to get calls, whatsApp
            or SMS messages,including by automated means, from Uber and its affiliates to the number provided</p> 
        </div>
    </div>
    )
}
export default UserSignup