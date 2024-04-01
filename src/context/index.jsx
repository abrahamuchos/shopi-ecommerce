/**
 * Order Object
 * @typedef orderObject
 * @property {string} date
 * @property {Array<productObject|null>} products
 * @property {number} totalProducts
 * @property {number} totalPrice
 */
import React, { createContext, useState } from 'react';

/**
 * Cart context
 * @type {React.Context<{
 *  count,
 *  setCount,
 *  isProductDetailOpen,
 *  openProductDetail,
 *  closeProductDetail,
 *  productToShow,
 *  setProductToShow,
 *  cartItems
 *  setCartItems,
 *  isCheckoutSideMenuOpen,
 *  openCheckoutSideMenu,
 *  closeCheckoutSideMenu,
 *  orders,
 *  setOrders
 *  }>}
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
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState( /**@type{boolean}  isCheckoutSideMenuOpen*/false)
  const [productToShow, setProductToShow] = useState(/**@type{productObject} productToShow*/{
    title: '',
    price: '',
    description: '',
    images: []
  });
  const [cartItems, setCartItems] = useState(/**@type{Array<productObject|null>} cartItems*/ []);
  const [orders, setOrders] = useState(/**@type{Array<orderObject>} orders */[])

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);


  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartItems,
        setCartItems,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        orders,
        setOrders
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}


