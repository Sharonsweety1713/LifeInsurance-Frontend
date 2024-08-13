import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const SignUpForm = ({ toggle }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('USER'); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const data = {
      name: username,
      email,
      password,
      role,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', data);
      toast.success('Registration successful!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => navigate('/login'),
      });
      console.log('Registration Response:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('Registration failed. Please try again.', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center">
        <div className="form sign-up" style={{ marginRight: '30%', marginLeft: '-30%' }}>
          
          <div className="input-group relative w-full my-4">
            <i className='bx bxs-user absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-600'></i>
            <input type="text" placeholder="Username" className="w-full p-4 pl-12 text-base bg-gray-200 rounded-md border-white outline-none focus:border-primary" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

         
          <div className="input-group relative w-full my-4">
            <i className='bx bx-mail-send absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-600'></i>
            <input type="email" placeholder="Email" className="w-full p-4 pl-12 text-base bg-gray-200 rounded-md border-white outline-none focus:border-primary" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

        
          <div className="input-group relative w-full my-4">
            <i className='bx bxs-lock-alt absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-600'></i>
            <input type="password" placeholder="Password" className="w-full p-4 pl-12 text-base bg-gray-200 rounded-md border-white outline-none focus:border-primary" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

        
          <div className="input-group relative w-full my-4">
            <i className='bx bxs-lock-alt absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-600'></i>
            <input type="password" placeholder="Confirm password" className="w-full p-4 pl-12 text-base bg-gray-200 rounded-md border-white outline-none focus:border-primary" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>

        
          {/* <div className="input-group relative w-full my-4">
            <select
              className="w-full p-4 text-base bg-gray-200 rounded-md border-white outline-none focus:border-primary"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div> */}

          
          <button
            className="w-full p-3 text-lg text-white rounded-md"
            style={{ backgroundColor: '#57B894' }}
            onClick={handleSubmit}
          >
            Sign up
          </button>

          <p className="my-4 text-sm">
            <span>Already have an account?</span>
            <b onClick={toggle} className="cursor-pointer">Sign in here</b>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default SignUpForm;
