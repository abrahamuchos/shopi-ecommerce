/**
 * Order Object
 * @typedef orderObject
 * @property {string} date
 * @property {Array<productObject|null>} products
 * @property {number} totalProducts
 * @property {number} totalPrice
 */
import React, { createContext, useEffect, useState } from 'react';

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
 *  setOrders,
 *  products,
 *  setProducts
 *  searchByTitle,
 *  setSearchByTitle,
 *  filteredItems
 *  searchByCategory,
 *  setSearchByCategory
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
  const [orders, setOrders] = useState(/**@type{Array<orderObject>} orders */[]);
  const [products, setProducts] = useState(/**@type {Array<productObject|null>} products*/[]);
  const [searchByTitle, setSearchByTitle] = useState(/**@type{string} searchByTitle*/'');
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchByCategory, setSearchByCategory] = useState(/**@type {string} searchByCategory*/'')

  useEffect(() => {
    if(searchByCategory && searchByTitle) {
      const itemsByCategory = filteredItemsByCategory(products, searchByCategory);
      const itemsByTitle = filteredItemsByTitle(itemsByCategory, searchByTitle);
      setFilteredItems(itemsByTitle);

    }else if(searchByCategory){
      const itemsByCategory = filteredItemsByCategory(products, searchByCategory);
      setFilteredItems(itemsByCategory);

    }else if(searchByTitle){
      const itemsByTitle = filteredItemsByTitle(products, searchByTitle);
      setFilteredItems(itemsByTitle);
    }
  }, [products, searchByTitle, searchByCategory]);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
  /**
   * Filter products by title
   * @param {Array<productObject|null>} items
   * @param {string} search - Title to search
   * @return {Array<productObject|null>}
   */
  const filteredItemsByTitle = (items, search) => {
    return items?.filter(item => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }

  /**
   * Filtered products by category
   * @param {Array<productObject|null>} items
   * @param {string} category
   * @return {Array<productObject|null>}
   */
  const filteredItemsByCategory = (items, category) => {
    return items?.filter(item => item.category.name.toLocaleLowerCase().includes(category.toLocaleLowerCase()))
  }


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
        setOrders,
        products,
        setProducts,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}


