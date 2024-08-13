import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSide from '@/components/Admin/AdminSide';
import AdminTop from '@/components/Admin/AdminTop';
import { authService } from '@/services/auth'; 
import { User } from '@/services/user'; 

const AdminLayout = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      if (!authService.isLoggedIn() || authService.getUserRole() !== 'ADMIN') {
        navigate('/login');
      }
    };
    checkAuth();
  }, [navigate]);

  return (
        <div className='h-screen w-screen overflow-x-hidden m-0 p-0 flex flex-row overflow-y-auto'>
        <AdminSide/>
        <div className='h-screen w-5/6 flex justify-center items-center flex-col'>
        
        <AdminTop/>
        <div className='h-[92vh] w-full'>   
           <Outlet/>
        </div>
        </div>
    </div>
        
      )
};

export default AdminLayout;
