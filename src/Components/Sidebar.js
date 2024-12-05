import React, { useState } from 'react';
import {
  FaClipboardList,
  FaCog,
  FaHome,
  FaMapMarkedAlt,
  FaShoppingCart,
} from 'react-icons/fa';
import logo from '../assets/growthsense.png';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { RiTeamFill } from 'react-icons/ri';
import { HiPuzzlePiece } from 'react-icons/hi2';
import { IoIosArrowBack, IoMdHelpCircle } from 'react-icons/io';
import { Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from 'antd';

const { Sider } = Layout;

let activeStyle = {};

let activeClassName = "text-red-400";

const Sidebar = ({ collapsed, isActive }) => {
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (icon) => {
    setHoveredIcon(icon);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <nav
      className={`h-screen shadow shadow-gray-500 sticky text-blue-900 ${
        open ? 'w-60' : 'w-16'
      }`}
    >
      <div className="flex justify-between items-center mt-2 mb-2">
        <img
          src={logo}
          alt=""
          className={`${open ? 'w-[80px] ml-5' : 'w-[45px]'}`}
        />
        <IoIosArrowBack
          size={24}
          className={`text-white cursor-pointer bg-blue-900 rounded-md ${
            open ? '' : 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>

      <ul className="mt-5 ">
        <li>
          <div className="text-sm text-blue-900 font-bold flex justify-left px-3 ">
            <span className={`${open ? 'block' : 'hidden'}`}>Management</span>
          </div>
          <Link
            to="/dashboard"
            className={`flex items-center px-3 py-2 hover:bg-blue-200 rounded-md duration-300 cursor-pointer flex ${
              pathname === '/dashboard' ? activeClassName : ''
            }`}
            activeStyle={pathname === '/dashboard' ? activeStyle : {}}
            onMouseEnter={() => handleIconHover('dashboard')}
            onMouseLeave={handleIconLeave}
          >
            <Tooltip title="Dashboard" 
            placement="right" 
            visible={hoveredIcon === 'dashboard' && !open}>
              <FaHome className="inline-block mr-2" />
            </Tooltip>
            <span className={`${open ? 'block' : 'hidden'}`}>Dashboard</span>
          </Link>

          <Link
            to="/assets"
            className={`flex items-center px-3 py-2 hover:bg-blue-200 rounded-md duration-300 cursor-pointer flex ${
              pathname === '/assets' ? activeClassName : ''
            }`}
            activeStyle={pathname === '/assets' ? activeStyle : {}}
            onMouseEnter={() => handleIconHover('assets')}
            onMouseLeave={handleIconLeave}
          >
            <Tooltip title="Assets" 
            placement="right" 
            visible={hoveredIcon === 'assets' && !open}>
              <BiSolidCategoryAlt className="mr-2" />
            </Tooltip>
            <span className={`${open ? 'block' : 'hidden'}`}>Assets</span>
          </Link>

          <Link
            to="/employees"
            className={`flex items-center px-3 py-2 hover:bg-blue-200 rounded-md duration-300 cursor-pointer flex ${
              pathname === '/employees' ? activeClassName : ''
            }`}
            activeStyle={pathname === '/employees' ? activeStyle : {}}
            onMouseEnter={() => handleIconHover('employees')}
            onMouseLeave={handleIconLeave}
          >
            <Tooltip title="Employees" 
            placement="right" 
            visible={hoveredIcon === 'employees' && !open}>
              <RiTeamFill className="mr-2" />
            </Tooltip>
            <span className={`${open ? 'block' : 'hidden'}`}>Employees</span>
          </Link>

          <Link
            to="/locations"
            className={`flex items-center px-3 py-2 hover:bg-blue-200 rounded-md duration-300 cursor-pointer flex ${
              pathname === '/locations' ? activeClassName : ''
            }`}
            activeStyle={pathname === '/locations' ? activeStyle : {}}
            onMouseEnter={() => handleIconHover('locations')}
            onMouseLeave={handleIconLeave}
          >
            <Tooltip title="Locations" 
            placement="right" 
            visible={hoveredIcon === 'locations' && !open}>
              <FaMapMarkedAlt className="mr-2" />
            </Tooltip>
            <span className={`${open ? 'block' : 'hidden'}`}>Locations</span>
          </Link>

          <div className="mt-4 text-sm text-blue-900 font-bold flex justify-left px-3">
            <span className={`${open ? 'block' : 'hidden'}`}>Marketplace</span>
          </div>

          <Link
            to="/catalog"
            className={`flex items-center px-3 py-2 hover:bg-blue-200 rounded-md duration-300 cursor-pointer flex ${
              pathname === '/catalog' ? activeClassName : ''
            }`}
            activeStyle={pathname === '/catalog' ? activeStyle : {}}
            onMouseEnter={() => handleIconHover('catalog')}
            onMouseLeave={handleIconLeave}
          >
            <Tooltip title="Catalog" 
            placement="right" 
            visible={hoveredIcon === 'catalog' && !open}>
              <FaShoppingCart className="mr-2" />
            </Tooltip>
            <span className={`${open ? 'block' : 'hidden'}`}>Catalog</span>
          </Link>

          <Link
            to="/orders"
            className={`flex items-center px-3 py-2 hover:bg-blue-200 rounded-md duration-300 cursor-pointer flex ${
              pathname === '/orders' ? activeClassName : ''
            }`}
            activeStyle={pathname === '/orders' ? activeStyle : {}}
            onMouseEnter={() => handleIconHover('orders')}
            onMouseLeave={handleIconLeave}
          >
            <Tooltip title="Orders" 
            placement="right" 
            visible={hoveredIcon === 'orders' && !open}>
              <FaClipboardList className="mr-2" />
            </Tooltip>
            <span className={`${open ? 'block' : 'hidden'}`}>Orders</span>
          </Link>

          <div className="mt-40">
            <Link
              to="/integrations"
              className={`flex items-center px-3 py-2 hover:bg-blue-200 rounded-md duration-300 cursor-pointer flex ${
                pathname === '/integrations' ? activeClassName : ''
              }`}
              activeStyle={pathname === '/integrations' ? activeStyle : {}}
              onMouseEnter={() => handleIconHover('integrations')}
              onMouseLeave={handleIconLeave}
            >
              <Tooltip title="Integrations" 
              placement="right" 
              visible={hoveredIcon === 'integrations' && !open}>
                <HiPuzzlePiece className="mr-2" />
              </Tooltip>
              <span className={`${open ? 'block' : 'hidden'}`}>Integrations</span>
            </Link>

            <Link
              to="/settings"
              className={`flex items-center px-3 py-2 hover:bg-blue-200 rounded-md duration-300 cursor-pointer flex ${
                pathname === '/settings' ? activeClassName : ''
              }`}
              activeStyle={pathname === '/settings' ? activeStyle : {}}
              onMouseEnter={() => handleIconHover('settings')}
              onMouseLeave={handleIconLeave}
            >
              <Tooltip title="Settings" 
              placement="right" 
              visible={hoveredIcon === 'settings' && !open}>
                <FaCog className="mr-2" />
              </Tooltip>
              <span className={`${open ? 'block' : 'hidden'}`}>Settings</span>
            </Link>

            <Link
              to="/helpcenter"
              className={`flex items-center px-3 py-2 hover:bg-blue-200 rounded-md duration-300 cursor-pointer flex ${
                pathname === '/helpcenter' ? activeClassName : ''
              }`}
              activeStyle={pathname === '/helpcenter' ? activeStyle : {}}
              onMouseEnter={() => handleIconHover('helpcenter')}
            onMouseLeave={handleIconLeave}
            >
              <Tooltip title="Help Centre" 
              placement="right" 
              visible={hoveredIcon === 'helpcenter' && !open}>
                <IoMdHelpCircle className="mr-2" />
              </Tooltip>
              <span className={`${open ? 'block' : 'hidden'}`}>Help Centre</span>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;