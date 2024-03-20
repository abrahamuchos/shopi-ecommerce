import React, { useContext, useState } from 'react';
import { ShoppingCartContext } from "../../context/index.jsx";

/**
 *
 * @param {productObject} product
 * @return {Element}
 * @constructor
 */
export default function Card({product}) {
  const [imageError, setImageError] = useState(/**@type{boolean} imageError */false);
  const {setCount} = useContext(ShoppingCartContext);

  /**
   * Validate if image has error
   */
  const handleImageError = () => {
    setImageError(true);
  }

  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
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
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={() => setCount(prev => prev + 1)}
          >
          +
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{product.title}</span>
        <span className='text-lg font-medium'>{`$${product.price}`}</span>
      </p>
    </div>
  );
}

