/**
 * @callback handleDeleteCb
 * @param {number} id - Product id
 */
import React from 'react';

import { XMarkIcon } from "@heroicons/react/24/outline/index.js";

/**
 *
 * @param {number} id
 * @param {string} title
 * @param {string|null} imageUrl
 * @param {number} price
 * @param {handleDeleteCb} handleDelete
 * @return {Element}
 * @constructor
 */
export default function OrderCard({id, title, imageUrl, price, handleDelete}) {


  return (
    <div className='flex justify-between items-center px-6 mb-6'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            referrerPolicy="no-referrer"
            src={imageUrl ?? 'https://picsum.photos/seed/picsum/200/300'}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        <XMarkIcon className='h-6 w-6 text-black cursor-pointer' onClick={() => handleDelete(id)}/>
      </div>
    </div>
  );
}