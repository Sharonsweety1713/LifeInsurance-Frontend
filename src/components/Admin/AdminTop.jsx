import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from 'react-router-dom'
import { Activity } from 'lucide-react'

import { ModeToggle } from '../mode-toggle'
 const AdminTop = () => {
  return (
    <div className='h-[8vh] w-full flex justify-center items-center border-b-2 'style={{ borderColor: '#57B894' }}>
        <div className='w-[90%] flex items-center justify-end gap-4'>
        
{/* <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg ml-24 "><Activity/> Vital Echo</div> */}
<div className="w-1/4 h-full text-primary font-bold flex text-lg">
<Link to='/'>
<Activity/>
</Link>
<Link to='/'>
 Vital Echo
 </Link>
 </div>
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>SS</AvatarFallback>
</Avatar>
        <ModeToggle/>

        </div>
        </div>
  )
}
export default AdminTop
