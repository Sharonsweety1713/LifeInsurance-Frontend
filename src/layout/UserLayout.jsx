// import UserSide from '@/components/User/UserSide';
// import UserTop from '@/components/User/UserTop';
// import React from 'react';
// import { Outlet } from 'react-router-dom';

// const UserLayout = () => {
//   return (
//     <div className='h-screen w-screen flex overflow-hidden'>
//       <UserSide />
//       <div className='flex flex-col w-5/6 ml-[16.666%]'>
//         <UserTop />
//         <div className='h-[92vh] overflow-y-auto'>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserLayout;

import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import UserSide from '@/components/User/UserSide';
import UserTop from '@/components/User/UserTop';

import { authService } from '@/services/auth'; // Adjust the import path if necessary
import { User } from '@/services/user'; // Adjust the import path if necessary

const UserLayout = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      if (!authService.isLoggedIn() || authService.getUserRole() !== 'USER') {
        navigate('/login');
      }
    };
    checkAuth();
  }, [navigate]);


  return (
        <div className='h-screen w-screen flex overflow-hidden'>
          <UserSide />
          <div className='flex flex-col w-5/6 ml-[16.666%]'>
            <UserTop />
            <div className='h-[92vh] overflow-y-auto'>
              <Outlet />
            </div>
          </div>
        </div>
      );
    }


export default UserLayout;
