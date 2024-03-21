import React, { createContext, useState } from 'react';

/**
 * Cart context
 * @type {React.Context<{count,setCount,isProductDetailOpen,openProductDetail,closeProductDetail,productToShow,setProductToShow}>}
 */
export const ShoppingCartContext = createContext();

/**
 * Cart provider
 * @param children
 * @return {Element}
 * @constructor
 */
export function ShoppingCartProvider({children}) {
  const [count, setCount] = useState(/**@type{number} count - Cart items */0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState( /**@type{boolean} isProductDetailOpen */false);
  const [productToShow, setProductToShow] = useState(/**@type{productObject} productToShow*/{
    title: '',
    price: '',
    description: '',
    images: []
  });

 const openProductDetail = () => setIsProductDetailOpen(true);
 const closeProductDetail = () => setIsProductDetailOpen(false);


  return(
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}


