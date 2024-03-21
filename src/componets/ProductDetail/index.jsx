import React from 'react';

import  './style.css';
import { XMarkIcon } from "@heroicons/react/24/outline/index.js";


export default function ProductDetail() {

  return (
    <aside className='product-detail flex flex-col fixed right-0 border border-black bg-white'>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon className='h-6 w-6 text-black'/>
        </div>
      </div>
    </aside>
  );
}