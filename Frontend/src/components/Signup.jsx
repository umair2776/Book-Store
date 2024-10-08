import React, { useState } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import Login from './Login'
import axios from "axios"

const Signup = () => {
  const navigate=useNavigate();
  const [formData,setFormData]=useState(
    {
      name:'',
      email:'',
      password:''
    }
  )
  const {name,email,password}=formData;

  const onChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/user/signup", formData); // Corrected endpoint
      if (response.data.success) {
          alert(response.data.message);
      } else {
          alert(response.data.message);
          
          
      }
      localStorage.setItem("Users",JSON.stringify(response.data.user));
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }

    console.log(formData);
  }

  return (
    <div className='flex h-screen items-center justify-center'>
      <div id='my_modal_3' className=''>
        <div className='modal-box'>
          <form className='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' onClick={() => console.log('Close Modal')}>
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center">Signup</h3>
          <form onSubmit={handleSubmit} method='POST' className='mt-4 space-y-4'>
            <div>
              <label>Name</label>
              <input 
                type='text'
                name='name' 
                value={name} 
                onChange={onChange}
                placeholder='Enter your full name' 
                className='w-full px-3 py-1 border rounded-md outline-none' 
              />
            </div>
            <div>
              <label>Email</label>
              <input 
                type='email' 
                name='email' 
                value={email} 
                onChange={onChange}
                placeholder='Enter your email' 
                className='w-full px-3 py-1 border rounded-md outline-none' 
              />
            </div>
            <div>
              <label>Password</label>
              <input 
                type='password' 
                name='password'
                value={password}
                onChange={onChange}
                placeholder='Enter your password' 
                className='w-full px-3 py-1 border rounded-md outline-none' 
              />
            </div>
            <div className='flex justify-between mt-4'>
              <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                Signup
              </button>
              <p>
                Have an account? <span className='underline text-blue-500 cursor-pointer'
                  onClick={()=>document.getElementById("my_modal_3").showModal()}
                >
                  Login</span>
              </p>
              <Login/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
