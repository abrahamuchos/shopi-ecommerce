import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/index.jsx";
import OrderCard from "../OrderCard/index.jsx";
import { totalPrice } from "../../utils/index.jsx";

import './style.css';
import { XMarkIcon } from "@heroicons/react/24/outline/index.js";

export default function CheckoutSideMenu() {
  const {isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartItems, setCartItems, setOrders} = useContext(ShoppingCartContext);

  /**
   * Delete items to cart
   * @param {number} id - Product id
   */
  const handleDelete = (id) => {
    const filteredProducts = cartItems.filter(item => item.id !== id);
    setCartItems(filteredProducts);
  }

  /**
   * Add checkout products to orders
   */
  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: cartItems,
      totalProducts: cartItems.length,
      totalPrice: totalPrice(cartItems),
    }
    setOrders(prevOrder => [
      ...prevOrder, orderToAdd
    ]);
    setCartItems([]);
  }


  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => closeCheckoutSideMenu()}/>
        </div>
      </div>
      {/* Cart Items */}
      {cartItems.map(item => (
        <OrderCard
          key={item.id}
          id={item.id}
          title={item.title}
          imageUrl={item.images?.[0]}
          price={item.price}
          handleDelete={handleDelete}
        />
      ))}
      {/* End Cart Items */}

      {/*Total*/}
      <div className="px-6 mb-6">
        <p className='flex justify-between items-center mb-4'>
          <span className='font-semibold'>Total</span>
          <span className='font-medium text-2xl'>${totalPrice(cartItems)}</span>
        </p>
        <Link to='my-orders/last'>
          <button
            className='w-full bg-black py-3 text-white rounded-md'
            onClick={() => handleCheckout()}>
            Checkout
          </button>
        </Link>

      </div>
      {/*End Total*/}
    </aside>
  );
}