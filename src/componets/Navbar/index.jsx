import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context/index.jsx";

export default function Navbar() {
  const {count} = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4'
  const menuLeft = [
    {
      name: 'Shopi',
      to: '/',
      className: 'font-semibold text-lg'
    },
    {
      name: 'All',
      to: '/',
      className: ''
    },
    {
      name: 'Clothes',
      to: '/clothes',
      className: ''
    },
    {
      name: 'Electronics',
      to: '/electronics',
      className: ''
    },
    {
      name: 'Furniture',
      to: '/furniture',
      className: ''
    },
    {
      name: 'Toys',
      to: '/toys',
      className: ''
    },
    {
      name: 'Others',
      to: '/others',
      className: ''
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
      name: `Cart ${count}`,
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