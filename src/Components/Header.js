import React, {useState} from "react";
import {FaSearch, FaUserCircle} from 'react-icons/fa';
import { FaRegBell } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";


const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
 

    return(
        
      <nav className="w-full shadow flex justify-between h-16">
        <div className="flex items-center ">
        <div className="ml-[60px] md:ml-[260px]">
             <div className="relative"> 
              <span className="absolute inset-y-0 left-0 flex items-center ">
                <button className="p-1 focus:outline-none text-blue-900 "><FaSearch /></button></span>
              <input 
              type="text"
              className="w-full px-4 py-1 pl-12 rounded shadow shadow-blue-900 outline-none"
              placeholder="Search..."
              />
       </div>
       </div>
        </div>
        
        <div className="flex items-center text-blue-900 space-x-6 mr-5" >
          <div className="relative flex items-center">
            <button className="p-1 focus:outline-none hover:bg-gray-300 rounded-md duration-300 cursor-pointer">
              <div className="relative">
              <FaRegBell  className="w-6 h-5 mt-1"/>
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs font-semibold">
                7
              </span>
              </div>
            </button>
            </div>

            <div className="relative flex items-center">
          <FaUserCircle className="w-6 h-6 mt-1 hover:bg-gray-300 rounded-md duration-300 cursor-pointer" />
          <div className="text-blue-900 ml-2 mt-2">
            <strong className="block">Emily March</strong>
            <span>Systems Dev</span>
          </div>
          <button
            className="flex items-center focus:outline-none"
            onClick={toggleDropdown}
          >
            <IoMdArrowDropdown
              className={`w-6 h-6 ml-2 hover:bg-gray-300 bg-rounded rounded-md duration-300 cursor-pointer ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
          {isDropdownOpen && (
            <div className="z-10 absolute bg-white rounded-lg shadow w-32 top-full right-0">
              <ul className="py-2 text-sm text-gray-800">
                <li>
                  <a href="" className="block px-4 py-2 hover:bg-gray-200">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="" className="block px-4 py-2 hover:bg-gray-200">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="" className="block px-4 py-2 hover:bg-gray-200">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
     

