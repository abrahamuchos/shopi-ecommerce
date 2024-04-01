import React from 'react';
import { formatDateToString } from "../../utils/index.jsx";

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
    <div className='flex justify-between items-center px-6 mt-2 mb-6 border border-black'>
      <p>
        <span className='px-1'>{`Date: ${formatDateToString(date)}`}</span>
        <span className='px-3'>{`Qty: ${totalProducts}`}</span>
        <span className='px-3'>{`Total: $${totalPrice}`}</span>
      </p>
    </div>
  );
}