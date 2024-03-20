/**
 * Product Object
 * @typedef {Object} productObject
 * @property {number} id
 * @property {string} title
 * @property {number|string} price
 * @property {string} description
 * @property {categoryObject|null} category
 * @property {Array<string>} images
 * @property {string} creationAt
 * @property {string|null} updatedAt
 */
/**
 * Category Object
 * @typedef categoryObject
 * @property {number} id
 * @property {string} name
 * @property {string} iamge - Url image
 */

import React, { useEffect, useState } from 'react';
import Card from "../../componets/Card/index.jsx";
import ErrorNotification from "../../componets/ErrorNotification/index.jsx";

export default function Home() {
  const [products, setProducts] = useState(/**@type {Array<productObject|null>} products*/[]);
  const [isLoading, setIsLoading] = useState(/**@type{boolean} isLoading*/ true);
  const [error, setError] = useState(/**@type{boolean|string} */false);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const products = await getAllProducts();
        setProducts(products);
        setIsLoading(false);
      }catch (e) {
        console.error(e);
        setError("Products can't be found")
      }

    }
    fetchData();
  }, []);

  /**
   * Get all products
   * @return {Promise<Array<productObject>>}
   */
  const getAllProducts = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return await response.json();
  }

  return (
    <>
      {isLoading ? <p>Loading...</p>
        : <section className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl'>
          {products.map(product =>
            <Card key={product.id} product={product}/>
          )}
        </section>
      }
      {error ? <ErrorNotification message={error}/> : ''}
    </>
  );
}
