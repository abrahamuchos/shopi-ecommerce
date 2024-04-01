import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/index.jsx";
import OrdersCard from "../../componets/OrdersCard/index.jsx";


export default function MyOrders() {
  const {orders} = useContext(ShoppingCartContext)


  return (
    <>
      <div className='flex w-80 items-center justify-center'>
        <h1>My orders</h1>
      </div>
      {orders.map((order, index) =>
        <Link to={`/my-orders/${index}`} key={index}>
          <OrdersCard date={order.date} totalProducts={order.totalProducts} totalPrice={order.totalPrice}/>
        </Link>
      )}

    </>
  );
}