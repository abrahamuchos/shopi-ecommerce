import React, { useContext, useState } from 'react';
import { ShoppingCartContext } from "../../context/index.jsx";

import { CheckIcon, PlusIcon } from "@heroicons/react/24/outline/index.js";

/**
 *
 * @param {productObject} product
 * @return {Element}
 * @constructor
 */
export default function Card({product}) {
  const [imageError, setImageError] = useState(/**@type{boolean} imageError */false);
  const {
    setCount,
    openProductDetail,
    setProductToShow,
    cartItems,
    setCartItems,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    closeProductDetail
  } = useContext(ShoppingCartContext);

  /**
   * Validate if image has error
   */
  const handleImageError = () => {
    setImageError(true);
  }

  /**
   * Set product to show
   * @param {productObject} product
   */
  const showProduct = (product) => {
    closeCheckoutSideMenu();
    openProductDetail();
    setProductToShow(product);
  }

  /**
   * Add product to cart and increment count
   * @param {MouseEvent<HTMLDivElement>} e
   * @param {productObject} product
   */
  const addProductToCart = (e, product) => {
    e.stopPropagation();
    setCount(prev => prev + 1);
    setCartItems(prev => [
      ...prev,
      product
    ]);
    closeProductDetail();
    openCheckoutSideMenu();
  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(product)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {product.category?.name ?? 'N/A'}
        </span>
        <img
          src={!imageError
            ? product.images[0]
            : 'https://picsum.photos/seed/picsum/200/300'
          }
          alt={product.title}
          referrerPolicy="no-referrer"
          className='w-full h-full object-cover rounded-lg'
          onError={handleImageError}
        />
        {/*Icon Card */}
        {cartItems.find(item => item.id === product.id)
          ? <div
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          >
            <CheckIcon className='w-6 h-6 text-black'/>
          </div>

          : <div
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
            onClick={(e) => addProductToCart(e, product)}
          >
            <PlusIcon className='w-6 h-6 text-black'/>
          </div>
        }
        {/*Enb Icon Card */}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{product.title}</span>
        <span className='text-lg font-medium'>{`$${product.price}`}</span>
      </p>
    </div>
  );
}

