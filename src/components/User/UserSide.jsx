// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import axios from 'axios'
// import { LayoutDashboard,NotepadText,MessageCircleQuestion ,LogOut,Headset } from 'lucide-react'
// const UserSide = () => {
//     const UserLinks=[
//         {
//             title:'Dashboard',
//             link:'/user/dashboard',
//             icon:LayoutDashboard
//         },
//         {
//             title:'Get Policy',
//             link:'/user/plan',
//             icon:NotepadText
//         },
//         {
//             title:'FAQs',
//             link:'/user/faq',
//             icon:MessageCircleQuestion 
//         }
        
//     ]
//     const handleLogout = async () => {
//         try {
//           await axios.delete('http://localhost:8080/api/v1/auth/logout', {
//             headers: {
//               'Authorization': `Bearer ${localStorage.getItem('token')}`, // Adjust token retrieval as needed
//             },
//           });
//           localStorage.removeItem('token'); // Remove the token from local storage
//           navigate('/'); // Redirect to home page
//         } catch (error) {
//           console.error('Logout failed:', error);
//           // Optionally handle logout errors (e.g., show a message to the user)
//         }
//       };
    
//   return (
   
//     <div className='fixed h-screen w-1/6 flex flex-col justify-between items-center  pt-10 border-r-2 'style={{ borderColor: '#57B894' }}>
//             <div className=' w-full flex flex-col  items-center gap-4'>
//                 {
//                    UserLinks.map((data, index) => (
//                         <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-customGreen font-bold mt-2 w-full '>

//                             <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
//                                 {React.createElement(data.icon, { size: 20 })}
//                                 {data.title}
//                             </span>
//                         </NavLink>
//                     ))
//                 }
//             </div>
           
//             <div className='h-1/6 flex flex-col gap-2 justify-start items-center p-5 border-b-4 border-gray-500 hover:border-customGreen font-bold mt-2 w-full'>
//     <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
//     {/* <Link to='/'> */}
//         {/* </Link>
//         <Link to='/'>
//         Logout
//         </Link> */}
//         <button onClick={handleLogout}>
//         <LogOut size={20} />
//             Logout
//             </button>
//     </span>
// </div>

//         </div>
        
//   )
// }
// export default UserSide


import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LayoutDashboard, NotepadText, MessageCircleQuestion, LogOut } from 'lucide-react';

const UserSide = () => {
  const navigate = useNavigate();

  const UserLinks = [
    {
      title: 'Dashboard',
      link: '/user/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Get Policy',
      link: '/user/plan',
      icon: NotepadText,
    },
    {
      title: 'FAQs',
      link: '/user/faq',
      icon: MessageCircleQuestion,
    },
  ];

  const handleLogout = async () => {
    console.log('Logout button clicked'); // Debugging line
    try {
      await axios.delete('http://localhost:8080/api/v1/auth/logout', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      localStorage.removeItem('token');
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className='fixed h-screen w-1/6 flex flex-col justify-between items-center pt-10 border-r-2' style={{ borderColor: '#57B894' }}>
      <div className='w-full flex flex-col items-center gap-4'>
        {UserLinks.map((data, index) => (
          <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-customGreen font-bold mt-2 w-full'>
            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
              {React.createElement(data.icon, { size: 20 })}
              {data.title}
            </span>
          </NavLink>
        ))}
      </div>

      <div className='h-1/6 flex flex-col gap-2 justify-start items-center p-5 border-b-4 border-gray-500 hover:border-customGreen font-bold mt-2 w-full'>
        <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
            <LogOut size={20} />
          <button onClick={handleLogout}>
            Logout
          </button>
        </span>
      </div>
    </div>
  );
};

export default UserSide;
