import React, { useState } from 'react'
import './RecipeExplorer.css'
import recipesData from './recipesData.js'
import { ReceiptEuro } from 'lucide-react';
const RecipeExplorer = () => {
    const [allRecipes, setAllRecipes] = useState(recipesData);
    const [filteredRecipe, setFilteredRecipe] = useState(recipesData);
    const [selectedValue, setSelectedValue] = useState("");
    const [cartCounts, setCartCounts] = useState(0);
    const handleChange = (e) =>{
        const value = e.target.value;
        setSelectedValue(value);
        console.log("Selected value:", value);
        if(!value){
            setFilteredRecipe(allRecipes)
        }else{
            const ratingThreshold = parseFloat(value);
            const filtered = allRecipes.filter((r) => r.rating >= ratingThreshold);
            setFilteredRecipe(filtered);
        }
    }

    const avgRating = filteredRecipe.length === 0 ? 0 : 
                      (filteredRecipe.reduce((acc, cur) => acc + cur.rating, 0) / filteredRecipe.length).toFixed(2);


    const handleCart = () =>{
        setCartCounts((prevCartCount) => prevCartCount +1)
    }
    return (
        <React.Fragment>
            <h1>🍽️ Recipe Explorer</h1>
            <div className='recipe-filters'>
                <div className='recipe-dropdown'>
                    <label>Filter by Rating - </label>
                    <select value={selectedValue} onChange={handleChange}>
                        <option value=''>All</option>
                        <option value='4.0'>4.0+</option>
                        <option value='4.3'>4.3+</option>
                        <option value='4.5'>4.5+</option>
                        <option value='4.7'>4.7+</option>
                        <option value='4.9'>4.9</option>
                    </select>
                </div>
                <div className='recipe-average-rating'>
                    <h3>Average Rating - {avgRating} ({filteredRecipe.length} recipes)</h3>
                </div>
                <div className='recipe-cart'>
                    <h2>Cart Items : {cartCounts}</h2>
                </div>
            </div>
            <div className="recipe-container">
                {filteredRecipe.map((r) => (
                    <div className="recipe-card" key={r.id}>
                        <div className="recipe-image">
                            <img src={r.image} alt={r.name} />
                        </div>
                        <div className="recipe-details">
                            <h3>{r.name}</h3>
                            <p>{r.cuisine}</p>
                            <div className="rating">
                                ⭐ {r.rating} <span>({r.reviewCount} reviews)</span>
                            </div>
                            <div className="cta-button" onClick={handleCart}>Add to Cart</div>
                        </div>
                    </div>
                ))}
            </div>

        </React.Fragment>
    )
}

export default RecipeExplorer