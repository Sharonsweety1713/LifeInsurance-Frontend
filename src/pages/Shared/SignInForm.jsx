// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SignInForm = ({ toggle }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const validateForm = async (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       setError('Please fill in all fields');
//       toast.error('Please enter both username and password.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
//         email: username, 
//         password
//       });

//       const { token, role } = response.data;

//       localStorage.setItem('token', token);

//       toast.success('Login successful!');

//       setTimeout(() => {
//         if (role === 'User') {
//           navigate('/user/dashboard');
//         } else if (role === 'Admin') {
//           navigate('/admin/dashboard');
//         } else {
//           toast.error('Unknown role.');
//         }
//       }, 2000);
//     } catch (error) {
//       setError('Invalid Username / Password');
//       toast.error('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <>
//       <div className="h-screen w-screen flex items-center">
//         <div className="form sign-in" style={{ marginLeft: '50%' }}>
//           <div className="input-group relative w-full my-4">
//             <i className='bx bxs-user absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-600'></i>
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full p-4 pl-12 text-base bg-gray-200 rounded-md border-white outline-none focus:border-primary"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group relative w-full my-4">
//             <i className='bx bxs-lock-alt absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-600'></i>
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full p-4 pl-12 text-base bg-gray-200 rounded-md border-white outline-none focus:border-primary"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <p className="text-red-600">{error}</p>}
//           <button
//             className="w-full p-3 text-lg text-white rounded-md"
//             style={{ backgroundColor: '#57B894' }}
//             onClick={validateForm}
//           >
//             Sign in
//           </button>
//           <p className="my-4 text-sm">
//             <b>Forgot password?</b>
//           </p>
//           <p className="my-4 text-sm">
//             <span>Don't have an account?</span>
//             <b onClick={toggle} className="cursor-pointer">Sign up here</b>
//           </p>
//         </div>
//       </div>
//       <ToastContainer 
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </>
//   );
// };

// export default SignInForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authService } from '../../services/auth'

const SignInForm = ({ toggle }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (token) => {
    authService.setToken(token);

    try {
      const role = authService.getUserRole(); 

      if (role) {
        if (role === 'USER') {
          navigate('/user/dashboard');
        } else if (role === 'ADMIN') {
          navigate('/admin/dashboard');
        } else {
          toast.error('Unknown role.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      } else {
        toast.error('Role not found in token.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      toast.error('Failed to decode token.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  const validateForm = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      toast.error('Please enter both email and password.');
      return;
    }

    try {
      const response = await authService.SignIn(email, password); 
      const { token } = response.data;

      toast.success('Login successful!');

      setTimeout(() => {
        handleLogin(token);
      }, 2000);
    } catch (error) {
      setError('Invalid Email / Password');
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center">
        <div className="form sign-in" style={{ marginLeft: '50%' }}>
          <div className="input-group relative w-full my-4">
            <i className='bx bxs-user absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-600'></i>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 pl-12 text-base bg-gray-200 rounded-md border-white outline-none focus:border-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group relative w-full my-4">
            <i className='bx bxs-lock-alt absolute top-1/2 left-4 transform -translate-y-1/2 text-xl text-gray-600'></i>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 pl-12 text-base bg-gray-200 rounded-md border-white outline-none focus:border-primary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <button
            className="w-full p-3 text-lg text-white rounded-md"
            style={{ backgroundColor: '#57B894' }}
            onClick={validateForm}
          >
            Sign in
          </button>
          <p className="my-4 text-sm">
            <b>Forgot password?</b>
          </p>
          <p className="my-4 text-sm">
            <span>Don't have an account?</span>
            <b onClick={toggle} className="cursor-pointer">Sign up here</b> {/* Added toggle function */}
          </p>
        </div>
      </div>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
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

export default SignInForm;
