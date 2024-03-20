import React, { createContext, useState } from 'react';

/**
 * Cart context
 * @type {React.Context<unknown>}
 */
export const ShoppingCartContext = createContext();

/**
 * Cart provider
 * @param children
 * @return {Element}
 * @constructor
 */
export function ShoppingCartProvider({children}) {
  const [count, setCount] = useState(/**@type{number} count - Cart items */0)

  return(
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}


