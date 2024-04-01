import React, { useContext } from 'react';
import OrderCard from "../../componets/OrderCard/index.jsx";
import { ShoppingCartContext } from "../../context/index.jsx";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline/index.js";

export default function MyOrder() {
  const {id} = useParams();
  const {orders} = useContext(ShoppingCartContext);
  const latestOrderProducts = id ?  orders[id].products : orders?.slice(-1)[0].products || [];


  return (
    <>
      <div className='flex w-80 items-center justify-center relative mb-4'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
        </Link>
        <h1>My Orders</h1>
      </div>
      <div className='flex flex-col w-90'>
        {/* Cart Items */}
        {latestOrderProducts.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images?.[0]}
            price={product.price}
          />
        ))}
        {/* End Cart Items */}
      </div>

    </>
  );
}