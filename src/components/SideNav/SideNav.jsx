
import Ellipse from '../../assets/home/Ellipse.png'
import { GrNewWindow } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { LuFolderCog } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import {Link} from "react-router-dom"
import { useState } from "react";


export default function SideNav() {
  const [isNewOpen, setIsNewOpen] = useState(false);

  return (
    <aside className="bg-blue-950 text-white w-64 min-h-screen py-6  px-3">
    <div className="mb-40">
      
      </div>

    <ul>
      <li className="mb-2   ">
        <Link to='/' className="flex items-center py-2 px-4 gap-5 text-xl rounded hover:bg-yellow-600">
          <span><MdDashboard /></span>
          Dashboard
        </Link>
      </li>
      
      <div>
        <button 
          className="w-full flex items-center justify-between p-2 bg-bg-blue-950 hover:bg-yellow-600 text-White font-bold rounded-md"
          onClick={() => setIsNewOpen(!isNewOpen)}
        >
          <div className="flex items-center space-x-2">
          <span><GrNewWindow /></span>
            <span>New</span>
          </div>
          <span>{isNewOpen ? "▲" : "▼"}</span>
        </button>
        {isNewOpen && (
          <div className="pl-6 mt-2 space-y-2">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600">
              
              <Link to='/headline'><button>Post New Headline</button></Link>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600">
             
              <button>Post New Article/Post</button>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer hover:text-yellow-600">
             
              <button>Post Video</button>
            </div>
          </div>
        )}
      </div>










      <li className="mb-2 ">
        <a href="#" className="flex items-center py-2 px-4 gap-5 text-xl rounded hover:bg-yellow-600">
         <span><LuFolderCog /></span>
           manage
        </a>
      </li>
      <li className="mb-2 ">
        <a href="#" className="flex items-center py-2 px-4 gap-5 text-xl rounded hover:bg-yellow-600">
          <span><FaRegUser /></span>
          Profile
        </a>
      </li>
      <li className="mb-2 ">
        <a href="#" className="flex items-center py-2 px-4 gap-5 text-xl rounded hover:bg-yellow-600">
          <span><IoSettingsOutline /></span>
          Setting
        </a>
      </li>
      <li className="mb-2 mt-8 border-t border-blue-800 pt-4">
      <div className='flex items-center gap-3'>
      <img src={Ellipse} alt="Logo" className="w-10 h-10 rounded-full"/>
      <div>
        <h1 className="text-sm font-bold">News Paper</h1>
        <p className="text-xs text-gray-900 px-1 py-0.4 mt-1 border bg-orange-300 border-orange-300 rounded-xl">Super Admin</p>
      </div>
      </div>
        <a href="#" className="flex items-center text-orange-300 mt-3 py-3 px-4 gap-4 text-xl rounded hover:bg-blue-800">
          <span className='text-2xl'><TbLogout /></span>
          Log out
        </a>
      </li>
    </ul>
  </aside>
  )
}
