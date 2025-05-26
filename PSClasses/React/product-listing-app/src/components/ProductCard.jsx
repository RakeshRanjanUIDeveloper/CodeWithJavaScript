import React, { useEffect, useState } from "react";
import "../Styles/Products.css";
import ProductSearch from "./ProductSearch";
const ProductCard = ({ allProducts }) => {
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const handleSearch = (searchText) =>{
        const filteredProducts = allProducts.filter((p) => p.title.toLowerCase().includes(searchText))
        setFilteredProducts(filteredProducts)
    }
    useEffect(() =>{
        setFilteredProducts(allProducts)
    }, [allProducts])
  return (
    <React.Fragment>
        <ProductSearch onSearch={handleSearch} />
      <div className="products">
        {filteredProducts.map((p) => (
          <div className="product" key={p.id}>
            <div className="product-image">
              <img src={p.image} />
            </div>
            <div className="product-details">
              <h3>{p.title}</h3>
              <div className="product-rating">
                <p>{p.rating.rate}</p>
                <p>{p.rating.count}</p>
              </div>
              <div className="product-category">{p.category}</div>
              <p>{p.description.slice(0, 50)}</p>
              <h3>${p.price}</h3>
            </div>
            <div className="product-buttons">
              <div className="product-buy-button">Buy Now </div>
              <div className="product-cart-button">Add to Cart </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
