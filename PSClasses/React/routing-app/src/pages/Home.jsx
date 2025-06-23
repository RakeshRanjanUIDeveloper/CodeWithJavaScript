import React from 'react'
import { Link, useSearchParams } from 'react-router-dom';
const Home = () => {
     const [searchParams, setSearchParams] = useSearchParams();
     const category = searchParams.get('category') || 'all';

    const products = [
        { id: 1, name: "T-shirt", category: "clothing" },
        { id: 2, name: "Shoes", category: "footwear" },
    ];

    const filteredProducts = category==='all' ? products : products.filter(p => p.category === category);

    return (
        <div>
            <h2>Product (Category: {category})</h2>
            <button onClick={() => setSearchParams({category:'clothing'})}>Clothing</button>
            <button onClick={() => setSearchParams({category:'footwear'})}>Footwear</button>
            <button onClick={() => setSearchParams({category:'all'})}>All</button>
            {
                filteredProducts.map((p) => (
                    <div key={p.id}>
                        <Link>{p.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Home
