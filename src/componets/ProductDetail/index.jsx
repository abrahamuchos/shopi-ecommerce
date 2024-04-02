import React, { useContext, useEffect } from 'react';
import { ShoppingCartContext } from "../../context/index.jsx";

import './style.css';
import { XMarkIcon } from "@heroicons/react/24/outline/index.js";


export default function ProductDetail() {
  const {isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShoppingCartContext);


  return (
    <aside
      className={`${isProductDetailOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-xl bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => closeProductDetail()}/>
        </div>
      </div>

      <figure className='px-6'>
        <img
          className='w-full rounded-lg'
          src={productToShow.images.length ? productToShow.images[0] : 'https://picsum.photos/seed/picsum/200/300'}
          alt={productToShow.title}
          referrerPolicy="no-referrer"
        />
        <p className='flex flex-col'>
          <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
          <span className='font-medium text-md'>{productToShow.title}</span>
          <span className='font-light text-sm'>{productToShow.description}</span>
        </p>
      </figure>
    </aside>
  );
}