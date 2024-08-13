import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LayoutDashboard,User,HandCoins,LogOut,SearchCheck } from 'lucide-react'

const AdminSide = () => {
    const AdminLinks=[
        {
            title:'Dashboard',
            link:'/admin/dashboard',
            icon:LayoutDashboard
        },
        {
            title:'Users',
            link:'/admin/users',
            icon:User
        },
        {
            title:'Claims',
            link:'/admin/claims',
            icon:HandCoins
        },
        {
            title:'Policies',
            link:'/admin/policies',
            icon:SearchCheck
        }
        
    ]
    const handleLogout = async () => {
        try {
          await axios.delete('http://localhost:8080/api/v1/auth/logout', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`, // Adjust token retrieval as needed
            },
          });
          localStorage.removeItem('token'); // Remove the token from local storage
          navigate('/'); // Redirect to home page
        } catch (error) {
          console.error('Logout failed:', error);
          // Optionally handle logout errors (e.g., show a message to the user)
        }
      };
    
  return (
   
    <div className='h-screen w-1/6 flex justify-center items-center flex-col pt-10 border-r-2 'style={{ borderColor: '#57B894' }}>
            <div className='h-5/6 w-full flex flex-col justify-start items-center gap-4'>
                {
                    AdminLinks.map((data, index) => (
                        <NavLink key={index} to={data.link} className='p-5 border-b-4 border-gray-500 hover:border-customGreen font-bold mt-2 w-full '>

                            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                {React.createElement(data.icon, { size: 20 })}
                                {data.title}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
           
            <div className='h-1/6 flex flex-col gap-2 justify-start items-center p-5 border-b-4 border-gray-500 hover:border-customGreen font-bold mt-2 w-full'>
    <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
        {/* <Link to='/'> */}
        {/* </Link>
        <Link to='/'>
        Logout
        </Link> */}
        <LogOut size={20} />
        <button onClick={handleLogout}>
            Logout
            </button>
    </span>
</div>

        </div>
        
  )
}
export default AdminSide
