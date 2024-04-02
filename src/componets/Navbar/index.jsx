import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context/index.jsx";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline/index.js";

export default function Navbar() {
  const {count, setSearchByCategory} = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4'
  const menuLeft = [
    {
      name: 'Shopi',
      to: '/',
      className: 'font-semibold text-lg',
    },
    {
      name: 'All',
      to: '/',
      className: '',
    },
    {
      name: 'Clothes',
      to: '/category/clothes',
      className: '',
    },
    {
      name: 'Electronics',
      to: '/category/electronics',
      className: '',
    },
    {
      name: 'Furniture',
      to: '/category/furniture',
      className: '',
    },
    {
      name: 'Toys',
      to: '/category/toys',
      className: '',
    },
    {
      name: 'Others',
      to: '/category/others',
      className: '',
    },
  ];

  const menuRight = [
    {
      name: 'abraham@example.com',
      to: '',
      className: 'text-black/60'
    },
    {
      name: 'My Orders',
      to: '/my-orders',
      className: ''
    },
    {
      name: 'My Account',
      to: '/my-account',
      className: ''
    },
    {
      name: 'Sign In',
      to: '/sign-in',
      className: ''
    },
    {
      name: <span className='flex justify-center items-center'>
        <ShoppingBagIcon className='w-5 h-5'/>{count}
      </span>,
      to: '/cart',
      className: ''
    }
  ];

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      {/*Menu Left */}
      <ul className='flex items-center gap-4'>
        {menuLeft.map(menu => (
          <li key={menu.name} className={menu.className}>
            <NavLink to={menu.to} className={({isActive}) => isActive ? activeStyle : '' }>
              {menu.name}
            </NavLink>
          </li>
        ))
        }
      </ul>
      {/*End Menu Left*/}

      {/*Menu Right*/}
      <ul className='flex items-center gap-4'>
        {menuRight.map(menu => (
          <li key={menu.name} className={menu.className}>
            {menu.to ?
              <NavLink to={menu.to}>
                {menu.name}
              </NavLink>
              : menu.name
            }
          </li>
        ))
        }
      </ul>
      {/*End Menu Right  */}
    </nav>
  );
}