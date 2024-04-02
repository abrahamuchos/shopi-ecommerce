import React from 'react';
import { formatDateToString } from "../../utils/index.jsx";
import { ChevronRightIcon } from "@heroicons/react/24/outline/index.js";

/**
 *
 * @param {Date} date
 * @param {number} totalPrice
 * @param {number} totalProducts
 * @return {Element}
 * @constructor
 */
export default function OrdersCard({ date, totalPrice, totalProducts}) {


  return (
    <div className='flex justify-between items-center p-4 mt-2 mb-6 border border-black rounded-lg'>
      <div className='flex justify-between items-center'>
        <p className='flex flex-col'>
          <span>{`Date: ${formatDateToString(date)}`}</span>
          <span>{`Qty: ${totalProducts}`}</span>
        </p>
        <span className='ml-6 font-medium text-xl'>{`Total: $${totalPrice}`}</span>
      </div>
      <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer ml-3'/>
    </div>
  );
}