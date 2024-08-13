import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate ,Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import admin from './asserts/admin.webp';

const AdminSignIn = ({ toggle }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validation = (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error('Please fill in both fields', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (username === 'sharon' && password === '1713') {
      toast.success("Sign In Successful!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose:()=>navigate('/admin/dashboard')
      });
      
    } else {
      toast.error('Invalid Username / Password', {
        position: "bottom-right",
        autoClose: 3000,
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
      
      <div className="h-screen w-screen flex items-center justify-center">
        
        <div className="w-1/2 h-full">
          <img src={admin} alt="Sign In" className="w-full h-full object-cover" />
        </div>
        
        
        
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="form sign-in">
          <div className="mb-6 text-2xl font-bold">
              Admin Login
            </div>
            <div className="input-group relative w-96 my-4">
              <i className='bx bxs-user absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-600'></i>
              <input type="text" placeholder="Username" className="w-full p-4 pl-12 text-base bg-gray-200 rounded-md border-white outline-none focus:border-primary" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="input-group relative w-96 my-4">
              <i className='bx bxs-lock-alt absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-600'></i>
              <input type="password" placeholder="Password" className="w-full p-4 pl-12 text-base bg-gray-200 rounded-md border-white outline-none focus:border-primary" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button
              className="w-96 p-3 text-lg text-white rounded-md"
              style={{ backgroundColor: '#57B894' }}
              onClick={validation}
            
            >
            
             
              Sign in
          
            </button>
            <ToastContainer
              position="bottom-right"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignIn;
