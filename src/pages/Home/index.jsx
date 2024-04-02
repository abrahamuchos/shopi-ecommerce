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
 * @property {string} image - Url image
 */
import React, { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from "../../context/index.jsx";
import Card from "../../componets/Card/index.jsx";
import ProductDetail from "../../componets/ProductDetail/index.jsx";
import ErrorNotification from "../../componets/ErrorNotification/index.jsx";
import { useParams } from "react-router-dom";

export default function Home() {
  const {category} = useParams();
  const {products , setProducts, searchByTitle, setSearchByTitle, filteredItems, searchByCategory ,setSearchByCategory} = useContext(ShoppingCartContext);
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

  useEffect(() => {
    if(category){
      setSearchByCategory(category);
    }else{
      setSearchByCategory('');
    }
  }, [category]);

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
        : <>
          <div className='text-center mb-4'>
            <h1 className="font-medium text-2xl">Exclusive Products</h1>
          </div>
          <input
            type="text"
            placeholder='Search product'
            className='rounded-lg border border-black w-80 p-3 mb-5 focus:outline-none'
            onChange={(e) => setSearchByTitle(e.target.value)}
          />
          <section className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl'>
            { searchByTitle || searchByCategory
              ? filteredItems.length
                ? filteredItems.map(product =>  <Card key={product.id} product={product}/>)
                : <div><p>We don&apos;t have anything :(</p></div>
              : products.map(product => <Card key={product.id} product={product}/>)

            }
          <ProductDetail/>
        </section>
          </>
      }
      {error ? <ErrorNotification message={error}/> : ''}
    </>
  );
}
