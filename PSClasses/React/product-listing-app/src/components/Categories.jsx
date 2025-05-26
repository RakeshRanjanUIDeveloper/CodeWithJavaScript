import React, { useEffect, useState } from 'react'
import Accordion from './Accordion';
import Checkbox from './Checkbox';

const Categories = () => {
    const [categoriesList, setCategoriesList] = useState([]);

    useEffect(() =>{
        const fetchCategoriesList = async () =>{
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            console.log(data)
            setCategoriesList(data)
        }
        fetchCategoriesList()
    }, [])
  return (
    <React.Fragment>
        <div className='categories-lists'>
            {
                categoriesList.map((c) => (
                    <div className='category-list'>
                        <Checkbox />
                        <div className='category-title'>{c}</div>
                    </div>
                ))
            }
        </div>
    </React.Fragment>
  )
}

export default Categories