import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate(); // Initialize useNavigate
  const { email, password } = formData;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/user/login", formData); // Corrected endpoint
      if (response.data.success) {
        alert(response.data.message);
        localStorage.setItem("Users", JSON.stringify(response.data.user)); // Save user data
        // Update the auth state here if needed (you can lift this state up)
        navigate('/protected-route'); // Redirect to the protected route
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }

    console.log(formData);
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative">
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>
            ✕
          </Link>
          <h3 className="font-bold text-lg text-center">Login</h3>
          <form method="POST" className='mt-4 space-y-4' onSubmit={handleSubmit}>
            <div>
              <span>Email</span>
              <input
                type='email'
                name='email'
                value={email}
                onChange={onChange}
                placeholder='Enter your email'
                className='w-full max-w-md px-3 py-1 border rounded-md outline-none'
              />
            </div>
            <div>
              <span>Password</span>
              <div className='relative'>
                <input
                  name='password'
                  value={password}
                  onChange={onChange}
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  className='w-full max-w-md px-3 py-1 border rounded-md outline-none'
                />
                <span
                  onClick={togglePasswordVisibility}
                  className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
                >
                  {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                </span>
              </div>
            </div>
            <div className='flex justify-between mt-4'>
              <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                Login
              </button>
              <p>
                Not registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
