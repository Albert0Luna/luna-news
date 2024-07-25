/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable @next/next/no-img-element */
'use client';
import { Link } from '@/src/navigation';
import React, { useEffect, useState } from 'react';

export default async function RenderNews () {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      const response = await data.json();
      setArticles(response); // Asegúrate de ajustar esto según la estructura de la respuesta
    };
    fetchData(); // Llama a fetchData dentro de useEffect
  }, []); // Añade las dependencias necesarias aquí, si las hay

  return (
    <ul className='highlights_container'>
      {articles && articles?.slice(0, 10).map((article: any) => (
        <li key={article.id} className='highlights_item'>
          <Link href='/1234' className='highlights_item_link'>
            <h5 className='highlights_item_title'>
              ¿Ha llegado la nueva era de los procesadores con los nuevos Snapdragon?
            </h5>
            <div className='highlights_s1'>
              <div className='highlights_item_image_container'>
                <img 
                  src='https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/19917.jpg' 
                  alt='news'
                  className='highlights_item_image'
                />
              </div>
              <div className='highlights_item_content'>
                {/*  
                <p className='highlights_item_date'> 2021-09-09</p> 
                <p className='highlights_item_readtime'> readtime 5 min</p>
              */}
                <p 
                  className='highlights_item_body'
                >
                  Descubre como los nuevos procesadores de Intel están revolucionando el mercado de la tecnología.
                  Incluyendo la nueva serie de procesadores Intel Core i9.
                </p>
              
                <small className='highlights_item_more'>Read more</small>
              
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}